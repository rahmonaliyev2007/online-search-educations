import { getCookie } from "cookies-next"

export const API = process.env.NEXT_PUBLIC_API
export const token = getCookie('NEXT_TOKEN');
export const refreshToken = getCookie('NEXT_REFRESH_TOKEN');