import useSWR from 'swr';
import { Fragment, useState } from 'react'
import Mails from '../components/Mails';
import Preview from '../components/Preview';
import MailProps from '../interfaces/mail';

const fetcher = (url) => fetch(url).then((res) => res.json());

const IndexPage = () => {
  const { data, error } = useSWR('/api/mail/all', fetcher);
  const [mail,setMail]=useState<MailProps>()

  if (error) return <div>Failed to load</div>;
  
  if (!data) return <div>Loading...</div>;

  return <Fragment>
    <div className='overflow-y-scroll w-80 border-x border-gray-700 p-5 bg-gray-900'>
      <Mails setMail={(mail:MailProps)=>setMail(mail)} mails={data} />
    </div>
    <Preview mail={mail} />
  </Fragment>
}

export default IndexPage
