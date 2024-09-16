import React from 'react';

// Definir el tipo para los íconos como React.FC<React.SVGProps<SVGSVGElement>>
type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface SvgGeneratorProps {
  data: {
    id: number;
    title: string;
    image: string;
    description: string;
    urlGithub: string;
    urlDemo: string;
    icons?: IconComponent[];
  };
}

const SvgGenerator = ({ data }: SvgGeneratorProps) => {
  const { id, icons = [] } = data; // Asignar valor por defecto a icons

  return (
    <div className='grid grid-cols-5 gap-x-8 gap-y-12 items-end'>
      {icons.length > 0 ? (
        icons.map((IconComponent) => (
          <IconComponent/>
        ))) : (<p>No icons available</p>)}
    </div>
  );
};

export default SvgGenerator;
