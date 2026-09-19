const paths = {
  'bar-chart': ['M4 19V5', 'M10 19V9', 'M16 19v-6', 'M22 19H2'],
  check: ['m5 12 4 4L19 6'],
  'check-circle': ['M9 12l2 2 4-4', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z'],
  list: ['M8 6h13', 'M8 12h13', 'M8 18h13', 'M3 6h.01', 'M3 12h.01', 'M3 18h.01'],
  moon: ['M21 12.8A8.5 8.5 0 1 1 11.2 3 6.6 6.6 0 0 0 21 12.8Z'],
  pencil: ['M12 20h9', 'M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z'],
  plus: ['M12 5v14', 'M5 12h14'],
  refresh: ['M20 11a8 8 0 0 0-14.8-3L3 11', 'M3 5v6h6', 'M4 13a8 8 0 0 0 14.8 3L21 13', 'M21 19v-6h-6'],
  save: ['M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z', 'M17 21v-8H7v8', 'M7 3v5h8'],
  sun: ['M12 3v2', 'M12 19v2', 'm4.2 4.2 1.4 1.4', 'm18.4 18.4 1.4 1.4', 'M3 12h2', 'M19 12h2', 'm4.2 19.8 1.4-1.4', 'm18.4 5.6 1.4-1.4', 'M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z'],
  trash: ['M3 6h18', 'M8 6V4h8v2', 'M19 6l-1 15H6L5 6', 'M10 11v6', 'M14 11v6'],
  x: ['M6 6l12 12', 'M18 6 6 18'],
};

function Icon({ name, size = 18, strokeWidth = 2, ...props }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false" {...props}>
      {paths[name].map((path) => <path key={path} d={path} />)}
    </svg>
  );
}

export const BarChart3 = (props) => <Icon name="bar-chart" {...props} />;
export const Check = (props) => <Icon name="check" {...props} />;
export const CheckCircle2 = (props) => <Icon name="check-circle" {...props} />;
export const ListFilter = (props) => <Icon name="list" {...props} />;
export const Moon = (props) => <Icon name="moon" {...props} />;
export const Pencil = (props) => <Icon name="pencil" {...props} />;
export const Plus = (props) => <Icon name="plus" {...props} />;
export const RotateCcw = (props) => <Icon name="refresh" {...props} />;
export const Save = (props) => <Icon name="save" {...props} />;
export const Sun = (props) => <Icon name="sun" {...props} />;
export const Trash2 = (props) => <Icon name="trash" {...props} />;
export const X = (props) => <Icon name="x" {...props} />;

export default Icon;
