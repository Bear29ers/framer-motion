# Base image
FROM node:lts-buster-slim

# Create working directory
RUN mkdir -p /app/framer

# Set working directory
WORKDIR /app/framer

# Add $PATH
ENV PATH /app/framer/node_modules/.bin:$PATH
