import { useState } from "react";
import Input from "./Input";
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { Formik, Form } from 'formik';
import { Button } from "./Buttons";
import { providers } from "../constants";
import Checkbox from "./Checkbox";
import useCartStore from "../store/useCartStore";
import { toast } from "react-toastify";

const validationSchema = Yup.object({
  phone: Yup.string().required('Phone number is required'),
  amount: Yup.string().required('Amount is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

const BuyAirtime = () => {
  const [selectedProvider, setSelectedProvider] = useState('');
  const addItemToCart = useCartStore((state) => state.addItem);
  // const loadCartFromLocalStorage = useCartStore((state) => state.loadCartFromLocalStorage);

  const mutation = useMutation({
    mutationFn: async (data) => addItemToCart(data),
    onSuccess: () => {
      toast.success('Item added to cart successfully');
    },
    onError: (error) => {
      toast.error(`Error: ${error.message}`);
    },
  });

  const handleSubmit = (values) => {
    mutation.mutate({ ...values, provider: selectedProvider, type: 'airtime' });
  };

  const handleProviderChange = (e) => {
    setSelectedProvider(e.target.value);
  };

  // const handleAddToCart = (values) => {
  //   addItemToCart({ ...values, provider: selectedProvider });
  // };

  return (
    <div className="flex flex-col w-full md:w-[60%] h-full gap-5">
      <div className="flex flex-col w-full gap-2">
        <h2 className="text-xl font-bold leading-8">Buy airtime</h2>
        <p className="text-base font-normal leading-6 text-gray-500">Please enter your details.</p>
      </div>

      <Formik
        initialValues={{
          phone: '',
          amount: '',
          email: '',
          provider: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, isValid }) => (
          <Form className="flex flex-col w-full gap-5">
            <div className="flex justify-between w-full gap-4">
              {providers.map((provider) => (
                <Checkbox
                  key={provider.value}
                  src={provider.src}
                  label={provider.label}
                  value={provider.value}
                  checked={provider.value === selectedProvider}
                  onChange={handleProviderChange}
                />
              ))}
            </div>
            <Input
              type="text"
              label="Phone Number"
              name="phone"
              id="phone"
              value={values.phone}
              onChange={handleChange}
              placeholder=" "
            />
            <Input
              type="text"
              label="Amount"
              name="amount"
              value={values.amount}
              onChange={handleChange}
              placeholder=" "
            />
            <Input
              type="email"
              label="Email"
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder=" "
            />
            <div className="flex flex-col items-center justify-between w-full gap-5 md:flex-row">
              <Button
                size="full"
                variant="outline"
                disabled={!isValid}
                loading={true}
              >

                Add to cart
              </Button>
              <Button size="full" variant="default" disabled={!isValid}>
                Proceed to checkout
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BuyAirtime;
