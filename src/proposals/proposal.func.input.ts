import { ExecuteTransactionRequestType, TransactionArgument, TransactionBlock } from '@mysten/sui.js';
import { ProposalFRefFunc } from './abs.proposal.func';
import { GasBudget, OptionTx, configGasBudget, getGasBudget, manageObjectCoin } from '../common';
import { IVoting } from './interface';



export class ProposalFRefInput extends ProposalFRefFunc<TransactionBlock>{
    _module: string;
    _packageObjectId: string; 
    
    constructor(packageObjectId: string, module: string) {
        super();
        this._packageObjectId = packageObjectId;
        this._module = module;
      }

      _getPackageObjectId = (packageObjectId?: string | null) => {
        if (packageObjectId != null && packageObjectId != undefined) {
          return packageObjectId;
        }
        return this._packageObjectId;
      };

      submitProposalByRole(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::submitProposalByRole`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }

      submitProposalByToken(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::submitProposalByToken`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }


      submitProposalByNfts(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::submitProposalByToken`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }


      submitProposalBySnapshotPower(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::submitProposalBySnapshotPower`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }


      addProposalChoice(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::addProposalChoice`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }


      listProposal(){}
      


      delistProposal(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::delistProposal`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }


      voteBySnapshotPower(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::voteBySnapshotPower`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }

      voteByToken(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::voteByToken`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }

      voteByNfts(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::voteByNfts`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }


      
      unvote(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::unvote`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }



      finalize(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::finalize`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }
}
