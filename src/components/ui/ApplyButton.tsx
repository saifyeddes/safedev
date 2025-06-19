import { Button, ButtonProps } from './button';
import { useTranslation } from 'react-i18next';

interface ApplyButtonProps extends ButtonProps {
  positionTitle?: string;
  onClick?: () => void;
}

export function ApplyButton({ positionTitle, onClick, ...props }: ApplyButtonProps) {
  const { t } = useTranslation();
  
  return (
    <Button {...props} onClick={onClick}>
      {t('common.applyNow')}
    </Button>
  );
}
