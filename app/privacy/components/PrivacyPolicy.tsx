import { poppins, roboto_slab } from "../../font";

const PrivacyPolicy = () => {
  return (
    <>
      <div className=" ">
        <h2
          className={` ${poppins.className}  uppercase   text-[#e7f2ef] md:mt-[160px]    text-[70px] font-bold sm:text-[140px] lg:text-[250px] xl:text-[300px] 2xl:text-center `}
        >
          PRIVACY
        </h2>

        <div className="sm:px-10 xl:px-20 px-5 2xl:px-[160px]  sm:mx-auto  z-30  sm:mt-[-100px] md:mt-[-120px] lg:mt-[-150px]    ">
          <div className="  px-2  ">
            <p className="  text-gray-600 text-[11px] sm:text-[18px] md:text-[22px] font-medium  tracking-[5px] ">
              {`OLLYO'S PRIVACY POLICY`}
            </p>
            <h2
              className={` ${roboto_slab.className}  sm:text-[35px] md:text-[45px] font-bold text-[28px]  mt-5 text-[#26302b] 2xl:w-[70%] 2xl:text-[40px]`}
            >
              Your privacy is of paramount importance to us, and we are
              committed to preserving and safeguarding it.
            </h2>
            <div className=" space-y-7 mt-14 text-slate-700  text-[17px] sm:text-[19px] leading-7 sm:leading-[30px] mb-32 md:leading-[40px] lg:text-[21px]">
              <p>
                At Ollyo, we adhere to various regulations designed to help us
                protect your privacy.
              </p>
              <p>
                We will never ask for personal information that is irrelevant to
                our site (such as income, race, etc.). We do not transfer your
                personal data to third parties unless required by law or to
                protect our rights. We do not store personal information on our
                site unless necessary for a crucial operational process. Our
                primary goal is to respect and protect your privacy while
                operating our site.
              </p>
              <div className=" space-y-3">
                <h2 className=" font-semibold text-gray-700">
                  Visitor Information
                </h2>
                <p>
                  We collect non-personally identifiable information from all
                  site visitors, including browser type, language preference,
                  date and time of visits, and other general data. This
                  information does not lead to personal identification and may
                  only be released in the form of trends or reports. Personally
                  identifiable information, such as IP addresses, is collected
                  for logged-in users and those who leave comments. This
                  information is disclosed only to our administrators.
                </p>
              </div>
              <div className=" space-y-3">
                <h2 className=" font-semibold text-gray-700">
                  User Information
                </h2>
                <p>
                  When interacting with our site and providing personal
                  information is required, we may request personally
                  identifiable data relevant to the interaction. For instance,
                  signing up for our newsletter or commenting necessitates users
                  to provide their name, username, and email address. We will
                  not disclose personal identification to third parties. Users
                  always have the right to refuse disclosure by accepting that
                  they will not receive those services requiring such
                  information.
                </p>
              </div>
              <div className=" space-y-3">
                <h2 className=" font-semibold text-gray-700">
                  Analytics & Statistics
                </h2>
                <p>
                  {`We may produce statistics based on users' behavioral analysis.
                  These statistics may be used to determine content popularity,
                  identify spammed posts, and other events. While these
                  statistics can be disclosed to third parties and the public,
                  they do not reveal any personally identifiable information.`}
                </p>
              </div>
              <div className=" space-y-3">
                <h2 className=" font-semibold text-gray-700">
                  Disclosure of Certain Personally Identifiable Information
                </h2>
                <p>
                  We only disclose personally identifiable information about
                  users to employees, affiliates, and contractors who require
                  the information to provide relevant services. All individuals
                  with access to this information are bound not to disclose it
                  to others. These personnel may be located in countries other
                  than your own. By providing the information, you consent to
                  their use of your personally identifiable information. We are
                  also obliged to share personally identifiable information in
                  response to government requests, subpoenas, and court orders.
                  Additionally, we may disclose such information in good faith
                  when necessary to prevent rights violations, protect our site,
                  and serve the greater public interest.
                </p>
                <p>
                  Registered users of our site may receive emails about new
                  content and products at a reasonable frequency. Some of these
                  emails may request feedback and inform you about site changes.
                  If you post a question on our platform, we may choose to
                  publish it to help other visitors.
                </p>
              </div>
              <div className=" space-y-3">
                <h2 className=" font-semibold text-gray-700">Cookies</h2>
                <p>
                  We use cookies to track and identify users and their site
                  preferences and usage. You can configure your browser to
                  refuse cookies, but this may result in reduced site
                  functionality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicy;
