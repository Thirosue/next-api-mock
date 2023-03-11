import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {  
  await NextCors(req, res, {
    methods: ['POST'],
    origin: '*',
    optionSuccessStatus: 200,
  });

  res.status(200).json({ status: 'ok' })
}
