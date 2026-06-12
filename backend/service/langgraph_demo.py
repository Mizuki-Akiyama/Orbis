from typing import TypedDict

from langchain_core.output_parsers import StrOutputParser, JsonOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, END
from pydantic import SecretStr

prompt = ChatPromptTemplate.from_messages(
    [
        ("system","你是一个{role}"),
        ("human","{user_input}")
    ]
)

# message = prompt.from_messages(role="人",user_input="你好")


llm=ChatOpenAI(
    model="deepseek-v4-flash",
    # api_key="sk-b0a5a23f8c454d16999212790ad8096d",
    api_key=SecretStr("sk-b0a5a23f8c454d16999212790ad8096d"),
    base_url="https://api.deepseek.com",
    temperature=0.2
)


# 1. 定义 State（共享数据结构）
class MyState(TypedDict):
    message: str
    result: str


# 2. 定义 Node（处理函数）
def node1(state: MyState) -> dict:
    chain = prompt | llm | StrOutputParser()
    res = chain.invoke({"role":"人","user_input":"你好"})
    # 这里可以调用 LLM、写逻辑等
    return {"result":res}

def node2(state: MyState) -> dict:
    return {"result": "再见","message":state["message"]}

# 3. 组装 Graph
graph = StateGraph(MyState)
graph.add_node("node1", node1)
graph.set_entry_point("node1")
graph.add_node("node2", node2)
graph.add_edge("node1", "node2")
graph.add_edge("node2", END)

# 4. 编译并运行
app = graph.compile()
result = app.stream({"message": "Hello, LangGraph!","result": ""})
for e in result:
    print(e)
