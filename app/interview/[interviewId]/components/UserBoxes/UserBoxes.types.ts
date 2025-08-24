import { StatusCall } from "../../page.types"
import { Speaker } from "../../page.types"

export interface UserBoxesProps {
    callStatus: StatusCall
    endCall: () => void
    startCall: () => void
    toogleMicrophone: () => void
    speaking: Speaker
    isMute: boolean
}