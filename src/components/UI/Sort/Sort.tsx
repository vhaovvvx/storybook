import Button from '../Button/Button';
import './Sort.scss';

import useComponentVisible from '../../../custom-hooks/useComponentVisible';

const Sort = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <div className="sort" ref={ref}>
      <Button
        label="Sort"
        classType="btn-cancel"
        onClick={() => setIsComponentVisible(!isComponentVisible)}
      />

      {isComponentVisible && (
        <div className="sort-content">
          <p>Sort By</p>
          <ul>
            <li>
              <label className="container">
                Newest
                <input type="radio" name="radio" id="1" />
                <span className="checkmark"></span>
              </label>
            </li>

            <li>
              <label className="container">
                Oldest
                <input type="radio" name="radio" id="2" />
                <span className="checkmark"></span>
              </label>
            </li>

            <li>
              <label className="container">
                Highest yield
                <input type="radio" name="radio" id="3" />
                <span className="checkmark"></span>
              </label>
            </li>

            <li>
              <label className="container">
                Lowest yield
                <input type="radio" name="radio" id="4" />
                <span className="checkmark"></span>
              </label>
            </li>

            <li>
              <label className="container">
                Highest growth
                <input type="radio" name="radio" id="5" />
                <span className="checkmark"></span>
              </label>
            </li>

            <li>
              <label className="container">
                Lowest growth
                <input type="radio" name="radio" id="6" />
                <span className="checkmark"></span>
              </label>
            </li>

            <li>
              <label className="container">
                Highest price
                <input type="radio" name="radio" id="7" />
                <span className="checkmark"></span>
              </label>
            </li>

            <li>
              <label className="container">
                Lowest price
                <input type="radio" name="radio" id="8" />
                <span className="checkmark"></span>
              </label>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
