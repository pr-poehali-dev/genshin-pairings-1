import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Pairing } from '@/data/pairings';

interface PairingModalProps {
  pairing: Pairing | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const PairingModal = ({ pairing, open, onOpenChange }: PairingModalProps) => {
  if (!pairing) return null;

  const getPopularityColor = (popularity: number) => {
    if (popularity >= 80) return 'text-primary';
    if (popularity >= 60) return 'text-purple-500';
    if (popularity >= 40) return 'text-purple-400';
    return 'text-muted-foreground';
  };

  const getCategoryBadge = (category: string) => {
    const variants = {
      popular: 'bg-primary/10 text-primary border-primary/20',
      medium: 'bg-purple-100 text-purple-700 border-purple-200',
      forgotten: 'bg-muted text-muted-foreground border-border'
    };
    
    const labels = {
      popular: 'Популярный',
      medium: 'Средний',
      forgotten: 'Забытый'
    };

    return { variant: variants[category as keyof typeof variants], label: labels[category as keyof typeof labels] };
  };

  const badge = getCategoryBadge(pairing.category);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between mb-2">
            <DialogTitle className="text-2xl font-bold">{pairing.name}</DialogTitle>
            <Badge className={`${badge.variant} border`} variant="outline">
              {badge.label}
            </Badge>
          </div>
          <p className="text-lg text-muted-foreground">
            {pairing.characters.join(' × ')}
          </p>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
            <Icon name="TrendingUp" size={24} className={getPopularityColor(pairing.popularity)} />
            <div>
              <p className="text-sm text-muted-foreground">Популярность</p>
              <p className={`text-2xl font-bold ${getPopularityColor(pairing.popularity)}`}>
                {pairing.popularity}%
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <Icon name="Info" size={20} className="text-primary" />
              Описание
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              {pairing.description}
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Icon name="Heart" size={20} className="text-primary" />
              Почему фанаты их шипперят
            </h4>
            <ul className="space-y-3">
              {pairing.reasons.map((reason, index) => (
                <li 
                  key={index}
                  className="flex gap-3 items-start p-3 bg-muted/50 rounded-lg transition-colors hover:bg-muted"
                >
                  <div className="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-xs font-semibold text-primary">{index + 1}</span>
                  </div>
                  <p className="text-sm text-foreground flex-1 leading-relaxed">
                    {reason}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
