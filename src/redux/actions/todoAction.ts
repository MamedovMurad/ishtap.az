  
  
  export type REMOVE_FROM_CART = {
    type: 'REMOVE_FROM_CART',
    payload:number;
    }



    /*-------------Actions------------*/


    export const removeFromCart = (itemId: number) => {
        return {
          type: 'REMOVE_FROM_CART',
          payload: itemId,
        };
      };