import { NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import { IdRequest } from '../shard/data/id-request'
import data from '../shard/product-data'

export default async (req: IdRequest, res: NextApiResponse): Promise<void> => {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionSuccessStatus: 200,
  });

  const id = parseInt(req.query.id, 10)

  try {
    const target = data.getProduct(id)
    if (target) {
      res.status(200).json(target)      
    } else {
      res.status(404).send('Not found')
    }
  } catch (error) {
    res.status(500).send(error)
  }
}
