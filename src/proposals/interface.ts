export interface IProposalFuncContract{

	//public func 
	submitProposalByRole: any;
	submitProposalByToken: any;
	submitProposalByNfts: any;
	submitProposalBySnapshotPower: any;
	// submitProposal: any;
	addProposalChoice: any;
	listProposal: any;
	delistProposal: any;
	voteBySnapshotPower: any;
	voteByToken: any;
	voteByNfts: any;
	unvote: any;
	finalize: any;

}



export interface ICreateProposal{
    dao: string;
	title: string;
	description: string;
	images: string[];
	start_time: Date;
	end_time: Date;
	voting_setup: string;
	voting_strategies: number;
}

export interface IDao{
    dao: string;
	title: string;
	description: string;
	images: string[];
	start_time: Date;
	end_time: Date;
	voting_setup: string;
	voting_strategies: number;
}


export interface IVoting{

}