import React, { createContext, useState, useEffect } from "react";

// import data
import { challengeData } from "../data";

// create context
export const ChallengeContext = createContext();

//provider 

const ChallengeContextProvider = ({ children }) => {
    const [challenges, setChallenges] = useState(challengeData);
    const [status, setStatus] = useState('(any)');
    const [statuses, setStatuses] = useState([]);
    const [level, setLevel] = useState('(any)');
    const [levels, setLevels] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        // return all status
        const allStatuses = challenges.map((challenge)=>{
            return challenge.status;
        });
        // remove duplicate
        const uniqueStatuses = ['(any)', ...new Set(allStatuses)];
        // set stauses state
        setStatuses(uniqueStatuses);
    }, [challenges]);

    useEffect(()=>{
        // return all status
        const allLevels = challenges.map((challenge)=>{
            return challenge.level;
        });
        // remove duplicate
        const uniqueLevels = ['(any)', ...new Set(allLevels)];
        // set stauses state
        setLevels(uniqueLevels);
    },[challenges]);

    const handleClick = () => {
        setLoading(true);
        const isDefault = (str) => {
            return str.split(' ').includes('(any)');
        };

        const newChallenges = challengeData.filter((challenge) => {
            if (
                challenge.status === status &&
                challenge.level === level
            ) {
                return challenge;
            }
    
            // if all values are default
    
            if (isDefault(status) && isDefault(level)) {
                return challenge;
            }

            // status is not default

            if (!isDefault(status) && isDefault(level)) {
                return challenge.status === status;
            }

            // level is not default

            if (isDefault(status) && !isDefault(level)) {
                return challenge.level === level;
            }

            // status and level not default

            if (!isDefault(status) && !isDefault(level)) {
                return challenge.status === status && challenge.level === level;
            } else {
                return false;
            }
        });

        setTimeout(() => {
            return (
                newChallenges.length < 1 ? setChallenges([]) : setChallenges(newChallenges),
                setLoading(false)
            );
        }, 1000);

    }

    return (
        <ChallengeContext.Provider
            value={{
                status,
                setStatus,
                statuses,
                level,
                setLevel,
                levels,
                handleClick,
                challenges,
                loading,
            }}
        >
            {children}
        </ChallengeContext.Provider>
    );
    
};

export default ChallengeContextProvider;