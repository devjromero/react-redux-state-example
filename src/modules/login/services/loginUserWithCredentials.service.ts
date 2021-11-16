import { Params, Service, Response } from './../domain/loginUserService/loginUserService.type'


const loginUserWithCredentialsService: Service = async (params: Params): Promise<Response> => {
    const data = {
        name: 'John Doe',
        uid: 'cda3a9b6-b052-4a90-b0ce-e443b07c6be2',
        token: 'I am a token!!!'
    };

    return new Promise<Response>((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1200)
    }).then((res: Response) => {
        return res;
    });

};

export default loginUserWithCredentialsService;

