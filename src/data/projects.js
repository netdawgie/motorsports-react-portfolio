// src/data/projects.js
import project1 from '../assets/race-weekend-scheduler.png';
import project2 from '../assets/fan-zone-portal.png';
import project3 from '../assets/car-setup-manager.png';
import project4 from '../assets/lap-time-analyzer.png';
import project5 from '../assets/performance-insights-dashboard.png';
import project6 from '../assets/pit-strategy-planner.png';

export const projects = [
  {
    title: 'Race Weekend Scheduler',
    description: 'A simple dashboard for organizing upcoming race weekends, practice sessions, and team meetings.',
    tags: ['HPDE', 'Team', 'Track Days', 'Dashboard', 'Scheduler'],
    image: project1    
  },
  {
    title: 'Fan Zone Portal',
    description: 'Present motorsports content (Live-streamed race broadcasts; Manufacturer, driver and team social media and podcasts) all in one app.',
    tags: ['Fan', 'Media', 'Content', 'Event', 'Marketing'],
    image: project2 
  },
  {
    title: 'Car Setup Manager',
    description: 'Track and share race setup configurations.',
    tags: ['Driver', 'Performance', 'Statistics', 'Analytics', 'Insights', 'Telemetry', 'Dashboard'],
    image: project3
  },
  {
    title: 'Lap Time Analyzer',
    description: 'Compare lap segments across drivers and sessions.',
    tags: ['HPDE', 'Track Days', 'Telemetry', 'Dashboard'],
    image: project4 
  },
  {
    title: 'Performance Insights Dashboard',
    description: 'Live data visualization for race engineers.',
    tags: ['HPDE', 'Track Days', 'Team', 'Telemetry', 'Performance', 'Insights', 'Analytics', 'Dashboard'],
    image: project5
  },
  {
    title: 'Pit Strategy Planner',
    description: 'Optimize race strategy with historical data.',
    tags: ['Team', 'Performance', 'Insights', 'Planning', 'Strategy'],
    image: project6
  },
];
