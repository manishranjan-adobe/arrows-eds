import { HTMLAttributes } from 'preact/compat';
import { Container } from '@dropins/tools/types/elsie/src/lib';
import { CartModel } from '../../data/models';

export interface FreeGiftSelectionProps extends HTMLAttributes<HTMLDivElement> {
    /** Shows the trigger button when pending free gifts are available. */
    showTrigger?: boolean;
    /** Optional cart model override for isolated Storybook usage. */
    cartData?: CartModel | null;
}
export declare const FreeGiftSelection: Container<FreeGiftSelectionProps>;
//# sourceMappingURL=FreeGiftSelection.d.ts.map