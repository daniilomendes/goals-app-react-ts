import { type ReactNode } from "react";
// import { type PropsWithChildren } from "react";

interface CourseGoalProps {
  id: number;
  title: string;
  children: ReactNode;
  onDelete: (id: number) => void;
}

// type CourseGoalProps = PropsWithChildren<{ title: string }>;

export default function CourseGoal({
  id,
  title,
  children,
  onDelete,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Deletar</button>
    </article>
  );
}
