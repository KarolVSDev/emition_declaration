export type DeclarationFormData = {
  name: string;
  frequency: number;
  declarationDate: Date;
};

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}

export type FrequencyDeclaration = {
  id: string;
  name: string;
  frequency: number;
  declarationDate: Date;
};