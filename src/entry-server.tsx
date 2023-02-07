import {PipeableStream, renderToPipeableStream, renderToString} from 'react-dom/server'
import { Response, Request } from 'express'
import App from "./App";

export const render = (req: Request, res: Response, template: string) => {
    return new Promise((resolve, reject) => {
        const stream = renderToPipeableStream(<App/>, {
            onAllReady: async () => {
                const [opening, closing] = template.split('<!--ssr-outlet-->')
                res.status(200).set({ 'Content-Type': 'text/html' })
                res.write(opening)
                stream.pipe(res)
                res.write(closing)
                res.end()
            }
        })
    })
}