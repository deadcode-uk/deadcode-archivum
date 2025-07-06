# Archivum

Helper functions for JavaScript and TypeScript that compliment the libSQL client

**Installation**

```
npm install @deadcode-uk/archivum
```

**Peer Dependencies**

Your project will need to include the following packages:

```
@libsql/client
```

## sqlite

`sqlite` is used as a template literal tag, and simplifies the creation of query statements, especially when arguments need to be passed into the statement

```ts
import { createClient } from "@libsql/client"
import { sqlite } from "@deadcode-uk/archivium"

const client = createClient(...)

export async function soSomething(): Promise<void> {
    const someValue = 100

    await client.execute(sqlite`
        SELECT * FROM my_table WHERE my_column = ${someValue} LIMIT 1
    `)
}
```

That would produce the same result as:

```ts
import { createClient } from "@libsql/client"
import { sqlite } from "@deadcode-uk/archivium"

const client = createClient(...)

export async function soSomething(): Promise<void> {
    const someValue = 100

    await client.execute({
        sql: "SELECT * FROM my_table WHERE my_column = ? LIMIT 1",
        args: [someValue]
    })
}
```

## row and rows

The `row` and `rows` functions are for use in TypeScript, they essentially handle type-casting of the result object returned from libSQL queries

```ts
import { createClient } from "@libsql/client"
import { row, rows, sqlite } from "@deadcode-uk/archivium"

const client = createClient(...)

export type Example = {
    id: number
    created_at: number
    updated_at: number
}

export async function fetchFirstExample(): Promise<Example | null> {
    const result = await client.execute(`
        SELECT * FROM examples LIMIT 1
    `)

    return row(result) // or row<Example>(result)
}

export async function fetchAllExamples(): Promise<Example[]> {
    const result = await client.execute(`
        SELECT * FROM examples
    `)

    return rows(result) // or rows<Example>(result)
}
```
