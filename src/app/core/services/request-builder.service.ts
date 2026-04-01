import { Injectable } from '@angular/core'
import { RequestModel } from 'src/app/shared/interface/request.model'
import { UserService } from 'src/app/shared/services/user.service'

@Injectable({ providedIn: 'root' })
export class RequestBuilderService {

    constructor(private userService: UserService) { }

    private defaultDb(): string {
        return this.userService.get()?.db || 'EcomDB';
    }

    build(
        procedure: string,
        params?: any,
        form?: any,
        db?: 'EcomDB' | 'EcomSetup'
    ): RequestModel {
        return {
            db: db || this.defaultDb(),
            procedure,
            params: params || {},
            form: form || {}
        };
    }
}
