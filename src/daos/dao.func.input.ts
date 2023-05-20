import { ExecuteTransactionRequestType, TransactionArgument, TransactionBlock } from '@mysten/sui.js';
import { DaoFRefFunc } from './abs.dao.func';
import { GasBudget, OptionTx, configGasBudget, getGasBudget, manageObjectCoin } from '../common';
import { ICreateDao } from './interface';



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

      createDao(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::createDao`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }

      setDaoAdmin(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::setDaoAdmin`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }

      setDaoOperator(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::setDaoOperator`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }

      setNftBoost(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::createDao`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }

      setTokenBoost(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::setNftBoost`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }

      snapshotNft(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::snapshotNft`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }

      unsnapshotNft(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::snapshotNft`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }




      snapshotToken(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::snapshotToken`,
          arguments: [
            // tx.pure(args.admin_cap),
            // tx.pure(args.distribute_time_ms),
          ],
          typeArguments: [types.COIN],
        });
        tx = configGasBudget(tx, gasBudget)
        return tx;
      }


      unsnapshotToken(types: { COIN: string; }, args: ICreateDao, optionTx?: { options?: { showInput?: boolean; showEffects?: boolean; showEvents?: boolean; showObjectChanges?: boolean; showBalanceChanges?: boolean; }; requestType?: ExecuteTransactionRequestType; }, gasBudget?: number, packageObjectId?: string): TransactionBlock {
        let tx = new TransactionBlock();
        tx.moveCall({
          target: `${this._getPackageObjectId(packageObjectId)}::${this._module
            }::unsnapshotToken`,
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
