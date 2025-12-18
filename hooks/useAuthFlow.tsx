'use client';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import { useDynamicContext } from '@dynamic-labs/sdk-react-core';
import { useAuth } from '@/services/useAuth';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

export type AuthMode = 'login' | 'register' | null;

export const useAuthFlow = () => {
  const { address } = useAccount();
  const route = useRouter();
  const { user, setShowAuthFlow, handleLogOut } = useDynamicContext();
  const { useGetNonce, signNonce, useLogin, useRegister } = useAuth();

  const loginMutation = useLogin();
  const registerMutation = useRegister();

  const [authMode, setAuthMode] = useState<AuthMode>(null);
  const [loading, setLoading] = useState(false);
  const [shouldTriggerSignature, setShouldTriggerSignature] = useState(false);

  const token = Cookies.get('audioblocks_jwt');
  const { data: nonceData } = useGetNonce(user?.email || '');

  /* =======================
     EFFECT: AUTH EXECUTION
     ======================= */
  useEffect(() => {
    if (token) return;
    if (!shouldTriggerSignature || !authMode) return;
    if (!user?.email || !address || !nonceData?.message) return;

    authMode === 'login' ? handleLogin() : handleRegister();

    setShouldTriggerSignature(true);
  }, [authMode, token, user?.email, nonceData?.message, shouldTriggerSignature]);
 
  /* =======================
     ACTIONS
     ======================= */
  const startLogin = () => {
    setAuthMode('login');
    setShowAuthFlow(true);
    setShouldTriggerSignature(true);
  };

  const startRegister = () => {
    setAuthMode('register');
    setShowAuthFlow(true);
    setShouldTriggerSignature(true);
  };

  const logout = () => {
    Cookies.remove('audioblocks_jwt');
    handleLogOut();
    route.push("/");
  };

  /* =======================
     HANDLERS
     ======================= */
  const handleLogin = async () => {
    try {
      setLoading(true);
      const signature = await signNonce(nonceData?.message);
      if (!signature) return;

      loginMutation.mutate(
        {
          role: 'listener',
          email: user?.email,
          dynamixUserId: user?.userId,
          walletAddress: address,
          signature,
          message: nonceData?.message,
        },
        { onSuccess: () => setLoading(false) }
      );
    } catch {
      setLoading(false);
    }
  };

  const handleRegister = async () => {
    try {
      setLoading(true);
      const signature = await signNonce(nonceData?.message);
      if (!signature) return;

      registerMutation.mutate(
        {
          role: 'listener',
          email: user?.email,
          dynamixUserId: user?.userId,
          walletAddress: address,
          signature,
          message: nonceData?.message,
        },
        { onSuccess: () => setLoading(false) }
      );
    } catch {
      setLoading(false);
    }
  };

  return {
    user,
    loading,
    startLogin,
    startRegister,
    logout,
  };
};
