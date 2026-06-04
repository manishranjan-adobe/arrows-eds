import { CartModel } from '../../data/models';

export type SelectFreeGiftForCartInput = {
    ruleId: number;
    sku: string;
    quantity?: number;
    enteredOptions?: {
        uid: string;
        value: string;
    }[];
    /**
     * Configurable: configurable option value UIDs.
     * Bundle: one `BundleItemOption.uid` per bundle slot (same as `addProductsToCart` `selected_options`).
     */
    selectedOptions?: string[];
};
/**
 * Persists a free-gift choice for one rule via `selectFreeGiftForCart`
 * (`Magento_SalesRuleFreeGift`).
 */
export declare const selectFreeGiftForCart: ({ ruleId, sku, quantity, enteredOptions, selectedOptions, }: SelectFreeGiftForCartInput) => Promise<CartModel | null>;
//# sourceMappingURL=selectFreeGiftForCart.d.ts.map