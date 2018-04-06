// Transcrypt'ed from Python, 2018-04-05 23:20:21
import {__envir__, __nest__, __init__, __proxy__, __get__, __getcm__, __getsm__, py_metatype, object, __class__, __pragma__, __call__, __kwargtrans__, __globals__, __super__, property, __setProperty__, assert, __merge__, dir, setattr, getattr, hasattr, delattr, __in__, __specialattrib__, len, __i__, __k__, __t__, float, int, bool, py_typeof, issubclass, isinstance, callable, repr, chr, ord, max, min, abs, round, format, __jsUsePyNext__, __pyUseJsNext__, py_iter, py_next, __PyIterator__, __JsIterator__, py_reversed, zip, range, any, all, sum, enumerate, copy, deepcopy, list, tuple, set, bytearray, bytes, str, dict, __jsmod__, __mod__, __pow__, __neg__, __matmul__, __mul__, __truediv__, __floordiv__, __add__, __sub__, __lshift__, __rshift__, __or__, __xor__, __and__, __eq__, __ne__, __lt__, __le__, __gt__, __ge__, __imatmul__, __ipow__, __ijsmod__, __imod__, __imul__, __idiv__, __iadd__, __isub__, __ilshift__, __irshift__, __ior__, __ixor__, __iand__, __getitem__, __setitem__, __getslice__, __setslice__, BaseException, Exception, IterableError, StopIteration, ValueError, KeyError, AssertionError, NotImplementedError, IndexError, AttributeError, py_TypeError, Warning, UserWarning, DeprecationWarning, RuntimeWarning, __sort__, sorted, map, filter, divmod, __Terminal__, __terminal__, print, input} from './org.transcrypt.__runtime__.js';
var __name__ = '__main__';
export var nameElement = document.getElementById ('name');
export var greetingElement = document.getElementById ('greeting');
export var ageElement = document.getElementById ('age');
export var messageElement = document.getElementById ('message');
export var greet = function () {
	greetingElement.innerHTML = 'Hi {}, I am your computer'.format (nameElement.value);
};
export var tell = function () {
	var age = float (ageElement.value);
	if (age < 12) {
		messageElement.innerHTML = 'Sorry, {} is to young to smoke sigars'.format (age);
	}
	else if (age < 16) {
		messageElement.innerHTML = 'If you are {} you do not have a drivers licence yet'.format (age);
	}
	else if (age < 30) {
		messageElement.innerHTML = 'At {} you may already have children'.format (age);
	}
	else {
		messageElement.innerHTML = 'At {} you will probably already have some working experience'.format (age);
	}
};

//# sourceMappingURL=if_else_event.map