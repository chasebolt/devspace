---
title: Command - devspace remove space
sidebar_label: space
id: version-v4.4.0-devspace_remove_space
original_id: devspace_remove_space
---


Removes a cloud space

## Synopsis


```
devspace remove space [flags]
```

```
#######################################################
############## devspace remove space ##################
#######################################################
Removes a cloud space.

Example:
devspace remove space myspace
devspace remove space --id=1
devspace remove space --all
#######################################################
```
## Options

```
      --all               Delete all spaces
  -h, --help              help for space
      --id string         SpaceID id to use
      --provider string   Cloud Provider to use
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

* [devspace remove](../../cli/commands/devspace_remove)	 - Changes devspace configuration
