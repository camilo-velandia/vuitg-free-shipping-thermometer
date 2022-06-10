import React,{useState, useEffect} from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import Termomether from './Termomether'

const ShippingThermometer = () => {

  const {orderForm} = useOrderForm()
  const shippingValueFree= 100000
  const orderValue= orderForm?.totalizers[0]?.value/100
  const [isFree, setIsFree] = useState(false)
  const [missingValue, setMissingValue] = useState(shippingValueFree)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setIsFree(orderValue > shippingValueFree)
    setMissingValue(shippingValueFree - orderValue )
    setWidth(orderValue/shippingValueFree*100)
  }, [orderForm?.value])



  console.log('orderForm',orderForm)
  console.log('width%',width)

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
