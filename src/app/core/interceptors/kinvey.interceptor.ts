import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http'
import { Observable } from 'rxjs'
import { APP_KEY, APP_SECRET } from '../common/kinvey-creds'

export class KinveyInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        if (req.url.endsWith('login') || req.url.endsWith(APP_KEY)) {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`,
                    'Content-Type': 'application/json'
                }
            })
        } else {
            req = req.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
                    'Content-Type': 'application/json'
                }
            })
        }


        return next.handle(req)
    }
}