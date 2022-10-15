import * as React from 'react';
import BaseText from '@components/BaseText';
import Span from '@components/Span';
import { COLORS } from '@utilities/theme';

type SupportedTypes = 'String' | 'Int' | 'IExperience';

interface IHeaderProps {
  title: string;
  type: SupportedTypes | 'enum' | SupportedTypes[];
  isArray?: boolean;
}

interface ITupleProps {
  types: SupportedTypes[];
}

interface IMaybeArray extends Pick<IHeaderProps, 'title'> {
  isArray?: boolean;
  type: SupportedTypes | SupportedTypes[];
}

const typeColor = (type: IHeaderProps['type']): keyof typeof COLORS => {
  switch (type) {
    case 'IExperience':
      return 'accentColor4';
    default:
      return 'accentColor3';
  }
};

const TypeRenderer: React.FC<Pick<IHeaderProps, 'type'>> = ({ type }) => (
  <Span color={typeColor(type)}>{type}</Span>
);

const EnumRenderer: React.FC<Pick<IHeaderProps, 'title'>> = ({ title }) => (
  <>
    <Span color="accentColor2">enum </Span>
    <Span color="accentColor4">{title}</Span>: <TypeRenderer type="String" />
  </>
);

const ArrayRenderer: React.FC<Pick<IHeaderProps, 'type'>> = ({ type }) => (
  <Span color="accentColor5">
    [<TypeRenderer type={type} />]
  </Span>
);

const TupleRenderer: React.FC<ITupleProps> = ({ types }) => {
  const typesRendered = React.useMemo(
    () =>
      types.flatMap((type, index) => {
        if (index === types.length - 1) return [<TypeRenderer type={type} key={type} />];
        return [<TypeRenderer type={type} key={type} />, ', '];
      }),
    [types]
  );
  return <Span color="accentColor5">({typesRendered})</Span>;
};

const NonEnumRenderer: React.FC<IMaybeArray> = ({ title, type, isArray }) => {
  // Renderers
  const returnType = React.useMemo(() => {
    if (Array.isArray(type)) return <TupleRenderer types={type} />;
    if (!isArray) return <Span color={typeColor(type)}>{type}</Span>;
    return <ArrayRenderer type={type} />;
  }, [isArray, type]);

  return (
    <>
      <Span color="accentColor2">let </Span>
      <Span color="accentColor4">{title}</Span>: {returnType}
    </>
  );
};

const renderType = (
  title: string,
  type: IHeaderProps['type'],
  isArray?: boolean
): ReturnType<React.FC> => {
  switch (type) {
    case 'enum':
      return <EnumRenderer title={title} />;
    default:
      return <NonEnumRenderer title={title} type={type} isArray={isArray} />;
  }
};

const Header: React.FC<IHeaderProps> = ({ title, type, isArray }) => (
  <BaseText color="alphaHighMed" style={{ lineHeight: 1.125 }}>
    {renderType(title, type, isArray)}
  </BaseText>
);

export default Header;
