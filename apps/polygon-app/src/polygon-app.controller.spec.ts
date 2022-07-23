import { Test, TestingModule } from '@nestjs/testing';
import { PolygonAppController } from './polygon-app.controller';
import { PolygonAppService } from './polygon-app.service';

describe('PolygonAppController', () => {
  let polygonAppController: PolygonAppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [PolygonAppController],
      providers: [PolygonAppService],
    }).compile();

    polygonAppController = app.get<PolygonAppController>(PolygonAppController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(polygonAppController.getHello()).toBe('Hello World!');
    });
  });
});
