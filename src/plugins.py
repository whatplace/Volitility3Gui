#
# WIP implementation of volatility as a library to extract plugins available
#
#
import volatility3.volatility.framework as framework
#!/usr/bin/env python3

plugin_list = framework.list_plugins()

volatility.framework.require_interface_version(1, 0, 0)
ctx = contexts.Context()  # Construct a blank contextvolatility.plugins.__path__ = <new_plugin_path> + constants.PLUGINS_PATH
failures = framework.import_files(volatility.plugins, True)
plugin_list = framework.list_plugins()