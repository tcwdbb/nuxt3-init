import { H3Event, H3EventContext } from 'h3'
export default defineEventHandler((event: H3Event) => {
  const params = event.context.params as H3EventContext
  console.log(params)
  return `service router post ${params.name}`
})
