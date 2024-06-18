import React, { useState } from "react";

function RecipeCreate({createRecipe}) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const initialFormData = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients:"",
    preparation: "",
  };
  
  const [formData, setFormData] = useState(initialFormData);
  
  const handleChange = ({target}) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData(initialFormData);
  };
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" name="name" type="text" onChange={handleChange} value={formData.name} />
            </td>
            <td>
              <input id="cuisine" name="cuisine" type="text" onChange={handleChange} value={formData.cuisine} />
            </td>
            <td>
              <input id="photo" name="photo" type="text" onChange={handleChange} value={formData.photo} />
            </td>
            <td>
              <textarea id="ingredients" name="ingredients" type="text" onChange={handleChange} value={formData.ingredients} />
            </td>
             <td>
              <textarea id="preparation" name = "preparation" type="text" onChange={handleChange} value={formData.preparation} />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
