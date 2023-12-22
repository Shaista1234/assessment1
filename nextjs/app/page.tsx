import Image from 'next/image'
import '../app/layout'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
  <div className='container'>
<section className='section1 pt-10 pb-20'>
  <div className='w-[90%] row'>
    <div className='column1 pl-0'>
      <div>
        <Image src={require('../images/LOGO-CMS-1.png')} alt="KredX CMS | Cash Management System"/>
      </div>
    </div>
  </div>
  <div className='w-[90%] flex pt-10 justify-between row'>
    <div className='column w-1/2 ' >
      <div>
          <p className='text-60px font-bold text-white text-6xl mt-16'>Automate Your Finance Function</p>
          <p className='text-4xl font-medium text-white mt-10'>WITHOUT Reworking Your ERP</p>
         <a href="/" className='mt-20'><button className='btn1 pt-4 pb-4 pl-12 pr-12 text-white bg-sky-400 rounded mt-10 text-xl'>Learn more</button></a>
      </div> 
    </div>
      <div className='column w-1/2'>
        <div className='float-right'>
        <Image src={require('../images/Frame.png')} alt="Bg-image"/>
        </div>
      </div>
    

  </div>
</section>
<section className='section2 pt-14 pb-14 bg-white'>
    <div className='row flex'>
      <div className='column w-1/12'>
        <div className='pr-4 float-right'>
        <Image src={require('../images/arrow1.png')} alt="arrow1"/>
        </div>
      </div>
    
    <div className='w-10/12'>
      <div>
        <p className=' text-center pt-6 pb-8 text-2xl font-semibold text-slate-600'>Only KredX's AP Solution lets you automate and streamline your entire PO-to-Pay process without messing up your existing processes. That's because we support all native functionality for 40+ ERPs</p>
      </div>
    </div>
    <div className='w-1/12'>
        <div className='pl-4 float-left'>
        <Image src={require('../images/arrow2.png')} alt="arrow2"/>
        </div>
    </div>
    </div>
</section>
<section className='section3 pt-10 pb-20'>
  <div className='row flex justify-center'>
    <div className='w-3/5'>
      <div>
        <h1 className='text-6xl text-center text-cyan-700 font-bold'>
        KredX AP Automation Capabilities
        </h1>
      </div>
    </div>
  </div>
  <div className='row flex justify-center text-center items-center pt-14 pb-8'>
    <div className='column w-1/4 pl-2.5 pr-2.5'>
        <div>
        <div className='flex justify-around items-center'>
        <Image src={require('../images/Invoice-Digitization.png')} alt="Invoice Digitization" className='float-center'/>
        </div>
        <h2 className='text-lg text-cyan-700 mt-10 font-semibold h-12'>Invoice Digitization</h2>
        <p className='mt-8 text-sm font-medium'>Automate all formats of invoices received across any channel into a centralized repository in a single format to reduce error & increase team efficiency</p>
        </div>
    </div>
    <div className='column w-1/4 pl-2.5 pr-2.5'>
        <div>
        <div className='flex justify-around items-center'>
        <Image src={require('../images/Invoice-Processing.png')} alt="Invoice Processing" className='float-center'/>
        </div>
        <h2 className='text-lg text-cyan-700 mt-10 font-semibold h-12'>Invoice Processing</h2>
        <p className='mt-8 text-sm font-medium'>Automate invoice capturing, invoice exchange with vendors & approval workflows. Centralized vendor portal for tracking all PO's</p>
        </div>
    </div>
    <div className='column w-1/4 pl-2.5 pr-2.5'>
        <div>
        <div className='flex justify-around items-center'>
        <Image src={require('../images/Centralized-access-and-collaboration.png')} alt="Centralized access and collaboration"/>
        </div>
        <h2 className='text-lg text-cyan-700 mt-10 font-semibold h-12'>Centralized access and collaboration</h2>
        <p className='mt-8 text-sm font-medium'>Collaboration, interaction and documentation is centered at each invoice level making approval workflows efficient, seamless and audit ready</p>
        </div>
    </div>
    <div className='column w-1/4 pl-2.5 pr-2.5'>
        <div>
        <div className='flex justify-around items-center -mt-4'>
        <Image src={require('../images/Advanced-&-Quick-customizable-workflows.png')} alt="Advanced & Quick customizable workflows" className='float-center'/>
        </div>
        <h2 className='text-lg text-cyan-700 mt-10 font-semibold h-12'>Advanced & Quick customizable workflows</h2>
        <p className='mt-8 text-sm font-medium'>Advanced AI that adapts to AP processes unique to your organization within the shortest amount of time</p>
        </div>
    </div>
  </div>
  <div className='row flex justify-center text-center items-center pt-8 pb-14'>
    <div className='column w-1/4 pl-2.5 pr-2.5'>
        <div>
        <div className='flex justify-around items-center'>
        <Image src={require('../images/Invoice-Matching.png')} alt="Invoice Matching" className='float-center'/>
        </div>
        <h2 className='text-lg text-cyan-700 mt-10 font-semibold h-12'>Invoice Matching</h2>
        <p className='mt-8 text-sm font-medium'>Effortless 2 and 3 way matching with easy to understand 'reason' coding for users increasing efficiency & protect against fraud and duplication</p>
        </div>
    </div>
    <div className='column w-1/4 pl-2.5 pr-2.5'>
        <div>
        <div className='flex justify-around items-center -mt-4'>
        <Image src={require('../images/Integrated-Vendor-Management.png')} alt="Integrated Vendor Management"/>
        </div>
        <h2 className='text-lg text-cyan-700 mt-10 font-semibold h-12'>Integrated Vendor Management</h2>
        <p className='mt-8 text-sm font-medium'>Manage vendor onboarding, documentation and payment from one place</p>
        </div>
    </div>
    <div className='column w-1/4 pl-2.5 pr-2.5'>
        <div>
        <div className='flex justify-around items-center'>
        <Image src={require('../images/Strengthen-treasury-&-your-supply-chain.png')} alt="Strengthen treasury & your supply chain"/>
        </div>
        <h2 className='text-lg text-cyan-700 mt-10 font-semibold h-12'>Strengthen treasury & your supply chain</h2>
        <p className='mt-8 text-sm font-medium'>Increase treasury income through early payments via dynamic discounting. Earn more from each spend via KredX's AP card program</p>
        </div>
    </div>
    <div className='column w-1/4 pl-2.5 pr-2.5'>
        <div>
        <div className='flex justify-around items-center'>
        <Image src={require('../images/Audit-ready.png')} alt="Audit ready"/>
        </div>
        <h2 className='text-lg text-cyan-700 mt-10 font-semibold h-12'>Audit ready</h2>
        <p className='mt-8 text-sm font-medium'>One-click access to all conversations and notes at each invoice level. Data available on cloud archived after 7 years for full audit trail wherever required.</p>
        </div>
    </div>
  </div>
  <div className='row text-center'>
    <div className='column'>
      <div>
        <a href="/"><button className='btn2 pt-4 pb-4 pl-12 pr-12 text-white bg-cyan-500 rounded text-2xl font-semibold'>Request Demo</button></a>
      </div>
    </div>
  </div>
