import * as yup from 'yup';
import {INVALID_EMAIL} from 'src/constants';

export const VALIDATE_EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validateSchema = (schema: any, input: any) => {
  return schema.validate(input, {abortEarly: true});
};

export const emailSchema = yup
  .string()
  .required()
  .matches(VALIDATE_EMAIL_REGEX, INVALID_EMAIL)
  .label('Email');

export const passwordSchema = yup.string().required().label('Password').min(7);

export const authSchema = yup
  .object()
  .shape({
    password: passwordSchema,
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
