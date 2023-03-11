import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import _, { Many } from 'lodash'
import data from '../shard/product-data'
import { Product } from '../shard/data/product'

type ProductSearchRequest = NextApiRequest & {
  query: {
    keyword: string | undefined
    page: string | undefined
    rows: string | undefined
    order: string | undefined
    orderBy: string | undefined
  }
}

const captains = console

export default async (
  req: ProductSearchRequest,
  res: NextApiResponse
): Promise<void> => {
  await NextCors(req, res, {
    methods: ['GET'],
    origin: '*',
    optionSuccessStatus: 200,
  });

  try {
    const { keyword, page, rows, order, orderBy } = req.query
    const _rows = parseInt(rows || '100')
    const _page = parseInt(page || '0')

    let products = _.orderBy(data.getProducts(), 'id', 'asc')
    if (order) {
      if (['name', 'description'].includes(orderBy || '')) {
        products = _.orderBy(products, orderBy, order as Many<'asc' | 'desc'>)
      }
    }
    if (keyword) {
      products = products.filter(
        (item: Product) => -1 !== [ ...item.color, item.title, item.keyword ].indexOf(keyword)
      )
    }
    const start = _rows * _page
    captains.log(keyword, start, page, rows, order, orderBy)
    const results = {
      count: products.length,
      data: products.slice(start, start + _rows),
    }
    res.status(200).json(results)
  } catch (error) {
    res.status(500).send(error)
  }
}
