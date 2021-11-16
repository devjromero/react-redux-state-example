import { PropsWithChildren } from "react";
import { useDispatch } from "react-redux";
import { closeUserSession } from "../../common/redux/authentication/actions";
import Presenter from "./Dashboard.presenter";

const Dashboard: React.FC<any> = (props: PropsWithChildren<any>) => {
    const dispatch = useDispatch();
    const handleLogout = () => dispatch(closeUserSession());
    return (
        <Presenter
            handleLogout={handleLogout}
        />
    );
}
export default Dashboard;