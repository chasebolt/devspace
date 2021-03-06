---
title: Using Remote Debuggers with Your IDE
sidebar_label: Remote Debugging
id: version-v4.0.0-remote-debuggers
original_id: remote-debuggers
---

DevSpace lets you easily [start applications in development mode](../../../cli/development/workflow-basics) and connect remote debuggers for your application using the following steps:
1. Configure DevSpace to use a development Dockerfile that:
   - ships with the appropriate tools for debugging your application
   - starts your application together with the debugger, e.g. setting the `ENTRYPOINT` of your Dockerfile to `node --inspect=0.0.0.0:9229 index.js` would start the Node.js remote debugger on port `9229`
2. Define port-forwarding for the port of your remote debugger (e.g. `9229`) within the `dev.ports` section of your `devspace.yaml`
3. Connect your IDE to the remote debugger (see the docs of your IDE for help)
4. Set breakpoints and debug your application directly inside Kubernetes
