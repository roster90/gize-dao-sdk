import { ExecuteTransactionRequestType, TransactionArgument, TransactionBlock } from '@mysten/sui.js';
import { DaoFRefFunc } from './dao-func';
import { GasBudget, OptionTx, configGasBudget, getGasBudget, manageObjectCoin } from '../common';
import { IProposal, IVoting } from './interface';


export class DaoRefInput extends DaoFRefFunc<TransactionBlock>{
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

      createProposal(types: { COIN: string; }, args: IProposal, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::create_proposal`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }
      votingProposal(types: { COIN: string; }, args: IVoting, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::voting_proposal`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;  
      }
      claimNftFriendShip(types: { COIN: string; }, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::claim_nft`,
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
