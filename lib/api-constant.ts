// API Base URL
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

// Auth endpoints
export const AUTH_ENDPOINTS = {
	LOGIN: "/auth/login",
	SIGNUP: "/auth/register-listener",
	GET_NONCE: (email : string)=> `/auth/nonce/${email}`,
} as const;

