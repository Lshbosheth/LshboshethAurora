import { nextTick } from 'vue'
import NProgress, {NProgressOptions} from 'nprogress'
import 'nprogress/nprogress.css'

export const useNProgress = () => {
  NProgress.configure({ showSpinner: false } as NProgressOptions)

  const initColor = async () => {
    await nextTick()
		const bar = document.getElementById('nprogress')?.getElementsByClassName('bar')[0] as HTMLElement
		if (bar) {
			const gradientColors = Array.from({ length: 7 }, () => getRandomColor());
			const gradientString = `linear-gradient(to bottom, ${gradientColors.join(', ')})`;
			bar.style.background = gradientString;
    }
  }

	const getRandomColor = ()=> {
		const letters = '0123456789ABCDEF';
		let color = '#';
		for (let i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

  const start = () => {
		initColor()
    NProgress.start()
  }

  const done = () => {
    NProgress.done()
  }

  return {
    start,
    done
  }
}
