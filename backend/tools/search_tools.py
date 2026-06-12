

from langchain_core.tools import tool

@tool(description="当你需要搜索市场相关信息的时候使用此工具")
def search_market(query: str) -> str:
    """搜索市场相关信息。query 是搜索关键词。"""
    # 现在先模拟，后面换成真实搜索 API
    return f"搜索 '{query}' 的结果：这个市场规模约100亿，主要玩家有A、B、C"

@tool(description="当你需要分析竞争对手的时候使用这个工具")
def analyze_competitor(company: str) -> str:
    """分析某个竞争对手的信息。company 是公司名称。"""
    return f"{company} 的分析：成立于2020年，主打下沉市场，月活50万"