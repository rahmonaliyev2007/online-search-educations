import React, { useContext, useState } from 'react'
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select"
import { getCookie } from 'cookies-next';
import { usePathname, useRouter } from '@/i18n/navigation'
import { ThemeContext } from '@/context/ThemeProvider';
import { RussiaFlagIcon, USAFlagIcon, UzbekistanFlagIcon } from '@/assets/icons';

function ChangeLang() {
    const router = useRouter();
    const pathname = usePathname();
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [lang, setLang] = useState<'uz' | 'ru' | 'en' | any>(() => {
        const cookieLang = getCookie('NEXT_LOCALE');
        return (cookieLang === 'ru' || cookieLang === 'en' || cookieLang === 'uz') ? cookieLang : 'uz';
    });
    
    return (
        <div className='flex items-center'>
            {lang === 'uz' ? UzbekistanFlagIcon() : lang === 'ru' ? RussiaFlagIcon () : USAFlagIcon()}
            <Select value={lang} onValueChange={(e) => { setLang(e); router.push(pathname, { locale: e }); }}>
            <SelectTrigger className={`${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B]' : 'text-[#929599] hover:text-[#F8FAFC]'} duration-300 border-none shadow-none`}>
                <SelectValue defaultValue={lang} placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent className={`relative z-[101] border-none shadow-2xl ${theme === "light" ? 'text-[#545D6A] hover:text-[#134E9B] shadow-black bg-white' : 'text-[#929599] hover:text-[#F8FAFC] shadow-white bg-[#0F172A]'} duration-300`}>
                <SelectGroup>
                    <SelectItem value="uz">O'zbekcha</SelectItem>
                    <SelectItem value="ru">Russkiy</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
        </div>
    )
}

export default ChangeLang