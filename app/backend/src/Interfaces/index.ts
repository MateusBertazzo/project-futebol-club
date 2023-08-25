// Tipagem de interface para os modelos de CRUD Genericos pegos do Course.
export type NewEntity<T> = Omit<T, 'id'>;

export type ID = number;

export type Identifiable = { id: ID };
