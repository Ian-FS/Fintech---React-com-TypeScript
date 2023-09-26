import { useEffect, useRef, useState } from "react";

function useFetch<T>(input: RequestInfo | URL, init?: RequestInit | undefined) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const optionsRef = useRef(init);
  optionsRef.current = init;

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    setLoading(true);
    fetch(input, { signal, ...optionsRef.current })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject();
      })
      .then((json: T) => {
        if (!signal.aborted) setData(json);
      })
      .catch((error) => {
        if (!signal.aborted && error instanceof Error)
          console.log(error.message);
      })
      .finally(() => {
        if (!signal.aborted) setLoading(false);
      });

    return () => controller.abort();
  }, [input]);

  return { data, loading, error };
}

export default useFetch;
