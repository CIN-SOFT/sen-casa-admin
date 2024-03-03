import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpInterceptor } from '@angular/common/http'
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = localStorage.getItem("sene-casa-token") || "";

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    if (req.url.includes("admin")){
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer '+authToken)
      });
      return next.handle(authReq);
  }
    return next.handle(req);

    // send cloned request with header to the next handler.

  }
}
