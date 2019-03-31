function searchInMembers() {

  var search, searchFilter, ul, member, a, i;
  search = document.getElementById("search");
  searchFilter = search.value.toUpperCase();
  ul = document.getElementById("members");
  member = ul.getElementsByTagName("li");

  for (i = 0; i < member.length; i++) {
    a = member[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(searchFilter) > -1) {
      member[i].style.display = "";
    } else {
      member[i].style.display = "none";
    }
  }
}
