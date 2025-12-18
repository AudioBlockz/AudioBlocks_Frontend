export interface ApiResponse<T = any> {
	success: boolean;
	data?: T;
	message?: string;
	error?: string;
}

export interface AuthPayload {
  role: string;
  dynamixUserId?: string;
  email?: string;
  walletAddress?: string;
  signature?: string;
  message?: string;
}