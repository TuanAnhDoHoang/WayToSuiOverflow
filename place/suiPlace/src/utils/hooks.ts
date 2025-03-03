import { useCurrentAccount, useSuiClient, useWallets } from "@mysten/dapp-kit";
import { SuiObjectData } from "@mysten/sui/client";
import { useState, useEffect } from "react"

export const useObjectSync = (object_id: string, interval: number) => {
    const [object, setObject] = useState<SuiObjectData | null>(null)
    const currAccount = useCurrentAccount();
    const client = useSuiClient();
    const wallet = useWallets();
    useEffect(() => {
        const interval_id = setInterval(async () => {
            if (currAccount) {
                const getObject = await client.getObject(
                    {
                        id: object_id,
                        options: {
                            showContent: true,
                        }
                    }
                );
                if (getObject) {
                    setObject(getObject.data ?? null);
                }
            }
        }, interval * 1000);
        return () => clearInterval(interval_id);
    }, [wallet]);
    return object;
}