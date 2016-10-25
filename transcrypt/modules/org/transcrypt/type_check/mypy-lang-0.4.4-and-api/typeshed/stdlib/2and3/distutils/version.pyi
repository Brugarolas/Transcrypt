# Stubs for distutils.version (Python 2 and 3.5)
#
# NOTE: This dynamically typed stub was automatically generated by stubgen.

import sys
from typing import Any

class Version:
    def __init__(self, vstring=None): ...

    if sys.version_info >= (3,):
        def __eq__(self, other): ...
        def __lt__(self, other): ...
        def __le__(self, other): ...
        def __gt__(self, other): ...
        def __ge__(self, other): ...

class StrictVersion(Version):
    version_re = ...  # type: Any
    version = ...  # type: Any
    prerelease = ...  # type: Any
    def parse(self, vstring): ...

    if sys.version_info < (3,):
        def __cmp__(self, other): ...

class LooseVersion(Version):
    component_re = ...  # type: Any
    def __init__(self, vstring=None): ...
    vstring = ...  # type: Any
    version = ...  # type: Any
    def parse(self, vstring): ...

    if sys.version_info < (3,):
        def __cmp__(self, other): ...