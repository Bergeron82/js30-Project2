/* Cassie Williams 09/29/2020
  Adapted from https://javascript30.com/
  New keywords: setProperty, using sizing, name, value, have not dealt much with forEach loops
  New methods/properties: first time actually coming across a template literal besides reading up on them for class, documentElement and style are new, also dataset, change and mouseover listeners */


    const inputs = [];  //changed to an array instead of node list

    //getting elements of array
    inputs[0] = document.getElementById('spacing');
    inputs[1] = document.getElementById('grayscale');
    inputs[2] = document.getElementById('contrast');
    inputs[3] = document.getElementById('invert');
    inputs[4] = document.getElementById('base');
    
    // wrote out string instead of template literal
    function handleUpdate() {
      const suffix = this.dataset.sizing || '';
      document.documentElement.style.setProperty('--' + this.name, this.value + suffix);
    }

    //changed inputs from two arrows to one traditional function
    inputs.forEach(function (input) {
            input.addEventListener('change', handleUpdate);
            input.addEventListener('mousemove', handleUpdate);
        }) 
    

