import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
    readonly apiBaseUrl = environment.apiBaseUrl;
    readonly adminLogin = `${this.apiBaseUrl}/admin/auth/login`;
    readonly getDataset = `${this.apiBaseUrl}/dataset/get`;
    readonly getDatasetList = `${this.apiBaseUrl}/dataset/list`;
    readonly executeCurd = `${this.apiBaseUrl}/curd/execute`;
    readonly health = `${this.apiBaseUrl}/health`;
    readonly production = environment.production;
}
