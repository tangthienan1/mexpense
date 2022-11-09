export interface Trip {
    tripName: string;
    destination: string;
    budget: number;
    date: string;
    tag: string;
    description: string;
    isRequiredRiskAssessment: boolean;
    expenses: Expense[];
}

export interface Expense {
    title: string;
    amount: number;
    date: string;
    note: string;
    location: string;
    date: string;
    bill: any;
}
