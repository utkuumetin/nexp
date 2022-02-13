import type { NextApiRequest, NextApiResponse } from "next"

type handlerFunction = (req: NextApiRequest, res: NextApiResponse) => any;

class nexp {
    routerObject: {[index: string]: handlerFunction};

    constructor() {
        this.routerObject = {
            notFound: function (req, res) {
                res.send(404);
            }
        };      
    }

    static Router(): nexp{
        return new nexp();
    };

    public handler(): handlerFunction{
        let router = this.routerObject;
        return function handler(req, res) {
            req.method !== undefined && (router[req.method] ? router[req.method](req, res) : router.notFound(req, res));
        }
    }

    public set(method: string, handler: handlerFunction): any{
        this.routerObject[method] = handler;
    }
}

export default nexp;
export { handlerFunction };