import React from "react";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle }) => (
  <div className="mb-12">
    <div className="flex items-center gap-4">
      <span className="h-8 w-1 rounded bg-gradient-to-b from-primary to-secondary" />
      <h2 className="text-3xl font-bold text-left text-gray-900 dark:text-white tracking-tight">
        {title}
      </h2>
    </div>
    {subtitle && (
      <p className="mt-4 ml-5 text-left text-lg text-gray-500 dark:text-gray-400 font-light">
        {subtitle}
      </p>
    )}
  </div>
);
