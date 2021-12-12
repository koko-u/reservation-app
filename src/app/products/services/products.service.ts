import { Injectable } from '@angular/core'
import { BehaviorSubject, NEVER, Observable, of } from 'rxjs'
import { Product } from '../models/product.model'
import { mockProducts } from '../../data/mock-products'

@Injectable()
export class ProductsService {
  private _productsSubject$: BehaviorSubject<Product[]>

  /**
   * the notification that product list is updated
   */
  get productsUpdated$(): Observable<Product[]> {
    return this._productsSubject$.asObservable()
  }

  constructor() {
    this._productsSubject$ = new BehaviorSubject<Product[]>(mockProducts)
  }

  /**
   * get all observables
   *
   * to get product list, client should observe productsUpdated$
   */
  getAllProducts(): Observable<never> {
    this._productsSubject$.next(mockProducts)
    return NEVER
  }

  /**
   * get a product of the given id
   *
   * @param id
   */
  getProductById(id: string): Observable<Product | undefined> {
    const product = this._productsSubject$.value.find(
      (product) => product.id === id
    )
    return of(product)
  }
}
