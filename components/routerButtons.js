import { Tooltip, Button } from "@material-ui/core";
import { Public as PublicIcon, Home as HomeIcon } from "@material-ui/icons";
import { useRouter } from "next/router";

const RouterButtons = ({ homeButton, countryButton }) => {
  const router = useRouter();
  return (
    <>
      {homeButton ? (
        <Tooltip title="Go to home page" arrow placement="right">
          <Button
            onClick={() => router.push("/")}
            onMouseOver={() => router.prefetch("/")}
            startIcon={<HomeIcon />}
            variant="text"
          >
            Home
          </Button>
        </Tooltip>
      ) : (
        <></>
      )}
      {countryButton ? (
        <Tooltip
          title="Latest statistics of every country"
          arrow
          placement="top"
        >
          <Button
            onClick={() => router.push("/latest")}
            onMouseOver={() => router.prefetch("/latest")}
            startIcon={<PublicIcon />}
            variant="text"
          >
            Countries
          </Button>
        </Tooltip>
      ) : (
        <></>
      )}
    </>
  );
};

export default RouterButtons;