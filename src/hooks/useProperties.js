import { useEffect, useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';

const URL = 'https://api.simplyrets.com/properties';
const auth = btoa('simplyrets:simplyrets');

const useProperties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    async function fetchProperties() {
      try {
        setLoading(true);
        const response = await fetch(URL, {
          method: 'GET',
          headers: {
            Authorization: `Basic ${auth}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) {
          const error = await response.json();
          setError(error?.message);
          showBoundary(error?.message);
          return;
        }
        const data = await response.json();
        setProperties(data);
      } catch (error) {
        setError(error?.message);
        showBoundary(error?.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, [showBoundary]);

  return { properties, loading, error };
};

export default useProperties;
