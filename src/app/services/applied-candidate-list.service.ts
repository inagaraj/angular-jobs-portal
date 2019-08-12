export class AppliedCandidateList {

  list = [{
    name: 'haniel',
    role: 'observer'
  }, {
    name: 'Nags',
    role: 'Developer'
  }];

  getList(id) {
    const num = +id;
    return (this.list[num - 1]);
  }

}
