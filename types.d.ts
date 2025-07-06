import { InStatement, InValue, ResultSet } from "@libsql/client"

export function sqlite(sql: TemplateStringsArray, ...args: InValue[]): InStatement

export function row<T>(result: ResultSet): T | null

export function rows<T>(result: ResultSet): T[]
