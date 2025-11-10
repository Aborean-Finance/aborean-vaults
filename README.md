# Aborean Relay

Aborean Relay is Aborean Finance's maintained fork of Velodrome's Relay system that powers managed
veNFTs (mveNFTs) across Aerodrome Finance deployments. The contracts automate the harvesting,
conversion, and redistribution of rewards earned by depositors who delegate their veNFT voting power
into a managed position.

The goal of this repository is to provide an auditable, GPL-3.0-or-later codebase that can be
transparently published at [github.com/Aborean-Finance](https://github.com/Aborean-Finance) while
remaining faithful to the upstream Velodrome implementation.

## Motivation

-   Maintain an open, community-auditable implementation of the Relay contracts used by Aborean
    Finance.
-   Provide a focused distribution containing only the contracts, deployment logic, and required
    tooling needed to interact with Aerodrome/Velodrome ecosystems.
-   Document the Aborean-specific defaults (networks, configuration files, naming) so that new
    contributors can reason about the system without relying on internal runbooks.

## Components

There are two flavours of Relays that share common access control and managed veNFT logic:

| Component        | Description                                                                                                   |
| ---------------- | ------------------------------------------------------------------------------------------------------------- |
| `AutoCompounder` | Claims rewards, swaps them to ABX, compounds back into the managed veNFT, and rewards public callers.         |
| `AutoConverter`  | Claims rewards, swaps them into the configured token, but never compounds, making it suitable for distributions |

Supporting contracts include the `RelayFactory`, `OptimizerBase`, registry helpers, and a
collection of interfaces that abstract Aerodrome / Velodrome primitives (`IVoter`, `IVotingEscrow`,
`IRewardsDistributor`, etc.).

## Access Model Highlights

-   **Public callers** can claim, swap, and (for compounders) compound rewards during the last 24
    hours of each epoch and earn a configurable caller reward.
-   **Keepers** operate shortly after an epoch flip and are trusted to execute optimized swap routes
    provided by `OptimizerBase`.
-   **Allowed callers** can vote for gauges and stream additional ABX incentives into the managed
    position.
-   **Admins** bootstrap new relays, configure keepers/high-liquidity tokens, and can sweep illiquid
    rewards within tightly scoped time windows.

These roles mirror Velodrome's design so upstream tooling remains compatible.

## Repository Layout

-   `src/` – Core Solidity contracts and libraries.
-   `deploy/` – Hardhat deploy scripts and configuration for Abstract / Aerodrome networks.
-   `hardhat.config.ts` & `foundry.toml` – Tooling configuration for TypeScript Hardhat tasks and
    Foundry tests.
-   `deploy/config/*.json` – Network-specific parameters consumed by the deploy scripts.

Supporting documentation that is internal to Aborean (playbooks, integration notes, operational
scripts) is intentionally ignored via `.gitignore` so public releases remain minimal.

## Getting Started

```bash
cp .env.example .env            # fill in RPC endpoints, private keys, etc.
yarn install                   # install dependencies
yarn hardhat compile           # build solidity artifacts
yarn hardhat test              # execute the hardhat test suite
forge test                     # (optional) run the Foundry tests
```

For tests that require a mainnet fork, set the relevant RPC URLs in `.env` and use the appropriate
Hardhat network configuration.

## Deployment

We publish canonical deployment scripts under `deploy/`. Each script consumes the JSON configs in
`deploy/config/` to wire addresses for Aerodrome / Abstract networks.

```bash
# Example: deploy core relay contracts to Abstract mainnet
yarn hardhat run deploy/00_deploy_core.ts --network abstractMainnet
```

Use the `02_deploy_veabx_maxi.ts` helper to initialize managed positions and load keeper/public
callers. See the comments inside each deploy script for parameter explanations.

## Security Expectations

-   The contracts inherit the same trust assumptions as Velodrome's implementation; admins and
    keepers are privileged actors.
-   Managed veNFTs are non-withdrawable from the Relay once deposited.
-   Callers should always provide safe swap routes (high-liquidity tokens only) when overriding the
    optimizer.

Please report security issues privately to the Aborean Finance team before any public disclosure.

## Licensing

Aborean Relay is released under the **GNU General Public License v3.0 or (at your option) any later
version**. See `LICENSE.md` for the complete text and obligations. SPDX headers across this
repository reference `GPL-3.0-or-later` to make compliance explicit.

This project remains a fork of Velodrome's Relay. Significant upstream portions retain attribution
in the file headers and documentation.

## Contact & Links

-   Website: [aborean.finance](https://aborean.finance)
-   GitHub: [github.com/Aborean-Finance](https://github.com/Aborean-Finance)
-   Twitter: [@AboreanFinance](https://twitter.com/AboreanFinance)

For questions about this repository, please open an issue or contact the Aborean team directly.
