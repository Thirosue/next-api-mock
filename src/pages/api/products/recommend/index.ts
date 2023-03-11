import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import _ from 'lodash'
import data from '../../shard/product-data'

export default async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionSuccessStatus: 200,
  });

  try {
    const products = data.getProducts()

    // おすすめをランダムに5件取得
    let numbers: number[] = [];
    while (numbers.length < 5) {
      let randomNum = Math.floor(Math.random() * 10) + 1;
      if (!numbers.includes(randomNum)) {
        numbers.push(randomNum);
      }
    }

    const results = {
      count: 5,
      data: [products[numbers[0]], products[numbers[1]], products[numbers[2]], products[numbers[3]], products[numbers[4]]]
    }
    res.status(200).json(results)
  } catch (error) {
    res.status(500).send(error)
  }
}
