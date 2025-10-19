import { useState } from 'react';
import { pairings, Pairing } from '@/data/pairings';
import { PairingCard } from '@/components/PairingCard';
import { PairingModal } from '@/components/PairingModal';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedPairing, setSelectedPairing] = useState<Pairing | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handlePairingClick = (pairing: Pairing) => {
    setSelectedPairing(pairing);
    setModalOpen(true);
  };

  const popularPairings = pairings
    .filter(p => p.category === 'popular')
    .sort((a, b) => b.popularity - a.popularity);

  const forgottenPairings = pairings
    .filter(p => p.category === 'forgotten')
    .sort((a, b) => a.popularity - b.popularity);

  const allPairings = [...pairings].sort((a, b) => b.popularity - a.popularity);

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3 mb-2">
            <Icon name="Heart" size={32} className="text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Genshin Pairings</h1>
          </div>
          <p className="text-muted-foreground">
            Каталог пейрингов от самых популярных до самых забытых
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
            <TabsTrigger value="all" className="flex items-center gap-2">
              <Icon name="LayoutGrid" size={16} />
              <span className="hidden sm:inline">Все</span>
            </TabsTrigger>
            <TabsTrigger value="popular" className="flex items-center gap-2">
              <Icon name="TrendingUp" size={16} />
              <span className="hidden sm:inline">Популярные</span>
            </TabsTrigger>
            <TabsTrigger value="forgotten" className="flex items-center gap-2">
              <Icon name="Archive" size={16} />
              <span className="hidden sm:inline">Забытые</span>
            </TabsTrigger>
            <TabsTrigger value="rating" className="flex items-center gap-2">
              <Icon name="BarChart" size={16} />
              <span className="hidden sm:inline">Рейтинг</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="animate-fade-in">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">Все пейринги</h2>
              <p className="text-muted-foreground">Полный каталог всех пейрингов</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {allPairings.map((pairing) => (
                <PairingCard
                  key={pairing.id}
                  pairing={pairing}
                  onClick={() => handlePairingClick(pairing)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular" className="animate-fade-in">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <Icon name="Flame" size={28} className="text-primary" />
                Популярные пейринги
              </h2>
              <p className="text-muted-foreground">
                Самые любимые пейринги фандома с популярностью 70%+
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularPairings.map((pairing) => (
                <PairingCard
                  key={pairing.id}
                  pairing={pairing}
                  onClick={() => handlePairingClick(pairing)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="forgotten" className="animate-fade-in">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <Icon name="Ghost" size={28} className="text-muted-foreground" />
                Забытые пейринги
              </h2>
              <p className="text-muted-foreground">
                Редкие пейринги, которые заслуживают больше внимания
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {forgottenPairings.map((pairing) => (
                <PairingCard
                  key={pairing.id}
                  pairing={pairing}
                  onClick={() => handlePairingClick(pairing)}
                />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="rating" className="animate-fade-in">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 flex items-center gap-2">
                <Icon name="Trophy" size={28} className="text-primary" />
                Рейтинг популярности
              </h2>
              <p className="text-muted-foreground">
                Все пейринги отсортированы по убыванию популярности
              </p>
            </div>
            <div className="space-y-3">
              {allPairings.map((pairing, index) => (
                <div
                  key={pairing.id}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-lg cursor-pointer transition-all hover:shadow-md hover:border-primary/50"
                  onClick={() => handlePairingClick(pairing)}
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 flex-shrink-0">
                    <span className="text-lg font-bold text-primary">#{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{pairing.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {pairing.characters.join(' × ')}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Heart" size={20} className="text-primary" />
                    <span className="text-lg font-bold text-primary">{pairing.popularity}%</span>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <PairingModal
        pairing={selectedPairing}
        open={modalOpen}
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default Index;
