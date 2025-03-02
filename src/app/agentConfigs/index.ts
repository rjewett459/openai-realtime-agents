import chatSitesAttendant from "./chatSitesAttendant/chatSitesAttendant";
import realEstateAgents from "./realEstateAgents/realEstateAgents";
import ecomAgents from "./ecomAgents/ecomAgents";
import educationAgents from "./educationAgents/educationAgents";
import financeAgents from "./financeAgents/financeAgents";
import healthcareAgents from "./healthcareAgents/healthcareAgents";


export const allAgentSets: Record<string, any> = {
  "ChatSites Attendant": chatSitesAttendant,
  "Real Estate": realEstateAgents,
  "E-commerce": ecomAgents,
  "Healthcare": healthcareAgents,
  "Finance": financeAgents,
  "Education": educationAgents,
  
};

export const defaultAgentSetKey = Object.keys(allAgentSets)[0];
