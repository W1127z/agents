
import { MiMoOrchestrator } from './agents/Orchestrator';
import { VectorService } from './services/VectorService';

const main = async () => {
    const orchestrator = new MiMoOrchestrator();
    const result = await orchestrator.process("如何优化 Node.js 在 Windows 环境下的系统路径配置？");
    console.log("AI 响应结果:", result);
};

main();
