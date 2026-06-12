import asyncio
from typing import TypedDict

from langchain_core.output_parsers import StrOutputParser, JsonOutputParser
from langchain_core.prompts import ChatPromptTemplate
from langchain_openai import ChatOpenAI
from langgraph.graph import StateGraph, END
from pydantic import SecretStr


llm=ChatOpenAI(
    model="deepseek-v4-flash",
    # api_key="sk-b0a5a23f8c454d16999212790ad8096d",
    api_key=SecretStr("sk-b0a5a23f8c454d16999212790ad8096d"),
    base_url="https://api.deepseek.com",
    temperature=0.2
)

class BusinessState(TypedDict):
    topic: str        # 分析主题
    info: str         # 收集到的信息
    report: str       # 最终报告
    round: int        # 已搜集几轮了

def collect(state: BusinessState) -> dict:
    fake_info = f"关于{state['topic']}的第{state['round']+1}轮信息"
    return {
        "info": state["info"] + "\n" + fake_info,
        "round": state["round"] + 1
    }

def should_continue(state: BusinessState) -> str:
    state_round = state["round"]
    print(state_round)
    if state_round > 2:
        return "enough"
    else:
        print(f"打回{state_round}次")
        return "not_enough"

# 节点3：生成报告
def generate_report(state: BusinessState) -> dict:
    return {"report": f"基于以下信息生成报告：\n{state['info']}"}

graph = StateGraph(BusinessState)
graph.add_node("collect",collect)
graph.set_entry_point("collect")
graph.add_node("should_continue",should_continue)
graph.add_conditional_edges(
    "collect",
    should_continue,
    {
        "enough":"generate_report",
        "not_enough":"collect"
    }
)
graph.add_node("generate_report",generate_report)
graph.add_edge("generate_report",END)
#
# app = graph.compile()
# result = app.ainvoke({"topic": "电商市场", "info": "", "report": "", "round": 0})
# print(result["report"])

async def main():
    app = graph.compile()
    result = await app.ainvoke({"topic": "电商市场", "info": "", "report": "", "round": 0})
    print(result["report"])


if __name__ == '__main__':
    asyncio.run(main())