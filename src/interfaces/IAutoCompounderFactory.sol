// SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity ^0.8.0;

import "./IRelayFactory.sol";

interface IAutoCompounderFactory is IRelayFactory {
    event SetRewardAmount(uint256 _rewardAmount);

    /// @notice Maximum fixed ABX reward rate from calling AutoCompounder.claimXAndCompound()
    ///         Set to 1,000 ABX
    function MAX_REWARD_AMOUNT() external view returns (uint256);

    /// @notice Minimum fixed ABX reward rate from calling AutoCompounder.claimXAndCompound()
    ///         Set to 0.1 ABX
    function MIN_REWARD_AMOUNT() external view returns (uint256);

    /// @notice The amount rewarded per token a caller earns from calling AutoCompounder.claimXAndCompound()
    function rewardAmount() external view returns (uint256);

    /// @notice Set the amount of ABX to reward a public caller of `AutoCompounder.claimXAndCompound()`
    ///         Callable by Owner
    /// @param _rewardAmount Amount of ABX
    function setRewardAmount(uint256 _rewardAmount) external;
}
