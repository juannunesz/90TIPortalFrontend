import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISupplier } from '../interface/ISupplier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private supplierPath: string = `https://localhost:7021/api/Fornecedor`

  constructor(private http: HttpClient) { }

  registerSupplier(supplier: ISupplier): Observable<ISupplier> {
    const input: any = {
      fornecedor: supplier
    }

    return this.http.post<ISupplier>(`${this.supplierPath}/AdicionarCadastroFornecedor`, input);
  }
}
