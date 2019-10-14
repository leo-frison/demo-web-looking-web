import { NextApiRequest, NextApiResponse } from 'next'
import sendgrid from '@sendgrid/mail'
const from = 'G. the bot <recruitment@techmill.nl>'
const to = 'guilherm3pontes@gmail.com'
const templateId = 'd-2d01c331be204df39e564173070e5829'
const apiKey = ''

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(404).json({
      error: 'API call not found'
    })
  }

  sendgrid.setApiKey(apiKey)

  const msg = {
    to,
    from,
    templateId,
    dynamic_template_data: {
      name: 'John',
      age: '35',
      linkedin: 'https://linkedin.com/in/guilhermepontes',
      country: 'Brazil',
      email: 'behehe@g.com',
    },
  }

  const data = await sendgrid.send(msg)

  res.json({
    data,
  })
}