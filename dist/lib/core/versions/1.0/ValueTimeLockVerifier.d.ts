import IVersionMetadataFetcher from '../../interfaces/IVersionMetadataFetcher';
import ValueTimeLockModel from '../../../common/models/ValueTimeLockModel';
/**
 * Encapsulates the functionality to compute and verify the value time lock amounts.
 */
export default class ValueTimeLockVerifier {
    /**
     * Calculates the maximum number of operations allowed to be written for the given lock information. If
     * there is no lock then it returns the number of operations which do not require a lock.
     *
     * @param valueTimeLock The lock object if exists
     * @param versionMetadataFetcher The mapper from transaction time to version metadata
     */
    static calculateMaxNumberOfOperationsAllowed(valueTimeLock: ValueTimeLockModel | undefined, versionMetadataFetcher: IVersionMetadataFetcher): number;
    /**
     * Verifies that the value lock object (amount, transaction time range) is correct for the specified number
     * of operations.
     *
     * @param valueTimeLock The value time lock object used for verification.
     * @param numberOfOperations The target number of operations.
     * @param sidetreeTransactionTime The transaction time where the operations were written.
     * @param sidetreeTransactionWriter The writer of the transaction.
     * @param versionMetadataFetcher The mapper from transaction time to version metadata
     */
    static verifyLockAmountAndThrowOnError(valueTimeLock: ValueTimeLockModel | undefined, numberOfOperations: number, sidetreeTransactionTime: number, sidetreeTransactionWriter: string, versionMetadataFetcher: IVersionMetadataFetcher): void;
}
