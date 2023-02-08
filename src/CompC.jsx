import { string, shape } from "prop-types";
import Tour from "reactour";

function CompC() {
  return (
    <div>
      <div>This is CompC</div>
      <Tour steps={[]} isOpen={false} />
    </div>
  );
}

CompC.propTypes = {
  name: string.isRequired,
  data: shape({}).isRequired,
};

export default CompC;
