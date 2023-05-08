export interface IProposal{
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