"use strict";
// interface IMiddlware {
//   next(mid: IMiddlware): IMiddlware;
//   handle(request: any): any;
// }
// abstract class AbstractMiddleware implements IMiddlware {
//   private nextMiddleware: IMiddlware;
//   next(mid: IMiddlware): IMiddlware {
//     this.nextMiddleware = mid;
//     return mid;
//   }
//   handle(request: any) {
//     if (this.nextMiddleware) {
//       return this.nextMiddleware.handle(request);
//     }
//     return;
//   }
// }
// class AuthMiddleware extends AbstractMiddleware {
//   override handle(request: any) {
//     console.log("AuthMiddleware");
//     if (request.userId === 1) {
//       return super.handle(request);
//     }
//     return { error: "Auth Error" };
//   }
// }
// class ValidateMiddleware extends AbstractMiddleware {
//   override handle(request: any) {
//     console.log("ValidateMiddleware");
//     if (request.body) {
//       return super.handle(request);
//     }
//     return { error: "Validate Error" };
//   }
// }
// class Controller extends AbstractMiddleware {
//   override handle(request: any) {
//     console.log("Controller");
//     return { success: request };
//   }
// }
// const auth = new AuthMiddleware();
// const validate = new ValidateMiddleware();
// const controller = new Controller();
// auth.next(validate).next(controller);
// console.log(
//   auth.handle({
//     userId: 1,
//     body: "body",
//   })
// );
