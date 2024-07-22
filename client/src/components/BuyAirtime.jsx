import { useState } from "react";
import Input from "./Input";
import * as Yup from 'yup';
import { useMutation } from '@tanstack/react-query';
import { Formik, Form } from 'formik';
import { Button } from "./Buttons";
import { providers } from "../constants";
import Checkbox from "./Checbox";
import useCartStore from "../store/useCartStore";

const validationSchema = Yup.object({
  phone: Yup.string().required('Phone number is required'),
  plan: Yup.string().required('Plan is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

const BuyAirtime = () => {
  const [selectedProvider, setSelectedProvider] = useState('');
  const addItemToCart = useCartStore((state) => state.addItem);

  const mutation = useMutation(async (formData) => {
    const response = await fetch('/api/airtime', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  });

  const handleSubmit = (values) => {
    mutation.mutate({ ...values, provider: selectedProvider });
  };

  const handleProviderChange = (e) => {
    console.log(e.target.value)
    console.log("provider")
    setSelectedProvider(e.target.value);
  };

  const handleAddToCart = (values) => {
    console.log({ ...values, provider: selectedProvider })
    addItemToCart({ ...values, provider: selectedProvider });
  };

  return (
    <div className="flex flex-col w-[60%] h-full gap-5">
      <div className="flex flex-col w-full gap-2">
        <h2 className="text-xl font-bold leading-8">Buy airtime</h2>
        <p className="text-base font-normal leading-6 text-gray-500">Please enter your details.</p>
      </div>

      <Formik
        initialValues={{
          phone: '',
          plan: '',
          email: '',
          provider: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, isValid }) => (
          <Form className="flex flex-col gap-5">
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
              value={values.phone}
              onChange={handleChange}
              placeholder=" "
            />
            <Input
              type="text"
              label="Plan"
              name="plan"
              value={values.plan}
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
            <div className="flex items-center justify-between w-full gap-5">
              <Button
                size="full"
                variant="outline"
                disabled={!isValid}
                onClick={() => handleAddToCart(values)}
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
