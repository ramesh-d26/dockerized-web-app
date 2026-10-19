# CloudLaunch — Docker Practice Website

A responsive static website built with HTML, CSS, and JavaScript. Nginx serves the site inside a Docker container.

## Files

- `index.html` — website structure
- `style.css` — responsive styling
- `script.js` — small interactive copy-command button
- `Dockerfile` — instructions to build the Docker image
- `compose.yaml` — optional Docker Compose configuration
- `.dockerignore` — files to exclude from the build context

## Option 1: Build and run with Docker

Run these commands from this project folder:

```bash
docker build -t cloudlaunch .
docker run -d --name cloudlaunch -p 8080:80 cloudlaunch
```

Open http://localhost:8080 in your browser.

Check the container and logs:

```bash
docker ps
docker logs cloudlaunch
```

Stop and remove the container:

```bash
docker rm -f cloudlaunch
```

## Option 2: Run with Docker Compose

```bash
docker compose up -d --build
docker compose ps
docker compose logs
```

Open http://localhost:8080. Stop and remove the Compose container and network with:

```bash
docker compose down
```

## Troubleshooting

- Make sure Docker Desktop is running.
- If port 8080 is already in use, change the left side of the port mapping, e.g. `8081:80`, then open http://localhost:8081.
- If the container name is already in use, remove the old one with `docker rm -f cloudlaunch`.
