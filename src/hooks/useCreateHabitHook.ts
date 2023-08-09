import {useState} from 'react';
import {ItemType} from 'react-native-dropdown-picker';

import {
  addElementInArray,
  removeElementFromArray,
  toggleElemenntInArray,
} from 'src/utils';

export const useCreateHabit = () => {
  const [habit, setHabit] = useState<any>({
    name: '',
    type: '',
    repeat: 0,
    label: '',
    frequency: '',
    priority: '',
    percentage: 0,
    goals: [],
    days: [],
    specificDays: false,
    target: 0,
  });

  const handleOnChange = (val: string | string[], key: string) => {
    setHabit({...habit, [key]: val});
  };

  const handleOnToggleDay = (val: never) => {
    setHabit({...habit, days: toggleElemenntInArray(val, habit.days)});
  };

  const handleAddGoal = (value: string) => {
    const updatedGoals = addElementInArray(value, habit.goals);
    setHabit({...habit, goals: updatedGoals});
  };

  const handleRemoveGoal = (value: string) => {
    const updatedGoals = removeElementFromArray(value, habit.goals);
    setHabit({...habit, goals: updatedGoals});
  };

  const handleSelectDropdownItem = (
    {value}: ItemType<string | null>,
    type: string,
  ) => {
    setHabit({...habit, [type]: value});
  };

  const handlePercentageChange = (val: number) => {
    // eslint-disable-next-line no-bitwise
    const value = val | 0; // conversion from float to integer
    setHabit({...habit, target: value});
  };

  return {
    habit,
    setHabit,
    handlePercentageChange,
    handleSelectDropdownItem,
    handleOnChange,
    handleAddGoal,
    handleRemoveGoal,
    handleOnToggleDay,
  };
};
