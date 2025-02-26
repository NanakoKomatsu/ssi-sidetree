import IBlockchain from './interfaces/IBlockchain';
import IVersionManager from './interfaces/IVersionManager';
/**
 * Class that performs periodic writing of batches of Sidetree operations to CAS and blockchain.
 */
export default class BatchScheduler {
    private versionManager;
    private blockchain;
    private batchingIntervalInSeconds;
    /**
     * Denotes if the periodic batch writing should continue to occur.
     * Used mainly for test purposes.
     */
    private continuePeriodicBatchWriting;
    constructor(versionManager: IVersionManager, blockchain: IBlockchain, batchingIntervalInSeconds: number);
    /**
     * The function that starts periodically anchoring operation batches to blockchain.
     */
    startPeriodicBatchWriting(): void;
    /**
     * Stops periodic batch writing.
     * Mainly used for test purposes.
     */
    stopPeriodicBatchWriting(): void;
    /**
     * Processes the operations in the queue.
     */
    writeOperationBatch(): Promise<void>;
}
