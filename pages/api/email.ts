import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import multiparty from 'multiparty'
import sendgrid from '@sendgrid/mail'
const from = 'G. the bot <recruitment@techmill.nl>'
const to = 'guilherme@techmill.nl'
const templateId = 'd-2d01c331be204df39e564173070e5829'
const apiKey: string = process.env.SENDGRID_API_KEY || ''

function encode(file: any) {
  var bitmap = fs.readFileSync(file)
  return Buffer.from(bitmap).toString('base64')
}

async function sendEmail(getFieldName: Function, file: any) {
  sendgrid.setApiKey(apiKey)

  const message = {
    to,
    from,
    templateId,
    dynamic_template_data: {
      name: getFieldName('name'),
      email: getFieldName('email'),
      country: getFieldName('country'),
      linkedin: getFieldName('linkedin'),
      github: getFieldName('github'),
    },
    attachments: [
      {
        content: encode(file.path),
        filename: file.originalFilename,
        type: 'application/pdf',
        disposition: 'attachment',
      }
    ]
  }

  try {
    await sendgrid.send(message)
    console.log(apiKey)
  } catch (e) {
    console.error(e);
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(404).json({
      response: 'API call not found'
    })
  }

  const form = new multiparty.Form()
  const getFieldName = (field: any) => (name: string) => field[name][0]

  form.parse(req, async function(err: any, fields: any, files: any) {
    if (err || !files || !files.file) return res.json({ response: 'error' })

    await sendEmail(getFieldName(fields), files.file[0])

    res.json({ response: 'success' })
    res.end('Message has been sent')
  })
}

export const config = {
  api: {
    bodyParser: false,
  },
}