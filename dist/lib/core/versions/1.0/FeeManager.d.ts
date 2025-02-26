/**
 * Encapsulates the functionality to calculate and verify the blockchain transaction fees.
 */
export default class FeeManager {
    /**
     * Converts the normalized fee (returned by the blockchain) into the transaction fee to be paid when writing
     * the current transaction.
     *
     * @param normalizedFee The normalized fee for the current transaction.
     * @param numberOfOperations The number of operations to write.
     *
     * @throws if the number of operations are <= 0.
     */
    static computeMinimumTransactionFee(normalizedFee: number, numberOfOperations: number): number;
    /**
     * Verifies that the fee paid for the given transaction is valid; throws if it is not valid.
     *
     * @param transactionFeePaid The actual fee paid for that transaction.
     * @param numberOfOperations The number of operations written.
     * @param normalizedFee The normalized fee for that transaction.
     *
     * @throws if the number of operations is <= 0; if the fee paid is invalid.
     */
    static verifyTransactionFeeAndThrowOnError(transactionFeePaid: number, numberOfOperations: number, normalizedFee: number): void;
}
