/**
 * Holds metadata for a particular Sidetree version needed by the orchestration layer classes across all versions of the Sidetree.
 */
export default abstract class AbstractVersionMetadata {
    /** Multiplier on the per op fee */
    abstract normalizedFeeToPerOperationFeeMultiplier: number;
    /** Value time lock amount multiplier */
    abstract valueTimeLockAmountMultiplier: number;
}
