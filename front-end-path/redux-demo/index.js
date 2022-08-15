const BUY_CAKE = 'BUY_CAKE'

// THIS IS OUR ACTION
/**
 * 
 {
   type: BUY_CAKE
   info: "First redux action"
 }
 */

// THIS IS AN ACTION CREATOR

const buyCake = () => {
  return {
    type: BUY_CAKE,
    info: 'First redux action',
  }
}
