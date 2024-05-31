import React from 'react';
import { Footer, FooterCopyright, FooterDivider, FooterIcon, FooterTitle } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsInstagram,BsLinkedin,BsTwitterX} from 'react-icons/bs';
export default function FooterCom() {
  return (
    <Footer  container className=' border border-t-8 border-green-500' >
        <div className='w-full max-w-7xl mx-auto '>
            
                <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                    <div className='mt-5 '>
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
        <span className='px-20 py-4 bg-gradient-to-r from-green-900 via-green-700 to-green-400 rounded-lg text-white '>ThePharmacast</span>
        
        </Link>
               
         </div>
            
                <div className='grid grid-cols-2 gap-11 mt-4 sm:mt-4 am:grid-cols-3 sm:gap-6'>
                    <div>

                    <Footer.Title title='About'/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                         href='/blog'
                         target='-blank'
                         rel='nooperner noreferrer'>
                            satya's Blogs
                             
                        </Footer.Link>
                        <Footer.Link
                         href='/about'
                         target='-blank'
                         rel='nooperner noreferrer'>
                            pharmacast's journey
                             
                        </Footer.Link>
                    </Footer.LinkGroup>
                    </div>
                    <div>
                        
                    <Footer.Title title='Follow Us '/>
                    <Footer.LinkGroup col>
                        <Footer.Link
                         href='https://www.instagram.com/the_pharmacast/'
                         target='-blank'
                         rel='nooperner noreferrer'>
                            instagram
                             
                        </Footer.Link>
                        <Footer.Link
                         href='https://www.linkedin.com/in/satyavardhan?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAB5yghUBDelenZ4HmY3s9ABmBL79We6_9zI&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BV70M7UokSJGo6rUSFMihYw%3D%3D'
                         target='-blank'
                         rel='nooperner noreferrer'>
                            linkedIn
                             
                        </Footer.Link>
                    </Footer.LinkGroup>

                    </div>
                
                </div>

            </div>
        </div>
        
        <Footer.Divider/>
        <div>
        <Footer.Copyright
        href='#'
        by='ThePharmacast'
        year={new Date().getFullYear()}
        />
        <div className='flex gap-5 sm:mt-0 mt-4 sm:justify-center'>
        <Footer.Icon href='https://www.instagram.com/the_pharmacast/' icon={BsInstagram}/>
        <Footer.Icon href='https://www.linkedin.com/in/satyavardhan?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAB5yghUBDelenZ4HmY3s9ABmBL79We6_9zI&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BV70M7UokSJGo6rUSFMihYw%3D%3D' icon={BsLinkedin}/>
        <Footer.Icon href='#' icon={BsTwitterX}/>
        </div>
        </div>
    </Footer>
  )
}