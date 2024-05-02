import { FC, useState } from "react";
import { Card, Tooltip } from "@mui/material";

// styles imports
import classes from "./index.module.css";

// local imports
import { JobData } from "./types";
import PostedCard from "./PostedCard";
import EasyApplyButton from "../EasyApplyButton";
import ReferralButton from "../ReferralButton";
import JobDescriptionModal from "../JobDescriptionModal";

function getCurrencySymbol(currencyCode: string) {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currencyCode,
  });
  const parts = numberFormat.formatToParts(1);
  return parts[0].value;
}

function getCurrencySuffix(currencyCode: string) {
  if (currencyCode === "INR") return "LPA";

  return "k";
}

interface Props {
  jobData: JobData;
}

const JobPost: FC<Props> = ({ jobData }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const minSalary =
    (jobData.minJdSalary ?? 10) +
    (jobData.salaryCurrencyCode
      ? getCurrencySuffix(jobData.salaryCurrencyCode)
      : "");
  const maxSalary =
    (jobData.maxJdSalary ?? 15) +
    (jobData.salaryCurrencyCode
      ? getCurrencySuffix(jobData.salaryCurrencyCode)
      : "");

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <>
      <Card
        sx={{
          p: 3,
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: "80%",
          maxWidth: 360,
          "&:hover": {
            transition: "all 0.2s ease-in-out",
            transform: "scale(1.01)",
          },
        }}
      >
        <PostedCard days={10} />
        <div className={classes.jobDetails}>
          <img src="" alt="" />
          <div className={classes.details}>
            <span className={classes.companyName}>fampay</span>
            <span style={{ fontSize: "16px" }}>{jobData?.jobRole}</span>
            <span className={classes.jobLocation}>{jobData?.location}</span>
          </div>
        </div>
        <span
          style={{
            fontWeight: 300,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
          }}
        >
          Estimated Salary:{" "}
          {jobData.salaryCurrencyCode &&
            getCurrencySymbol(jobData.salaryCurrencyCode)}
          {minSalary} - {maxSalary}
          {!jobData.minJdSalary || !jobData.maxJdSalary ? (
            <Tooltip title="Estimated by Weekday, Not provided by employer">
              <span style={{ marginLeft: 6, cursor: "default" }}>⚠️</span>
            </Tooltip>
          ) : (
            <Tooltip title="Offered salary range">
              <span style={{ marginLeft: 6, cursor: "default" }}>✅</span>
            </Tooltip>
          )}
        </span>
        <div className={classes.companyDetails}>
          <span>About the Company:</span>
          <span>About us</span>
          <span style={{ fontWeight: 300, overflow: "hidden" }}>
            {jobData?.jobDetailsFromCompany}
          </span>
          <span className={classes.showMore} onClick={() => setModalOpen(true)}>
            Show More
          </span>
        </div>
        <div className={classes.experienceDetails}>
          <span>Mimimum Experience</span>
          <span style={{ fontWeight: 300 }}>
            {jobData.minExp ?? 0} year
            {jobData.minExp && jobData?.minExp > 1 ? "s" : ""}
          </span>
        </div>
        <EasyApplyButton />
        <ReferralButton />
      </Card>
      <JobDescriptionModal
        open={modalOpen}
        onClose={closeModal}
        details={jobData?.jobDetailsFromCompany}
      />
    </>
  );
};

export default JobPost;
