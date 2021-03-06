import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import EventItem from '@/components/EventItem'
import Pagination from '@/components/Pagination';

import { PER_PAGE } from '@/config/index'
export default function EventsPage({events,page,total}) {
  const lastpage=Math.ceil(total/PER_PAGE)
  return (
    <Layout>
      <h1>Events</h1>
      {events.length===0&&<h3>NO EVENTS CURRENTLY!!</h3>}
      {
        events.map(evt=>(
          <EventItem key={evt.id} evt={evt} />
        ))
      }
      <Pagination page={page} total={total}/>
    </Layout>
  )
}
export async function getServerSideProps({query:{page=1}}){
  //calculate start page
  const start = +page===1?0:(+page-1)*PER_PAGE
  
  const totalRes = await fetch(`${API_URL}/events/count`)
  const total = await totalRes.json();
  


  const eventRes = await fetch(`${API_URL}/events?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`)
  const events = await eventRes.json();
  return{
    props:{events,page:+page,total},

  }
}