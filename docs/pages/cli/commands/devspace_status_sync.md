---
title: "Command - devspace status sync"
sidebar_label: sync
---


Shows the sync status

## Synopsis


```
devspace status sync [flags]
```

```
#######################################################
################ devspace status sync #################
#######################################################
Shows the sync status
#######################################################
```
## Options

```
  -h, --help   help for sync
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

* [devspace status](../../cli/commands/devspace_status)	 - Show the current status
