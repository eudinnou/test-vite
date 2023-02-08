import { string, shape } from "prop-types";
import Tour from "reactour";

function CompB() {
  return (
    <div>
      <div>This is CompB</div>
      <Tour steps={[]} isOpen={false} />
    </div>
  );
}

CompB.propTypes = {
  name: string.isRequired,
  data: shape({}).isRequired,
};

export default CompB;
