interface CacheManagerOptions {
    /**
     * Decides if the content should be safed to a file or not
     * When `true` and no `safePath` was set, the default dir `@/cache/*` will be used
     * Default is `false`
     */
    safeToFile?: boolean,
    safePath?: string
}

/**
 * 
 */
export default class CacheManager<T> {
    constructor(options: CacheManagerOptions) {

    }
}