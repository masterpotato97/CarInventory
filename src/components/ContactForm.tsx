
import Button from './Button';
import Input from './Input';

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch } from "react-redux"
import {chooseName, chooseCarmodel,chooseAddress,chooseMake } from "../redux/slices/RootSlice"

interface ContactFormProps {
  id?: string[];
}

const ContactForm = (props: ContactFormProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = async (data: any, event: any) => {
   
   
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      await server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.first } ${ props.id }`)
      event.target.reset()
    } else {
      dispatch(chooseName(data.name));
      dispatch(chooseMake(data.make));
      dispatch(chooseCarmodel(data.carmodel));
      dispatch(chooseAddress(data.address));


      await server_calls.create(data);
      event.target.reset();
    }
  window.location.reload();
  };

  return (
    
    <div>
      <h1>create</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>
          <label htmlFor="name">Name</label>
          <Input {...register('name')} name="name" placeholder="Name" />
        </div>
        <div>
          <label htmlFor="make">Car Make</label>
          <Input {...register('make')} name="make" placeholder="Make" />
        </div>
        <div>
          <label htmlFor="carmodel">Car Model</label>
          <Input {...register('carmodel')} name="carmodel" placeholder="Car Model" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <Input {...register('address')} name="address" placeholder="Address" />
        </div>
        <div className="flex p-1">
          <Button
           
            className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
