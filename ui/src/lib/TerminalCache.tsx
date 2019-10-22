import LogsTerminal, { LogsTerminalProps } from 'components/views/Logs/LogsTerminal/LogsTerminal';
import { V1PodList } from '@kubernetes/client-node';
import React from 'react';
import { SelectedLogs } from 'components/views/Logs/LogsList/LogsList';
import { ApiHostname } from './rest';

export interface TerminalCacheInterface {
  multiLog?: {
    multiple: string[];
    props: LogsTerminalProps;
  };
  terminals: Array<{
    pod: string;
    container: string;
    props: LogsTerminalProps;
  }>;
}

class TerminalCache {
  private closed: boolean = false;
  private namespace: string;
  private onDelete: (selected: SelectedLogs) => void;
  private cache: TerminalCacheInterface = {
    terminals: [],
  };

  constructor(namespace: string, onDelete: (selected: SelectedLogs) => void) {
    this.namespace = namespace;
    this.onDelete = onDelete;
  }

  public updateCache(podList: V1PodList) {
    for (let i = 0; i < this.cache.terminals.length; i++) {
      const selectedPod = podList && podList.items.find((pod) => this.cache.terminals[i].pod === pod.metadata.name);
      if (!selectedPod) {
        this.cache.terminals.splice(i, 1);
        i--;
        continue;
      }

      const selectedContainer = selectedPod.spec.containers.find(
        (container) => this.cache.terminals[i].container === container.name
      );
      if (!selectedContainer) {
        this.cache.terminals.splice(i, 1);
        i--;
        continue;
      }
    }
  }

  public select(selected: SelectedLogs) {
    let found = false;
    for (let i = 0; i < this.cache.terminals.length; i++) {
      this.cache.terminals[i].props.show =
        selected && this.cache.terminals[i].pod === selected.pod && this.cache.terminals[i].container === selected.container;
      found = found || this.cache.terminals[i].props.show;
    }

    if (this.cache.multiLog) {
      this.cache.multiLog.props.show = false;
    }

    if (selected && selected.multiple) {
      this.cache.multiLog = {
        multiple: selected.multiple,
        props: {
          url: `ws://${ApiHostname()}/api/logs-multiple?namespace=${this.namespace}&imageSelector=${selected.multiple.join(
            '&imageSelector='
          )}`,
          show: true,
        },
      };
    } else if (selected && selected.pod && !found) {
      this.cache.terminals.push({
        pod: selected.pod,
        container: selected.container,
        props: {
          url: `ws://${ApiHostname()}/api/logs?namespace=${this.namespace}&name=${selected.pod}&container=${
            selected.container
          }`,
          show: true,
        },
      });
    }
  }

  public delete(selected: SelectedLogs) {
    if (this.closed || !selected) {
      return;
    }

    if (selected.pod) {
      const idx = this.cache.terminals.findIndex(
        (terminal) => terminal.pod === selected.pod && terminal.container === selected.container
      );
      if (idx !== -1) {
        this.cache.terminals.splice(idx, 1);
        this.onDelete(selected);
      }
    } else if (selected.multiple) {
      this.cache.multiLog = null;
      this.onDelete(selected);
    }
  }

  public close() {
    this.closed = true;
  }

  public renderTerminals() {
    const terminals = [];

    if (this.cache.multiLog) {
      terminals.push(
        <LogsTerminal
          key="multi-logs"
          {...this.cache.multiLog.props}
          onClose={() => this.delete({ multiple: this.cache.multiLog.multiple })}
        />
      );
    }

    terminals.push(
      ...this.cache.terminals.map((terminal) => (
        <LogsTerminal
          key={terminal.pod + ':' + terminal.container}
          {...terminal.props}
          onClose={() => this.delete({ pod: terminal.pod, container: terminal.container })}
        />
      ))
    );

    return terminals;
  }
}

export default TerminalCache;