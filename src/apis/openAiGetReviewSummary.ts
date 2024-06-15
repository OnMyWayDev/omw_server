import { OPENAI_API_URL } from 'src/config/consts';
import { axiosOpenAi, errorHandler } from './axios';

const openAiGetReviewSummary = async (params: any) => {
  try {
    const res = await axiosOpenAi.post(OPENAI_API_URL, {
      ...params, //FIXME:fixme
    });
    return res.data;
  } catch (err) {
    console.log('Error occured in openAiGetReviewSummary :', err);
    errorHandler(err);
  }
};

export default openAiGetReviewSummary;
