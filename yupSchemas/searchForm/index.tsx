import * as Yup from 'yup';

export const searchFormSchema = Yup.object({
  query: Yup.string(),
});
