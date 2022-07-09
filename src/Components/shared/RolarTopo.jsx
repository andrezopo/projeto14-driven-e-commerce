import React from "react";

export default function RolarTopo() {
  const onTop = () => {
    window.scrollTo(0, 0);
  };

  React.useEffect(() => {
    onTop();
  }, []);
}
