import json2formdata from 'json-form-data'

export default async function applyToJob(values: any): Promise<any> {
  const data = await fetch('/api/email', {
    method: 'POST',
    body: json2formdata(values),
  })

  return await data.json();
}