/**
 * Defines the internal generic DID state after an operation is applied.
 * This model is created so that it is agnostic to any particular external schema.
 */
export default interface DidState {
    document: any;
    nextRecoveryCommitmentHash?: string;
    nextUpdateCommitmentHash?: string;
    lastOperationTransactionNumber: number;
}
