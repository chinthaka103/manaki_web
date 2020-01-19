import React from 'react';
import Accordion from '../Accordion/Accordion'

function Home(props) {

    return (
        <div>
            <Accordion
            title="About the Study"
            content="We have designed a mobile phone app (“Manaaki”) that is intended to work over 12 weeks to support you make the changes you want to make about stopping or reducing your gambling.  As this is a new approach, we want to understand how well it works so we need to test it.  To do this, we need to give some people the app now and others are asked to wait 12 weeks before they get it.  Both groups will answer questions at the beginning, then at 4-, 8- and 12-weeks.  On completion of the 12-week questions, all people who were wating to use the app will be able to.  All existing app users can also continue to use the app."
            />

            <Accordion
            title="What’s involved? "
            content="This study is approved by the Human Disability Ethics Committee and is being conducted by researchers at the University of Auckland and Deakin University. The study is funded by the New Zealand Health Research Council.  
            <br><br>

            Everything (consent, screening, questionnaires) will be done through the app. Once you have consented and completed the first set of questionnaire, you will be randomly allocated (like a toss of a coin) to receive the Manaaki app straight away, or into the group that is asked to wait for 12 weeks before getting the Manaaki app (Waitlist). Due to the nature of the study, you will not be able to choose which group you will be allocated to.
            <br><br>
            
            <p style='margin-left: 25px;'>
            <b>Manaaki App Group</b>: If you are allocated to the Manaaki app you will be able to access the full app and choose and complete any modules and topics that most suit your needs.
            <p>
            <br><br>

            <p style='margin-left: 25px;'>
            <b>Waitlist Group</b>: If you are allocated to Waitlist Group, you will need to wait 12 weeks before being able to access the full app. In the meantime, you will be able to see a timer which will tell you how long it will be before you can have access to the full Manaaki app. There will also be some resources and links to gambling services and helplines.  Being in this group does not stop you seeking help from any other service, group or website.
            </p>
            <br><br>

            <b>What do I need to do to participate?</b/>
            <br>
            We plan to recruit around 300 participants New Zealand wide. If you think you want to give Manaaki a go and help us understand if it is helpful, then you will need to have an interest in seeking help for your gambling, be aged 18 and above, have a smart phone that is capable of accessing the internet,  and consent to participate in the study. 
            <br><br>

            You should also be willing to answer four sets of questions: when you install the app, at 4 weeks, again at 8 weeks and a final one at 12 weeks. It will take you less than 10 minutes each time to answer the questions. 
            "
            />

            <Accordion
            title="Contact details for the study team"
            content="You can contact the study team by email at <a href='mailto:manaaki@auckland.ac.nz'>manaaki@auckland.ac.nz</a> or 0800 4NIHI (0800 46444)"
            />

            <Accordion
            title="Pdf of the information sheet "
            content="The pdf of this can be found at this link.
                <br>
                <a href='https://uoa.sharepoint.com/sites/discoverDMS/nihi/Gambling%20HRC%20project%202017/Ethics/20191128_Manaaki_PISCF%20Version%201.1_FINAL.pdf'>https://uoa.sharepoint.com/sites/discoverDMS/nihi/Gambling%20HRC%20project%202017/Ethics/20191128_Manaaki_PISCF%20Version%201.1_FINAL.pdf</a>"
            />

            <Accordion
            title="Terms and Conditions and Privacy"
            content="The pdf of the Terms and Conditions is here
                <br>
                <a href='https://uoa.sharepoint.com/sites/discoverDMS/nihi/Gambling%20HRC%20project%202017/User%20requirements/20191212_Manaaki%20Terms%20of%20Use.pdf'>https://uoa.sharepoint.com/sites/discoverDMS/nihi/Gambling%20HRC%20project%202017/User%20requirements/20191212_Manaaki%20Terms%20of%20Use.pdf</a>
                <br><br>
                The pdf of the Privacy Policy is here
                <br>
                <a href='https://uoa.sharepoint.com/sites/discoverDMS/nihi/Gambling%20HRC%20project%202017/User%20requirements/20191212_Manaaki%20Privacy%20Policy.pdf'>https://uoa.sharepoint.com/sites/discoverDMS/nihi/Gambling%20HRC%20project%202017/User%20requirements/20191212_Manaaki%20Privacy%20Policy.pdf</a>"
            /> 
            
            <Accordion
            title="FAQs"
            content="Content to come but will look like this.
                <br><br>
                <p style='margin-left: 25px;'>
                <b>Q.  Question here in bold.</b> 
                <br>
                <b>A.</b>   Answer here
                </p>" 
            />
        </div>
    );

}

export default Home;