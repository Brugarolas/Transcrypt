# Stubs for multiprocessing

from typing import Any, Callable, Iterable, Mapping

from multiprocessing.process import current_process as current_process

class Lock():
    def acquire(self, block: bool = ..., timeout: int = ...) -> None: ...
    def release(self) -> None: ...

class Process():
    # TODO: set type of group to None
    def __init__(self,
                 group: Any = ...,
                 target: Callable = ...,
                 name: str = ...,
                 args: Iterable[Any] = ...,
                 kwargs: Mapping[Any, Any] = ...,
                 daemon: bool = ...) -> None: ...
    def start(self) -> None: ...
    def run(self) -> None: ...
    def terminate(self) -> None: ...
    def is_alive(self) -> bool: ...
    def join(self, timeout: float = ...) -> None: ...

class Queue():
    def __init__(self, maxsize: int = ...) -> None: ...
    def get(self, block: bool = ..., timeout: float = ...) -> Any: ...
    def put(self, item: Any, block: bool = ..., timeout: float = ...) -> None: ...
    def qsize(self) -> int: ...
    def empty(self) -> bool: ...
    def full(self) -> bool: ...
    def put_nowait(self, item: Any) -> None: ...
    def get_nowait(self) -> Any: ...
    def close(self) -> None: ...
    def join_thread(self) -> None: ...
    def cancel_join_thread(self) -> None: ...

class Value():
    def __init__(self, typecode_or_type: str, *args: Any, lock: bool = ...) -> None: ...

# ----- multiprocessing function stubs -----
def cpu_count() -> int: ...