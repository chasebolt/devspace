---
title: "Command - devspace use space"
sidebar_label: space
---


Use an existing space for the current configuration

## Synopsis


```
devspace use space [flags]
```

```
#######################################################
################ devspace use space ###################
#######################################################
Use an existing space for the current configuration

Example:
devspace use space my-space
#######################################################
```
## Options

```
      --get-token         Prints the service token to the console
  -h, --help              help for space
      --provider string   The cloud provider to use
      --space-id string   The space id to use
```

### Options inherited from parent commands

```
      --config string         The devspace config file to use
      --debug                 Prints the stack trace if an error occurs
      --kube-context string   The kubernetes context to use
  -n, --namespace string      The kubernetes namespace to use
      --no-warn               If true does not show any warning when deploying into a different namespace or kube-context than before
  -p, --profile string        The devspace profile to use (if there is any)
      --silent                Run in silent mode and prevents any devspace log output except panics & fatals
  -s, --switch-context        Switches and uses the last kube context and namespace that was used to deploy the DevSpace project
      --var strings           Variables to override during execution (e.g. --var=MYVAR=MYVALUE)
```

## See Also

* [devspace use](../../cli/commands/devspace_use)	 - Use specific config