</section>
<section className='section4 pb-12'>
    <div className='row text-center'>
       <div className='column'>
        <div>
          <h2 className='text-cyan-600 font-bold text-5xl'>
          The KredX CMS Advantage
          </h2>
        </div>
       </div>
    </div>
    <div className='row flex mt-10 pb-10'>
        <div className='column w-1/2'>
           <div className='div1 bg-cyan-600 flex justify-between items-center pt-6 pb-6 pl-8 pr-10 text-white '>
            <p className='text-lg'>Increase bottom line by reducing costs and increasing efficiency</p>
            <Image src={require('../images/icon1 (1).png')} alt="icon"/>
           </div>
         
           <div className='div2 bg-white flex justify-between items-center pt-6 pb-6 pl-8 pr-8 text-black rounded-md text-lg'>
            <p className='text-lg'>Increase bottom line by reducing costs and increasing efficiency</p>
            <Image src={require('../images/icon1 (4).png')} alt="icon"/>
           </div>
           <div className='div2 bg-white flex justify-between items-center pt-6 pb-6 pl-8 pr-8 text-black rounded-md text-lg'>
            <p className='text-lg'>Increase bottom line by reducing costs and increasing efficiency</p>
            <Image src={require('../images/icon1 (4).png')} alt="icon"/>
           </div>
        </div>
        <div className='column text-column  w-1/2 bg-cyan-600 pt-10 pb-0 pl-8 pr-8'>
          <div className='flex pt-2 pb-4 text-lg'>
            <Image className='h-5 my-1.5' src={require('../images/icon1 (3).png')} alt="icon"/>
            <p className='text-white  pl-4'>Automations to increase the efficiency in both AP and AR sides.</p>
          </div>
          <div className='flex pt-2 pb-4 text-lg'>
            <Image className='h-5 my-1.5' src={require('../images/icon1 (3).png')} alt="icon"/>
            <p className='text-white pl-4'>On time follow-ups with customers enables quicker realization of revenues</p>
          </div>
          <div className='flex pt-2 pb-4 text-lg'>
            <Image className='h-5 my-1.5' src={require('../images/icon1 (3).png')} alt="icon"/>
            <p className='text-white pl-4'>Tools like dynamic discounting to increase bottom line</p>
          </div>
          <div className='flex pt-2 pb-4 text-lg'>
            <Image className='h-5 my-1.5' src={require('../images/icon1 (3).png')} alt="icon"/>
            <p className='text-white pl-4'>Reduced human effort can be utilized to focus on increasing revenues</p>
          </div>
        </div>
    </div>
</section>
<section className='section5 bg-sky-950 pt-8 pb-8'>
    <div className='row flex'>
      <div className='column w-1/2'>
      <Image className='h-5 my-1.5' src={require('../images/logo2.png')} alt="KredX"/>
      </div>
      <div className='column w-1/2 flex justify-end'>
        <div className='flex justify-end'>
        <a href="/"><Image className='h-5 my-1.5 ml-6' src={require('../images/icon1 (2).png')} alt="message"/></a>
        <a href="/"><Image className='h-5 my-1.5 ml-6' src={require('../images/linkedin.png')} alt="LinkedIn"/></a>
        <a href="/"><Image className='h-5 my-1.5 ml-6' src={require('../images/facebook.png')} alt="facebook"/></a>
        <a href="/"><Image className='h-5 my-1.5 ml-6' src={require('../images/twitter.png')} alt="Twitter"/></a>
        <a href="/"><Image className='h-5 my-1.5 ml-6' src={require('../images/youtube.png')} alt="YouTube"/></a>

        </div>
      </div>
    </div>
</section>
</div>        
  )
}
