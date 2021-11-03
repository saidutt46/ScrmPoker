export class BaseDtoListResponse <T> {
  payload: T[];
  messageDateTime: Date;
  error: string;
  success: boolean;
}

export class BaseDtoResponse <T> {
  payload: T;
  messageDateTime: Date;
  error: string;
  success: boolean;
}

export class BaseResponse {
  id: string;
  created: Date;
  modified: Date;
}

export class AuthBaseResponse {
  success: boolean;
  status: string;
  message: string;
  errors: string[];
}
