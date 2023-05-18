import { Router } from 'express';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

import swaggerOPtion from './swaggerConfig';

const specs = swaggerJsDoc( swaggerOPtion );
const swaggerRouter = Router();

swaggerRouter.use(swaggerUi.serve );
swaggerRouter.get('/', swaggerUi.setup( specs ) );

export default swaggerRouter;

