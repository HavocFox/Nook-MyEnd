import React, { useState } from 'react';

const TaggingAndCategorization: React.FC = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");

  const addTag = (tag: string) => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const handleAddTag = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && e.currentTarget.value) {
      addTag(e.currentTarget.value);
      e.currentTarget.value = "";
    }
  };

  return (
    <div>
      <h1>Tagging and Categorization</h1>
      <div>
        <input type="text" placeholder="Add a tag" onKeyDown={handleAddTag} />
        <div>
          {tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
      </div>
      <div>
        <label>Category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Living Room">Living Room</option>
          <option value="Bedroom">Bedroom</option>
          <option value="Office">Office</option>
        </select>
      </div>
    </div>
  );
};

export default TaggingAndCategorization;