// components/DealsSection.tsx
import React from 'react';
import { Deal } from '../types/deals';
import { DealCard } from '@/app/Components/DealsCard';

interface DealsSectionProps {
  title: string;
  subtitle?: string;
  deals: Deal[];
  variant?: 'default' | 'large';
  columns?: number;
}

export const DealsSection: React.FC<DealsSectionProps> = ({
  title,
  subtitle,
  deals,
  variant = 'default',
  columns = 4
}) => {
  const gridCols = {
    2: 'lg:grid-cols-2',
    3: 'lg:grid-cols-3',
    4: 'lg:grid-cols-4',
    5: 'lg:grid-cols-5'
  };

  return (
    <section className="mb-12">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        {subtitle && (
          <p className="text-gray-600 mt-1">{subtitle}</p>
        )}
      </div>
      
      <div className={`grid grid-cols-1 md:grid-cols-2 ${gridCols[columns as keyof typeof gridCols]} gap-6`}>
        {deals.map((deal) => (
          <DealCard
            key={deal.id}
            deal={deal}
            variant={variant}
          />
        ))}
      </div>
    </section>
  );
};