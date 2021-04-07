/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import {
  Legend,
  Line, LineChart, Tooltip, XAxis, YAxis,
} from 'recharts';
import io from 'socket.io-client';
import instance from '../../axios/axios';

let socket;

function Graph() {
  const [GBPvalue, setGBPValue] = useState([]);
  const [USDvalue, setUSDValue] = useState([]);

  const [date, setDate] = useState([]);

  useEffect(() => {
    async function getData() {
      const request = await instance.get('graph');
      setDate(request.data.map((item) => item.graphDate));
      setUSDValue(request.data.map((item) => item.USD));
      setGBPValue(request.data.map((item) => item.GBP));
    }

    getData();
  }, []);

  const ENDPOINT = 'http://localhost:3001/';

  useEffect(() => {
    socket = io(ENDPOINT);
    socket.once('connect', () => {
      console.log('connected');
    });
    socket.on('graph', (arg) => {
      setDate(Object.keys(arg.EUR_GBP));
      setUSDValue(Object.values(arg.EUR_USD));
      setGBPValue(Object.values(arg.EUR_GBP));
    });
  }, [ENDPOINT]);

  // when either USDvalue, GBPvalue or date change, update the database.
  useEffect(() => {
    instance.put('graph/1', {
      graphDate: date[0],
      USD: USDvalue[0],
      GBP: GBPvalue[0],
    });
    instance.put('graph/2', {
      graphDate: date[1],
      USD: USDvalue[1],
      GBP: GBPvalue[1],
    });
    instance.put('graph/3', {
      graphDate: date[2],
      USD: USDvalue[2],
      GBP: GBPvalue[2],
    });
    instance.put('graph/4', {
      graphDate: date[3],
      USD: USDvalue[3],
      GBP: GBPvalue[3],
    });
  }, [USDvalue, date, GBPvalue]);

  // using the right format for recharts library.
  const data = [
    {
      date: date[0],
      USD: USDvalue[0],
      GBP: GBPvalue[0],
    },
    {
      date: date[1],
      USD: USDvalue[1],
      GBP: GBPvalue[1],
    },
    {
      date: date[2],
      USD: USDvalue[2],
      GBP: GBPvalue[2],
    },
    {
      date: date[3],
      USD: USDvalue[3],
      GBP: GBPvalue[3],
    },
  ];

  return (
    <LineChart width={500} height={230} data={data}>
      <XAxis dataKey="date" />
      <YAxis type="number" domain={[0.7, 1.3]} />
      <Legend />
      <Tooltip />
      <Line isAnimationActive={false} dataKey="USD" />
      <Line isAnimationActive={false} dataKey="GBP" stroke="#f70000" />
    </LineChart>
  );
}

export default Graph;
