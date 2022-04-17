import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../../util_Contexts/auth-context";

export const RequireAuth = ({ children }) => {
    const location = useLocation();

    const { user } = useAuth();
    return user ? children : <Navigate to={'/login'} state={{ from: location?.from }} replace />
}