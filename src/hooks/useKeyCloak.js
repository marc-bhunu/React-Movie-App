import Keycloak from 'keycloak-js';
import { useEffect, useState } from 'react'

export const useKeyCloak = () => {
  const [keycloak, setKeycloak] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)


  useEffect(() => {
    const _kc = Keycloak('/keycloak.json');
    _kc.init(({ onLoad: 'check-sso' })).then(authenticated => {
      setKeycloak(_kc)
      setIsAuthenticated(authenticated)
      localStorage.setItem('kc_token', _kc.token);
      localStorage.setItem('kc_refreshToken', _kc.refreshToken);

    })
  }, [])


  return [keycloak, isAuthenticated]
}

