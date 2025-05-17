import { fetchSyncPost, IWebSocketData } from "siyuan";


async function request(url: string, data: any) {
  const response: IWebSocketData = await fetchSyncPost(url, data);
  const res = response.code === 0 ? response.data : null;
  return res;
}

interface IResForwardProxy {
  body: string;
  contentType: string;
  elapsed: number;
  headers: { [key: string]: string };
  status: number;
  url: string;
}

export async function forwardProxy(
  url: string, method = "GET", payload: any = {},
  headers: any[] = [], timeout = 3000, contentType = "text/html"
): Promise<IResForwardProxy> {
  const data = {
    url: url,
    method: method,
    timeout: timeout,
    contentType: contentType,
    headers: headers,
    payload: payload
  };
  const url1 = "/api/network/forwardProxy";
  return request(url1, data) as Promise<IResForwardProxy>;
}