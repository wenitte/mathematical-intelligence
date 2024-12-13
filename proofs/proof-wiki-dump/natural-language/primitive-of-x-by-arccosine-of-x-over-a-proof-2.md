# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Arccosine_of_x_over_a/Proof_2

Theorem
$\ds \int x \arccos \frac x a \rd x = \paren {\frac {x^2} 2 - \frac {a^2} 4} \arccos \frac x a - \frac {x \sqrt {a^2 - x^2} } 4 + C$


Proof
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





