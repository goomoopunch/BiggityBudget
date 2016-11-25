export enum CategoryType {
    Utility,
    Debt,
    Subscription,
    Income,
    Food,
    Other
}

export interface Payee {
    name: string;
    dayOfMonthDue: number;
    category: CategoryType;
}