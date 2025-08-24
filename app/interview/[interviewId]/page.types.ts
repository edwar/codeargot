export enum StatusCall {
    INACTIVE = 'Inactive',
    CONNECTING = 'Connecting',
    ACTIVE = 'Active',
    FINISHED = 'Finished',
}

export type Speaker = 'user' | 'ai' | null

export interface Message {
    role: string
    content: string
}

export interface MessageVapi {
  role: string
  transcript: string
  transcriptType: string
  type: string
}
