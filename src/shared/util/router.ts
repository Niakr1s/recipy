import { Router } from '@angular/router';

export const updateQueryParams = (
  router: Router,
  queryParams: Record<string, any>
): void => {
  router.navigate([], { queryParams, queryParamsHandling: 'merge' });
};

export const updateQueryParam = (
  router: Router,
  key: string,
  value: any
): void => {
  updateQueryParams(router, { [key]: value });
};
