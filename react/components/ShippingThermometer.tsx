import React,{useState, useEffect} from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import Termomether from './Termomether'
import getPromotions from '../services/getPromotions'
import getPromotionById from '../services/getPromotionById'

const ShippingThermometer = () => {
  const {orderForm} = useOrderForm()
  const promoName= 'Promo Envio Gratis'
  const orderValue= orderForm?.totalizers[0]?.value/100
  const [isFree, setIsFree] = useState(false)
  const [shippingValueFree, setShippingValueFree] = useState(0)
  const [missingValue, setMissingValue] = useState(shippingValueFree)
  const [width, setWidth] = useState(0)


  useEffect(() => {
    getPromotions().then((res:any) => {
      const filterPromo = res?.items.find((promo: { name: string; })=> promo.name === promoName)
      getPromotionById(filterPromo?.idCalculatorConfiguration).then((res:any) => {
        setShippingValueFree(res?.totalValueFloor)
      });
    });
  }, [])

  useEffect(() => {
    if(shippingValueFree){
      setIsFree(orderValue > shippingValueFree)
      setMissingValue(shippingValueFree - orderValue )
      setWidth(orderValue/shippingValueFree*100)
    }
  }, [orderForm?.value, shippingValueFree])

  return (
    <div className='pa5 tc'>
      <Termomether width={width} />
      {
        isFree ? <p>Tu envio es gratis!</p> : <p>Te falta ${missingValue} para difrutar de envio gratis Prime <strong>de tus productos de mercado</strong></p>
      }
    </div>
  );
};

export default ShippingThermometer;
