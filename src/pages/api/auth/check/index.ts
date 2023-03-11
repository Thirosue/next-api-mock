import { NextApiRequest, NextApiResponse } from 'next'
import NextCors from 'nextjs-cors';
import jwt from 'jsonwebtoken'
import TokenHelper, { SECRET_KEY } from '../../shard/helpers/token'

export default async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await NextCors(req, res, {
    methods: ['POST'],
    origin: '*',
    optionSuccessStatus: 200,
  });

  let token = ''
  if (
    req.headers.authorization &&
    req.headers.authorization.split(' ')[0] === 'Bearer'
  ) {
    token = req.headers.authorization.split(' ')[1]

    jwt.verify(token, SECRET_KEY, (err: any, decoded: any) => {
      if (err) {
        res.status(401).json({ message: 'Unauthorized' })
      } else {
        const token = TokenHelper.sign(decoded.user)
        res.status(200).json({ status: 'ok', token })
      }
    })
  } else {
    res.status(401).json({ message: 'Unauthorized' })
  }
}
