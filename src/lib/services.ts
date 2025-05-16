import { handleHttpErrors } from "./api";
import { config } from "./config";


interface MessageData {
  name: string;
  phone: string;
  subject: string;
  content: string; 
}

interface ApiResponse<T = Record<string, unknown>> {
  success: boolean;
  message?: string;
  data?: T;
}


export const messageService = {
  /**
   * Sends a message to the API
   * @param messageData Message data to be sent
   * @returns Promise that resolves to the API response
   */ sendMessage: async (messageData: MessageData): Promise<ApiResponse> => {
    const apiUrl = config.apiUrl;
    const response = await fetch(`${apiUrl}/api/Message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include", 
      body: JSON.stringify(messageData),
    });

    await handleHttpErrors(response);

    if (response.headers.get("content-type")?.includes("application/json")) {
      return (await response.json()) as ApiResponse;
    }

    return { success: true };
  },
};
