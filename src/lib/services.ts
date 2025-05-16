import { handleHttpErrors } from "./api";

/**
 * Interface for the message data to be sent to the API
 * Note that the 'content' field maps to 'message' in the form
 */
interface MessageData {
  name: string;
  phone: string;
  subject: string;
  content: string; // API expects 'content' instead of 'message'
}

interface ApiResponse<T = Record<string, unknown>> {
  success: boolean;
  message?: string;
  data?: T;
}

/**
 * Service for handling message-related API operations
 */
export const messageService = {
  /**
   * Sends a message to the API
   * @param messageData Message data to be sent
   * @returns Promise that resolves to the API response
   */
  sendMessage: async (messageData: MessageData): Promise<ApiResponse> => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    if (!apiUrl) {
      throw new Error(
        "API URL is not configured. Please check your environment variables."
      );
    }

    const response = await fetch(`${apiUrl}/api/Message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageData),
    });

    await handleHttpErrors(response);

    // The API might not return JSON, so handle both cases
    if (response.headers.get("content-type")?.includes("application/json")) {
      return (await response.json()) as ApiResponse;
    }

    return { success: true };
  },
};
