
export interface ICreateDao{
    dao: string;
	title: string;
	description: string;
	images: string[];
	start_time: Date;
	end_time: Date;
	voting_setup: string;
	voting_strategies: number;
}

export interface IDaoFuncContract{
	//public func
	// addDaoAdmin: any;
	// addDaoOperator: any;



	//entries
	createDao: any;
	setDaoAdmin: any;
	setDaoOperator:any;
	setNftBoost: any;
	setTokenBoost: any;
	snapshotNft: any;
	unsnapshotNft: any;
	snapshotToken: any;
	unsnapshotToken: any;
	
}



