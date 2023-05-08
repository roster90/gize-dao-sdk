import {
    RawSigner,
    JsonRpcProvider,
    SuiTransactionBlockResponse,
    ExecuteTransactionRequestType,
    SuiJsonValue,
  } from '@mysten/sui.js';
import { DaoFRefFunc } from './dao-func';
import { IProposal, IVoting } from './interface';
import { DaoRefInput } from './dao-func-input';
import { OptionTx } from '../common';


  export class Proposal extends DaoFRefFunc<Promise<SuiTransactionBlockResponse>>{

    _suiProvider: JsonRpcProvider;
    _daoRefInput: DaoRefInput;
    _signer: RawSigner;
    constructor(signer: RawSigner, packageObjectId: string, module: string) {
      super();

      this._signer = signer;
      this._suiProvider = signer.provider;
    }
    _getOptionTx(optionTx: OptionTx): OptionTx {
      if (optionTx) {
        return optionTx;
      }
      return {
        options: {
          showInput: true,
          showEffects: true,
          showEvents: true,
          showObjectChanges: false,
          showBalanceChanges: false,
        },
        requestType: 'WaitForEffectsCert',
      };
    }
    async createProposal(types: { COIN: string; }, args: IProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.createProposal(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async votingProposal(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.votingProposal(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async claimNftFriendShip(types: { COIN: string; }, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string):Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.claimNftFriendShip(
          types,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      });   
    }

    
  }