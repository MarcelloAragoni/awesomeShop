import { sortParams } from "../utilities/consts.ts";

type Params = {
  name: string;
  value: string;
};

type Args = Params[];

export function formatQueryParams(params: Args) {
  const urlParams = new URLSearchParams({
    ...sortParams,
  });

  params.forEach((filter: Params) => {
    if (filter.value) {
      urlParams.set(filter.name, filter.value);
    } else {
      urlParams.delete(filter.name);
    }
  });
  console.log(urlParams);
  return urlParams;
}
