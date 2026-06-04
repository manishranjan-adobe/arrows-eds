import { CartModel } from '../data/models';

type FreeGiftLineItem = Pick<CartModel['items'][number], 'price' | 'regularPrice' | 'quantity'>;
/**
 * Unit amount shown for free-gift lines: line price when set (e.g. catalog special),
 * otherwise catalog original_item_price / regularPrice.
 */
export declare function getFreeGiftDisplayUnit(item: FreeGiftLineItem): {
    value: number;
    currency: string;
};
/** Row strike total for free-gift lines (display unit × quantity). */
export declare function getFreeGiftLineStrikeTotal(item: FreeGiftLineItem): {
    value: number;
    currency: string;
};
export {};
//# sourceMappingURL=free-gift-pricing.d.ts.map