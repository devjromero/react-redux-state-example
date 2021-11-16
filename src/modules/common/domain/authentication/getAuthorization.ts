export type Params = {
    code: string
}
export type Response = {
    name: string,
    uid: string,
    token: string
};
export type Service = (params: Params) => Promise<Response>;



