export default function Escrow({
  id,
  account,
  depositor,
  arbiter,
  beneficiary,
  value,
  isApproved,
  handleApprove,
}) {
  const approveClassName = isApproved? "complete" : "button";
  const approveInnerText = isApproved? "✓ It's been approved!" : "Approve";
  const approveOnClick = isApproved? null : () => {handleApprove(account)};
  
  const address = ""

  return (
    <div className="existing-contract">
      <ul className="fields">
        <li>
          <div>
            Depositor:&ensp;
            <a href={"https://sepolia.etherscan.io/" + depositor} target="_blank">
              {depositor}
            </a>
            {/* <a href = {address + depositor} target = "_blank">
              {depositor}
            </a> */}
          </div>
        </li>
        <li>
          <div>
            Arbiter:&ensp;
            <a href={"https://sepolia.etherscan.io/" + arbiter} target="_blank">
              {arbiter}
            </a>
            {/* <a href={address + arbiter} target="_blank">
              {arbiter}
            </a> */}
          </div>
        </li>
        <li>
          <div>
            Beneficiary:&ensp;
            <a href={"https://sepolia.etherscan.io/" + beneficiary} target="_blank">
              {beneficiary}
            </a>
            {/* <a href={address + beneficiary} target="_blank">
              {beneficiary}
            </a> */}
          </div>
        </li>
        <li>
          <div> Value: </div>
          <div> {value} Eth </div>
        </li>
        <div
          className={approveClassName}
          id={id}
          onClick={approveOnClick}
        >
          {approveInnerText}
        </div>
      </ul>
    </div>
  );
}
