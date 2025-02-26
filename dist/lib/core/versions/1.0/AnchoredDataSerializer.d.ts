import AnchoredData from './models/AnchoredData';
/**
 * Encapsulates functionality to serialize/deserialize data that read/write to
 * the blockchain.
 */
export default class AnchoredDataSerializer {
    /** Delimiter between logical parts in anchor string. */
    static readonly delimiter = ".";
    /**
     * Converts the given inputs to the string that is to be written to the blockchain.
     *
     * @param dataToBeAnchored The data to serialize.
     */
    static serialize(dataToBeAnchored: AnchoredData): string;
    /**
     * Deserializes the given string that is read from the blockchain into data.
     *
     * @param serializedData The data to be deserialized.
     */
    static deserialize(serializedData: string): AnchoredData;
    private static parsePositiveInteger;
}
