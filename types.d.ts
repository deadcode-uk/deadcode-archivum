import { InStatement, InValue, ResultSet } from "@libsql/client"

export type Row<T> = T & {
    id: number
    created_at: number
    updated_at: number
}

export type Rows<T> = Row<T>[]

export function sqlite(sql: TemplateStringsArray, ...args: InValue[]): InStatement

export function row<T>(result: ResultSet): T | null

export function rows<T>(result: ResultSet): T[]

export function unix(): number
