import { useState, useEffect } from 'react';

type StatusType = 'idle' | 'pending' | 'success' | 'error';
function useAsync<T>(asyncFN: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState<StatusType>('idle');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setStatus('pending');
    setError(null);
    setData(null);
    asyncFN()
      .then((res) => {
        setData(res);
        setStatus('success');
        setError(null);
      })
      .catch((err) => {
        setError(err);
        setStatus('error');
        setData(null);
      });
  }, []);
  return {
    data,
    isLoading: status === 'pending',
    isSuccess: status === 'success',
    isError: status === 'error',
    error,
  };
}

export default useAsync;
