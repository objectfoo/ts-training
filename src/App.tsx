import React from 'react';
import FancyComponent from './fancy-component';
import './App.css';

type MyData = {
  id: string;
  name?: string;
};

const data: MyData[] = [
  { id: '0', name: 'Record number zero' },
  { id: '1' },
  { id: '2', name: 'Record number two' },
];

const App = () => {
  return (
    <FancyComponent
      definitions={[
        { name: "0001", getMeta: (a) => a?.id ?? "no id" },
        { name: "0002", getMeta: (a) => a?.name ?? "no name" },
      ]}
      data={data}
      mapper={(a) => {
        return <p key={a.id}>{`${a.id}${a?.name ?? "no name"}`}</p>;
      }}
    />
  );
}

export default App;
