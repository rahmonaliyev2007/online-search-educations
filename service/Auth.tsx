
import { instance } from '@/hooks/instance'
import { useMutation } from '@tanstack/react-query'
import { setCookie } from 'cookies-next';
import toast from 'react-hot-toast';

const authService = (api:string) => {
    return useMutation({
    mutationFn: (data: any) =>
      instance().post(api, data)
        .then((res) => {
          setCookie('NEXT_TOKEN', res?.data?.accessToken);
          setCookie('NEXT_REFRESH_TOKEN', res?.data?.refreshToken);
          toast.success(res?.data?.message || 'Success!');
          return res.data; 
        })
        .catch((error) => {
          toast.error(error?.response?.data?.message || 'Xatolik yuz berdi');
          throw error; 
        })
  });
  
}

export default authService