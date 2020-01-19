import React from 'react';
import Accordion from '../Accordion/Accordion';
import VideoItem from '../VideoItem/VideoItem';

function Waitlist(props) {

    return (
        <div>
            <Accordion 
                title="Websites"
                content=""
            >
                <span>
                <VideoItem title="<b>Youth Gambling help</b>" url="www.inyaface.co.nz"></VideoItem>
                <VideoItem title="<b>Choice not Chance</b>" url="https://www.choicenotchance.org.nz"></VideoItem>
                <VideoItem title="<b>Gambling Helpline</b>" url="https://www.gamblinghelpline.co.nz/Home_452.aspx"></VideoItem>
                <VideoItem title="<b>Know Your Odds</b><br />Getting to know your odds of winning can really put your chances into perspective." url="https://www.choicenotchance.org.nz/understand-gambling/know-your-odds"></VideoItem>
                <VideoItem title="<b>How Pokie Machines work</b><br />Can you beat or cheat a modern slot machine? Explore below" url="https://www.choicenotchance.org.nz/understand-gambling/how-pokies-work"></VideoItem>
                <VideoItem title="<b>Health Navigator</b>" url="https://www.healthnavigator.org.nz/health-a-z/g/gambling/"></VideoItem>
                </span>    
            </Accordion>

            <Accordion 
                title="Finances"
                content=""
            >
                <span>
                <VideoItem title="<b>Online Budgeting tool</b>" url="https://sorted.org.nz/#/tools/budgeting-tool"></VideoItem>
                <VideoItem title="<b>Web link to budgeting services available throughout NZ</b>" url="https://www.familyservices.govt.nz/directory/searchresultspublic.htm?searchTerms=&cat1=5660&searchRegion=-1&search=Search"></VideoItem>
                <li><b>Free confidential budgeting advice </b></li>
                <p>You may already be struggling to pay your bills, or anticipating hard times. It’s never too late get started.  The financial mentors can:</p>
                <li>Understand your financial situation</li>
                <li>Organise your debt</li>
                <li>Plan for the future</li>
                <li>Get you in touch with a local budgeting service</li>
                <p><b>Phone</b>  0800 345 123</p>
                <p><b>Text</b>  4029</p>
                <p><b>Email</b>  <a href='mailto:help@moneytalks.co.nz'>help@moneytalks.co.nz</a></p>
                <p><b>Chat</b>  <a href='https://www.moneytalks.co.nz/'>https://www.moneytalks.co.nz/</a></p>
                </span>    
            </Accordion>

            <Accordion 
                title="Downloadable Resources"
                content=""
            >
            <span>
            <VideoItem title="A guide to talking therapy" url="https://www.mentalhealth.org.nz/assets/Uploads/A-Guide-to-Talking-Therapies-in-New-Zealand-3.pdf"></VideoItem>
            <VideoItem title="He rongoā kei korero (talking therapy for Māori) " url="https://www.mentalhealth.org.nz/assets/ResourceFinder/Talking-Therapies-for-Maori.pdf"></VideoItem>
            <VideoItem title="Talking therapies for Pasifika peoples" url="https://www.tepou.co.nz/uploads/files/resource-assets/Talking-Therapies-for-Pasifika-Peoples.pdf"></VideoItem>
            <VideoItem title="Talking therapies for Asian peoples" url="https://www.tepou.co.nz/uploads/files/resource-assets/Talking-Therapies-for-Asian-People.pdf"></VideoItem>
            </span>    
            </Accordion>
                   
        </div>
    );

}

export default Waitlist;