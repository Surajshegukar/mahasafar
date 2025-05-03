import { useState } from 'react';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';

export default function Terms() {
  const [expandedSections, setExpandedSections] = useState({
    overview: true,
    userAgreement: false,
    accountRegistration: false,
    userContent: false,
    intellectualProperty: false,
    privacy: false,
    termination: false,
    disclaimers: false,
    limitations: false,
    governing: false
  });
  
  const [hasScrolled, setHasScrolled] = useState(false);
  const [accepted, setAccepted] = useState(false);
  
  const toggleSection = (section) => {
    setExpandedSections({
      ...expandedSections,
      [section]: !expandedSections[section]
    });
  };
  
  const handleScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
    if (bottom) {
      setHasScrolled(true);
    }
  };
  
  const termsData = [
    {
      id: 'overview',
      title: '1. Overview',
      content: `These Terms and Conditions ("Terms") govern your access to and use of our website, mobile applications, and services (collectively, the "Services"). Please read these Terms carefully before using our Services. By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you may not access or use the Services.

We may modify these Terms at any time. If we make changes, we will provide notice of such changes, such as by sending an email notification, providing notice through the Services, or updating the "Last Updated" date at the beginning of these Terms. Your continued use of the Services will confirm your acceptance of the revised Terms.`
    },
    {
      id: 'userAgreement',
      title: '2. User Agreement',
      content: `By using our Services, you agree to:
      
a) Comply with these Terms and all applicable local, state, national, and international laws and regulations.
b) Use the Services only for lawful purposes and in accordance with these Terms.
c) Not use the Services in any way that could disable, overburden, damage, or impair the Services or interfere with any other party's use of the Services.
d) Not attempt to gain unauthorized access to any part of the Services, or any systems or networks connected to the Services.
e) Not use any robot, spider, or other automatic device, process, or means to access the Services for any purpose, including monitoring or copying any of the material on the Services.`
    },
    {
      id: 'accountRegistration',
      title: '3. Account Registration and Security',
      content: `To access certain features of the Services, you may be required to register for an account. When you register, you agree to:

a) Provide accurate, current, and complete information.
b) Maintain and promptly update your information to keep it accurate, current, and complete.
c) Maintain the security of your account by protecting your password and restricting access to your account.
d) Promptly notify us if you discover or otherwise suspect any security breaches related to your account.
e) Accept responsibility for all activities that occur under your account and accept risk of unauthorized access.

You must be at least 18 years old to create an account. By creating an account, you represent and warrant that you are at least 18 years old.`
    },
    {
      id: 'userContent',
      title: '4. User Content',
      content: `The Services may allow you to upload, submit, store, send, or receive content (collectively, "User Content"). You retain ownership of any intellectual property rights that you hold in that User Content.

By submitting User Content to the Services, you grant us a worldwide, royalty-free, non-exclusive, perpetual, irrevocable, transferable, and fully sublicensable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display such User Content in connection with the Services.

You represent and warrant that:
a) You own the User Content posted by you or otherwise have the right to grant the rights and licenses set forth in these Terms.
b) Your User Content, and our use of such User Content, does not and will not infringe, violate, or misappropriate any third-party right, including any copyright, trademark, patent, trade secret, moral right, privacy right, right of publicity, or any other intellectual property or proprietary right.
c) Your User Content does not violate applicable law.`
    },
    {
      id: 'intellectualProperty',
      title: '5. Intellectual Property Rights',
      content: `The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by us, our licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.

These Terms permit you to use the Services for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our Services, except as follows:

a) Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.
b) You may store files that are automatically cached by your web browser for display enhancement purposes.
c) You may print or download one copy of a reasonable number of pages of the Services for your own personal, non-commercial use and not for further reproduction, publication, or distribution.`
    },
    {
      id: 'privacy',
      title: '6. Privacy',
      content: `Our Privacy Policy describes how we handle the information you provide to us when you use our Services. You understand that through your use of the Services you consent to the collection and use of this information as set forth in the Privacy Policy.`
    },
    {
      id: 'termination',
      title: '7. Termination',
      content: `We may terminate or suspend your access to all or part of the Services, without notice, for any conduct that we, in our sole discretion, believe is in violation of any applicable law or is harmful to the interests of another user, a third-party provider, a service provider, or us.

Upon termination, your right to use the Services will immediately cease. If you wish to terminate your account, you may simply discontinue using the Services, or you may delete your account through the account settings in the Services.`
    },
    {
      id: 'disclaimers',
      title: '8. Disclaimers',
      content: `THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. NEITHER THE COMPANY NOR ANY PERSON ASSOCIATED WITH THE COMPANY MAKES ANY WARRANTY OR REPRESENTATION WITH RESPECT TO THE COMPLETENESS, SECURITY, RELIABILITY, QUALITY, ACCURACY, OR AVAILABILITY OF THE SERVICES.

WITHOUT LIMITING THE FOREGOING, NEITHER THE COMPANY NOR ANYONE ASSOCIATED WITH THE COMPANY REPRESENTS OR WARRANTS THAT THE SERVICES WILL BE ACCURATE, RELIABLE, ERROR-FREE, OR UNINTERRUPTED, THAT DEFECTS WILL BE CORRECTED, THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR THAT THE SERVICES WILL OTHERWISE MEET YOUR NEEDS OR EXPECTATIONS.`
    },
    {
      id: 'limitations',
      title: '9. Limitation of Liability',
      content: `TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE COMPANY, ITS AFFILIATES, OR THEIR LICENSORS, SERVICE PROVIDERS, EMPLOYEES, AGENTS, OFFICERS, OR DIRECTORS BE LIABLE FOR DAMAGES OF ANY KIND, UNDER ANY LEGAL THEORY, ARISING OUT OF OR IN CONNECTION WITH YOUR USE, OR INABILITY TO USE, THE SERVICES, INCLUDING ANY DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO, PERSONAL INJURY, PAIN AND SUFFERING, EMOTIONAL DISTRESS, LOSS OF REVENUE, LOSS OF PROFITS, LOSS OF BUSINESS OR ANTICIPATED SAVINGS, LOSS OF USE, LOSS OF GOODWILL, LOSS OF DATA, AND WHETHER CAUSED BY TORT (INCLUDING NEGLIGENCE), BREACH OF CONTRACT, OR OTHERWISE, EVEN IF FORESEEABLE.`
    },
    {
      id: 'governing',
      title: '10. Governing Law and Jurisdiction',
      content: `These Terms and any disputes relating thereto shall be governed by and construed in accordance with the laws of [Jurisdiction], without regard to its conflict of law principles. You agree that any legal action or proceeding between you and the Company shall be brought exclusively in a court of competent jurisdiction located in [Jurisdiction].`
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Terms and Conditions</h1>
      <p className="text-gray-600 mb-8">Last Updated: April 28, 2025</p>
      
      <div className="mb-8 flex flex-col md:flex-row gap-6">
        {/* Table of Contents */}
        <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg border border-gray-200 self-start sticky top-4">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Contents</h2>
          <ul className="space-y-2">
            {termsData.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => {
                    const element = document.getElementById(section.id);
                    element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-orange-600 hover:text-orange-800 text-left w-full"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Terms Content */}
        <div 
          className="md:w-2/3 bg-white rounded-lg border border-gray-200 overflow-auto h-96 p-6"
          onScroll={handleScroll}
        >
          {termsData.map((section) => (
            <div key={section.id} id={section.id} className="mb-6">
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleSection(section.id)}
              >
                <h2 className="text-xl font-semibold text-gray-800">{section.title}</h2>
                {expandedSections[section.id] ? 
                  <ChevronUp size={20} className="text-gray-600" /> : 
                  <ChevronDown size={20} className="text-gray-600" />
                }
              </div>
              
              {expandedSections[section.id] && (
                <div className="mt-3 text-gray-700 whitespace-pre-line">
                  {section.content}
                </div>
              )}
              <hr className="my-4 border-gray-200" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Acceptance Section */}
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <div className="flex items-start space-x-3 mb-4">
          <div className="flex-shrink-0">
            <button
              onClick={() => hasScrolled && setAccepted(!accepted)}
              className={`w-6 h-6 rounded flex items-center justify-center border ${
                hasScrolled 
                  ? (accepted ? "bg-green-500 border-green-500" : "border-gray-300") 
                  : "bg-gray-200 border-gray-300 cursor-not-allowed"
              }`}
            >
              {accepted && <Check size={16} className="text-white" />}
            </button>
          </div>
          <div>
            <p className="text-gray-700">
              I confirm that I have read, understood, and agree to the Terms and Conditions.
            </p>
            {!hasScrolled && (
              <p className="text-sm text-red-500 mt-1">
                Please scroll through the entire document before accepting.
              </p>
            )}
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300">
            Decline
          </button>
          <button 
            className={`px-4 py-2 rounded text-white ${
              accepted && hasScrolled 
                ? "bg-blue-600 hover:bg-blue-700" 
                : "bg-blue-300 cursor-not-allowed"
            }`}
            disabled={!accepted || !hasScrolled}
          >
            Accept and Continue
          </button>
        </div>
      </div>
    </div>
  );
}