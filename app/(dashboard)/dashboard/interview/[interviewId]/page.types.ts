export interface TranscriptMessage {
  role: "user" | "system" | "assistant"
  content: string
}