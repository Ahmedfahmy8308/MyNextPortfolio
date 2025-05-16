interface ErrorResponse {
  message?: string;
  error?: string;
  errors?: Record<string, string[]>;
}

/**
 * Handle HTTP errors from fetch responses
 *
 * This function checks if the response is ok, and if not,
 * tries to extract error information from the response body.
 *
 * @param response The fetch Response object
 * @returns The original response if it was ok
 * @throws Error with a message from the response if available
 */
export const handleHttpErrors = async (
  response: Response
): Promise<Response> => {
  if (!response.ok) {
    // Try to parse the error message if available
    try {
      const errorData = (await response.json()) as ErrorResponse;

      // Different APIs might use different fields for error messages
      const errorMessage =
        errorData.message ||
        errorData.error ||
        (errorData.errors && JSON.stringify(errorData.errors)) ||
        `HTTP error ${response.status}: ${response.statusText}`;

      throw new Error(errorMessage);
    } catch (e) {
      // If JSON parsing fails, use the status text
      if (
        e instanceof Error &&
        e.message !== "Unexpected end of JSON input" &&
        !e.message.includes("HTTP error")
      ) {
        throw e;
      }
      throw new Error(`HTTP error ${response.status}: ${response.statusText}`);
    }
  }
  return response;
};
