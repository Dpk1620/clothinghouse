import React from "react";
import TopHeader from "./TopHeader";
import Search from "../assets/search.jpg";
import Heart from "../assets/heart.png";
import DemoUser from "../assets/user.png";
import Bag from "../assets/bag.jpg";

// header page added top header component. I create another component to just add the heder to show the component behaviour of multi purpose use
const Header = () => {
  return (
    <div>
      <div>
        <TopHeader />
      </div>
      <div
        className="d-flex justify-content-around p-3"
        style={{ height: "4rem" }}
      >
        <div>
          <img
            src={
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEASABIAAD/2wBDAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/2wBDAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQH/wAARCAAQABIDAREAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD+nz9rb4uf8ETf26fhxovwk/ao/a2/Ym+KXw+8O+NtN+I2j+H/APhtvwR4I+x+MtI0LxJ4Z0/WP7V+HPxl8I63cfZ9E8XeIbL+z7rUp9Kl/tD7TPYy3dpYz23nYiplmKgqdfEYWpBSU0vrUY2klKKd4VIvaTVr2122P2Xg/JvHTgHM6+ccJcH8dZTmOJwNXLK+I/1Fx+P58FWxGFxVSh7HM8kxlCPNXweGqe0hSjWXs+WNRQnUjL88P+GAP+DVL/ofP2Jv/FlvjH/6KuuP6pkP8+F/8LZf/NB+kf8AERPpbf8AQv46/wDFX4L/AOhI/bL/AIeW/wDBOP8A6P8A/wBib/xKv4Ff/N5Xp/XcF/0F4X/wopf/ACZ+Gf8AEL/Ez/o3fHX/AIiWf/8AzvPy5/aL+On/AAbb/sm/GTxj+z/+0B8Ev2JvAHxd8Af8I9/wlvhL/h3nP4q/sn/hKvCuh+NdB/4n3gr9nDxH4Zv/ALf4Z8R6Lqf/ABLNavPsv2z7HefZ9Qt7u0g4a1XJcPUlRrUsLCpC3NH6nzW5oqS1jRlF3jJPRvez1P1bhrIPpOcX5JguIuHc946zHJsx+s/U8Z/xEeOE9t9UxdfA4j/Z8dxNhsVT9nisNXpfvaEOfk54c1OUJy7f9knxf/wb0/t0/EfWvhJ+yv8As9fsTfFL4g+HfBOpfEbWPD//AAwHY+CPsfg3SNd8N+GdQ1j+1fiN+z94R0S4+z634u8PWX9n2upT6rL/AGh9pgsZbS0vp7asPLJ8VN06FHC1JqLm19UUbRTjFu86MVvJK1767bnDxhg/pHcA5ZQzji3iPjrKcuxOOpZZQxH/ABEOpj+fG1sPisVToexyziLGV481DB4mp7SdKNFez5ZVFOdOMv0P/wCHaX/BOP8A6MA/Ym/8RU+BX/zB12fUsF/0CYX/AMJ6X/yB+b/8RQ8TP+jicdf+Jbn/AP8APAD/2Q=="
            }
            className="bg-primary"
            style={{ height: "15px", marginTop: "8px" }}
            alt=""
          />
        </div>
        <div>
          <p style={{ fontFamily: "Playfair Display", fontWeight: "600" }}>
            Logo Here
          </p>
        </div>
        <div style={{ margin: "1px", height: "15px" }}>
          <img src={Search} alt="Search" className="me-md-4 me-sm-1" />
          <img src={Heart} alt="Heart" className="me-md-4 me-sm-1" />
          <img src={Bag} alt="Bag" className="me-md-4 me-sm-1" />
          <img src={DemoUser} alt="DemoUser" className="me-md-4 me-sm-1" />
        </div>
      </div>
    </div>
  );
};

export default Header;
