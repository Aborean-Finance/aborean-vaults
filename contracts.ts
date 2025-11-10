
export interface ContractConfig {
    address: string;
    abi: any[];
}

export interface NetworkContracts {
    Abx: ContractConfig;
    AirdropDistributor: ContractConfig;
    EpochGovernor: ContractConfig;
    FactoryRegistry: ContractConfig;
    Forwarder: ContractConfig;
    GaugeFactory: ContractConfig;
    ManagedRewardsFactory: ContractConfig;
    Minter: ContractConfig;
    Pool: ContractConfig;
    PoolFactory: ContractConfig;
    ProtocolGovernor: ContractConfig;
    RewardsDistributor: ContractConfig;
    Router: ContractConfig;
    VeArtProxy: ContractConfig;
    Voter: ContractConfig;
    VotingEscrow: ContractConfig;
    VotingRewardsFactory: ContractConfig;
}

export interface ContractsConfig {
    abstractTestnet: NetworkContracts;
    abstractMainnet: NetworkContracts;
}

export const contracts: ContractsConfig = {
    abstractTestnet: {
        'Abx': {
            'address': '0xb6313bE1c20Dc222199EC567951ABc6b5B64DFD6',
            'abi': [
                {
                    'inputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'InvalidShortString',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotMinter',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotOwner',
                    'type': 'error'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': 'str',
                            'type': 'string'
                        }
                    ],
                    'name': 'StringTooLong',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Approval',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [],
                    'name': 'EIP712DomainChanged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Transfer',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'DOMAIN_SEPARATOR',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        }
                    ],
                    'name': 'allowance',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'approve',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'account',
                            'type': 'address'
                        }
                    ],
                    'name': 'balanceOf',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'decimals',
                    'outputs': [
                        {
                            'internalType': 'uint8',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'subtractedValue',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'decreaseAllowance',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'eip712Domain',
                    'outputs': [
                        {
                            'internalType': 'bytes1',
                            'name': 'fields',
                            'type': 'bytes1'
                        },
                        {
                            'internalType': 'string',
                            'name': 'name',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'version',
                            'type': 'string'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'chainId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'verifyingContract',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'salt',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'extensions',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'addedValue',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'increaseAllowance',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'account',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'mint',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'minter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'name',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        }
                    ],
                    'name': 'nonces',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'v',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'r',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 's',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'permit',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_minter',
                            'type': 'address'
                        }
                    ],
                    'name': 'setMinter',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'symbol',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'totalSupply',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'transfer',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'transferFrom',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'AirdropDistributor': {
            'address': '0xEe6cb2b0070C9a96735dc696615bd9ad5648A107',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_ve',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientBalance',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidParams',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_wallet',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amount',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Airdrop',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'previousOwner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'newOwner',
                            'type': 'address'
                        }
                    ],
                    'name': 'OwnershipTransferred',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'abx',
                    'outputs': [
                        {
                            'internalType': 'contract IAbx',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_wallets',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': '_amounts',
                            'type': 'uint256[]'
                        }
                    ],
                    'name': 'distributeTokens',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'owner',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'renounceOwnership',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'newOwner',
                            'type': 'address'
                        }
                    ],
                    'name': 'transferOwnership',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'contract IVotingEscrow',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                }
            ]
        },
        'EpochGovernor': {
            'address': '0x4A67FFBcB10737bdED140C3A0FdD335De9030C99',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'contract IVotes',
                            'name': '_ve',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_minter',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'InvalidShortString',
                    'type': 'error'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': 'str',
                            'type': 'string'
                        }
                    ],
                    'name': 'StringTooLong',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [],
                    'name': 'EIP712DomainChanged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'ProposalCanceled',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'proposer',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address[]',
                            'name': 'targets',
                            'type': 'address[]'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256[]',
                            'name': 'values',
                            'type': 'uint256[]'
                        },
                        {
                            'indexed': false,
                            'internalType': 'string[]',
                            'name': 'signatures',
                            'type': 'string[]'
                        },
                        {
                            'indexed': false,
                            'internalType': 'bytes[]',
                            'name': 'calldatas',
                            'type': 'bytes[]'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'voteStart',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'voteEnd',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'string',
                            'name': 'description',
                            'type': 'string'
                        }
                    ],
                    'name': 'ProposalCreated',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'ProposalExecuted',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'string',
                            'name': 'reason',
                            'type': 'string'
                        }
                    ],
                    'name': 'VoteCast',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'string',
                            'name': 'reason',
                            'type': 'string'
                        },
                        {
                            'indexed': false,
                            'internalType': 'bytes',
                            'name': 'params',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'VoteCastWithParams',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'BALLOT_TYPEHASH',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'CLOCK_MODE',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'COUNTING_MODE',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'EXTENDED_BALLOT_TYPEHASH',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        }
                    ],
                    'name': 'castVote',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'v',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'r',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 's',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'castVoteBySig',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'string',
                            'name': 'reason',
                            'type': 'string'
                        }
                    ],
                    'name': 'castVoteWithReason',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'string',
                            'name': 'reason',
                            'type': 'string'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'params',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'castVoteWithReasonAndParams',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'string',
                            'name': 'reason',
                            'type': 'string'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'params',
                            'type': 'bytes'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'v',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'r',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 's',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'castVoteWithReasonAndParamsBySig',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'clock',
                    'outputs': [
                        {
                            'internalType': 'uint48',
                            'name': '',
                            'type': 'uint48'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'eip712Domain',
                    'outputs': [
                        {
                            'internalType': 'bytes1',
                            'name': 'fields',
                            'type': 'bytes1'
                        },
                        {
                            'internalType': 'string',
                            'name': 'name',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'version',
                            'type': 'string'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'chainId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'verifyingContract',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'salt',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'extensions',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': 'targets',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'values',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'bytes[]',
                            'name': 'calldatas',
                            'type': 'bytes[]'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'descriptionHash',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'execute',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'account',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'timepoint',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'getVotes',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'account',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'timepoint',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'params',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'getVotesWithParams',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'hasVoted',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': 'targets',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'values',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'bytes[]',
                            'name': 'calldatas',
                            'type': 'bytes[]'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'epochStart',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'hashProposal',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'forwarder',
                            'type': 'address'
                        }
                    ],
                    'name': 'isTrustedForwarder',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'minter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'name',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': '',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': '',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'bytes',
                            'name': '',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'onERC1155BatchReceived',
                    'outputs': [
                        {
                            'internalType': 'bytes4',
                            'name': '',
                            'type': 'bytes4'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bytes',
                            'name': '',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'onERC1155Received',
                    'outputs': [
                        {
                            'internalType': 'bytes4',
                            'name': '',
                            'type': 'bytes4'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bytes',
                            'name': '',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'onERC721Received',
                    'outputs': [
                        {
                            'internalType': 'bytes4',
                            'name': '',
                            'type': 'bytes4'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'proposalDeadline',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'proposalSnapshot',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'proposalThreshold',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'proposalVotes',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'againstVotes',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'forVotes',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'abstainVotes',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address[]',
                            'name': 'targets',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'values',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'bytes[]',
                            'name': 'calldatas',
                            'type': 'bytes[]'
                        },
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'name': 'propose',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'quorum',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'result',
                    'outputs': [
                        {
                            'internalType': 'enum IGovernor.ProposalState',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'state',
                    'outputs': [
                        {
                            'internalType': 'enum IGovernor.ProposalState',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bytes4',
                            'name': 'interfaceId',
                            'type': 'bytes4'
                        }
                    ],
                    'name': 'supportsInterface',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'token',
                    'outputs': [
                        {
                            'internalType': 'contract IVotes',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'version',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'votingDelay',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'votingPeriod',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'stateMutability': 'payable',
                    'type': 'receive'
                }
            ]
        },
        'FactoryRegistry': {
            'address': '0xcb56d430528BDB1b176Db6db427CBd8acF8f5c5e',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_fallbackPoolFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_fallbackVotingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_fallbackGaugeFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_newManagedRewardsFactory',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'FallbackFactory',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidFactoriesToPoolFactory',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PathAlreadyApproved',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PathNotApproved',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'votingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gaugeFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'Approve',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'previousOwner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'newOwner',
                            'type': 'address'
                        }
                    ],
                    'name': 'OwnershipTransferred',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_newRewardsFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'SetManagedRewardsFactory',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'votingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gaugeFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'Unapprove',
                    'type': 'event'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'votingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'gaugeFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'approve',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'factoriesToPoolFactory',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'votingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'gaugeFactory',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'fallbackPoolFactory',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'isPoolFactoryApproved',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'managedRewardsFactory',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'owner',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'poolFactories',
                    'outputs': [
                        {
                            'internalType': 'address[]',
                            'name': '',
                            'type': 'address[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'poolFactoriesLength',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'renounceOwnership',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_newManagedRewardsFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'setManagedRewardsFactory',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'newOwner',
                            'type': 'address'
                        }
                    ],
                    'name': 'transferOwnership',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'unapprove',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'Forwarder': {
            'address': '0xe3c88b323fAf17c104fB9fa9Ea8cE715187d328F',
            'abi': [
                {
                    'inputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'bytes32',
                            'name': 'domainSeparator',
                            'type': 'bytes32'
                        },
                        {
                            'indexed': false,
                            'internalType': 'bytes',
                            'name': 'domainValue',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'DomainRegistered',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'bytes32',
                            'name': 'typeHash',
                            'type': 'bytes32'
                        },
                        {
                            'indexed': false,
                            'internalType': 'string',
                            'name': 'typeStr',
                            'type': 'string'
                        }
                    ],
                    'name': 'RequestTypeRegistered',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'EIP712_DOMAIN_TYPE',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'GENERIC_PARAMS',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'value',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'gas',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'nonce',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'bytes',
                                    'name': 'data',
                                    'type': 'bytes'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'validUntilTime',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IForwarder.ForwardRequest',
                            'name': 'req',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'requestTypeHash',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'suffixData',
                            'type': 'bytes'
                        }
                    ],
                    'name': '_getEncoded',
                    'outputs': [
                        {
                            'internalType': 'bytes',
                            'name': '',
                            'type': 'bytes'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'domains',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'value',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'gas',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'nonce',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'bytes',
                                    'name': 'data',
                                    'type': 'bytes'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'validUntilTime',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IForwarder.ForwardRequest',
                            'name': 'req',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'domainSeparator',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'requestTypeHash',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'suffixData',
                            'type': 'bytes'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'sig',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'execute',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': 'success',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'ret',
                            'type': 'bytes'
                        }
                    ],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        }
                    ],
                    'name': 'getNonce',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': 'name',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'version',
                            'type': 'string'
                        }
                    ],
                    'name': 'registerDomainSeparator',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': 'typeName',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'typeSuffix',
                            'type': 'string'
                        }
                    ],
                    'name': 'registerRequestType',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bytes4',
                            'name': 'interfaceId',
                            'type': 'bytes4'
                        }
                    ],
                    'name': 'supportsInterface',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'typeHashes',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'value',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'gas',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'nonce',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'bytes',
                                    'name': 'data',
                                    'type': 'bytes'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'validUntilTime',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IForwarder.ForwardRequest',
                            'name': 'req',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'domainSeparator',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'requestTypeHash',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'suffixData',
                            'type': 'bytes'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'sig',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'verify',
                    'outputs': [],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'stateMutability': 'payable',
                    'type': 'receive'
                }
            ]
        },
        'GaugeFactory': {
            'address': '0x4aF0dF618F7F7a6B20ceB288B323B9F5DE782622',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_pool',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_feesVotingReward',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_rewardToken',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'isPool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'createGauge',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'gauge',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'ManagedRewardsFactory': {
            'address': '0x55a23696abc16193B1FE2411b39682f151Ce5Ae2',
            'abi': [
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'lockedManagedReward',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'freeManagedReward',
                            'type': 'address'
                        }
                    ],
                    'name': 'ManagedRewardCreated',
                    'type': 'event'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_voter',
                            'type': 'address'
                        }
                    ],
                    'name': 'createRewards',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'lockedManagedReward',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'freeManagedReward',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'Minter': {
            'address': '0xAF79FB231326FC8178B69D793FE7358155d5a538',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_voter',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_ve',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_rewardsDistributor',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'AlreadyInitialized',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'AlreadyNudged',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidParams',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotEpochGovernor',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotPendingTeam',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotTeam',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'RateTooHigh',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'TailEmissionsInactive',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_newTeam',
                            'type': 'address'
                        }
                    ],
                    'name': 'AcceptTeam',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_destination',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DistributeLiquid',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_destination',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amount',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DistributeLocked',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_sender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_weekly',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_circulating_supply',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'bool',
                            'name': '_tail',
                            'type': 'bool'
                        }
                    ],
                    'name': 'Mint',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_period',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_oldRate',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_newRate',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Nudge',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'MAXIMUM_TAIL_RATE',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'MAXIMUM_TEAM_RATE',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'MAX_BPS',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'MINIMUM_TAIL_RATE',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'NUDGE',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'TAIL_START',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'WEEK',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'WEEKLY_DECAY',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'WEEKLY_GROWTH',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'abx',
                    'outputs': [
                        {
                            'internalType': 'contract IAbx',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'acceptTeam',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'activePeriod',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_minted',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'calculateGrowth',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_growth',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'epochCount',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'address[]',
                                    'name': 'liquidWallets',
                                    'type': 'address[]'
                                },
                                {
                                    'internalType': 'uint256[]',
                                    'name': 'liquidAmounts',
                                    'type': 'uint256[]'
                                },
                                {
                                    'internalType': 'address[]',
                                    'name': 'lockedWallets',
                                    'type': 'address[]'
                                },
                                {
                                    'internalType': 'uint256[]',
                                    'name': 'lockedAmounts',
                                    'type': 'uint256[]'
                                }
                            ],
                            'internalType': 'struct IMinter.AirdropParams',
                            'name': 'params',
                            'type': 'tuple'
                        }
                    ],
                    'name': 'initialize',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'initialized',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'nudge',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'pendingTeam',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'proposals',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'rewardsDistributor',
                    'outputs': [
                        {
                            'internalType': 'contract IRewardsDistributor',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_team',
                            'type': 'address'
                        }
                    ],
                    'name': 'setTeam',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_rate',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'setTeamRate',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'tailEmissionRate',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'team',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'teamRate',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'updatePeriod',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_period',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'contract IVotingEscrow',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'voter',
                    'outputs': [
                        {
                            'internalType': 'contract IVoter',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'weekly',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                }
            ]
        },
        'Pool': {
            'address': '0x73Dce6E6D587CA12ce94cC49BD46940B4D1D467C',
            'abi': [
                {
                    'inputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'BelowMinimumK',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'DepositsNotEqual',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'FactoryAlreadySet',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientInputAmount',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientLiquidity',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientLiquidityBurned',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientLiquidityMinted',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientOutputAmount',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidShortString',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidTo',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'IsPaused',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'K',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotEmergencyCouncil',
                    'type': 'error'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': 'str',
                            'type': 'string'
                        }
                    ],
                    'name': 'StringTooLong',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Approval',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Burn',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'recipient',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Claim',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [],
                    'name': 'EIP712DomainChanged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Fees',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Mint',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0In',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1In',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0Out',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1Out',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Swap',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'reserve0',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'reserve1',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Sync',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Transfer',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'DOMAIN_SEPARATOR',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        }
                    ],
                    'name': 'allowance',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'approve',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'account',
                            'type': 'address'
                        }
                    ],
                    'name': 'balanceOf',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'blockTimestampLast',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        }
                    ],
                    'name': 'burn',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amount0',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount1',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'claimFees',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'claimed0',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'claimed1',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'claimable0',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'claimable1',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'currentCumulativePrices',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'reserve0Cumulative',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'reserve1Cumulative',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'blockTimestamp',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'decimals',
                    'outputs': [
                        {
                            'internalType': 'uint8',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'subtractedValue',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'decreaseAllowance',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'eip712Domain',
                    'outputs': [
                        {
                            'internalType': 'bytes1',
                            'name': 'fields',
                            'type': 'bytes1'
                        },
                        {
                            'internalType': 'string',
                            'name': 'name',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'version',
                            'type': 'string'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'chainId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'verifyingContract',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'salt',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'extensions',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'factory',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenIn',
                            'type': 'address'
                        }
                    ],
                    'name': 'getAmountOut',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'getK',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'getReserves',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_reserve0',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_reserve1',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_blockTimestampLast',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'addedValue',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'increaseAllowance',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'index0',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'index1',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_token0',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_token1',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_stable',
                            'type': 'bool'
                        }
                    ],
                    'name': 'initialize',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'lastObservation',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'uint256',
                                    'name': 'timestamp',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'reserve0Cumulative',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'reserve1Cumulative',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IPool.Observation',
                            'name': '',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'metadata',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'dec0',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'dec1',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'r0',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'r1',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'st',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': 't0',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 't1',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        }
                    ],
                    'name': 'mint',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'name',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        }
                    ],
                    'name': 'nonces',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'observationLength',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'observations',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'timestamp',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'reserve0Cumulative',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'reserve1Cumulative',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'periodSize',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'v',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'r',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 's',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'permit',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'poolFees',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenIn',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'points',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'prices',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': '',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenIn',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'granularity',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'quote',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountOut',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'reserve0',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'reserve0CumulativeLast',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'reserve1',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'reserve1CumulativeLast',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenIn',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'points',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'window',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'sample',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': '',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': '__name',
                            'type': 'string'
                        }
                    ],
                    'name': 'setName',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': '__symbol',
                            'type': 'string'
                        }
                    ],
                    'name': 'setSymbol',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        }
                    ],
                    'name': 'skim',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'stable',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'supplyIndex0',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'supplyIndex1',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amount0Out',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount1Out',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'data',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'swap',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'symbol',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'sync',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'token0',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'token1',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'tokens',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'totalSupply',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'transfer',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'transferFrom',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'PoolFactory': {
            'address': '0xc449Fb893439E696a119412d3D6D9F668f46Ed43',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_implementation',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'FeeInvalid',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'FeeTooHigh',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidPool',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotFeeManager',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotPauser',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotVoter',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PoolAlreadyExists',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroFee',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'token0',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'token1',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'PoolCreated',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'fee',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'SetCustomFee',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'feeManager',
                            'type': 'address'
                        }
                    ],
                    'name': 'SetFeeManager',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'bool',
                            'name': 'state',
                            'type': 'bool'
                        }
                    ],
                    'name': 'SetPauseState',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'pauser',
                            'type': 'address'
                        }
                    ],
                    'name': 'SetPauser',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        }
                    ],
                    'name': 'SetVoter',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'MAX_FEE',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'ZERO_FEE_INDICATOR',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'allPools',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'allPoolsLength',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        }
                    ],
                    'name': 'createPool',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'customFee',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'feeManager',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_stable',
                            'type': 'bool'
                        }
                    ],
                    'name': 'getFee',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        }
                    ],
                    'name': 'getPool',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'implementation',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'isPaused',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        }
                    ],
                    'name': 'isPool',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'pauser',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'fee',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'setCustomFee',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bool',
                            'name': '_stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_fee',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'setFee',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_feeManager',
                            'type': 'address'
                        }
                    ],
                    'name': 'setFeeManager',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bool',
                            'name': '_state',
                            'type': 'bool'
                        }
                    ],
                    'name': 'setPauseState',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_pauser',
                            'type': 'address'
                        }
                    ],
                    'name': 'setPauser',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_voter',
                            'type': 'address'
                        }
                    ],
                    'name': 'setVoter',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'stableFee',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'volatileFee',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'voter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                }
            ]
        },
        'ProtocolGovernor': {
            'address': '0x80a3389909df0dFa66922dd8A2Cb50c26158eCE2',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'contract IVotes',
                            'name': '_ve',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'Empty',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidShortString',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotPendingVetoer',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotTeam',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotVetoer',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ProposalNumeratorTooHigh',
                    'type': 'error'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': 'str',
                            'type': 'string'
                        }
                    ],
                    'name': 'StringTooLong',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [],
                    'name': 'EIP712DomainChanged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'ProposalCanceled',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'proposer',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address[]',
                            'name': 'targets',
                            'type': 'address[]'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256[]',
                            'name': 'values',
                            'type': 'uint256[]'
                        },
                        {
                            'indexed': false,
                            'internalType': 'string[]',
                            'name': 'signatures',
                            'type': 'string[]'
                        },
                        {
                            'indexed': false,
                            'internalType': 'bytes[]',
                            'name': 'calldatas',
                            'type': 'bytes[]'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'voteStart',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'voteEnd',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'string',
                            'name': 'description',
                            'type': 'string'
                        }
                    ],
                    'name': 'ProposalCreated',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'ProposalExecuted',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'ProposalVetoed',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'oldQuorumNumerator',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'newQuorumNumerator',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'QuorumNumeratorUpdated',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'string',
                            'name': 'reason',
                            'type': 'string'
                        }
                    ],
                    'name': 'VoteCast',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'string',
                            'name': 'reason',
                            'type': 'string'
                        },
                        {
                            'indexed': false,
                            'internalType': 'bytes',
                            'name': 'params',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'VoteCastWithParams',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'BALLOT_TYPEHASH',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'CLOCK_MODE',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'COUNTING_MODE',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'EXTENDED_BALLOT_TYPEHASH',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'MAX_PROPOSAL_NUMERATOR',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'PROPOSAL_DENOMINATOR',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'acceptVetoer',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': 'targets',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'values',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'bytes[]',
                            'name': 'calldatas',
                            'type': 'bytes[]'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'descriptionHash',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'cancel',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        }
                    ],
                    'name': 'castVote',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'v',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'r',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 's',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'castVoteBySig',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'string',
                            'name': 'reason',
                            'type': 'string'
                        }
                    ],
                    'name': 'castVoteWithReason',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'string',
                            'name': 'reason',
                            'type': 'string'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'params',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'castVoteWithReasonAndParams',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'support',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'string',
                            'name': 'reason',
                            'type': 'string'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'params',
                            'type': 'bytes'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'v',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'r',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 's',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'castVoteWithReasonAndParamsBySig',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'clock',
                    'outputs': [
                        {
                            'internalType': 'uint48',
                            'name': '',
                            'type': 'uint48'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'eip712Domain',
                    'outputs': [
                        {
                            'internalType': 'bytes1',
                            'name': 'fields',
                            'type': 'bytes1'
                        },
                        {
                            'internalType': 'string',
                            'name': 'name',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'version',
                            'type': 'string'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'chainId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'verifyingContract',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'salt',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'extensions',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': 'targets',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'values',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'bytes[]',
                            'name': 'calldatas',
                            'type': 'bytes[]'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'descriptionHash',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'address',
                            'name': 'proposer',
                            'type': 'address'
                        }
                    ],
                    'name': 'execute',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'account',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'timepoint',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'getVotes',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'account',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'timepoint',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'params',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'getVotesWithParams',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'hasVoted',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': 'targets',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'values',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'bytes[]',
                            'name': 'calldatas',
                            'type': 'bytes[]'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'descriptionHash',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'address',
                            'name': 'proposer',
                            'type': 'address'
                        }
                    ],
                    'name': 'hashProposal',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'name',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': '',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': '',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'bytes',
                            'name': '',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'onERC1155BatchReceived',
                    'outputs': [
                        {
                            'internalType': 'bytes4',
                            'name': '',
                            'type': 'bytes4'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bytes',
                            'name': '',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'onERC1155Received',
                    'outputs': [
                        {
                            'internalType': 'bytes4',
                            'name': '',
                            'type': 'bytes4'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bytes',
                            'name': '',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'onERC721Received',
                    'outputs': [
                        {
                            'internalType': 'bytes4',
                            'name': '',
                            'type': 'bytes4'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'pendingVetoer',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'proposalDeadline',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'proposalNumerator',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'proposalSnapshot',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'proposalThreshold',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'proposalVotes',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'againstVotes',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'forVotes',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'abstainVotes',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address[]',
                            'name': 'targets',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'values',
                            'type': 'uint256[]'
                        },
                        {
                            'internalType': 'bytes[]',
                            'name': 'calldatas',
                            'type': 'bytes[]'
                        },
                        {
                            'internalType': 'string',
                            'name': 'description',
                            'type': 'string'
                        }
                    ],
                    'name': 'propose',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'timepoint',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'quorum',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'quorumDenominator',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'timepoint',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'quorumNumerator',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'quorumNumerator',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'target',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'data',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'relay',
                    'outputs': [],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'renounceVetoer',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'numerator',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'setProposalNumerator',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_vetoer',
                            'type': 'address'
                        }
                    ],
                    'name': 'setVetoer',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'state',
                    'outputs': [
                        {
                            'internalType': 'enum IVetoGovernor.ProposalState',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bytes4',
                            'name': 'interfaceId',
                            'type': 'bytes4'
                        }
                    ],
                    'name': 'supportsInterface',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'token',
                    'outputs': [
                        {
                            'internalType': 'contract IVotes',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'newQuorumNumerator',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'updateQuorumNumerator',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'version',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_proposalId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'veto',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'vetoer',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'votingDelay',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'votingPeriod',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'stateMutability': 'payable',
                    'type': 'receive'
                }
            ]
        },
        'RewardsDistributor': {
            'address': '0xD93c65a2a6f49995970aDE5EC899927A58FA402e',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_ve',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'NotManagedOrNormalNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotMinter',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'UpdatePeriod',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'time',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'tokens',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'CheckpointToken',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'epochStart',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'epochEnd',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Claimed',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'WEEK',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'checkpointToken',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'claim',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': '_tokenIds',
                            'type': 'uint256[]'
                        }
                    ],
                    'name': 'claimMany',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'claimable',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'claimable_',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'lastTokenTime',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'minter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_minter',
                            'type': 'address'
                        }
                    ],
                    'name': 'setMinter',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'startTime',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'timeCursorOf',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'token',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'tokenLastBalance',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'tokensPerWeek',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'contract IVotingEscrow',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                }
            ]
        },
        'Router': {
            'address': '0xd4b272fe775682f980c4C6A4263eC03952cDF77f',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factoryRegistry',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_voter',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_weth',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'ETHTransferFailed',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'Expired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmount',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmountA',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmountADesired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmountAOptimal',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmountB',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmountBDesired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientLiquidity',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientOutputAmount',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidAmountInForETHDeposit',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidPath',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidRouteA',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidRouteB',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidTokenInForETHDeposit',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'OnlyWETH',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PoolDoesNotExist',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PoolFactoryDoesNotExist',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameAddresses',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ETHER',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': 'amounts',
                            'type': 'uint256[]'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'UNSAFE_swapExactTokensForTokens',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': '',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountADesired',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBDesired',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountAMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'addLiquidity',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountB',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'token',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountTokenDesired',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountTokenMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountETHMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'addLiquidityETH',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountToken',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountETH',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'defaultFactory',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'factoryRegistry',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountInA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountInB',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesA',
                            'type': 'tuple[]'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesB',
                            'type': 'tuple[]'
                        }
                    ],
                    'name': 'generateZapInParams',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMinA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMinB',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountAMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBMin',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesA',
                            'type': 'tuple[]'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesB',
                            'type': 'tuple[]'
                        }
                    ],
                    'name': 'generateZapOutParams',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMinA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMinB',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountAMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBMin',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        }
                    ],
                    'name': 'getAmountsOut',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': 'amounts',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        }
                    ],
                    'name': 'getReserves',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'reserveA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'reserveB',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'forwarder',
                            'type': 'address'
                        }
                    ],
                    'name': 'isTrustedForwarder',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        }
                    ],
                    'name': 'poolFor',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountADesired',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBDesired',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'quoteAddLiquidity',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountB',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'quoteRemoveLiquidity',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountB',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        }
                    ],
                    'name': 'quoteStableLiquidityRatio',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'ratio',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountAMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'removeLiquidity',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountB',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'token',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountTokenMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountETHMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'removeLiquidityETH',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountToken',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountETH',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'token',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountTokenMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountETHMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'removeLiquidityETHSupportingFeeOnTransferTokens',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountETH',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        }
                    ],
                    'name': 'sortTokens',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'token0',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'token1',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactETHForTokens',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': 'amounts',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactETHForTokensSupportingFeeOnTransferTokens',
                    'outputs': [],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactTokensForETH',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': 'amounts',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactTokensForETHSupportingFeeOnTransferTokens',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactTokensForTokens',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': 'amounts',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'voter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'weth',
                    'outputs': [
                        {
                            'internalType': 'contract IWETH',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenIn',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountInA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountInB',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'tokenA',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'tokenB',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountOutMinA',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountOutMinB',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountAMin',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountBMin',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IRouter.Zap',
                            'name': 'zapInPool',
                            'type': 'tuple'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesA',
                            'type': 'tuple[]'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesB',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stake',
                            'type': 'bool'
                        }
                    ],
                    'name': 'zapIn',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenOut',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'tokenA',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'tokenB',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountOutMinA',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountOutMinB',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountAMin',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountBMin',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IRouter.Zap',
                            'name': 'zapOutPool',
                            'type': 'tuple'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesA',
                            'type': 'tuple[]'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesB',
                            'type': 'tuple[]'
                        }
                    ],
                    'name': 'zapOut',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'stateMutability': 'payable',
                    'type': 'receive'
                }
            ]
        },
        'VeArtProxy': {
            'address': '0x68300D190c474bBc05789ACA3ba3316EF0731a60',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_ve',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'circles',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'corners',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'curves',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'explosion',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'generateConfig',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'interlockingCircles',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'lineArtPathsOnly',
                    'outputs': [
                        {
                            'internalType': 'bytes',
                            'name': 'output',
                            'type': 'bytes'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'spiral',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'tokenURI',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': 'output',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'twoStripes',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'contract IVotingEscrow',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'wormhole',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                }
            ]
        },
        'Voter': {
            'address': '0x8c3C29ed0FF9E3d389301227E923d6e645D527dC',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_ve',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factoryRegistry',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'AlreadyVotedOrDeposited',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'DistributeWindow',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'FactoryPathNotApproved',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'GaugeAlreadyKilled',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'GaugeAlreadyRevived',
                    'type': 'error'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_pool',
                            'type': 'address'
                        }
                    ],
                    'name': 'GaugeDoesNotExist',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'GaugeExists',
                    'type': 'error'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'GaugeNotAlive',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InactiveManagedNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'MaximumVotingNumberTooLow',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NonZeroVotes',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotAPool',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotApprovedOrOwner',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotEmergencyCouncil',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotGovernor',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotMinter',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotWhitelistedNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotWhitelistedToken',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameValue',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SpecialVotingWindow',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'TooManyPools',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'UnequalLengths',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroBalance',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'totalWeight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Abstained',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gauge',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DistributeReward',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'votingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gaugeFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'bribeVotingReward',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'feeVotingReward',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'gauge',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'creator',
                            'type': 'address'
                        }
                    ],
                    'name': 'GaugeCreated',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'GaugeKilled',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'GaugeRevived',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'reward',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'NotifyReward',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'totalWeight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Voted',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'whitelister',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'bool',
                            'name': '_bool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'WhitelistNFT',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'whitelister',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'token',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'bool',
                            'name': '_bool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'WhitelistToken',
                    'type': 'event'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_bribes',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'address[][]',
                            'name': '_tokens',
                            'type': 'address[][]'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'claimBribes',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_fees',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'address[][]',
                            'name': '_tokens',
                            'type': 'address[][]'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'claimFees',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_gauges',
                            'type': 'address[]'
                        }
                    ],
                    'name': 'claimRewards',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'claimable',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_poolFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_pool',
                            'type': 'address'
                        }
                    ],
                    'name': 'createGauge',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'depositManaged',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_gauges',
                            'type': 'address[]'
                        }
                    ],
                    'name': 'distribute',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_start',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_finish',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'distribute',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'emergencyCouncil',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'epochGovernor',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'epochNext',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'epochStart',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'epochVoteEnd',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'epochVoteStart',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'factoryRegistry',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'forwarder',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'gaugeToBribe',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'gaugeToFees',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'gauges',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'governor',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_tokens',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'address',
                            'name': '_minter',
                            'type': 'address'
                        }
                    ],
                    'name': 'initialize',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'isAlive',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'isGauge',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'forwarder',
                            'type': 'address'
                        }
                    ],
                    'name': 'isTrustedForwarder',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'isWhitelistedNFT',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'isWhitelistedToken',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'killGauge',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'lastVoted',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'length',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'maxVotingNum',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'minter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'notifyRewardAmount',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'poke',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'poolForGauge',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'poolVote',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'pools',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'reset',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'reviveGauge',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_council',
                            'type': 'address'
                        }
                    ],
                    'name': 'setEmergencyCouncil',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_epochGovernor',
                            'type': 'address'
                        }
                    ],
                    'name': 'setEpochGovernor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_governor',
                            'type': 'address'
                        }
                    ],
                    'name': 'setGovernor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_maxVotingNum',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'setMaxVotingNum',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'totalWeight',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'updateFor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'start',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'end',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'updateFor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_gauges',
                            'type': 'address[]'
                        }
                    ],
                    'name': 'updateFor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'usedWeights',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address[]',
                            'name': '_poolVote',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': '_weights',
                            'type': 'uint256[]'
                        }
                    ],
                    'name': 'vote',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'votes',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'weights',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_bool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'whitelistNFT',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_token',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_bool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'whitelistToken',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'withdrawManaged',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'VotingEscrow': {
            'address': '0x2fc35FB4CaFBFbf2319cfe27E7816Fc18E87D946',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_token',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factoryRegistry',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'AlreadyVoted',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'AmountTooBig',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ERC721ReceiverRejectedTokens',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ERC721TransferToNonERC721ReceiverImplementer',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidManagedNFTId',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidNonce',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidSignature',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidSignatureS',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'LockDurationNotInFuture',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'LockDurationTooLong',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'LockExpired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'LockNotExpired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NoLockFound',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NonExistentToken',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotApprovedOrOwner',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotDistributor',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotEmergencyCouncilOrGovernor',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotGovernor',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotGovernorOrManager',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotLockedNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotManagedNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotManagedOrNormalNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotNormalNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotOwner',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotPermanentLock',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotTeam',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotVoter',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'OwnershipChange',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PermanentLock',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SafeCastOverflow',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SafeCastUnderflow',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameState',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SignatureExpired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SplitNoOwner',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SplitNotAllowed',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'TooManyTokenIDs',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAmount',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroBalance',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'approved',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Approval',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'operator',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'bool',
                            'name': 'approved',
                            'type': 'bool'
                        }
                    ],
                    'name': 'ApprovalForAll',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_fromTokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_toTokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'BatchMetadataUpdate',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_from',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': '_lockedManagedReward',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': '_freeManagedReward',
                            'type': 'address'
                        }
                    ],
                    'name': 'CreateManaged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'delegator',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'fromDelegate',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'toDelegate',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DelegateChanged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'delegate',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'previousBalance',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'newBalance',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DelegateVotesChanged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'provider',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'enum IVotingEscrow.DepositType',
                            'name': 'depositType',
                            'type': 'uint8'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'locktime',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Deposit',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DepositManaged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'LockPermanent',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_from',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_to',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amountFrom',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amountTo',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amountFinal',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_locktime',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Merge',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'MetadataUpdate',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_allowedManager',
                            'type': 'address'
                        }
                    ],
                    'name': 'SetAllowedManager',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_from',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId1',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId2',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': '_sender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_splitAmount1',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_splitAmount2',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_locktime',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Split',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'prevSupply',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'supply',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Supply',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Transfer',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'UnlockPermanent',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'provider',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Withdraw',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'WithdrawManaged',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'CLOCK_MODE',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'DELEGATION_TYPEHASH',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'DOMAIN_TYPEHASH',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'allowedManager',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_approved',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'approve',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'artProxy',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        }
                    ],
                    'name': 'balanceOf',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'balanceOfNFT',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_t',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'balanceOfNFTAt',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'canSplit',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'checkpoint',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint48',
                            'name': '_index',
                            'type': 'uint48'
                        }
                    ],
                    'name': 'checkpoints',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'uint256',
                                    'name': 'fromTimestamp',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'owner',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'delegatedBalance',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'delegatee',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IVotingEscrow.Checkpoint',
                            'name': '',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'clock',
                    'outputs': [
                        {
                            'internalType': 'uint48',
                            'name': '',
                            'type': 'uint48'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_value',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_lockDuration',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'createLock',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_value',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_lockDuration',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        }
                    ],
                    'name': 'createLockFor',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        }
                    ],
                    'name': 'createManagedLockFor',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'deactivated',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'decimals',
                    'outputs': [
                        {
                            'internalType': 'uint8',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'delegator',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'delegatee',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'delegate',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'delegator',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'delegatee',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'nonce',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'expiry',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'v',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'r',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 's',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'delegateBySig',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'delegator',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'delegates',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'depositFor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'depositManaged',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'distributor',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'epoch',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'escrowType',
                    'outputs': [
                        {
                            'internalType': 'enum IVotingEscrow.EscrowType',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'factoryRegistry',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'forwarder',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'getApproved',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'getPastTotalSupply',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_account',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'getPastVotes',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'idToManaged',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'increaseAmount',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_lockDuration',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'increaseUnlockTime',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_operator',
                            'type': 'address'
                        }
                    ],
                    'name': 'isApprovedForAll',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'isApprovedOrOwner',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'forwarder',
                            'type': 'address'
                        }
                    ],
                    'name': 'isTrustedForwarder',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'lockPermanent',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'locked',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int128',
                                    'name': 'amount',
                                    'type': 'int128'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'end',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'isPermanent',
                                    'type': 'bool'
                                }
                            ],
                            'internalType': 'struct IVotingEscrow.LockedBalance',
                            'name': '',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'managedToFree',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'managedToLocked',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_from',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_to',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'merge',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'name',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'nonces',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'numCheckpoints',
                    'outputs': [
                        {
                            'internalType': 'uint48',
                            'name': '',
                            'type': 'uint48'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'ownerOf',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'ownerToNFTokenIdList',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'permanentLockBalance',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_loc',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'pointHistory',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int128',
                                    'name': 'bias',
                                    'type': 'int128'
                                },
                                {
                                    'internalType': 'int128',
                                    'name': 'slope',
                                    'type': 'int128'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'ts',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'blk',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'permanentLockBalance',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IVotingEscrow.GlobalPoint',
                            'name': '',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_from',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'safeTransferFrom',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_from',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bytes',
                            'name': '_data',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'safeTransferFrom',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_allowedManager',
                            'type': 'address'
                        }
                    ],
                    'name': 'setAllowedManager',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_operator',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_approved',
                            'type': 'bool'
                        }
                    ],
                    'name': 'setApprovalForAll',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_proxy',
                            'type': 'address'
                        }
                    ],
                    'name': 'setArtProxy',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_state',
                            'type': 'bool'
                        }
                    ],
                    'name': 'setManagedState',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_team',
                            'type': 'address'
                        }
                    ],
                    'name': 'setTeam',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_voter',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_distributor',
                            'type': 'address'
                        }
                    ],
                    'name': 'setVoterAndDistributor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'slopeChanges',
                    'outputs': [
                        {
                            'internalType': 'int128',
                            'name': '',
                            'type': 'int128'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_from',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'split',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId1',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId2',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'supply',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bytes4',
                            'name': '_interfaceID',
                            'type': 'bytes4'
                        }
                    ],
                    'name': 'supportsInterface',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'symbol',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'team',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_account',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_bool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'toggleSplit',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'token',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'tokenId',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'tokenURI',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'totalSupply',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'totalSupplyAt',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_from',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'transferFrom',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'unlockPermanent',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'userPointEpoch',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_loc',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'userPointHistory',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int128',
                                    'name': 'bias',
                                    'type': 'int128'
                                },
                                {
                                    'internalType': 'int128',
                                    'name': 'slope',
                                    'type': 'int128'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'ts',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'blk',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'permanent',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IVotingEscrow.UserPoint',
                            'name': '',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'version',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'voted',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'voter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_voted',
                            'type': 'bool'
                        }
                    ],
                    'name': 'voting',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'weights',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'withdraw',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'withdrawManaged',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'VotingRewardsFactory': {
            'address': '0xf01290e76c5d86c5Af1e0f480b6003083216132D',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address[]',
                            'name': '_rewards',
                            'type': 'address[]'
                        }
                    ],
                    'name': 'createRewards',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'feesVotingReward',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'bribeVotingReward',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        }
    },
    abstractMainnet: {
        'Abx': {
            'address': '0x4C68E4102c0F120cce9F08625bd12079806b7C4D',
            'abi': [
                {
                    'inputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'InvalidShortString',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotMinter',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotOwner',
                    'type': 'error'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': 'str',
                            'type': 'string'
                        }
                    ],
                    'name': 'StringTooLong',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Approval',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [],
                    'name': 'EIP712DomainChanged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Transfer',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'DOMAIN_SEPARATOR',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        }
                    ],
                    'name': 'allowance',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'approve',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'account',
                            'type': 'address'
                        }
                    ],
                    'name': 'balanceOf',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'decimals',
                    'outputs': [
                        {
                            'internalType': 'uint8',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'subtractedValue',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'decreaseAllowance',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'eip712Domain',
                    'outputs': [
                        {
                            'internalType': 'bytes1',
                            'name': 'fields',
                            'type': 'bytes1'
                        },
                        {
                            'internalType': 'string',
                            'name': 'name',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'version',
                            'type': 'string'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'chainId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'verifyingContract',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'salt',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'extensions',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'addedValue',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'increaseAllowance',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'account',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'mint',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'minter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'name',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        }
                    ],
                    'name': 'nonces',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'v',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'r',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 's',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'permit',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_minter',
                            'type': 'address'
                        }
                    ],
                    'name': 'setMinter',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'symbol',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'totalSupply',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'transfer',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'transferFrom',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'AirdropDistributor': {
            'address': '0xd29d05bFfb2F0AfBB76ed217d726Ff5922253086',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_ve',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientBalance',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidParams',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_wallet',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amount',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Airdrop',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'previousOwner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'newOwner',
                            'type': 'address'
                        }
                    ],
                    'name': 'OwnershipTransferred',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'abx',
                    'outputs': [
                        {
                            'internalType': 'contract IAbx',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_wallets',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': '_amounts',
                            'type': 'uint256[]'
                        }
                    ],
                    'name': 'distributeTokens',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'owner',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'renounceOwnership',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'newOwner',
                            'type': 'address'
                        }
                    ],
                    'name': 'transferOwnership',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'contract IVotingEscrow',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                }
            ]
        },
        'DeployedPools': {
            'address': '0x0000000000000000000000000000000000000000',
            'abi': []
        },
        'FactoryRegistry': {
            'address': '0x5927E0C4b307Af16260327DE3276CE17d8A4aB49',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_fallbackPoolFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_fallbackVotingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_fallbackGaugeFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_newManagedRewardsFactory',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'FallbackFactory',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidFactoriesToPoolFactory',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PathAlreadyApproved',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PathNotApproved',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'votingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gaugeFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'Approve',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'previousOwner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'newOwner',
                            'type': 'address'
                        }
                    ],
                    'name': 'OwnershipTransferred',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_newRewardsFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'SetManagedRewardsFactory',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'votingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gaugeFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'Unapprove',
                    'type': 'event'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'votingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'gaugeFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'approve',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'factoriesToPoolFactory',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'votingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'gaugeFactory',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'fallbackPoolFactory',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'isPoolFactoryApproved',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'managedRewardsFactory',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'owner',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'poolFactories',
                    'outputs': [
                        {
                            'internalType': 'address[]',
                            'name': '',
                            'type': 'address[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'poolFactoriesLength',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'renounceOwnership',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_newManagedRewardsFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'setManagedRewardsFactory',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'newOwner',
                            'type': 'address'
                        }
                    ],
                    'name': 'transferOwnership',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        }
                    ],
                    'name': 'unapprove',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'Forwarder': {
            'address': '0x3f91b806F1968Fca85C08A7eE9A7262D7207A9c1',
            'abi': [
                {
                    'inputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'bytes32',
                            'name': 'domainSeparator',
                            'type': 'bytes32'
                        },
                        {
                            'indexed': false,
                            'internalType': 'bytes',
                            'name': 'domainValue',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'DomainRegistered',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'bytes32',
                            'name': 'typeHash',
                            'type': 'bytes32'
                        },
                        {
                            'indexed': false,
                            'internalType': 'string',
                            'name': 'typeStr',
                            'type': 'string'
                        }
                    ],
                    'name': 'RequestTypeRegistered',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'EIP712_DOMAIN_TYPE',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'GENERIC_PARAMS',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'value',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'gas',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'nonce',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'bytes',
                                    'name': 'data',
                                    'type': 'bytes'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'validUntilTime',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IForwarder.ForwardRequest',
                            'name': 'req',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'requestTypeHash',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'suffixData',
                            'type': 'bytes'
                        }
                    ],
                    'name': '_getEncoded',
                    'outputs': [
                        {
                            'internalType': 'bytes',
                            'name': '',
                            'type': 'bytes'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'domains',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'value',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'gas',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'nonce',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'bytes',
                                    'name': 'data',
                                    'type': 'bytes'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'validUntilTime',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IForwarder.ForwardRequest',
                            'name': 'req',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'domainSeparator',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'requestTypeHash',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'suffixData',
                            'type': 'bytes'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'sig',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'execute',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': 'success',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'ret',
                            'type': 'bytes'
                        }
                    ],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        }
                    ],
                    'name': 'getNonce',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': 'name',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'version',
                            'type': 'string'
                        }
                    ],
                    'name': 'registerDomainSeparator',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': 'typeName',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'typeSuffix',
                            'type': 'string'
                        }
                    ],
                    'name': 'registerRequestType',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bytes4',
                            'name': 'interfaceId',
                            'type': 'bytes4'
                        }
                    ],
                    'name': 'supportsInterface',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'typeHashes',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'value',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'gas',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'nonce',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'bytes',
                                    'name': 'data',
                                    'type': 'bytes'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'validUntilTime',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IForwarder.ForwardRequest',
                            'name': 'req',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'domainSeparator',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'requestTypeHash',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'suffixData',
                            'type': 'bytes'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'sig',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'verify',
                    'outputs': [],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'stateMutability': 'payable',
                    'type': 'receive'
                }
            ]
        },
        'GaugeFactory': {
            'address': '0x29BfEd845b1C10e427766b21d4533800B6f4e111',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_pool',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_feesVotingReward',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_rewardToken',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'isPool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'createGauge',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'gauge',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'ManagedRewardsFactory': {
            'address': '0x889d93f9c3586ec7CD287eE4e7C96E544985Ee95',
            'abi': [
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'lockedManagedReward',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'freeManagedReward',
                            'type': 'address'
                        }
                    ],
                    'name': 'ManagedRewardCreated',
                    'type': 'event'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_voter',
                            'type': 'address'
                        }
                    ],
                    'name': 'createRewards',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'lockedManagedReward',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'freeManagedReward',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'Minter': {
            'address': '0x58564Fcfc5a0C57887eFC0beDeC3EB5Ec37f1626',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_voter',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_ve',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_rewardsDistributor',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'AlreadyInitialized',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'AlreadyNudged',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidParams',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotEpochGovernor',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotPendingTeam',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotTeam',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'RateTooHigh',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'TailEmissionsInactive',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_newTeam',
                            'type': 'address'
                        }
                    ],
                    'name': 'AcceptTeam',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_destination',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DistributeLiquid',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_destination',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amount',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DistributeLocked',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_sender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_weekly',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_circulating_supply',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'bool',
                            'name': '_tail',
                            'type': 'bool'
                        }
                    ],
                    'name': 'Mint',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_period',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_oldRate',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_newRate',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Nudge',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'MAXIMUM_TAIL_RATE',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'MAXIMUM_TEAM_RATE',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'MAX_BPS',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'MINIMUM_TAIL_RATE',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'NUDGE',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'TAIL_START',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'WEEK',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'WEEKLY_DECAY',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'WEEKLY_GROWTH',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'abx',
                    'outputs': [
                        {
                            'internalType': 'contract IAbx',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'acceptTeam',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'activePeriod',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_minted',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'calculateGrowth',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_growth',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'epochCount',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'address[]',
                                    'name': 'liquidWallets',
                                    'type': 'address[]'
                                },
                                {
                                    'internalType': 'uint256[]',
                                    'name': 'liquidAmounts',
                                    'type': 'uint256[]'
                                },
                                {
                                    'internalType': 'address[]',
                                    'name': 'lockedWallets',
                                    'type': 'address[]'
                                },
                                {
                                    'internalType': 'uint256[]',
                                    'name': 'lockedAmounts',
                                    'type': 'uint256[]'
                                }
                            ],
                            'internalType': 'struct IMinter.AirdropParams',
                            'name': 'params',
                            'type': 'tuple'
                        }
                    ],
                    'name': 'initialize',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'initialized',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'nudge',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'pendingTeam',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'proposals',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'rewardsDistributor',
                    'outputs': [
                        {
                            'internalType': 'contract IRewardsDistributor',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_team',
                            'type': 'address'
                        }
                    ],
                    'name': 'setTeam',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_rate',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'setTeamRate',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'tailEmissionRate',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'team',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'teamRate',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'updatePeriod',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_period',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'contract IVotingEscrow',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'voter',
                    'outputs': [
                        {
                            'internalType': 'contract IVoter',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'weekly',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                }
            ]
        },
        'Pool': {
            'address': '0x3E5791019A9Fae2805d69965b06dcEFC43Cd1A79',
            'abi': [
                {
                    'inputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'BelowMinimumK',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'DepositsNotEqual',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'FactoryAlreadySet',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientInputAmount',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientLiquidity',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientLiquidityBurned',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientLiquidityMinted',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientOutputAmount',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidShortString',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidTo',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'IsPaused',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'K',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotEmergencyCouncil',
                    'type': 'error'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': 'str',
                            'type': 'string'
                        }
                    ],
                    'name': 'StringTooLong',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Approval',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Burn',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'recipient',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Claim',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [],
                    'name': 'EIP712DomainChanged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Fees',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Mint',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0In',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1In',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount0Out',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount1Out',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Swap',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'reserve0',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'reserve1',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Sync',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Transfer',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'DOMAIN_SEPARATOR',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        }
                    ],
                    'name': 'allowance',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'approve',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'account',
                            'type': 'address'
                        }
                    ],
                    'name': 'balanceOf',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'blockTimestampLast',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        }
                    ],
                    'name': 'burn',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amount0',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount1',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'claimFees',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'claimed0',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'claimed1',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'claimable0',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'claimable1',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'currentCumulativePrices',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'reserve0Cumulative',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'reserve1Cumulative',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'blockTimestamp',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'decimals',
                    'outputs': [
                        {
                            'internalType': 'uint8',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'subtractedValue',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'decreaseAllowance',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'eip712Domain',
                    'outputs': [
                        {
                            'internalType': 'bytes1',
                            'name': 'fields',
                            'type': 'bytes1'
                        },
                        {
                            'internalType': 'string',
                            'name': 'name',
                            'type': 'string'
                        },
                        {
                            'internalType': 'string',
                            'name': 'version',
                            'type': 'string'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'chainId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'verifyingContract',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'salt',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': 'extensions',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'factory',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenIn',
                            'type': 'address'
                        }
                    ],
                    'name': 'getAmountOut',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'getK',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'getReserves',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_reserve0',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_reserve1',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_blockTimestampLast',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'addedValue',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'increaseAllowance',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'index0',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'index1',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_token0',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_token1',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_stable',
                            'type': 'bool'
                        }
                    ],
                    'name': 'initialize',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'lastObservation',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'uint256',
                                    'name': 'timestamp',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'reserve0Cumulative',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'reserve1Cumulative',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IPool.Observation',
                            'name': '',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'metadata',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'dec0',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'dec1',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'r0',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'r1',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'st',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': 't0',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 't1',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        }
                    ],
                    'name': 'mint',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'name',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        }
                    ],
                    'name': 'nonces',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'observationLength',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'observations',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'timestamp',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'reserve0Cumulative',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'reserve1Cumulative',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'periodSize',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'v',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'r',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 's',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'permit',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'poolFees',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenIn',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'points',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'prices',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': '',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenIn',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'granularity',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'quote',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountOut',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'reserve0',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'reserve0CumulativeLast',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'reserve1',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'reserve1CumulativeLast',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenIn',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'points',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'window',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'sample',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': '',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': '__name',
                            'type': 'string'
                        }
                    ],
                    'name': 'setName',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'string',
                            'name': '__symbol',
                            'type': 'string'
                        }
                    ],
                    'name': 'setSymbol',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        }
                    ],
                    'name': 'skim',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'stable',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'supplyIndex0',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'supplyIndex1',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amount0Out',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount1Out',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bytes',
                            'name': 'data',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'swap',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'symbol',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'sync',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'token0',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'token1',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'tokens',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'totalSupply',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'transfer',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'transferFrom',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'PoolFactory': {
            'address': '0xF6cDfFf7Ad51caaD860e7A35d6D4075d74039a6B',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_implementation',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'FeeInvalid',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'FeeTooHigh',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidPool',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotFeeManager',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotPauser',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotVoter',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PoolAlreadyExists',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroFee',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'token0',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'token1',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'PoolCreated',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'fee',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'SetCustomFee',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'feeManager',
                            'type': 'address'
                        }
                    ],
                    'name': 'SetFeeManager',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'bool',
                            'name': 'state',
                            'type': 'bool'
                        }
                    ],
                    'name': 'SetPauseState',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'pauser',
                            'type': 'address'
                        }
                    ],
                    'name': 'SetPauser',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        }
                    ],
                    'name': 'SetVoter',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'MAX_FEE',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'ZERO_FEE_INDICATOR',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'allPools',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'allPoolsLength',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        }
                    ],
                    'name': 'createPool',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'customFee',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'feeManager',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_stable',
                            'type': 'bool'
                        }
                    ],
                    'name': 'getFee',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        }
                    ],
                    'name': 'getPool',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'implementation',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'isPaused',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        }
                    ],
                    'name': 'isPool',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'pauser',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'fee',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'setCustomFee',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bool',
                            'name': '_stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_fee',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'setFee',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_feeManager',
                            'type': 'address'
                        }
                    ],
                    'name': 'setFeeManager',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bool',
                            'name': '_state',
                            'type': 'bool'
                        }
                    ],
                    'name': 'setPauseState',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_pauser',
                            'type': 'address'
                        }
                    ],
                    'name': 'setPauser',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_voter',
                            'type': 'address'
                        }
                    ],
                    'name': 'setVoter',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'stableFee',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'volatileFee',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'voter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                }
            ]
        },
        'RewardsDistributor': {
            'address': '0x36cbf77D8F8355D7A077d670C29E290E41367072',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_ve',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'NotManagedOrNormalNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotMinter',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'UpdatePeriod',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'time',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'tokens',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'CheckpointToken',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'epochStart',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'epochEnd',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Claimed',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'WEEK',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'checkpointToken',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'claim',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': '_tokenIds',
                            'type': 'uint256[]'
                        }
                    ],
                    'name': 'claimMany',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'claimable',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'claimable_',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'lastTokenTime',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'minter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_minter',
                            'type': 'address'
                        }
                    ],
                    'name': 'setMinter',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'startTime',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'timeCursorOf',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'token',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'tokenLastBalance',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'tokensPerWeek',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'contract IVotingEscrow',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                }
            ]
        },
        'Router': {
            'address': '0xE8142D2f82036B6FC1e79E4aE85cF53FBFfDC998',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factoryRegistry',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_voter',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_weth',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'ETHTransferFailed',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'Expired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmount',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmountA',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmountADesired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmountAOptimal',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmountB',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientAmountBDesired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientLiquidity',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InsufficientOutputAmount',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidAmountInForETHDeposit',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidPath',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidRouteA',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidRouteB',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidTokenInForETHDeposit',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'OnlyWETH',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PoolDoesNotExist',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PoolFactoryDoesNotExist',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameAddresses',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ETHER',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': 'amounts',
                            'type': 'uint256[]'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'UNSAFE_swapExactTokensForTokens',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': '',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountADesired',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBDesired',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountAMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'addLiquidity',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountB',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'token',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountTokenDesired',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountTokenMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountETHMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'addLiquidityETH',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountToken',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountETH',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'defaultFactory',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'factoryRegistry',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountInA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountInB',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesA',
                            'type': 'tuple[]'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesB',
                            'type': 'tuple[]'
                        }
                    ],
                    'name': 'generateZapInParams',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMinA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMinB',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountAMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBMin',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesA',
                            'type': 'tuple[]'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesB',
                            'type': 'tuple[]'
                        }
                    ],
                    'name': 'generateZapOutParams',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMinA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMinB',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountAMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBMin',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        }
                    ],
                    'name': 'getAmountsOut',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': 'amounts',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        }
                    ],
                    'name': 'getReserves',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'reserveA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'reserveB',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'forwarder',
                            'type': 'address'
                        }
                    ],
                    'name': 'isTrustedForwarder',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        }
                    ],
                    'name': 'poolFor',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountADesired',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBDesired',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'quoteAddLiquidity',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountB',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'quoteRemoveLiquidity',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountB',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factory',
                            'type': 'address'
                        }
                    ],
                    'name': 'quoteStableLiquidityRatio',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'ratio',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountAMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountBMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'removeLiquidity',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountB',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'token',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountTokenMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountETHMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'removeLiquidityETH',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountToken',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountETH',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'token',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stable',
                            'type': 'bool'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountTokenMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountETHMin',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'removeLiquidityETHSupportingFeeOnTransferTokens',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountETH',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenA',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'tokenB',
                            'type': 'address'
                        }
                    ],
                    'name': 'sortTokens',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'token0',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'token1',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactETHForTokens',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': 'amounts',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactETHForTokensSupportingFeeOnTransferTokens',
                    'outputs': [],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactTokensForETH',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': 'amounts',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactTokensForETHSupportingFeeOnTransferTokens',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactTokensForTokens',
                    'outputs': [
                        {
                            'internalType': 'uint256[]',
                            'name': 'amounts',
                            'type': 'uint256[]'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'amountIn',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountOutMin',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routes',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'deadline',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'swapExactTokensForTokensSupportingFeeOnTransferTokens',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'voter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'weth',
                    'outputs': [
                        {
                            'internalType': 'contract IWETH',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenIn',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountInA',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'amountInB',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'tokenA',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'tokenB',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountOutMinA',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountOutMinB',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountAMin',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountBMin',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IRouter.Zap',
                            'name': 'zapInPool',
                            'type': 'tuple'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesA',
                            'type': 'tuple[]'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesB',
                            'type': 'tuple[]'
                        },
                        {
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': 'stake',
                            'type': 'bool'
                        }
                    ],
                    'name': 'zapIn',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'payable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'tokenOut',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'liquidity',
                            'type': 'uint256'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'tokenA',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'tokenB',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountOutMinA',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountOutMinB',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountAMin',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'amountBMin',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IRouter.Zap',
                            'name': 'zapOutPool',
                            'type': 'tuple'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesA',
                            'type': 'tuple[]'
                        },
                        {
                            'components': [
                                {
                                    'internalType': 'address',
                                    'name': 'from',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'to',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'stable',
                                    'type': 'bool'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'factory',
                                    'type': 'address'
                                }
                            ],
                            'internalType': 'struct IRouter.Route[]',
                            'name': 'routesB',
                            'type': 'tuple[]'
                        }
                    ],
                    'name': 'zapOut',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'stateMutability': 'payable',
                    'type': 'receive'
                }
            ]
        },
        'VeArtProxy': {
            'address': '0x53AF068205CB466d7Ce6e55fD1E64eB9eBcB7ce0',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_ve',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'circles',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'corners',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'curves',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'explosion',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'generateConfig',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'interlockingCircles',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'lineArtPathsOnly',
                    'outputs': [
                        {
                            'internalType': 'bytes',
                            'name': 'output',
                            'type': 'bytes'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'spiral',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'tokenURI',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': 'output',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'twoStripes',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'contract IVotingEscrow',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': '_tokenId',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_balanceOf',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedEnd',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': '_lockedAmount',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'shape',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'palette',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'maxLines',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'dash',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed1',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed2',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'seed3',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Config',
                            'name': 'cfg',
                            'type': 'tuple'
                        },
                        {
                            'internalType': 'int256',
                            'name': 'l',
                            'type': 'int256'
                        }
                    ],
                    'name': 'wormhole',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int256',
                                    'name': 'x',
                                    'type': 'int256'
                                },
                                {
                                    'internalType': 'int256',
                                    'name': 'y',
                                    'type': 'int256'
                                }
                            ],
                            'internalType': 'struct IVeArtProxy.Point[100]',
                            'name': 'Line',
                            'type': 'tuple[100]'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                }
            ]
        },
        'Voter': {
            'address': '0xC0F53703e9f4b79fA2FB09a2aeBA487FA97729c9',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_ve',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factoryRegistry',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'AlreadyVotedOrDeposited',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'DistributeWindow',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'FactoryPathNotApproved',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'GaugeAlreadyKilled',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'GaugeAlreadyRevived',
                    'type': 'error'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_pool',
                            'type': 'address'
                        }
                    ],
                    'name': 'GaugeDoesNotExist',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'GaugeExists',
                    'type': 'error'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'GaugeNotAlive',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InactiveManagedNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'MaximumVotingNumberTooLow',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NonZeroVotes',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotAPool',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotApprovedOrOwner',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotEmergencyCouncil',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotGovernor',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotMinter',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotWhitelistedNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotWhitelistedToken',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameValue',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SpecialVotingWindow',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'TooManyPools',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'UnequalLengths',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroBalance',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'totalWeight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Abstained',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gauge',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DistributeReward',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'poolFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'votingRewardsFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gaugeFactory',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'bribeVotingReward',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'feeVotingReward',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'gauge',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': 'creator',
                            'type': 'address'
                        }
                    ],
                    'name': 'GaugeCreated',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'GaugeKilled',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'GaugeRevived',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'reward',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'NotifyReward',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'voter',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'pool',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'totalWeight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Voted',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'whitelister',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'bool',
                            'name': '_bool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'WhitelistNFT',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'whitelister',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'token',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'bool',
                            'name': '_bool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'WhitelistToken',
                    'type': 'event'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_bribes',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'address[][]',
                            'name': '_tokens',
                            'type': 'address[][]'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'claimBribes',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_fees',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'address[][]',
                            'name': '_tokens',
                            'type': 'address[][]'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'claimFees',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_gauges',
                            'type': 'address[]'
                        }
                    ],
                    'name': 'claimRewards',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'claimable',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_poolFactory',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_pool',
                            'type': 'address'
                        }
                    ],
                    'name': 'createGauge',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'depositManaged',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_gauges',
                            'type': 'address[]'
                        }
                    ],
                    'name': 'distribute',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_start',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_finish',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'distribute',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'emergencyCouncil',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'epochGovernor',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'epochNext',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'epochStart',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'epochVoteEnd',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'epochVoteStart',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'factoryRegistry',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'forwarder',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'gaugeToBribe',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'gaugeToFees',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'gauges',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'governor',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_tokens',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'address',
                            'name': '_minter',
                            'type': 'address'
                        }
                    ],
                    'name': 'initialize',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'isAlive',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'isGauge',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'forwarder',
                            'type': 'address'
                        }
                    ],
                    'name': 'isTrustedForwarder',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'isWhitelistedNFT',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'isWhitelistedToken',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'killGauge',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'lastVoted',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'length',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'maxVotingNum',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'minter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'notifyRewardAmount',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'poke',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'poolForGauge',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'poolVote',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'pools',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'reset',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'reviveGauge',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_council',
                            'type': 'address'
                        }
                    ],
                    'name': 'setEmergencyCouncil',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_epochGovernor',
                            'type': 'address'
                        }
                    ],
                    'name': 'setEpochGovernor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_governor',
                            'type': 'address'
                        }
                    ],
                    'name': 'setGovernor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_maxVotingNum',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'setMaxVotingNum',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'totalWeight',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_gauge',
                            'type': 'address'
                        }
                    ],
                    'name': 'updateFor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'start',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'end',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'updateFor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address[]',
                            'name': '_gauges',
                            'type': 'address[]'
                        }
                    ],
                    'name': 'updateFor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'usedWeights',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 've',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address[]',
                            'name': '_poolVote',
                            'type': 'address[]'
                        },
                        {
                            'internalType': 'uint256[]',
                            'name': '_weights',
                            'type': 'uint256[]'
                        }
                    ],
                    'name': 'vote',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'votes',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'weights',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_bool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'whitelistNFT',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_token',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_bool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'whitelistToken',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'withdrawManaged',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'VotingEscrow': {
            'address': '0x27B04370D8087e714a9f557c1EFF7901cea6bB63',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_token',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_factoryRegistry',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'constructor'
                },
                {
                    'inputs': [],
                    'name': 'AlreadyVoted',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'AmountTooBig',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ERC721ReceiverRejectedTokens',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ERC721TransferToNonERC721ReceiverImplementer',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidManagedNFTId',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidNonce',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidSignature',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'InvalidSignatureS',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'LockDurationNotInFuture',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'LockDurationTooLong',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'LockExpired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'LockNotExpired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NoLockFound',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NonExistentToken',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotApprovedOrOwner',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotDistributor',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotEmergencyCouncilOrGovernor',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotGovernor',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotGovernorOrManager',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotLockedNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotManagedNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotManagedOrNormalNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotNormalNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotOwner',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotPermanentLock',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotTeam',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'NotVoter',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'OwnershipChange',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'PermanentLock',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SafeCastOverflow',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SafeCastUnderflow',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameNFT',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SameState',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SignatureExpired',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SplitNoOwner',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'SplitNotAllowed',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'TooManyTokenIDs',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAddress',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroAmount',
                    'type': 'error'
                },
                {
                    'inputs': [],
                    'name': 'ZeroBalance',
                    'type': 'error'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'approved',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Approval',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'operator',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'bool',
                            'name': 'approved',
                            'type': 'bool'
                        }
                    ],
                    'name': 'ApprovalForAll',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_fromTokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_toTokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'BatchMetadataUpdate',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_from',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': '_lockedManagedReward',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': '_freeManagedReward',
                            'type': 'address'
                        }
                    ],
                    'name': 'CreateManaged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'delegator',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'fromDelegate',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'toDelegate',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DelegateChanged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'delegate',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'previousBalance',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'newBalance',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DelegateVotesChanged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'provider',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'enum IVotingEscrow.DepositType',
                            'name': 'depositType',
                            'type': 'uint8'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'locktime',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Deposit',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'DepositManaged',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'LockPermanent',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_sender',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_from',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_to',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amountFrom',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amountTo',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_amountFinal',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_locktime',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Merge',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'MetadataUpdate',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_allowedManager',
                            'type': 'address'
                        }
                    ],
                    'name': 'SetAllowedManager',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_from',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId1',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId2',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'address',
                            'name': '_sender',
                            'type': 'address'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_splitAmount1',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_splitAmount2',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_locktime',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Split',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'prevSupply',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'supply',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Supply',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'from',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'to',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Transfer',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'amount',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'UnlockPermanent',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': 'provider',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': 'tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'value',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': 'ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'Withdraw',
                    'type': 'event'
                },
                {
                    'anonymous': false,
                    'inputs': [
                        {
                            'indexed': true,
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': true,
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_weight',
                            'type': 'uint256'
                        },
                        {
                            'indexed': false,
                            'internalType': 'uint256',
                            'name': '_ts',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'WithdrawManaged',
                    'type': 'event'
                },
                {
                    'inputs': [],
                    'name': 'CLOCK_MODE',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'pure',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'DELEGATION_TYPEHASH',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'DOMAIN_TYPEHASH',
                    'outputs': [
                        {
                            'internalType': 'bytes32',
                            'name': '',
                            'type': 'bytes32'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'allowedManager',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_approved',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'approve',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'artProxy',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        }
                    ],
                    'name': 'balanceOf',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'balanceOfNFT',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_t',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'balanceOfNFTAt',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'canSplit',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'checkpoint',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint48',
                            'name': '_index',
                            'type': 'uint48'
                        }
                    ],
                    'name': 'checkpoints',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'uint256',
                                    'name': 'fromTimestamp',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'address',
                                    'name': 'owner',
                                    'type': 'address'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'delegatedBalance',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'delegatee',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IVotingEscrow.Checkpoint',
                            'name': '',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'clock',
                    'outputs': [
                        {
                            'internalType': 'uint48',
                            'name': '',
                            'type': 'uint48'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_value',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_lockDuration',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'createLock',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_value',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_lockDuration',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        }
                    ],
                    'name': 'createLockFor',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        }
                    ],
                    'name': 'createManagedLockFor',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'deactivated',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'decimals',
                    'outputs': [
                        {
                            'internalType': 'uint8',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'delegator',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'delegatee',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'delegate',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'delegator',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'delegatee',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'nonce',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': 'expiry',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint8',
                            'name': 'v',
                            'type': 'uint8'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 'r',
                            'type': 'bytes32'
                        },
                        {
                            'internalType': 'bytes32',
                            'name': 's',
                            'type': 'bytes32'
                        }
                    ],
                    'name': 'delegateBySig',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': 'delegator',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'delegates',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'depositFor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'depositManaged',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'distributor',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'epoch',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'escrowType',
                    'outputs': [
                        {
                            'internalType': 'enum IVotingEscrow.EscrowType',
                            'name': '',
                            'type': 'uint8'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'factoryRegistry',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'forwarder',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'getApproved',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'getPastTotalSupply',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_account',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'getPastVotes',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'idToManaged',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_value',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'increaseAmount',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_lockDuration',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'increaseUnlockTime',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_owner',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_operator',
                            'type': 'address'
                        }
                    ],
                    'name': 'isApprovedForAll',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_spender',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'isApprovedOrOwner',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': 'forwarder',
                            'type': 'address'
                        }
                    ],
                    'name': 'isTrustedForwarder',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'lockPermanent',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'locked',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int128',
                                    'name': 'amount',
                                    'type': 'int128'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'end',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'bool',
                                    'name': 'isPermanent',
                                    'type': 'bool'
                                }
                            ],
                            'internalType': 'struct IVotingEscrow.LockedBalance',
                            'name': '',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'managedToFree',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'managedToLocked',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_from',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_to',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'merge',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'name',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'name': 'nonces',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'numCheckpoints',
                    'outputs': [
                        {
                            'internalType': 'uint48',
                            'name': '',
                            'type': 'uint48'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'ownerOf',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'ownerToNFTokenIdList',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'permanentLockBalance',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_loc',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'pointHistory',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int128',
                                    'name': 'bias',
                                    'type': 'int128'
                                },
                                {
                                    'internalType': 'int128',
                                    'name': 'slope',
                                    'type': 'int128'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'ts',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'blk',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'permanentLockBalance',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IVotingEscrow.GlobalPoint',
                            'name': '',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_from',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'safeTransferFrom',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_from',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bytes',
                            'name': '_data',
                            'type': 'bytes'
                        }
                    ],
                    'name': 'safeTransferFrom',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_allowedManager',
                            'type': 'address'
                        }
                    ],
                    'name': 'setAllowedManager',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_operator',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_approved',
                            'type': 'bool'
                        }
                    ],
                    'name': 'setApprovalForAll',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_proxy',
                            'type': 'address'
                        }
                    ],
                    'name': 'setArtProxy',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_mTokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_state',
                            'type': 'bool'
                        }
                    ],
                    'name': 'setManagedState',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_team',
                            'type': 'address'
                        }
                    ],
                    'name': 'setTeam',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_voter',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_distributor',
                            'type': 'address'
                        }
                    ],
                    'name': 'setVoterAndDistributor',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'slopeChanges',
                    'outputs': [
                        {
                            'internalType': 'int128',
                            'name': '',
                            'type': 'int128'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_from',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_amount',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'split',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId1',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId2',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'supply',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'bytes4',
                            'name': '_interfaceID',
                            'type': 'bytes4'
                        }
                    ],
                    'name': 'supportsInterface',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'symbol',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'team',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_account',
                            'type': 'address'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_bool',
                            'type': 'bool'
                        }
                    ],
                    'name': 'toggleSplit',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'token',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'tokenId',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'tokenURI',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'totalSupply',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_timestamp',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'totalSupplyAt',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_from',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': '_to',
                            'type': 'address'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'transferFrom',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'unlockPermanent',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'userPointEpoch',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '_loc',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'userPointHistory',
                    'outputs': [
                        {
                            'components': [
                                {
                                    'internalType': 'int128',
                                    'name': 'bias',
                                    'type': 'int128'
                                },
                                {
                                    'internalType': 'int128',
                                    'name': 'slope',
                                    'type': 'int128'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'ts',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'blk',
                                    'type': 'uint256'
                                },
                                {
                                    'internalType': 'uint256',
                                    'name': 'permanent',
                                    'type': 'uint256'
                                }
                            ],
                            'internalType': 'struct IVotingEscrow.UserPoint',
                            'name': '',
                            'type': 'tuple'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'version',
                    'outputs': [
                        {
                            'internalType': 'string',
                            'name': '',
                            'type': 'string'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'voted',
                    'outputs': [
                        {
                            'internalType': 'bool',
                            'name': '',
                            'type': 'bool'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [],
                    'name': 'voter',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': '',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'bool',
                            'name': '_voted',
                            'type': 'bool'
                        }
                    ],
                    'name': 'voting',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        },
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'weights',
                    'outputs': [
                        {
                            'internalType': 'uint256',
                            'name': '',
                            'type': 'uint256'
                        }
                    ],
                    'stateMutability': 'view',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'withdraw',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                },
                {
                    'inputs': [
                        {
                            'internalType': 'uint256',
                            'name': '_tokenId',
                            'type': 'uint256'
                        }
                    ],
                    'name': 'withdrawManaged',
                    'outputs': [],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        },
        'VotingRewardsFactory': {
            'address': '0xCEf48ee1b2F7c0833D6F097c69D1ed4159b60958',
            'abi': [
                {
                    'inputs': [
                        {
                            'internalType': 'address',
                            'name': '_forwarder',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address[]',
                            'name': '_rewards',
                            'type': 'address[]'
                        }
                    ],
                    'name': 'createRewards',
                    'outputs': [
                        {
                            'internalType': 'address',
                            'name': 'feesVotingReward',
                            'type': 'address'
                        },
                        {
                            'internalType': 'address',
                            'name': 'bribeVotingReward',
                            'type': 'address'
                        }
                    ],
                    'stateMutability': 'nonpayable',
                    'type': 'function'
                }
            ]
        }
    }
};