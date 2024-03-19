export const updateBgColor = (
  exhibitionsSection: HTMLElement | null,
  eventsSection: HTMLElement | null
) => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop

  if (
    scrollTop >= (exhibitionsSection?.offsetTop ?? 0) - 300 &&
    scrollTop < (eventsSection?.offsetTop ?? 0)
  ) {
    return "bg-primaryRed"
  } else if (eventsSection && scrollTop >= eventsSection.offsetTop) {
    return "bg-primaryGreen"
  } else {
    return "bg-primaryBlue"
  }
}
