import { Button } from 'react-bootstrap'
export const Logout = ({keycloak}) => {
    return (
        <Button variant="danger" onClick={()=>keycloak.logout()}>
            Logout
        </Button>
    )
}
