/*! Copyright 2026 Adobe
All Rights Reserved. */
import{f as F,s as C,h as G,g as h}from"./resetCart.js";import{c as A,t as R}from"./refreshCart.js";import{events as m}from"@dropins/tools/event-bus.js";import{b as p}from"./acdl.js";import{CART_FRAGMENT as g}from"../fragments.js";const S=`
    mutation CREATE_GUEST_CART_MUTATION {
        createGuestCart {
          cart {
            id
          }
        }
    }
`,w=async()=>{const{disableGuestCart:u}=A.getConfig();if(u)throw new Error("Guest cart is disabled");return await F(S).then(({data:r})=>{const e=r.createGuestCart.cart.id;return C.cartId=e,e})},U=`
  mutation SELECT_FREE_GIFT_FOR_CART(
    $input: SelectFreeGiftForCartInput!
    $pageSize: Int! = 100
    $currentPage: Int! = 1
    $itemsSortInput: QuoteItemsSortInput! = { field: CREATED_AT, order: DESC }
  ) {
    selectFreeGiftForCart(input: $input) {
      cart {
        ...CART_FRAGMENT
      }
    }
  }

  ${g}
`,D=async({ruleId:u,sku:r,quantity:e,enteredOptions:c,selectedOptions:i})=>{const s={cart_id:C.cartId||await w().then(a=>a),rule_id:u,sku:r};return e!=null&&(s.quantity=e),c!=null&&c.length&&(s.entered_options=c.map(({uid:a,value:o})=>({uid:a,value:o}))),i!=null&&i.length&&(s.selected_options=i),F(U,{variables:{input:s}}).then(({errors:a,data:o})=>{var _;const T=[...a??[]];if(T.length>0)return G(T);const E=(_=o==null?void 0:o.selectFreeGiftForCart)==null?void 0:_.cart;if(!E)throw new Error("selectFreeGiftForCart did not return a cart");const t=R(E),f=h(),d=(f==null?void 0:f.items)||[];if(m.emit("cart/updated",t),m.emit("cart/data",t),t){const l=t.items.filter(n=>!d.some(I=>I.uid===n.uid));l.length>0&&m.emit("cart/product/added",l),p(t,t.items.filter(n=>n.sku===r||n.topLevelSku===r),C.locale??"en-US")}return t})};export{w as c,D as s};
//# sourceMappingURL=selectFreeGiftForCart.js.map
