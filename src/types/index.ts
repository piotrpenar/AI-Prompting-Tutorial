export interface TutorialSection {
  id: string;
  title: string;
  content: React.ReactNode;
  rightContent: React.ReactNode;
  interactive?: boolean;
}