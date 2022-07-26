import { PanelPlugin } from '@grafana/data';
import { plugin } from './plugin';

/*
 Plugin
 */
describe('plugin', () => {
  it('should be instance of PanelPlugin', () => {
    expect(plugin).toBeInstanceOf(PanelPlugin);
  });
});
