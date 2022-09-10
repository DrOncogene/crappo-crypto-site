let intersectionObserver;

function ensureIntersectionObserver() {
	if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach(entry => {
        const entryRect = entry.target.getBoundingClientRect()
        const entered = entryRect.top < (innerHeight - 0.25 * entryRect.height) && entryRect.bottom > innerHeight
        const exited = entryRect.top > (innerHeight - 0.25 * entryRect.height) && entryRect.bottom > innerHeight
				// const eventName = entered ? 'enterViewport' : 'exitViewport';
        // console.log(entered, exited)
        // console.log(entry.target, entry.isIntersecting)
        if (entry.isIntersecting) {
          if (entered)
            entry.target.dispatchEvent(new CustomEvent('enterViewport'));
          else if (exited) {
            entry.target.dispatchEvent(new CustomEvent('exitViewport'));
          }
        }
			});
		}, {
      root: null,
      threshold: [0, 0.5, 1]
    }
	);
}

export function viewport(element) {
	ensureIntersectionObserver();

	intersectionObserver.observe(element);

	return {
		destroy() {
			intersectionObserver.unobserve(element);
		}
	}
}

export const inViewportAnim = (elem, anim) => {
  elem.classList.add(`${anim}-in`)
  elem.classList.remove(`${anim}-out`)
}

export const outViewportAnim = (elem, anim) => {
  elem.classList.remove(`${anim}-in`)
  elem.classList.add(`${anim}-out`)
}
