import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = new Logger('HTTP');
  //middleware logic
  use(req: Request, res: Response, next: NextFunction) {
    // this.logger.log(req.ip, req.originalUrl, req.method, req.body);
    // console.log(req.ip, req.originalUrl, req.method, req.body);
    //TODO: improve overall quality, log details
    //TODO: write logs to DB
    //TODO: write log when HTTPError occurs
    res.on('finish', () => {
      this.logger.log(res.statusCode, res.statusMessage);
    });

    next();
  }
}
