export type HomeEntriesItemProps = {
    title: string;
    value: number;
    date: string;
};

export type NoteItemType = {
    date: string;
    title: string;
    content: string;
};

export type TripItemType = {
    title: string;
    date: string;
    tag: string;
    isRequiredRiskAssessment: boolean;
};
