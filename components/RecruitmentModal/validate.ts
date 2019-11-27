export default function validate(values: any) {
  let errors: any = {}

  if (!values.name) {
    errors.name = 'Required'
  } else if (values.name.length <= 1) {
    errors.name = 'Invalid name'
  }

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  // Country validation
  if (!values.country) {
    errors.country = 'Required'
  }

  // Linkedin validation
  if (!values.linkedin) {
    errors.linkedin = 'Required'
  } else if (values.linkedin.length > 0 && !values.linkedin.includes('linkedin.com')) {
    errors.linkedin = 'Invalid LinkedIn url'
  }

  // GitHub validation
  if (values.github.length > 0 && !values.github.includes('github.com')) {
    errors.github = 'Invalid GitHub url'
  }

  // Techmill values
  const inputs: string[] = [
    'passion',
    'experience',
    'communication',
    'share',
  ]

  inputs.forEach(item => {
    if (!values[item]) errors[item] = 'Required'
  })

  // File
  if (!values.file.name) {
    errors.file = 'Required'
  }

  return errors
}