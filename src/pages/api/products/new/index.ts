import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import _ from 'lodash'
import data from '../../shard/product-data'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await NextCors(req, res, {
    methods: ['POST'],
    origin: '*',
    optionSuccessStatus: 200,
  });

  try {
    const products = _.orderBy(data.getProducts(), 'id', 'desc')
    const results = {
      count: 5,
      data: products.slice(0, 5),
    }
    res.status(200).json(results)
  } catch (error) {
    res.status(500).send(error)
  }
}
