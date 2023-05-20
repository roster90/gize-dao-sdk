import { GasBudget, OptionTx } from '../common';
import { ICreateDao, IDaoFuncContract } from './interface';




export abstract class DaoFRefFunc<T> implements IDaoFuncContract{

    abstract createDao(    
        types: { COIN: string; },
        args: ICreateDao,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract setDaoAdmin(    
        types: { COIN: string; },
        args: ICreateDao,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract setDaoOperator(    
        types: { COIN: string; },
        args: ICreateDao,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract setNftBoost(    
        types: { COIN: string; },
        args: ICreateDao,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract setTokenBoost(    
        types: { COIN: string; },
        args: ICreateDao,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;



    abstract snapshotNft(    
        types: { COIN: string; },
        args: ICreateDao,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract unsnapshotNft(    
        types: { COIN: string; },
        args: ICreateDao,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract snapshotToken(    
        types: { COIN: string; },
        args: ICreateDao,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;

    abstract unsnapshotToken(    
        types: { COIN: string; },
        args: ICreateDao,
        optionTx?: OptionTx,
        gasBudget?: GasBudget,
        packageObjectId?: string | null
    ): T;



}