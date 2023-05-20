import {
    RawSigner,
    JsonRpcProvider,
    SuiTransactionBlockResponse,
    ExecuteTransactionRequestType,
    SuiJsonValue,
  } from '@mysten/sui.js';
import { ProposalFRefFunc } from './abs.proposal.func';

import { ProposalFRefInput } from './proposal.func.input';
import { OptionTx } from '../common';
import { ICreateProposal, IVoting } from './interface';


  export class Proposal extends ProposalFRefFunc<Promise<SuiTransactionBlockResponse>>{

    _suiProvider: JsonRpcProvider;
    _daoRefInput: ProposalFRefInput;
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
    async submitProposalByRole(types: { COIN: string; }, args: ICreateProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.submitProposalByNfts(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async submitProposalByToken(types: { COIN: string; }, args: ICreateProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.submitProposalByNfts(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }


    async submitProposalByNfts(types: { COIN: string; }, args: ICreateProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.submitProposalByNfts(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }


    async submitProposalBySnapshotPower(types: { COIN: string; }, args: ICreateProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.submitProposalByNfts(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }





    async addProposalChoice(types: { COIN: string; }, args: ICreateProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.submitProposalByNfts(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }


    async listProposal() {
     
    }


    async delistProposal(types: { COIN: string; }, args: ICreateProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.submitProposalByNfts(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async voteBySnapshotPower(types: { COIN: string; }, args: ICreateProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.submitProposalByNfts(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }
    async voteByToken(types: { COIN: string; }, args: ICreateProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.submitProposalByNfts(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }
    async voteByNfts(types: { COIN: string; }, args: ICreateProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.submitProposalByNfts(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async unvote(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.voteByNfts(
          types,
          args,
          optionTx,
          gasBudget,
          packageObjectId,
        ),
        ...this._getOptionTx(optionTx),
      }); 
    }

    async finalize(types: { COIN: string; }, args: ICreateProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): Promise<SuiTransactionBlockResponse> {
      return await this._signer.signAndExecuteTransactionBlock({
        transactionBlock: this._daoRefInput.submitProposalByNfts(
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