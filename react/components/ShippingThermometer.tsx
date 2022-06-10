import React,{useState, useEffect} from 'react'
import { useOrderForm } from 'vtex.order-manager/OrderForm'
import Termomether from './Termomether'
import getPromotions from '../services/getPromotions'
import getPromotionById from '../services/getPromotionById'
import PropTypes from 'prop-types'

type Props = {
  promoName: string
}

const ShippingThermometer = ({promoName}:Props) => {

  const {orderForm} = useOrderForm()
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

ShippingThermometer.propTypes = {
  promoName: PropTypes.string.isRequired
}

ShippingThermometer.defaultProps = {
  promoName: 'Promo Envio Gratis'
}

ShippingThermometer.schema = {
  title: 'Free shipping thermometer',
  type: 'object',
  properties: {
    promoName: {
      title: 'Promotion Name',
      description: 'Add the promotion name used by the app to get the floor price',
      type: 'string',
    },
  },
}

export default ShippingThermometer;
