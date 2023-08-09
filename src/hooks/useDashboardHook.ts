import {useState} from 'react';
import {HABIT_STATES} from 'src/assets/data';
import {useGetHabitsQuery, useUpdateHabitMutation} from 'src/redux/apis';
import {formatDateYYYYMMDD, getDate} from 'src/utils';

export const useDashboardHook = () => {
  const {data: habitData, isLoading: habitsLoading} = useGetHabitsQuery(
    formatDateYYYYMMDD(new Date()),
  );
  const [updateHabitAction, {isLoading: isUpdating}] = useUpdateHabitMutation();

  const [selectedState, setSelectedState] = useState(HABIT_STATES[0].value);
  const [selectedDate, setSelectedDate] = useState(getDate());
  const [selectedHabit, setSelectedHabit] = useState<any>(null);

  return {
    habitData,
    habitsLoading,
    isUpdating,
    selectedState,
    selectedDate,
    selectedHabit,
    updateHabitAction,
    setSelectedDate,
    setSelectedHabit,
    setSelectedState,
  };
};
