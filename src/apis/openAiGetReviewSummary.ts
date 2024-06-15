import { OPENAI_API_URL } from 'src/config/consts';
import { axiosOpenAi, errorHandler } from './axios';

const openAiGetReviewSummary = async (params: { corpus: string }) => {
  try {
    const body = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            '너는 리뷰들을 요약해주는 요약 봇이야. 보내주는 리뷰들을 최대 220자 이하로 요약하되 존댓말로 생성해.',
        },
        {
          role: 'user',
          content: params.corpus, //FIXME: add enhanced preprocessing logic here
        },
      ],
    };
    const res = await axiosOpenAi.post(OPENAI_API_URL, body);
    return res.data;
  } catch (err) {
    console.log('Error occured in openAiGetReviewSummary :', err);
    errorHandler(err);
  }
};

export default openAiGetReviewSummary;
