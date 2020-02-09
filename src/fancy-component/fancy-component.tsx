import * as React from 'react';

interface Props<T> {
  data: T[];
  mapper: (d: T, idx: number) => JSX.Element;
  definitions: Definition<T>[]
};

interface Definition<T> {
  name: string;
  getMeta: (d: T) => any;
}

// this works too
// function FancyComponent<T>(props: React.PropsWithChildren<Props<T>>) {
//   return <div>{props.data?.map(props.mapper) ?? "no data"}</div>;
// };

const FancyComponent = <T extends unknown>(props: React.PropsWithChildren<Props<T>>) => {
  return(
    <div>{props.data?.map(props.mapper) ?? "no data"}</div>
  );
};

export default FancyComponent;
