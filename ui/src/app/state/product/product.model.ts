import { Product } from "../../entities/product";

export interface ProductState {
    products: Product[];
    loading: boolean;
    filteredProducts: Product[],
    error: any;
}
