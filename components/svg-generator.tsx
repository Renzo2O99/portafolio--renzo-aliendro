import React from 'react';

// Definir el tipo para los íconos como React.FC<React.SVGProps<SVGSVGElement>>
type IconComponent = React.FC<React.SVGProps<SVGSVGElement>>;

interface SvgGeneratorProps {
  data: {
    id: number;
    position: number;
    title: string;
    image: string;
    description: string;
    urlGithub: string;
    urlDemo: string;
    icons?: IconComponent[];
  };
}

const SvgGenerator = ({ data }: SvgGeneratorProps) => {
  const { icons = [] } = data; // Asignar valor por defecto a icons
  if (data.position % 2 === 1) {
    data.position += 1;
  }

  return (
    <div className='grid grid-cols-5 gap-x-8 gap-y-12 items-end xl:grid-cols-6'>
      {icons.length > 0 ? (
        icons.map((IconComponent) => (
          <IconComponent className='cursor-pointer'/>
        ))) : (<p>No icons available</p>)}
    </div>
  );
};

export default SvgGenerator;
