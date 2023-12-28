import router from '../index'
import { useNProgress } from '@/hooks'

const { start, done } = useNProgress()

router.beforeEach(() => {
    start()
})

router.afterEach(() => {
    done()
})
