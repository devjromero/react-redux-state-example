import { PropsWithChildren } from "react";
type PropTypes = {
    handleLogout: ()=>void
}
const _Dashboard:React.FC<PropTypes> = (props:PropsWithChildren<PropTypes>) => {
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1>You are in Dashboard</h1>
            <button className="bg-blue-400 rounded p-2 text-white"
                onClick={props.handleLogout}
            >
                Logout
            </button>
        </div>
    );
}

export default _Dashboard;