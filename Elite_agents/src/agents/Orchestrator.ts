
import { BaseAgent } from './BaseAgent';
import { KnowledgeAgent } from './KnowledgeAgent';
import { ReflectionAgent } from './ReflectionAgent';

/**
 * 主编排器：负责意图分发与多 Agent 协同工作流
 */
export class MiMoOrchestrator {
    private knowledgeAgent: KnowledgeAgent;
    private reflectionAgent: ReflectionAgent;

    constructor() {
        this.knowledgeAgent = new KnowledgeAgent();
        this.reflectionAgent = new ReflectionAgent();
    }

    async process(query: string) {
        // Step 1: 语义搜索与初始生成
        const rawResponse = await this.knowledgeAgent.run(query);
        
        // Step 2: 自省逻辑 - 验证输出的准确性与安全性
        const refinedResponse = await this.reflectionAgent.verify(rawResponse, query);
        
        return refinedResponse;
    }
}
