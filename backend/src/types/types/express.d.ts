import AdvancedResults from "../../middlewares/advanceResults";

declare global {
  namespace Express {
    export interface Response {
      advancedResults?: AdvancedResults<any>;
    }
  }
}
