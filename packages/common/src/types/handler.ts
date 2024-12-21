export type HandlerOutput = {
  statusCode: number;
  body?: string;
};

export type Handler = () => Promise<HandlerOutput>;
