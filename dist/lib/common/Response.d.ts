import ResponseStatus from './enums/ResponseStatus';
/**
 * Contains operations related to `IResponse`.
 */
export default class Response {
    /**
     * Converts a Sidetree response status to an HTTP status.
     */
    static toHttpStatus(status: ResponseStatus): number;
}
