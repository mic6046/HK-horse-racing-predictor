# HKJC Racing Intelligence Pro

Professional AI-powered Hong Kong horse racing prediction and betting analytics platform prototype.

## What Is Included

- React, TypeScript, Tailwind CSS dashboard prototype
- Live HKJC data center UI with race-day refresh status
- Horse, jockey, trainer, odds, pace, speed, track bias, and weather intelligence modules
- Ensemble model display for XGBoost, LightGBM, CatBoost, Random Forest, neural network, and logistic regression
- Value bet finder, betting recommendations, portfolio tracker, backtesting lab, AI assistant, and admin panel
- PostgreSQL schema draft for the racing, odds, prediction, and betting records
- Project-bound SVG hero asset generated for the platform

## Run Locally

Install Node.js, then run:

```bash
npm install
npm run typecheck
npm run build
npm run dev
```

## Production Architecture

Frontend:
- React
- TypeScript
- Tailwind CSS
- Vercel

Backend:
- Node.js API for user-facing application endpoints
- Python workers for data ingestion, feature engineering, model training, and batch predictions
- Railway hosted services

AI:
- Scikit-learn baseline models
- XGBoost, LightGBM, CatBoost, Random Forest, neural network, and logistic regression
- Ensemble prediction service returning win, place, top 3, expected finishing position, confidence, and expected value

Database:
- PostgreSQL for races, horses, jockeys, trainers, odds, results, model predictions, and user betting records

Authentication:
- Supabase authentication and role management

## Data Integration Notes

The UI is currently backed by realistic mock data. A production integration should add scheduled collectors for race cards, entries, jockey and trainer assignments, barrier draws, weight changes, scratches, weather, track conditions, results, dividend payouts, and odds history.

Respect the terms of the data source and local betting regulations before deploying live data collection or wagering workflows.
