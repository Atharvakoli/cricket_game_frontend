"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import {
  usersSample,
  playersSample,
  userSquadsSample,
  auctionsSample,
  transfersSample,
  matchesSample,
  pointsSample,
} from "./sample-data";

type DataContextType = {
  users: typeof usersSample;
  players: typeof playersSample;
  userSquads: typeof userSquadsSample;
  auctions: typeof auctionsSample;
  transfers: typeof transfersSample;
  matches: typeof matchesSample;
  points: typeof pointsSample;
  currentUser: (typeof usersSample)[0] | null;
  loading: boolean;
};

const DataContext = createContext<DataContextType | undefined>(undefined);

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export const DataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataContextType>({
    users: [],
    players: [],
    userSquads: [],
    auctions: [],
    transfers: [],
    matches: [],
    points: [],
    currentUser: null,
    loading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setData({
        users: usersSample,
        players: playersSample,
        userSquads: userSquadsSample,
        auctions: auctionsSample,
        transfers: transfersSample,
        matches: matchesSample,
        points: pointsSample,
        currentUser: usersSample[0], // Set the first user as the current user for demo purposes
        loading: false,
      });
    };

    fetchData();
  }, []);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};
