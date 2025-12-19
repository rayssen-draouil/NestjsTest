import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map } from "rxjs/operators";

@Injectable()
export class StatusInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler) {
    return next.handle().pipe(
      map(data => {
        const filterObject = (obj) => {
          if(obj.status === true) return obj;
          return { title: obj.title };
        };

        if(Array.isArray(data)) {
          return data.map(item => filterObject(item));
        }
        return filterObject(data);
      })
    );
  }
}
