#!/usr/bin/env bash

uvicorn main:app --workers 2 --host localhost --port 8085 --reload
