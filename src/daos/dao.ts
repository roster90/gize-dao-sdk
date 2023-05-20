import {
    RawSigner,
    JsonRpcProvider,
    SuiTransactionBlockResponse,
    ExecuteTransactionRequestType,
    SuiJsonValue,
  } from '@mysten/sui.js';
import { DaoFRefFunc } from './abs.dao.func';

import { DaoRefInput } from './dao.func.input';
import { OptionTx } from '../common';
import { ICreateDao } from './interface';


  export class Dao extends DaoFRefFunc<Promise<SuiTransactionBlockResponse>>{

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
    async createDao(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.createDao(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }


    async setDaoAdmin(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.createDao(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async setDaoOperator(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.createDao(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async setNftBoost(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.createDao(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async setTokenBoost(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.createDao(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async snapshotNft(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.createDao(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async snapshotToken(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.createDao(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }


    async unsnapshotNft(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.createDao(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }
    
    async unsnapshotToken(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.createDao(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }
    
    
  }