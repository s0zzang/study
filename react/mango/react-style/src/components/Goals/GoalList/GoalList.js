import React from 'react';
import GoalItem from '../GoalItem/GoalItem';
import styles from './GoalList.module.css';

const GoalList = props => {
  return (
    <ul className={styles.goal_list}>
      {props.items.map(goal => (
        <GoalItem key={goal.id} id={goal.id} onDelete={props.onDeleteItem}>
          {goal.text}
        </GoalItem>
      ))}
    </ul>
  );
};

export default GoalList;

/*

* module 호출 방법
- import styles from './GoalList.module.css';
- styles : 내가 원하는 이름으로 불러오되 보통 styles로 불러옴

* style 선언 방법
- 기존 : className="goal_list"
- 변경 : className={styles.goal_list}


*/