import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown() {
  const { t } = useLanguage();
  const targetDate = new Date("2026-04-07T00:00:00");
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = targetDate.getTime() - new Date().getTime();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-br from-secondary to-accent rounded-lg p-4 min-w-[80px] shadow-lg">
        <span className="text-4xl md:text-5xl font-bold text-primary-foreground">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-sm md:text-base text-muted-foreground mt-2 font-medium">
        {label}
      </span>
    </div>
  );

  return (
    <Card className="bg-background/80 backdrop-blur-sm border-primary/20 shadow-xl">
      <CardContent className="p-6 md:p-8">
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            {t('home.countdown.title')}
          </h3>
          <p className="text-muted-foreground">
            {t('home.countdown.date')}
          </p>
        </div>
        
        <div className="flex justify-center gap-4 md:gap-6">
          <TimeUnit value={timeLeft.days} label={t('home.countdown.days')} />
          <TimeUnit value={timeLeft.hours} label={t('home.countdown.hours')} />
          <TimeUnit value={timeLeft.minutes} label={t('home.countdown.minutes')} />
          <TimeUnit value={timeLeft.seconds} label={t('home.countdown.seconds')} />
        </div>
      </CardContent>
    </Card>
  );
}
