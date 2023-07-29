import { g, auth, config } from '@grafbase/sdk'

const User = g.model('User', {
  name: g.string().length({ min: 2, max: 20}),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  resumes: g.relation(()=> Resumes).list().optional(),
})

const Resumes = g.model('Project', {
  title: g.string().length({min: 2, max:20}),
  desctiption: g.string().optional(),
  image: g.url(),
  driveLinkUrl: g.url().optional(),
  category: g.string().search(),
  createdBy: g.relation(()=>User),
}) 

export default config({
  schema: g
})
