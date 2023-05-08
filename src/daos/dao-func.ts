import { GasBudget, OptionTx } from '../common';
import { IProposal, IVoting } from './interface';




export abstract class DaoFRefFunc<T>{


    abstract createProposal(    
        types: { COIN: string; },
        args: IProposal,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract votingProposal(
        types: { COIN: string; },
        args: IVoting,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ):T;

    abstract claimNftFriendShip(
        types: { COIN: string; },
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ):T;




}