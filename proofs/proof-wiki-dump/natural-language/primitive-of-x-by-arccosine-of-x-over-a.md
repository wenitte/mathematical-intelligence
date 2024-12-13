# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Arccosine_of_x_over_a



Theorem
$\ds \int x \arccos \frac x a \rd x = \paren {\frac {x^2} 2 - \frac {a^2} 4} \arccos \frac x a - \frac {x \sqrt {a^2 - x^2} } 4 + C$


Proof 1
Let:














\(\ds u\)

\(=\)







\(\ds \arccos \frac x a\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \cos u\)

\(=\)







\(\ds \frac x a\)





Definition of Real Arccosine




\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \sin u\)

\(=\)







\(\ds \sqrt {1 - \frac {x^2} {a^2} }\)





Sum of Squares of Sine and Cosine




Then:














\(\ds \int x \arccos \frac x a \rd x\)

\(=\)







\(\ds -a \int u \left({a \cos u}\right) \sin u \rd u\)





Primitive of Function of Arcsine














\(\ds \)

\(=\)







\(\ds -a \int a u \frac {\sin 2 u} 2 \rd u\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds -\frac {a^2} 2 \int u \sin 2 u \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\frac {a^2} 2 \paren {\frac {\sin 2 u} 4 - \frac {u \cos 2 u} 2} + C\)





Primitive of $x \sin a x$ where $a = 2$














\(\ds \)

\(=\)







\(\ds -\frac {a^2 \sin 2 u} 8 + \frac {a^2 u \cos 2 u} 4 + C\)





simplifying














\(\ds \)

\(=\)







\(\ds -\frac {a^2 \sin u \cos u} 4 + \frac {a^2 u \cos 2 u} 4 + C\)





Double Angle Formula for Sine














\(\ds \)

\(=\)







\(\ds -\frac {a^2 \sin u \cos u} 4 + \frac {a^2 u \paren {\cos^2 u - \sin^2 u} } 4 + C\)





Double Angle Formula for Cosine














\(\ds \)

\(=\)







\(\ds -\frac {a^2 \sin u \cos u} 4 + \frac {a^2 \arccos \frac x a \paren {\cos^2 u - \sin^2 u} } 4 + C\)





substituting for $u$














\(\ds \)

\(=\)







\(\ds -\frac {a^2 \sin u \frac x a} 4 + \frac {a^2 \arccos \frac x a \paren {\frac {x^2} {a^2} - \sin^2 u} } 4 + C\)





substituting for $\cos u$ from $(1)$














\(\ds \)

\(=\)







\(\ds -\frac {a^2 \sqrt {1 - \frac {x^2} {a^2} } \frac x a} 4 + \frac {a^2 \arccos \frac x a \paren {\frac {x^2} {a^2} - \paren {1 - \frac {x^2} {a^2} } } } 4 + C\)





substituting for $\sin u$ from $(2)$














\(\ds \)

\(=\)







\(\ds \paren {\frac {x^2} 2 - \frac {a^2} 4} \arccos \frac x a - \frac {x \sqrt {a^2 - x^2} } 4 + C\)





simplifying



$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arccos \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-1} {\sqrt {a^2 - x^2} }\)





Derivative of $\arccos \dfrac x a$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \frac {x^2} 2\)





Primitive of Power




Then:














\(\ds \int x \arccos \frac x a \rd x\)

\(=\)







\(\ds \frac {x^2} 2 \arccos \frac x a - \int \frac {x^2} 2 \paren {\frac {-1} {\sqrt {a^2 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccos \frac x a + \frac 1 2 \int \frac {x^2 \rd x} {\sqrt {a^2 - x^2} } + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccos \frac x a + \frac 1 2 \paren {\frac {-x \sqrt {a^2 - x^2} } 2 + \frac {a^2} 2 \arcsin \frac x a} + C\)





Primitive of $\dfrac {x^2} {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arccos \frac x a - \frac {x \sqrt {a^2 - x^2} } 4 + \frac {a^2} 4 \paren {\frac \pi 2 - \arccos \frac x a} + C\)





Sum of Arcsine and Arccosine














\(\ds \)

\(=\)







\(\ds \paren {\frac {x^2} 2 - \frac {a^2} 4} \arccos \frac x a - \frac {x \sqrt {a^2 - x^2} } 4 + \frac {\pi a^2} 8 + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \paren {\frac {x^2} 2 - \frac {a^2} 4} \arccos \frac x a - \frac {x \sqrt {a^2 - x^2} } 4 + C\)





subsuming $\dfrac {\pi a^2} 8$ into the arbitrary constant



$\blacksquare$


Also see
Primitive of $x \arcsin \dfrac x a$
Primitive of $x \arctan \dfrac x a$
Primitive of $x \arccot \dfrac x a$
Primitive of $x \arcsec \dfrac x a$
Primitive of $x \arccsc \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Trigonometric Functions: $14.478$




