//create a new image
var img = new Image();
//variables for height and width
var h;
var w;


//run the code after the image loaded
img.onload = function(){
  //-----------------------------------------------------------------------
  //INITIAL SETUP FUNCTIONS:
  //-----------------------------------------------------------------------
  //set height and width from the loaded image
  h = img.height;
  w = img.width;
  //set border size
  var border = 90;
  //set the frame to fit the screen with bordersize
  function framesizer(h, w, border){
    var frame = document.getElementById("frame").style;
    frame.width = border + "vw";
    frame.height = h/w * border + "vw";
    frame.maxHeight = border + "vh";
    frame.maxWidth = w/h * border + "vh";
  }
  //call framesizer
  framesizer(h, w, border);
  //get random divider
  function rand(){
    var slicer = [ 25, 35, 45, 55, 65, 75, 85];
    return slicer[Math.floor(Math.random() * 6)];
  }
  //variable for the random divider
  var divider = rand();
  //create default panels
  function default_panels(h, w, divider){
    //create div1
    var new_div_1 = document.createElement("div");
    new_div_1.setAttribute("id", "panel_1");
    new_div_1.setAttribute("class", "panel");
    document.getElementById("frame").appendChild(new_div_1);
    //set div1 parameters
    var panel_1 = document.getElementById("panel_1").style;
    panel_1.height = "100%";
    panel_1.width =  divider + "%";
    panel_1.backgroundImage = picture;
    panel_1.backgroundSize = 100 / divider * 100 + "% " + 100 + "%";
    panel_1.backgroundPosition = "left 0%" + "top 0%";
    panel_1.top = 0 + "%";
    panel_1.left = 0 + "%";
    //create div2
    var new_div_2 = document.createElement("div");
    new_div_2.setAttribute("id", "panel_2");
    new_div_2.setAttribute("class", "panel");
    document.getElementById("frame").appendChild(new_div_2);
    //set div2 parameters
    var panel_2 = document.getElementById("panel_2").style;
    panel_2.height = "100%";
    panel_2.width =  100 - divider + "%";
    panel_2.backgroundImage = picture;
    panel_2.backgroundSize = 100 / (100 - divider) * 100 + "% " + 100 + "%";
    panel_2.backgroundPosition = "left 100% top 0%";
    panel_2.top = 0 + "%";
    panel_2.left = panel_1.width;
  }
  //call default_panels
  default_panels(h, w, divider);
  //panels height and width database
  var data_height = [100, 100];
  var data_width = [divider, 100 - divider];
  //divide the frame accoording to the total number of panels
  function divide_panels(h, w, data_width, data_height, total_panels){
    for (var i = 0; i < total_panels; i++) {
      horizontal_div(h, w, data_width, data_height);
      vertical_div(h, w, data_width, data_height);
    }
  }
  //call divide_panels
  divide_panels(h, w, data_width, data_height, total_panels);
  //-----------------------------------------------------------------------
  //HELPER FUNCTIONS FOR PANEL CREATION
  //-----------------------------------------------------------------------
  //find the panel with the maximum width
  function findmax_h(array_h, array_w) {
    var max_h = 0
    var max_w = 0
    var a = array_h.length;
    var counter;
    var c = 0;
    for (counter = 0; counter < a; counter++) {
      if (array_h[counter] > max_h) {
        max_h = array_h[counter];
        max_w = array_w[counter];
        c = counter;
      }
      else if (array_h[counter] == max_h && array_w[counter] > max_w) {
          max_h = array_h[counter];
          max_w = array_w[counter];
          c = counter;
      }
    }
    return c;
  }
  //find the panel with the maximum height
  function findmax_w(array_w, array_h) {
    var max_w = 0;
    var max_h = 0;
    var a = array_w.length;
    var counter;
    var c = 0;
    for (counter = 0; counter < a; counter++) {
      if (array_w[counter] > max_w) {
        max_h = array_h[counter];
        max_w = array_w[counter];
        c = counter;
      }
      else if (array_w[counter] == max_w && array_h[counter] > max_h) {
          max_h = array_h[counter];
          max_w = array_w[counter];
          c = counter;
      }
    }
    return c;
  }
  //create a new array which removes "%" from the end
  function array_to_number(array, new_array) {
    var a = array.length - 2;
    var counter;
    for (counter = 0; counter < a; counter++) {
      new_array[counter] =
      Number(array[counter].substring(0, array[counter].length - 1));
    }
    return new_array;
  }
  //background position for left when the cut is horizontal
  function background_posi_left_hor(pos_left, pos_width){
    if (pos_left == 0) {
      return 0;
    }
    else if (pos_left + pos_width == 100) {
      return 100;
    }
    else {
      return pos_left / ((100 - pos_width) / 100);
    }
  }
  //background position for top when the cut is horizontal
  function background_posi_top_hor(pos_top, pos_heigth){
    if (pos_top == 0) {
      return 0;
    }
    else if (pos_top + pos_heigth == 100) {
      return 100;
    }
    else if (pos_top == 100) {
      return pos_top / ((100 - pos_heigth) / 100);
    }
    else {
      return pos_top / ((100 - pos_heigth) / 100);
    }
  }
  //background position for left when the cut is vertical
  function background_posi_left_ver(pos_left, pos_width){
    if (pos_left == 0) {
      return 0;
    }
    else if (pos_left + pos_width == 100) {
      return 100;
    }
    else if (pos_left == 100) {
      return pos_left / ((100 - pos_width) / 100);
    }
    else {
      return pos_left / ((100 - pos_width) / 100);
    }
  }
  //background position for top when the cut is vertical
  function background_posi_top_ver(pos_top, pos_heigth){
    if (pos_top == 0) {
      return 0;
    }
    else if (pos_top + pos_heigth == 100) {
      return 100;
    }
    else {
      return pos_top / ((100 - pos_heigth) / 100);
    }
  }
  //-----------------------------------------------------------------------
  //FUNCTIONS FOR PANEL CREATION
  //-----------------------------------------------------------------------
  //new horizontal division
  function horizontal_div(h, w, data_width, data_height) {
    //find panel with max width
    var max_wid = findmax_w(data_height, data_width);
    //select panel with max width
    var panel_num_to_be_resize = "panel_" + (max_wid + 1);
    var panel_to_resize = document.getElementById(panel_num_to_be_resize);
    var panel_to_style = panel_to_resize.style;
    //get original panel parameters
    var origiginal_parameters = [panel_to_style.width, panel_to_style.height,
    panel_to_style.backgroundSize, panel_to_style.top,
    panel_to_style.left, panel_to_style.backgroundPosition,
    panel_to_style.backgroundImage];
    //create array for parameters as numbers
    var og_parameters = [];
    array_to_number(origiginal_parameters, og_parameters);
    //call new divider random value
    var hor_divider = rand();
    //set original panel parameters
    var p1_w = og_parameters[0];
    var p1_h = hor_divider * og_parameters[1] / 100;
    var p1_t =  og_parameters[3];
    var p1_l = og_parameters[4];

    panel_to_style.width = p1_w + "%";
    panel_to_style.height = p1_h + "%";
    var p1_s = origiginal_parameters[2].split(" ");
    var p1_sx = Number(p1_s[0].substring(0, p1_s[0].length -1));
    var p1_sy = Number(p1_s[1].substring(0, p1_s[1].length -1));
    panel_to_style.backgroundSize = p1_sx + "% " + 100 / p1_h * 100 + "%";
    var p1_x = background_posi_left_hor(p1_l, p1_w);
    var p1_y = background_posi_top_hor(p1_t, p1_h);
    panel_to_style.top = p1_t + "%";
    panel_to_style.left = p1_l + "%";
    panel_to_style.backgroundPosition = "left " + p1_x + "%" + " " + "top " + p1_y + "%";
    //create new panel with id++
    var n_panel_id = data_width.length + 1;
    var n_panel = document.createElement("div");
    n_panel.setAttribute("id", "panel_" + n_panel_id);
    n_panel.setAttribute("class", "panel");
    document.getElementById("frame").appendChild(n_panel);
    var new_panel = document.getElementById("panel_" + n_panel_id).style;
    //set new panel parameters
    var pn_w = og_parameters[0];
    var pn_h = og_parameters[1] - hor_divider * og_parameters[1] / 100;
    var pn_t = og_parameters[3] + hor_divider * og_parameters[1] / 100;
    var pn_l = og_parameters[4];

    new_panel.width = pn_w + "%";
    new_panel.height = pn_h + "%";
    new_panel.backgroundImage = picture;
    var pn_s = origiginal_parameters[2].split(" ");
    var pn_sx = Number(pn_s[0].substring(0, pn_s[0].length -1));
    var pn_sy = Number(pn_s[1].substring(0, pn_s[1].length -1));
    new_panel.backgroundSize = pn_sx + "% " + 100 / pn_h * 100 + "%";
    var pn_x = background_posi_left_hor(pn_l, pn_w);
    var pn_y = background_posi_top_hor(pn_t, pn_h);
    new_panel.top = pn_t + "%";
    new_panel.left = pn_l + "%";
    new_panel.backgroundPosition = "left " + pn_x + "%" + " " + "top " + pn_y + "%";

    //update database with cutted panel and add new panel
    data_width[max_wid] = og_parameters[0];
    data_height[max_wid] = hor_divider * og_parameters[1] / 100;
    data_width[data_width.length] = og_parameters[0];
    data_height[data_height.length] = (og_parameters[1] - hor_divider * og_parameters[1] / 100);
  }
  //new vertical division
  function vertical_div(h, w, data_width, data_height) {
    //find panel with max width
    var max_hei = findmax_h(data_width, data_height);
    //select panel with max width
    var panel_num_to_be_resize = "panel_" + (max_hei + 1);
    var panel_to_resize = document.getElementById(panel_num_to_be_resize);
    var panel_to_style = panel_to_resize.style;
    //get original panel parameters
    var origiginal_parameters = [panel_to_style.width, panel_to_style.height,
    panel_to_style.backgroundSize, panel_to_style.top,
    panel_to_style.left, panel_to_style.backgroundPosition,
    panel_to_style.backgroundImage];
    //create array for parameters as numbers
    var og_parameters = [];
    array_to_number(origiginal_parameters, og_parameters);
    //call new divider random value
    var ver_divider = rand();
    //set original panel parameters
    var p1_w = ver_divider * og_parameters[0] / 100;
    var p1_h = og_parameters[1];
    var p1_t = og_parameters[3];
    var p1_l = og_parameters[4];

    panel_to_style.width = p1_w + "%";
    panel_to_style.height = p1_h + "%";
    var p1_s = origiginal_parameters[2].split(" ");
    var p1_sx = Number(p1_s[0].substring(0, p1_s[0].length -1));
    var p1_sy = Number(p1_s[1].substring(0, p1_s[1].length -1));
    panel_to_style.backgroundSize = 100 / p1_w * 100 + "% " + p1_sy + "%";
    var p1_x = background_posi_left_ver(p1_l, p1_w);
    var p1_y = background_posi_top_ver(p1_t, p1_h);
    panel_to_style.top = p1_t + "%";
    panel_to_style.left = p1_l + "%";
    panel_to_style.backgroundPosition = "left " + p1_x + "%" + " " + "top " + p1_y + "%";
    //create new panel with id++
    var n_panel_id = data_width.length + 1;
    var n_panel = document.createElement("div");
    n_panel.setAttribute("id", "panel_" + n_panel_id);
    n_panel.setAttribute("class", "panel");
    document.getElementById("frame").appendChild(n_panel);
    var new_panel = document.getElementById("panel_" + n_panel_id).style;
    //set new panel parameters
    var pn_w = og_parameters[0] - ver_divider * og_parameters[0] / 100;
    var pn_h = og_parameters[1];
    var pn_t = og_parameters[3];
    var pn_l = og_parameters[4] + ver_divider * og_parameters[0] / 100;

    new_panel.width = pn_w + "%";
    new_panel.height = pn_h + "%";
    new_panel.backgroundImage = picture;
    var pn_s = origiginal_parameters[2].split(" ");
    var pn_sx = Number(pn_s[0].substring(0, pn_s[0].length -1));
    var pn_sy = Number(pn_s[1].substring(0, pn_s[1].length -1));
    new_panel.backgroundSize = 100 / pn_w * 100 + "% " + pn_sy + "%";
    var pn_x = background_posi_left_ver(pn_l, pn_w);
    var pn_y = background_posi_top_ver(pn_t, pn_h);
    new_panel.top = pn_t + "%";
    new_panel.left = pn_l + "%";
    new_panel.backgroundPosition = "left " + pn_x + "%" + " " + "top " + pn_y + "%";

    //update database with cutted panel and add new panel
    data_width[max_hei] = ver_divider * og_parameters[0] / 100;
    data_height[max_hei] = og_parameters[1];
    data_width[data_width.length] = og_parameters[0] - ver_divider * og_parameters[0] / 100;
    data_height[data_height.length] = og_parameters[1];
  }
  //-----------------------------------------------------------------------
  //KEEPING TRACK OF COMPLETION
  //-----------------------------------------------------------------------
  //arrays to track for completion
  var panels = document.getElementsByClassName("panel");
  var top = [];
  var left = [];
  var top_check = [];
  var left_check = [];
  function arrays_for_comp(panels, top, left, top_check, left_check){
    for (var i = 0; i < panels.length; i++) {
    var id = "panel_" + (i + 1);
    top_check[i] = document.getElementById(id).style.top;
    left_check[i] = document.getElementById(id).style.left;
    top[i] = document.getElementById(id).style.top;
    left[i] = document.getElementById(id).style.left;
    }
  }
  //call arrays_for_comp
  arrays_for_comp(panels, top, left, top_check, left_check);
  //-----------------------------------------------------------------------
  //RANDOMIZING THE PANELS
  //-----------------------------------------------------------------------
  //randomize the panels (based on Fisher-Yates shuffle)
  var all_panels = [];
  function randomizer(top_check, left_check, top, left){
    for (var i = 0; i < panels.length; i++) {
      all_panels[i] = i + 1;
    }
    var i = all_panels.length;
    while (--i > 0) {
      //choose a random panel
      var j = Math.ceil(Math.random() * i);
      //array for the first panel parameters
      var first = [];
      //id for the first panel
      var first_id = "panel_" + i;
      //get the first panel parameters
      var first_style = document.getElementById(first_id).style
      first[0] = first_style.width;
      first[1] = first_style.height;
      var first_size = first_style.backgroundSize.split(" ");
      first[2] = first_size[0].substring(0, first_size[0].length -1);
      first[3] = first_size[1].substring(0, first_size[1].length -1);
      first[4] = first_style.top;
      first[5] = first_style.left;
      first[6] = first_style.zIndex;

      //array for the second panel parameters
      var second = [];
      //id for the second panel
      var second_id = "panel_" + j;
      //get the second panel parameters
      var second_style = document.getElementById(second_id).style
      second[0] = second_style.width;
      second[1] = second_style.height;
      var second_size = second_style.backgroundSize.split(" ");
      second[2] = second_size[0].substring(0, second_size[0].length -1);
      second[3] = second_size[1].substring(0, second_size[1].length -1);
      second[4] = second_style.top;
      second[5] = second_style.left;
      second[6] = second_style.zIndex;
      //variables for sytling both panels
      var panel_first = document.getElementById(first_id).style;
      var panel_second = document.getElementById(second_id).style;
      //set panel 2 parameters from panel 1
      panel_second.width = first[0];
      panel_second.height = first[1];
      panel_second.backgroundSize = ((second[2] / (first[2] / 100)) * first[2]) / 100 + "% "
      + ((second[3] / (first[3] / 100)) * first[3]) / 100 + "%";
      panel_second.top = first[4];
      panel_second.left = first[5];
      panel_second.zIndex = first[6];
      //set panel 1 parameters from panel 2
      panel_first.width = second[0];
      panel_first.height = second[1];
      panel_first.backgroundSize = ((first[2] / (second[2] / 100)) * second[2]) / 100 + "% "
      + ((first[3] / (second[3] / 100)) * second[3]) / 100 + "%";
      panel_first.top = second[4];
      panel_first.left = second[5];
      panel_first.zIndex = second[6];
      //clear the variables for the next iteration of the shuffle
      first.length = 0;
      second.length = 0;
      var first_id = null;
      var second_id = null;
      //update array for completion with top and left data
      var temp_top = top_check[i-1];
      top_check[i-1] = top_check[j-1];
      top_check[j-1] = temp_top;
      var temp_left = left_check[i-1];
      left_check[i-1] = left_check[j-1];
      left_check[j-1] = temp_left;
    }
  }
  //call randomizer
  randomizer(top_check, left_check, top, left);
  //-----------------------------------------------------------------------
  //FUNCTIONS FOR SWAP ACTION
  //-----------------------------------------------------------------------
  //get the id of the panel clicked first
  function swap(){
    for (var i = 0; i < panels.length; i++) {
      var id = panels[i].id;
      document.getElementById(id).onclick = first_id;
    }
  }
  var id_first = null;
  function first_id(id){
    id_first = this.id;
    first_parameters();
  }
  //array for the parameters of the first panel clicked
  var first_object = [];
  function first_parameters(){
    var first_style = document.getElementById(id_first).style
    first_object[0] = first_style.width;
    first_object[1] = first_style.height;
    var first_obj_size = first_style.backgroundSize.split(" ");
    first_object[2] = first_obj_size[0].substring(0, first_obj_size[0].length -1);
    first_object[3] = first_obj_size[1].substring(0, first_obj_size[1].length -1);
    first_object[4] = first_style.top;
    first_object[5] = first_style.left;
    first_object[6] = first_style.zIndex;
    change_listener();
  }
  //get the id of the panel clicked second
  function change_listener(){
    for (var i = 0; i < panels.length; i++) {
      var id = panels[i].id;
      document.getElementById(id).onclick = second_id;
    }
  }
  var id_second = null;
  function second_id(id){
    id_second = this.id;
    second_parameters();
  }
  //array for the parameters of the second panel clicked
  var second_object = [];
  function second_parameters(){
    var second_style = document.getElementById(id_second).style
    second_object[0] = second_style.width;
    second_object[1] = second_style.height;
    var second_obj_size = second_style.backgroundSize.split(" ");
    second_object[2] = second_obj_size[0].substring(0, second_obj_size[0].length -1);
    second_object[3] = second_obj_size[1].substring(0, second_obj_size[1].length -1);
    second_object[4] = second_style.top;
    second_object[5] = second_style.left;
    second_object[6] = second_style.zIndex;
    //call change
    change();
  }
  //variables for z-index to always show the swap on top
  var zind_1 = 90;
  var zind_2 = 90;
  //change the first and second clicked panels parameters
  function change(){
    var panel_first = document.getElementById(id_first).style;
    var panel_second = document.getElementById(id_second).style;
    //transition creates an animation for the swap
    panel_first.WebkitTransition = "all 2s";
    panel_first.transition = "all 2s";
    panel_second.WebkitTransition = "all 2s";
    panel_second.transition = "all 2s";


    //set second clicked panel parameters
    panel_second.zIndex = zind_2;
    panel_second.width = first_object[0];
    panel_second.height = first_object[1];
    panel_second.backgroundSize = ((second_object[2] / (first_object[2] / 100)) * first_object[2]) / 100 + "% "
    + ((second_object[3] / (first_object[3] / 100)) * first_object[3]) / 100 + "%";
    panel_second.top = first_object[4];
    panel_second.left = first_object[5];
    zind_2 = zind_2 + 1;
    //set first clicked panel parameters
    panel_first.zIndex = zind_1;
    panel_first.width = second_object[0];
    panel_first.height = second_object[1];
    panel_first.backgroundSize = ((first_object[2] / (second_object[2] / 100)) * second_object[2]) / 100 + "% "
    + ((first_object[3] / (second_object[3] / 100)) * second_object[3]) / 100 + "%";
    panel_first.top = second_object[4];
    panel_first.left = second_object[5];
    zind_1 = zind_1 + 1;
    //clear arrays for the next swap
    first_object.length = 0;
    second_object.length = 0;
    //update array for completion with top and left data
    var i = id_first.substr(6, 1) - 1;
    var j = id_second.substr(6, 1) - 1;
    var temp_top = top_check[i];
    top_check[i] = top_check[j];
    top_check[j] = temp_top;
    var temp_left = left_check[i];
    left_check[i] = left_check[j];
    left_check[j] = temp_left;
    //call checking
    checking(top_check, left_check, top, left, frame);
  }
  //check arrays if the game is completed
  function checking(top_check, left_check, top, left){
    var frame = document.getElementById("frame").style;
    for (var i = 0; i < panels.length; i++) {
      if (top[i] != top_check[i] || left[i] != left_check[i]) {
        console.log("no win");
        return swap();
      }
    }
    //-----------------------------------------------------------------------
    //WIN
    //-----------------------------------------------------------------------
    console.log("win");
    return frame.display = "block";
  }
  swap();
}
