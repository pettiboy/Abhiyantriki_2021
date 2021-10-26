import React from "react";

const ScrollSpy = () => {
  return (
    <div className="d-flex">
      <div id="list-example" className="list-group position-fixed">
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-1"
        >
          Item 1
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-2"
        >
          Item 2
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-3"
        >
          Item 3
        </a>
        <a
          className="list-group-item list-group-item-action"
          href="#list-item-4"
        >
          Item 4
        </a>
      </div>
      <div
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        className="scrollspy-example fs-1"
        style={{ height: 500, position: "relative", overflowY: "scroll" }}
        tabIndex={0}
      >
        <h4 id="list-item-1">Item 1</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          numquam accusantium deleniti minima! Aut architecto modi voluptate!
          Esse explicabo qui, repellat corrupti reiciendis quis dolor eum
          molestias officiis dignissimos velit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Est excepturi soluta rerum omnis minima
          iusto sit, pariatur voluptatibus ipsa, fuga dolor debitis eos quos? At
          possimus doloremque adipisci impedit rerum! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Reprehenderit reiciendis deserunt
          ipsam numquam assumenda maxime sunt dignissimos iure laudantium?
          Aliquam corrupti, assumenda iusto provident accusantium placeat
          corporis ullam minima eius. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Amet minus ipsam nostrum ipsum ea qui odio aliquid,
          commodi est nemo quae itaque autem molestias tempore placeat
          repudiandae expedita voluptatum quo.
        </p>
        <h4 id="list-item-2">Item 2</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          numquam accusantium deleniti minima! Aut architecto modi voluptate!
          Esse explicabo qui, repellat corrupti reiciendis quis dolor eum
          molestias officiis dignissimos velit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Est excepturi soluta rerum omnis minima
          iusto sit, pariatur voluptatibus ipsa, fuga dolor debitis eos quos? At
          possimus doloremque adipisci impedit rerum! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Reprehenderit reiciendis deserunt
          ipsam numquam assumenda maxime sunt dignissimos iure laudantium?
          Aliquam corrupti, assumenda iusto provident accusantium placeat
          corporis ullam minima eius. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Amet minus ipsam nostrum ipsum ea qui odio aliquid,
          commodi est nemo quae itaque autem molestias tempore placeat
          repudiandae expedita voluptatum quo.
        </p>
        <h4 id="list-item-3">Item 3</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          numquam accusantium deleniti minima! Aut architecto modi voluptate!
          Esse explicabo qui, repellat corrupti reiciendis quis dolor eum
          molestias officiis dignissimos velit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Est excepturi soluta rerum omnis minima
          iusto sit, pariatur voluptatibus ipsa, fuga dolor debitis eos quos? At
          possimus doloremque adipisci impedit rerum! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Reprehenderit reiciendis deserunt
          ipsam numquam assumenda maxime sunt dignissimos iure laudantium?
          Aliquam corrupti, assumenda iusto provident accusantium placeat
          corporis ullam minima eius. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Amet minus ipsam nostrum ipsum ea qui odio aliquid,
          commodi est nemo quae itaque autem molestias tempore placeat
          repudiandae expedita voluptatum quo.
        </p>
        <h4 id="list-item-4">Item 4</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
          numquam accusantium deleniti minima! Aut architecto modi voluptate!
          Esse explicabo qui, repellat corrupti reiciendis quis dolor eum
          molestias officiis dignissimos velit. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Est excepturi soluta rerum omnis minima
          iusto sit, pariatur voluptatibus ipsa, fuga dolor debitis eos quos? At
          possimus doloremque adipisci impedit rerum! Lorem, ipsum dolor sit
          amet consectetur adipisicing elit. Reprehenderit reiciendis deserunt
          ipsam numquam assumenda maxime sunt dignissimos iure laudantium?
          Aliquam corrupti, assumenda iusto provident accusantium placeat
          corporis ullam minima eius. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Amet minus ipsam nostrum ipsum ea qui odio aliquid,
          commodi est nemo quae itaque autem molestias tempore placeat
          repudiandae expedita voluptatum quo.
        </p>
      </div>
    </div>
  );
};

export default ScrollSpy;
