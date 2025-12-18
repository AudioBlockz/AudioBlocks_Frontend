import { useHandleError, useHandleSuccess } from '@/hooks/useToastHandlers';
import { AUTH_ENDPOINTS } from '@/lib/api-constant';
import { useGet, usePost } from '@/lib/hooks';
import { AuthPayload } from '@/types';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import Cookies from 'js-cookie';

export const useAuth = () => {
  const { primaryWallet, handleLogOut } = useDynamicContext();
  const handleSuccess = useHandleSuccess();
  const handleError = useHandleError();

  const useLogin = () => {
    return usePost<{ payload: AuthPayload }, AuthPayload>(AUTH_ENDPOINTS.LOGIN, {
      onSuccess: (response: any) => {
        Cookies.set('audioblocks_jwt', response.user?.token, {
          expires: 1,
          secure: true,
          sameSite: 'lax',
        });
        handleSuccess(response.message || 'Login successful');
      },
      onError: (error) => {
        handleError(error.message || 'failed');
        handleLogOut();
      },
    });
  };

  const useRegister = () => {
    return usePost<{ payload: AuthPayload }, AuthPayload>(AUTH_ENDPOINTS.SIGNUP, {
      onSuccess: (response: any) => {
        Cookies.set('audioblocks_jwt', response.user?.token, {
          expires: 1,
          secure: true,
          sameSite: 'lax',
        });
        handleSuccess(response.message || 'Registration successful');
      },
      onError: (error) => {
        handleError(error.message || 'failed');
        handleLogOut();
      },
    });
  };

  const useGetNonce = (email: string) => {
    return useGet<{ message: string }>(['nonce', email], AUTH_ENDPOINTS.GET_NONCE(email!), {
      enabled: !!email,
      staleTime: 0,
    });
  };

  const signNonce = async (message: any) => {
    if (!primaryWallet) throw new Error('Wallet not ready');

    return await primaryWallet.signMessage(message);
  };

  return { useRegister, useLogin, useGetNonce, signNonce };
};
