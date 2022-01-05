import { Box, Button, Paper, Typography, Grid, SvgIcon } from "@material-ui/core";
import "./zap.scss";
import { ReactComponent as CircleZapIcon } from "../../assets/icons/circle-zap.svg";
import { ReactComponent as ArrowUp } from "../../assets/icons/arrow-up.svg";
import MultiLogo from "../../components/MultiLogo";
import { makeStyles } from "@material-ui/core/styles";
import { segmentUA } from "../../helpers/userAnalyticHelpers";
import { useState } from "react";
import { Trans } from "@lingui/macro";

const useStyles = makeStyles(theme => ({
  infoBox: {
    [theme.breakpoints.down("md")]: {
      display: "flex",
      flexDirection: "row",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "column",
    },
  },
  infoBoxItem: {
    [theme.breakpoints.down("md")]: {
      padding: "8px !important",
    },
    [theme.breakpoints.up("md")]: {
      padding: "16px !important",
    },
  },
  infoHeader: {
    [theme.breakpoints.down("md")]: {
      width: "40%",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
    },
  },
  infoBody: {
    [theme.breakpoints.down("md")]: {
      width: "60%",
      paddingTop: "24px",
    },
    [theme.breakpoints.up("md")]: {
      width: "100%",
      paddingTop: 0,
    },
  },
}));

function ZapInfo({ tokens, address }) {
  const trackClick = address => {
    let uaData = {
      address: address,
      type: "Learn more OlyZaps",
    };
    segmentUA(uaData);
  };
  const classes = useStyles();
  return (
    <>
      <Paper className="ohm-card" id="olyzaps-info">
        <Grid container direction="row" wrap spacing={4}>
          <Grid item sm={12} md={4} classes={{ root: classes.infoBox, item: classes.infoBoxItem }}>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              classes={{ root: classes.infoHeader }}
              className="oly-info-header-box"
            >
              <MultiLogo images={[]} />
              <Typography color="textSecondary" align="center">
                <Trans>You pledge DAI</Trans>
              </Typography>
            </Box>
            <Box classes={{ root: classes.infoBody }}>
              <Typography variant="body1" className="oly-info-body-header">
                <Trans>The Investoooor</Trans>
              </Typography>
              <Typography align="left" variant="body2" className="oly-info-body">
                <Trans>
                  Monster Squad DAO needs initial liquidity in order to launch our teams project! That's where investors
                  like you come in.
                </Trans>
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4} classes={{ root: classes.infoBox, item: classes.infoBoxItem }}>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              classes={{ root: classes.infoHeader }}
              className="oly-info-header-box"
            >
              <MultiLogo icons={[CircleZapIcon]} />
              <Typography color="textSecondary" align="center">
                <Trans>Bootstrapping Liquidity</Trans>
              </Typography>
            </Box>
            <Box classes={{ root: classes.infoBody }}>
              <Typography variant="body1" className="oly-info-body-header">
                <Trans>What happens to my DAI?</Trans>
              </Typography>
              <Typography align="left" variant="body2" className="oly-info-body">
                <Trans>
                  After you specify and agree to the total amount of DAI you would like to pledge, our team uses those
                  funds to add liquidity to our native token SQUAD.
                </Trans>
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4} classes={{ root: classes.infoBox, item: classes.infoBoxItem }}>
            <Box
              alignItems="center"
              display="flex"
              flexDirection="column"
              classes={{ root: classes.infoHeader }}
              className="oly-info-header-box"
            >
              <MultiLogo
                images={[
                  "https://storage.googleapis.com/zapper-fi-assets/tokens/ethereum/0x04f2694c8fcee23e8fd0dfea1d4f5bb8c352111f.png",
                ]}
              />
              <Typography color="textSecondary" align="center">
                <Trans>Get Rewarded</Trans>{" "}
              </Typography>
            </Box>
            <Box classes={{ root: classes.infoBody }}>
              <Typography variant="body1" className="oly-info-body-header">
                <Trans>Whats in it for me?</Trans>
              </Typography>
              <Typography align="left" variant="body2" className="oly-info-body">
                <Trans>
                  By pledging DAI before the release of SQUAD, you receive tokens at an initial fixed rate of 2.5 DAI
                  per SQUAD!
                </Trans>
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <Box className="button-box">
          <Button
            variant="outlined"
            color="secondary"
            href="https://docs.olympusdao.finance/main/using-the-website/olyzaps"
            target="_blank"
            className="learn-more-button"
            onClick={() => {
              trackClick(address);
            }}
          >
            <Typography variant="body1">Learn More</Typography>
            <SvgIcon component={ArrowUp} color="primary" />
          </Button>
        </Box>
      </Paper>
    </>
  );
}

export default ZapInfo;
