export default function Footer () {
  return(
    <>
      <div className="flex flex-col bg-[#161616] pt-10">
        <div className="flex justify-between px-[50px]">
          <div className="flex gap-6">
            <svg className="cursor-pointer" width="32px" height="32px" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M35.7188 20.9043C35.7188 27.5543 31.3854 33.1709 25.4021 35.1543C24.6854 35.2709 24.4354 34.821 24.4354 34.4376C24.4354 33.9376 24.4521 32.321 24.4521 30.321C24.4521 28.921 23.9688 28.0043 23.4354 27.5376C26.7688 27.171 30.2854 25.9043 30.2854 20.1376C30.2854 18.5043 29.7021 17.171 28.7354 16.121C28.9021 15.7376 29.4187 14.2043 28.6021 12.1376C28.6021 12.1376 27.3354 11.7377 24.4688 13.6877C23.2687 13.3543 21.9854 13.1876 20.7188 13.1709C19.4354 13.1876 18.1521 13.3543 16.9688 13.6877C14.1021 11.7377 12.8354 12.1376 12.8354 12.1376C12.0188 14.2043 12.5354 15.7376 12.6854 16.121C11.7354 17.171 11.1521 18.5043 11.1521 20.1376C11.1521 25.8876 14.6521 27.1709 17.9854 27.5543C17.5521 27.9209 17.1687 28.5876 17.0354 29.5543C16.1687 29.9376 14.0021 30.6043 12.6687 28.3043C12.6687 28.3043 11.8687 26.8709 10.3687 26.7709C10.3687 26.7709 8.90205 26.7543 10.2687 27.671C10.2687 27.671 11.2521 28.1376 11.9354 29.871C11.9354 29.871 12.8021 32.5543 16.9854 31.6376C16.9854 32.8876 17.0021 34.071 17.0021 34.4376C17.0021 34.8043 16.7354 35.2709 16.0354 35.1543C10.0521 33.1876 5.71875 27.5543 5.71875 20.9043C5.71875 12.621 12.4354 5.9043 20.7188 5.9043C29.0021 5.9043 35.7188 12.621 35.7188 20.9043Z" fill="#FFFFFF"></path></svg>
            <svg className="cursor-pointer" width="32px" height="32px" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg"><path d="M33.9523 14.2212C33.9689 14.5045 33.9689 14.8045 33.9689 15.1045C33.9689 24.0045 27.1022 34.2545 14.5356 34.2545C10.6689 34.2545 7.06891 33.1545 4.05225 31.2378C4.60225 31.3045 5.13559 31.3212 5.70226 31.3212C8.90226 31.3212 11.8356 30.2545 14.1856 28.4545C11.1856 28.3878 8.66891 26.4545 7.80225 23.7878C8.21891 23.8545 8.65225 23.8878 9.08559 23.8878C9.70225 23.8878 10.3189 23.8045 10.8856 23.6545C7.75226 23.0211 5.40224 20.3212 5.40224 17.0545V16.9712C6.31891 17.4712 7.36892 17.7878 8.48559 17.8211C6.65225 16.6045 5.43558 14.5545 5.43558 12.2211C5.43558 10.9711 5.76891 9.82115 6.36891 8.82115C9.73558 12.9045 14.7856 15.5711 20.4522 15.8711C20.3522 15.3711 20.2856 14.8545 20.2856 14.3378C20.2856 10.6211 23.3356 7.60449 27.1189 7.60449C29.0856 7.60449 30.8689 8.42114 32.1023 9.72114C33.6523 9.43781 35.1189 8.87116 36.4356 8.1045C35.9356 9.67116 34.8523 10.9878 33.4356 11.8045C34.8023 11.6545 36.1356 11.2878 37.3689 10.7711C36.4356 12.1045 35.2689 13.2878 33.9356 14.2545L33.9523 14.2212Z" fill="#FFFFFF"></path></svg>
            <svg className="cursor-pointer" width="32px" height="32px" viewBox="0 0 41 41" xmlns="http://www.w3.org/2000/svg"><path d="M32.3019 11.3373C30.1352 10.354 27.8186 9.6373 25.4186 9.2373C25.1186 9.75397 24.7852 10.454 24.5519 11.004C21.9852 10.6373 19.4519 10.6373 16.9186 11.004C16.6852 10.454 16.3352 9.75397 16.0519 9.2373C13.6352 9.6373 11.3186 10.354 9.16857 11.3373C4.8019 17.704 3.61856 23.9206 4.21856 30.054C7.11856 32.1373 9.91858 33.404 12.6686 34.2373C13.3352 33.3373 13.9519 32.3706 14.4686 31.354C13.4686 30.9873 12.5186 30.5373 11.6186 30.004C11.8519 29.8373 12.0852 29.654 12.3019 29.4707C17.7852 31.954 23.7519 31.954 29.1686 29.4707C29.4019 29.654 29.6186 29.8373 29.8519 30.004C28.9519 30.5373 28.0019 30.9873 27.0019 31.354C27.5185 32.3706 28.1352 33.3373 28.8019 34.2373C31.5519 33.404 34.3686 32.1373 37.2519 30.054C37.9852 22.954 36.1019 16.7873 32.3352 11.3373H32.3019ZM15.1852 26.1873C13.5352 26.1873 12.1852 24.6873 12.1852 22.854C12.1852 21.0207 13.5019 19.5207 15.1852 19.5207C16.8685 19.5207 18.2186 21.0207 18.1852 22.854C18.1852 24.6873 16.8519 26.1873 15.1852 26.1873ZM26.2519 26.1873C24.6019 26.1873 23.2519 24.6873 23.2519 22.854C23.2519 21.0207 24.5686 19.5207 26.2519 19.5207C27.9352 19.5207 29.2852 21.0207 29.2519 22.854C29.2519 24.6873 27.9352 26.1873 26.2519 26.1873Z" fill="#FFFFFF"></path></svg>
          </div>

          <div className="flex gap-14 p-8">
            <div className="flex flex-col gap-2">
              <p className="text-white text-[18px] font-semibold">App</p>
              <FooterElement title="Trade" />
              <FooterElement title="Explore" />
              <FooterElement title="Pool" />
              <FooterElement title="NFTs" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-white text-[18px] font-semibold">Company</p>
              <FooterElement title="Careers" />
              <FooterElement title="Blog" />
              <FooterElement title="Brand assets" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-white text-[18px] font-semibold">Protocol</p>
              <FooterElement title="Vote" />
              <FooterElement title="Governance" />
              <FooterElement title="Developers" />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-white text-[18px] font-semibold">Need help?</p>
              <FooterElement title="Help center" />
              <FooterElement title="Contact us" />
            </div>
          </div>
        </div>

        <div id='divider' className="border-[1px] border-[#5E5E5E] w-full "></div>

        <div className="flex justify-between p-[20px_40px_40px_50px]">
          <div className="text-white font-semibold">© 2024 - Uniswap Labs</div>

          <div className="flex gap-5">
            <FooterElement title="Trademark Policy" />
            <FooterElement title="Privacy Policy" />
            
          </div>
        </div>
      </div>
    </>
  )
}

interface FooterElementProps {
  title: string;
}

// Define the FooterElement component
const FooterElement: React.FC<FooterElementProps> = ({ title }) => {
  return (
    <p className="text-[#9B9B9B] hover:text-white duration-300 cursor-pointer font-semibold">{title}</p>
  );
};

