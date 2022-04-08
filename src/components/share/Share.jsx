import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import IconButton from '@mui/material/IconButton';
import ShareIcon from '@mui/icons-material/Share';

export default function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


 const copyText = () => {
   
 }

  return (
    <div>
      <IconButton aria-label="share">
      <ShareIcon onClick={handleClickOpen}/>  
                </IconButton>
        
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
          <div style={{
              display: "flex",
            textAlign: "center"
          }}>
                <DialogTitle id="responsive-dialog-title">
                        <Button variant="text"><FacebookIcon style={{
                            сolor: "#3b5998"
                        }}/>
                        
                            
                        </Button>
                        <h6>
                            Facebook
                        </h6>
                        </DialogTitle>
        <DialogTitle id="responsive-dialog-title">
        <Button variant="text"><TwitterIcon/>
                
        </Button>
        <h6>Twitter</h6>
        </DialogTitle>
        <DialogTitle id="responsive-dialog-title">
        <Button variant="text"><ContentCopyIcon/>
            
        </Button>
        <h6>Copy link</h6>
        </DialogTitle>
        </div>
      </Dialog>
    </div>
  );
}
