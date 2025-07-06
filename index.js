export function sqlite(sql, ...args) {
    return {
        sql: sql.join("?"),
        args
    }
}

export function row(result) {
    if (result.rows.length < 1) {
        return null
    }
    return result.rows[0]
}

export function rows(result) {
    return result.rows
}
