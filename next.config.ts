import {NextConfig} from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
 
const nextConfig: NextConfig = {
    images:{
        domains:['findcourse.net.uz' , 'learnsafe.com', 'findedu-client.netlify.app', 'www.opac.nsw.edu.au']
    }
};
 
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);