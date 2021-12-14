import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { useCart } from 'react-use-cart'
import { sendForm, send, init } from 'emailjs-com'

import Button from '../components/ui/button'
import {
  ChevronDownSmallIcon,
  ChevronUpSmallIcon,
  XSmallIcon
} from '../public/svgs'
import { formatCurrencyValue } from '../utils/format-currency-value'
import getPageData from '../lib/get-page-data'
import SEO from '../components/seo'

import useSubmissionState from '../hooks/use-form-submission'


function Cart() {
  const {
    cartTotal,
    isEmpty,
    items,
    removeItem,
    updateItemQuantity
  } = useCart()
  const router = useRouter()
  const activeCurrency = {code: 'UAH'}
  const {
    setSubmissionError,
    setSubmissionLoading,
    submissionError,
    submissionLoading,
    submissionState
  } = useSubmissionState()

  const decrementItemQuantity = (item) =>
    updateItemQuantity(item.id, item.quantity - 1)

  const incrementItemQuantity = (item) =>
    updateItemQuantity(item.id, item.quantity + 1)


  const { register, handleSubmit } = useForm();


  var templateParams = {
    firstName: 'James',
    lastName: 'Adams',
    userEmail: 'ergaqerg@rfve.rvf'
  };

  const onSubmit = () => {
    send(`service_orders`, 'template_k4s2jkm', templateParams, 'user_hJtii4dPwax73jzkUrCSr')
        .then((result) => {
              alert("Message Sent, We will get back to you shortly", result.text);
            },
            (error) => {
              alert("An error occurred, Please try again", error.text);
            });
  }


//   const onSubmit = () => {
// // try {
// //       setSubmissionLoading()
// //
// //
// //       setSubmissionSuccess()
// //     } catch (error) {
// //       setSubmissionError(error.info.message)
// //     }
// //
// //
//     console.log('alright')
//
//
//     // emailjs.sendForm(`gmail`, process.env.TEMPLATE_ID, data, process.env.USER_ID)
//     //     .then((result) => {
//     //           alert("Message Sent, We will get back to you shortly", result.text);
//     //         },
//     //         (error) => {
//     //           alert("An error occurred, Please try again", error.text);
//     //         });
//   }

  // RETURN


  if (isEmpty) return <p>Ваш кошик порожній</p>

  return (
    <React.Fragment>
      <SEO title="Cart" />
      {items.map((item) => {
        return (
          <div
            className="md:bg-gray-50 md:rounded-lg flex items-center py-3 md:py-6 md:px-6 md:mb-3"
            key={item.id}
          >
            <div className="w-3/5 flex flex-grow items-center">
              <div className="h-16 md:h-20 w-16 md:w-20 mr-4 bg-gray-50 p-1 rounded-lg">
                <Image
                  src={item.image.url}
                  width={item.image.width}
                  height={item.image.height}
                />
              </div>
              <div>
                <Link href={`/products/${item[router.locale].slug}`}>
                  <a className="text-gray-800 font-medium text-sm md:text-base">
                    {item[router.locale].name}
                  </a>
                </Link>
                <button
                  className="text-gray-400 hover:text-indigo-600 text-xs flex items-center focus:outline-none"
                  onClick={() => removeItem(item.id)}
                  disabled={submissionLoading}
                >
                  <XSmallIcon className="h-3 w-3" />
                  Прибрати
                </button>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-center ml-auto">
              <button
                className="text-gray-400 hover:text-indigo-600 focus:outline-none p-1"
                onClick={() => incrementItemQuantity(item)}
                disabled={submissionLoading}
              >
                <ChevronUpSmallIcon className="h-4 w-4" />
              </button>
              <span className="mx-3 md:mx-6 p-1">{item.quantity}</span>
              <button
                className="text-gray-400 hover:text-indigo-600 focus:outline-none p-1"
                onClick={() => decrementItemQuantity(item)}
                disabled={submissionLoading}
              >
                <ChevronDownSmallIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="text-right md:w-1/5">
              <p className="font-medium text-gray-800">
                {formatCurrencyValue({
                  currency: activeCurrency,
                  value: item.itemTotal
                })}
              </p>
              {item.quantity > 1 && (
                <p className="text-gray-400 text-sm">
                  {formatCurrencyValue({
                    currency: activeCurrency,
                    value: item.price
                  })}{' '}
                  кожен
                </p>
              )}
            </div>
          </div>
        )
      })}

      <div className="mt-3 md:mt-6 py-3 md:py-6 border-t-2 border-gray-50">

          <div className="flex flex-col items-start mb-3">
            {/*<form onSubmit={handleSubmit(onSubmit)}>*/}
            {/*  <input type="text" placeholder="Ім'я" {...register("name", {required: true, maxLength: 40})} />*/}
            {/*  /!*<input type="text" placeholder="Прізвище" {...register("surname", {required: true, maxLength: 40})} />*!/*/}
            {/*  /!*<input type="email" placeholder="Email" {...register("email", {pattern: /^\S+@\S+$/i})} />*!/*/}
            {/*  /!*<input type="tel" placeholder="Телефон" {...register("phone", {required: true, maxLength: 12})} />*!/*/}
            {/*  /!*<select {...register("ship", { required: true })}>*!/*/}
            {/*  /!*  <option value="НоваПошта">НоваПошта</option>*!/*/}
            {/*  /!*  <option value="Justin">Justin</option>*!/*/}
            {/*  /!*  <option value="УкрПошта">УкрПошта</option>*!/*/}
            {/*  /!*  <option value="Самовивіз">Самовивіз</option>*!/*/}
            {/*  /!*</select>*!/*/}
            {/*  /!*<select {...register("pay", { required: true })}>*!/*/}
            {/*  /!*  <option value="Переказ на карту">Переказ на карту</option>*!/*/}
            {/*  /!*  <option value="Наложний платіж">Наложний платіж</option>*!/*/}
            {/*  /!*  <option value="Готівкою(м. Харків)">Готівкою(м. Харків)</option>*!/*/}
            {/*  /!*</select>*!/*/}
            {/*  <input type="submit" />*/}
            {/*</form>*/}

            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("firstName")} placeholder="First name" />
              <input {...register("lastName")} placeholder="Last name" />
              <input type="email" placeholder="Email" {...register("email", {pattern: /^\S+@\S+$/i})} />
              <input type="submit" />
            </form>

          </div>
          <div className="flex flex-col items-end mb-3">
            <span className="text-gray-700">До сплати без доставки</span>
            <span className="text-xl font-bold text-indigo-600">
              {formatCurrencyValue({
                currency: activeCurrency,
                value: cartTotal
              })}
            </span>
          </div>

          {/*<Button onClick={handleClick} disabled={submissionLoading}>*/}
          {/*  Далі*/}
          {/*</Button>*/}

      </div>
    </React.Fragment>
  )
}

export async function getStaticProps({ locale }) {
  const pageData = await getPageData({ locale })

  return {
    props: {
      ...pageData
    }
  }
}

export default Cart
