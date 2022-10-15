import * as React from 'react';
import BaseText from '@components/BaseText';
import Span from '@components/Span';

interface IHeaderProps {
  title: string;
  type: 'string' | 'string[]' | 'enum';
}

interface IMaybeArray extends Pick<IHeaderProps, 'title'> {
  isArray?: boolean;
}

const EnumRenderer: React.FC<Pick<IHeaderProps, 'title'>> = ({ title }) => (
  <>
    <Span color="accentColor2">enum </Span>
    <Span color="accentColor4">{title}</Span>:<Span color="accentColor5"> String</Span>
  </>
);

const ArrayRenderer: React.FC<React.PropsWithChildren> = ({ children }) => (
  <Span color="accentColor5">[{children}]</Span>
);

const StringRenderer: React.FC<IMaybeArray> = ({ title, isArray }) => {
  // Renderers
  const returnType = React.useMemo(() => {
    if (!isArray) return 'String';
    return (
      <ArrayRenderer>
        <Span color="accentColor6">String</Span>
      </ArrayRenderer>
    );
  }, [isArray]);

  return (
    <>
      <Span color="accentColor2">let </Span>
      <Span color="accentColor4">{title}</Span>: {returnType}
    </>
  );
};

const renderType = (title: string, value: IHeaderProps['type']): ReturnType<React.FC> => {
  switch (value) {
    case 'enum':
      return <EnumRenderer title={title} />;
    case 'string':
      return <StringRenderer title={title} />;
    case 'string[]':
      return <StringRenderer title={title} isArray />;
  }
};

const Header: React.FC<IHeaderProps> = ({ title, type }) => (
  <BaseText color="alphaHighMed">{renderType(title, type)}</BaseText>
);

export default Header;
