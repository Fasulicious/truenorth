import mongose from 'mongoose'

const {
  DB_USER,
  DB_PASSWORD,
  DB_DOMAIN,
  DB_SUBDOMAIN
} = process.env

export default () => mongose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_DOMAIN}.${DB_SUBDOMAIN}.mongodb.net/truenorth?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
