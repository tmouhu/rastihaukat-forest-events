
import { useLocalization } from '@/hooks/useLocalization';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { locale, changeLocale, t } = useLocalization();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full" aria-label={t('language')}>
          <Globe className="h-5 w-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem 
          onClick={() => changeLocale('fi')}
          className={locale === 'fi' ? 'bg-muted font-medium' : ''}
        >
          {t('finnish')}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => changeLocale('en')}
          className={locale === 'en' ? 'bg-muted font-medium' : ''}
        >
          {t('english')}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
