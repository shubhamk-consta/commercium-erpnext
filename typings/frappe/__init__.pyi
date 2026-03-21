"""Minimal stubs for Frappe runtime (resolved when app runs inside bench)."""

from typing import Any, Callable, TypeVar

def _(msg: str, *args: Any, **kwargs: Any) -> str: ...

F = TypeVar("F", bound=Callable[..., Any])

def whitelist(allow_guest: bool = False) -> Callable[[F], F]: ...

class _Session:
    user: str

session: _Session

def get_doc(doctype: str, name: str) -> Any: ...

class _Local:
    site: str

local: _Local
