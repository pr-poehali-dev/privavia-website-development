import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const destinations = [
  {
    id: 1,
    city: 'Дубай',
    country: 'ОАЭ',
    price: 'от 450 000 ₽',
    image: 'https://cdn.poehali.dev/projects/03da66f2-b578-4adb-9868-afbff728e5cf/files/e5582bc3-2120-495c-837b-e08be269f350.jpg',
    time: '4ч 30м'
  },
  {
    id: 2,
    city: 'Мальдивы',
    country: 'Мале',
    price: 'от 580 000 ₽',
    image: 'https://cdn.poehali.dev/projects/03da66f2-b578-4adb-9868-afbff728e5cf/files/279fe345-5815-49de-a5d4-068886d046ca.jpg',
    time: '6ч 15м'
  },
  {
    id: 3,
    city: 'Ницца',
    country: 'Франция',
    price: 'от 380 000 ₽',
    image: 'https://cdn.poehali.dev/projects/03da66f2-b578-4adb-9868-afbff728e5cf/files/52a383b6-379e-4927-9f12-2432d1f56935.jpg',
    time: '4ч 00м'
  }
];

const services = [
  {
    icon: 'Crown',
    title: 'VIP-обслуживание',
    description: 'Персональный консьерж, приоритетная посадка и премиум-залы ожидания'
  },
  {
    icon: 'Plane',
    title: 'Частные рейсы',
    description: 'Индивидуальные маршруты по вашему расписанию на современных бизнес-джетах'
  },
  {
    icon: 'Shield',
    title: 'Безопасность',
    description: 'Максимальный уровень безопасности и конфиденциальности для каждого полёта'
  },
  {
    icon: 'Clock',
    title: 'Экономия времени',
    description: 'Быстрая регистрация и вылет без очередей и длительных ожиданий'
  }
];

const advantages = [
  { number: '50+', label: 'Направлений' },
  { number: '15', label: 'Лет на рынке' },
  { number: '10K+', label: 'Довольных клиентов' },
  { number: '99.8%', label: 'Рейсов вовремя' }
];

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Plane" className="text-primary" size={32} />
              <span className="text-2xl font-bold">PrivAvia</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#destinations" className="hover:text-primary transition-colors">Направления</a>
              <a href="#services" className="hover:text-primary transition-colors">Услуги</a>
              <a href="#about" className="hover:text-primary transition-colors">О компании</a>
              <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Забронировать
            </Button>
          </div>
        </div>
      </nav>

      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAgNGgtMnYyaDJ2LTJ6bS0yIDBoLTJ2Mmgydi0yem0wLTRoLTJ2Mmgydi0yem00LTRoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yem0yLThoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yem0wIDRoLTJ2Mmgydi0yem0yLTEyaC0ydjJoMnYtMnptMCA0aC0ydjJoMnYtMnptMCA0aC0ydjJoMnYtMnptMCA0aC0ydjJoMnYtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-foreground to-secondary bg-clip-text text-transparent">
              Бизнес-авиация нового поколения
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12">
              Летайте с комфортом премиум-класса в любую точку мира
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <Input 
                placeholder="Откуда" 
                className="bg-card border-border h-14 text-lg"
              />
              <Input 
                placeholder="Куда" 
                className="bg-card border-border h-14 text-lg"
              />
              <Button className="bg-primary hover:bg-primary/90 h-14 px-8 text-lg">
                <Icon name="Search" className="mr-2" size={20} />
                Найти
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Популярные направления</h2>
            <p className="text-xl text-muted-foreground">Откройте для себя лучшие маршруты</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {destinations.map((dest, index) => (
              <Card 
                key={dest.id} 
                className="overflow-hidden hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 bg-card border-border group cursor-pointer"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.city}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold mb-1">{dest.city}</h3>
                    <p className="text-muted-foreground">{dest.country}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Clock" size={16} />
                      <span>{dest.time}</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">{dest.price}</span>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Забронировать рейс
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground">Всё для вашего комфорта</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="bg-card border-border hover:border-primary transition-all duration-300 hover:-translate-y-2 p-6"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                  <Icon name={service.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">О компании PrivAvia</h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Мы — ведущая российская авиакомпания, специализирующаяся на бизнес-авиации премиум-класса. 
              С 2009 года мы предоставляем нашим клиентам безупречный сервис и комфорт на высочайшем уровне.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Наш флот состоит из современных бизнес-джетов последнего поколения, 
              а команда профессионалов обеспечивает безопасность и комфорт каждого полёта.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {advantages.map((adv, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{adv.number}</div>
                <div className="text-muted-foreground">{adv.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h2>
              <p className="text-xl text-muted-foreground">Мы ответим в течение 15 минут</p>
            </div>
            <Card className="bg-card border-border p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Ваше имя</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Иван Иванов"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ivan@example.com"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Телефон</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+7 (999) 123-45-67"
                    className="bg-background border-border"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Сообщение</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем маршруте..."
                    rows={4}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 h-12 text-lg">
                  Отправить заявку
                </Button>
              </form>
            </Card>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="bg-card border-border p-6 text-center">
                <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-medium">+7 (495) 123-45-67</div>
              </Card>
              <Card className="bg-card border-border p-6 text-center">
                <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-medium">info@privania.ru</div>
              </Card>
              <Card className="bg-card border-border p-6 text-center">
                <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-medium">Москва, Шереметьево</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-card/50 border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Plane" className="text-primary" size={28} />
              <span className="text-xl font-bold">PrivAvia</span>
            </div>
            <div className="text-muted-foreground text-center md:text-left">
              © 2024 PrivAvia. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Twitter" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
