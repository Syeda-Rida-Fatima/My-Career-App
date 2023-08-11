import * as yup from 'yup';
import {INVALID_USERNAME, INVALID_EMAIL} from '../constants';

export const VALIDATE_EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;
export const VALIDATE_USERNAME_REGEX = /^[a-zA-Z0-9@/./+/-/_]{1,150}$/;
export const validateSchema = (schema: any, input: any) => {
  return schema.validate(input, {abortEarly: true});
};

export const emailSchema = yup
  .string()
  .required()
  .matches(VALIDATE_EMAIL_REGEX, INVALID_EMAIL)
  .label('email');
export const citySchema = yup.string().required().label('city');
export const countrySchema = yup.string().required().label('country');
export const passwordSchema = yup.string().required().label('password').min(6);
export const usernameSchema = yup
  .string()
  .required()
  .matches(VALIDATE_USERNAME_REGEX, INVALID_USERNAME)
  .label('username');

export const authSchema = yup
  .object()
  .shape({
    username: usernameSchema,
    password: passwordSchema,
    country: countrySchema,
    city: citySchema,

    email: emailSchema,
  })
  .strict();

export const trimmedHabitSchema = yup
  .object()
  .shape({
    name: yup.string().required().label('Name'),
    type: yup.string().required().label('Type'),
  })
  .strict();

export const habitSchema = yup
  .object()
  .shape({
    name: yup.string().required().label('Name'),
    type: yup.string().required().label('Type'),
    repeat: yup.number().nullable().label('No of times'),
    label: yup.string().label('Label'),
    frequency: yup.string().required().label('Frequency'),
    priority: yup.string().required().label('Priority'),
    timeDuration: yup.string().label('Time duration'),
    percentage: yup.number(),
    specificDays: yup.boolean(),
    goals: yup.array().required().label('Goals'),
  })
  .strict();

export const deleteAccountSchema = yup
  .object()
  .shape({
    deleteReason: yup.string().required().label('Reason'),
    deleteDescription: yup.string().required().label('Description'),
  })
  .strict();

export const createLabelSchema = yup
  .object()
  .shape({
    label: yup.string().required().label('Label'),
    type: yup.string().required().label('Type'),
  })
  .strict();
