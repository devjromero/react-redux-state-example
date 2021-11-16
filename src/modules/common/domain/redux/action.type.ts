import Constant from "./constant.type";

type Action<T> = {
    type: Constant
    payload?: T
}

export default Action;