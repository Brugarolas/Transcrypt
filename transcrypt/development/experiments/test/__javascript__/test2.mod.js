	__nest__ (
		__all__,
		'test2', {
			__all__: {
				__inited__: false,
				__init__: function (__all__) {
					var C = __class__ ('C', [object], {
						__qualname__: 'test2.C',
						get f () {return __get__ (this, function (self) {
							var g = function () {
								// pass;
							};
							return 0;
						});}
					});
					var c = C ();
					c.f ();
					__pragma__ ('<all>')
						__all__.C = C;
						__all__.c = c;
					__pragma__ ('</all>')
				}
			}
		}
	);