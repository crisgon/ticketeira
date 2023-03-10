import { useState } from "react";

export function useEventActions() {
  // some product logic
  // some api call
  const [loading, setLoading] = useState(false);

  function handleEventActions(event: any) {
    setLoading(true);
    console.log(event);
  }

  return {
    loading,
    handleEventActions,
  };
}
