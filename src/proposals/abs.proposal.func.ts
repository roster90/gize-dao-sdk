import { GasBudget, OptionTx } from '../common';
import { ICreateProposal, IProposalFuncContract, IVoting } from './interface';




export abstract class ProposalFRefFunc<T> implements IProposalFuncContract {


    abstract submitProposalByRole(    
        types: { COIN: string; },
        args: ICreateProposal ,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;


    abstract submitProposalByToken(    
        types: { COIN: string; },
        args: ICreateProposal ,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract submitProposalByNfts(    
        types: { COIN: string; },
        args: ICreateProposal ,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;


    abstract submitProposalBySnapshotPower(    
        types: { COIN: string; },
        args: ICreateProposal ,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;


    abstract addProposalChoice(    
        types: { COIN: string; },
        args: ICreateProposal ,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;


    abstract listProposal(    
       
    );


    abstract delistProposal(    
        types: { COIN: string; },
        args: ICreateProposal ,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;


    abstract voteBySnapshotPower(    
        types: { COIN: string; },
        args: ICreateProposal ,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract voteByToken(    
        types: { COIN: string; },
        args: ICreateProposal ,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract voteByNfts(    
        types: { COIN: string; },
        args: ICreateProposal ,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;


    abstract unvote(
        types: { COIN: string; },
        args: IVoting,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ):T;

    abstract finalize(
        types: { COIN: string; },
        args: IVoting,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ):T;


}