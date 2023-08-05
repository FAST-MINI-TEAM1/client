export interface IEmployeeOrder {
  id?: number;
  orderType: string;
  startAt: string;
  endAt: string;
  reason?: string;
  category?: string;
  etc?: string;
}

export interface IEmployeeMonthly {
  id: number;
  orderType: string;
  startDate: string;
  endDate: string;
  status: string;
}
export interface IEmployeeMonthlyRequest {
  year: number;
  month: number;
}
