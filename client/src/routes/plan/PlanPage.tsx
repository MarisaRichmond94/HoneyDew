import './PlanPage.scss';

import { Dispatch, FC, SetStateAction, useState } from 'react';
import { BsArrowReturnLeft } from 'react-icons/bs';
import { LuMinus, LuPlus } from 'react-icons/lu';
import { FiEdit } from 'react-icons/fi';

import { ButtonSize, ButtonType, HDButton, Loading, PageHeader, ToggleButton } from 'components';
import { Day } from 'enums';
import { useUser } from 'providers';
import { toDay } from 'routes/utils';
import happyMelon from 'assets/melon/happy_melon.png';
import sadMelon from 'assets/melon/sad_melon.png';
import surprisedMelon from 'assets/melon/surprised_melon.png';

const PlanPage: FC = () => {
  const { isScheduleLoaded } = useUser();

  const [activeDay, setActiveDay] = useState<Day | undefined>();

  if (!isScheduleLoaded) return <Loading message='Loading schedule...' />;

  return (
    <div id='plan-page' className='page'>
      {
        activeDay
          ? <DayView activeDay={activeDay} setActiveDay={setActiveDay} />
          : <ScheduleView setActiveDay={setActiveDay} />
      }
    </div>
  );
};

interface ScheduleViewProps {
  setActiveDay: Dispatch<SetStateAction<Day | undefined>>,
};

const ScheduleView: FC<ScheduleViewProps> = ({ setActiveDay }) => {
  const { schedule } = useUser();

  if (!schedule) return null;

  const total = `${Object.values(schedule)
    .map((daySchedule) => daySchedule.timeInMinutes)
    .reduce((acc, num) => acc + num, 0)} min`;

  return (
    <div id='schedule-view'>
      <PageHeader headerText='Schedule' />
      <div id='day-editor-container'>
        {
          Object.entries(schedule).map(([day, daySchedule]) => (
            <DayEditor
              key={`day-${day}`}
              day={toDay(day)}
              schedule={daySchedule}
              setActiveDay={setActiveDay}
            />
          ))
        }
        <div id='total-time'>
          <div>Total:</div>
          <div id='total-sum-in-minutes'>{total}</div>
        </div>
      </div>
    </div>
  );
};

interface DayEditorProps {
  day: Day,
  schedule: DaySchedule,
  setActiveDay: Dispatch<SetStateAction<Day | undefined>>,
};

const DayEditor: FC<DayEditorProps> = ({ day, schedule, setActiveDay }) => {
  const { updateSchedule } = useUser();

  const time = `${schedule.timeInMinutes} min`;

  const onUpdateSchedule = () => {
    updateSchedule(day, schedule.id,
      {
        isActive: !schedule.isActive,
        timeInMinutes: 0,
      },
    );
  };

  return (
    <div className='day-editor'>
      <ToggleButton
        hideText
        onClick={() => onUpdateSchedule()}
        selected={schedule.isActive}
      />
      <div className='day'>{day}</div>
      <div className={`time-in-minutes ${schedule.isActive ? '' : 'disabled'}`}>{time}</div>
      <HDButton
        classNames={['edit-day-button', schedule.isActive ? 'off-white' : 'disabled-blue']}
        isDisabled={!schedule.isActive}
        onClick={() => setActiveDay(day)}
        type={ButtonType.icon}
      >
        <FiEdit />
      </HDButton>
    </div>
  );
};

interface DayViewProps {
  activeDay: Day,
  setActiveDay: Dispatch<SetStateAction<Day | undefined>>,
};

const DayView: FC<DayViewProps> = ({ activeDay, setActiveDay }) => {
  const { schedule, updateSchedule } = useUser();
  const daySchedule = schedule!![activeDay as Day];

  const updateTimeSchedule = (timeInMinutes: number) => {
    updateSchedule(activeDay, daySchedule.id, {
      isActive: daySchedule.isActive,
      timeInMinutes,
    });
  };

  const getAssets = (timeAmount: number): { melon: string, quality: string } => {
    if (timeAmount < 15) return { melon: sadMelon, quality: 'low-quality' };
    if (timeAmount >= 45) return { melon: happyMelon, quality: 'high-quality' };
    return { melon: surprisedMelon, quality: 'medium-quality' };
  };

  const { melon, quality } = getAssets(daySchedule.timeInMinutes);

  return (
    <div id='day-view'>
      <PageHeader headerText={activeDay.toString()} />
      <div id='time-editor-container'>
        <HDButton
          classNames={['time-button', 'off-white']}
          isDisabled={daySchedule.timeInMinutes === 0}
          onClick={() => updateTimeSchedule(daySchedule.timeInMinutes - 5)}
          size={ButtonSize.xl}
          type={ButtonType.icon}
        >
          <LuMinus />
        </HDButton>
        <div id='time-container'>
          <div id='time-in-minutes' className={quality}>
            {daySchedule.timeInMinutes}
          </div>
          <div>Minutes</div>
        </div>
        <HDButton
          classNames={['time-button', 'off-white']}
          onClick={() => updateTimeSchedule(daySchedule.timeInMinutes + 5)}
          size={ButtonSize.xl}
          type={ButtonType.icon}
        >
          <LuPlus />
        </HDButton>
      </div>
      <div id='happy-melon-container'>
        <img alt='' id='happy-melon' src={melon} />
        <div>How many minutes in the day will you commit to dewing?</div>
      </div>
      <HDButton
        id='back-button'
        classNames={['secondary-blue']}
        onClick={() => setActiveDay(undefined)}
      >
        <div id='back-button-content'>
          <div>Back</div>
          <BsArrowReturnLeft />
        </div>
      </HDButton>
    </div>
  );
};

export default PlanPage;
