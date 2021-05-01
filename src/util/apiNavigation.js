/* eslint-disable */
class ApiNavigation {
  views = []
  currentSearch
  getCurrent () {
    console.log(this.currentSearch)
    return this.currentSearch
  }

  setCurrent (data) {
    this.currentSearch = data
  }
}
export default new ApiNavigation()
/* eslint-disable */