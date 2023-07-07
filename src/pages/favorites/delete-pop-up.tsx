import { Box, Stack, Typography } from "@mui/material";
import { Button, Modal } from "src/components/atoms";

interface DeletePopUpProps {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
}

const DeletePopUp = ({
  open,
  handleClose,
  handleConfirm,
}: DeletePopUpProps) => {
  return (
    <Modal open={open} handleClose={handleClose}>
      <Box textAlign="center">
        <Typography fontWeight="400" fontSize="16px">
          Are you sure you want to delete?
        </Typography>
        <Stack direction="row" justifyContent="center" marginTop="20px">
          <Button
            style={{ width: "108px", height: "34px" }}
            fontSize={14}
            variant="contained"
            fontWeight="600"
            onClick={handleConfirm}
          >
            Yes
          </Button>
          <Button
            style={{ width: "108px", height: "34px", marginLeft: "10px" }}
            fontSize={14}
            variant="contained"
            fontWeight="600"
            onClick={handleClose}
            backgroundColor="gray"
          >
            No
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default DeletePopUp;
