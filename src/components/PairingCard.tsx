import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Pairing } from '@/data/pairings';

interface PairingCardProps {
  pairing: Pairing;
  onClick: () => void;
}

export const PairingCard = ({ pairing, onClick }: PairingCardProps) => {
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
    <Card 
      className="p-5 cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in border-border"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-foreground mb-1">{pairing.name}</h3>
          <p className="text-sm text-muted-foreground">
            {pairing.characters.join(' × ')}
          </p>
        </div>
        <Badge className={`${badge.variant} border`} variant="outline">
          {badge.label}
        </Badge>
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
        {pairing.description}
      </p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Icon name="Heart" size={18} className={getPopularityColor(pairing.popularity)} />
          <span className={`text-sm font-medium ${getPopularityColor(pairing.popularity)}`}>
            {pairing.popularity}%
          </span>
        </div>
        <div className="flex items-center gap-1 text-primary text-sm font-medium">
          Подробнее
          <Icon name="ChevronRight" size={16} />
        </div>
      </div>
    </Card>
  );
};
