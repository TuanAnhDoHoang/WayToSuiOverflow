import { SuiObjectData } from '@mysten/sui/client';
import { QUADRANT_ADDRESSES } from '../deployed_addresses.json'
import { useObjectSync } from '../utils/hooks';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'
export interface PlaceBoardProps {
    color: string
}
function PlaceBoard({ color }: PlaceBoardProps) {
    const quadrant_responses = QUADRANT_ADDRESSES.map(quadrant_address =>
        useObjectSync(quadrant_address, 3)
    );
    if (!quadrant_responses.every(x => x)) {
        return (
            <div className='place' style={{
                textAlign: 'center',
                fontSize: '50px',
            }}>
                Loading...
            </div>
        )
    }
    // console.log(quadrant_responses)
    const quadrants = (quadrant_responses as SuiObjectData[])
        .map(quadrant => {
            if (quadrant.content?.dataType == "moveObject") {
                return [
                    (quadrant.content.fields as any)["board"],
                    quadrant.digest
                ] as [number[][], string]
            }
        })

    return (
        <div className="place">
            <TransformWrapper >
                <div>
                    <TransformComponent>

                    </TransformComponent>
                </div>
            </TransformWrapper>
        </div>
    );
}

export default PlaceBoard;