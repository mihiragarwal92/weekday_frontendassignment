import { JobData } from "../JobPost/types";
import { Filter } from "./types";

function allFiltersEmpty(filters: Filter) {
  return (
    filters.roles.length === 0 &&
    filters.minimumSalary === null &&
    filters.experience === null &&
    filters.remote.length === 0
  );
}

function roleFilter(job: JobData, filters: Filter) {
  if (filters.roles.length === 0) return false;
  return filters.roles.includes(job.jobRole);
}

function experienceFilter(job: JobData, filters: Filter) {
  if (filters.experience === null || (!job.minExp && job.minExp !== 0))
    return false;

  return job.minExp <= filters.experience;
}

function minSalaryFilter(job: JobData, filters: Filter) {
  if (
    filters.minimumSalary === null ||
    (!job.minJdSalary && job.minJdSalary !== 0)
  )
    return false;

  return job.minJdSalary >= filters.minimumSalary;
}

function locationFilter(job: JobData, filters: Filter) {
  if (filters.remote.length === 0 || !job.location) return false;

  if (
    job.location !== "remote" &&
    job.location !== "hybrid" &&
    filters.remote.includes("In-office")
  )
    return true;

  if (
    (job.location === "remote" && filters.remote.includes("Remote")) ||
    (job.location === "hybrid" && filters.remote.includes("Hybrid"))
  )
    return true;

  return false;
}

export function FilterFn(job: JobData, filters: Filter) {
  if (allFiltersEmpty(filters)) return true;
  return (
    roleFilter(job, filters) ||
    experienceFilter(job, filters) ||
    minSalaryFilter(job, filters) ||
    locationFilter(job, filters)
  );
}
