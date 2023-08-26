// Tipagem de interface para os modelos de CRUD Genericos pegos do Course.
import { ID } from './index';

export interface ICRUDModelCreator<T> {
  create(data: Partial<T>): Promise<T>,
}

export interface ICRUDModelReader<T> {
  getAll(): Promise<T[]>,
  getById(id: ID): Promise<T | null>,
}

export interface ICRUDModelReaderByEmail<T> {
  getByEmail(email: string): Promise<T | null>,
}

export interface ICRUDModelUpdater<T> {
  update(id: ID, data: Partial<T>): Promise<T | null>,
}

export interface ICRUDModelDeleter {
  delete(id: ID): Promise<number>,
}

export interface ICRUDModel<T>
  extends ICRUDModelCreator<T>, ICRUDModelReader<T>, ICRUDModelUpdater<T>,
  ICRUDModelDeleter { }
