import { Button } from 'react-bootstrap'
export const Login = ({keycloak}) => {
    return (
        <Button variant="success"onClick={()=>keycloak.login()}>
            Login
        </Button>
    )
}
