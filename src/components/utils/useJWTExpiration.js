import { useEffect, useState } from 'react';
import jwtDecode from 'jwt-decode';

function useJWTExpiration(jwt) {
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    if (jwt) {
      const decoded = jwtDecode(jwt);
      if (decoded.exp * 1000 < Date.now()) {
        setExpired(true);
      }
    }
  }, [jwt]);

  return expired;
}