# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Inverse_Hyperbolic_Cosecant_of_x_over_a



Theorem
$\ds \int x \arcsch \frac x a \rd x = \begin {cases}
\dfrac {x^2} 2 \arcsch \dfrac x a + \dfrac {a \sqrt {x^2 + a^2} } 2 + C & : x > 0 \\
\dfrac {x^2} 2 \arcsch \dfrac x a - \dfrac {a \sqrt {x^2 + a^2} } 2 + C & : x < 0 \\
\end {cases}$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcsch \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \dfrac {-a} {\size x \sqrt {a^2 + x^2} }\)





Derivative of $\arcsch \dfrac x a$




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














\(\ds \int x \arcsch \frac x a \rd x\)

\(=\)







\(\ds \frac {x^2} 2 \arcsch \frac x a - \int \frac {x^2} 2 \paren {\dfrac {-a} {\size x \sqrt {a^2 + x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arcsch \frac x a + \frac a 2 \int \frac {x^2 \rd x} {\size x \sqrt {a^2 + x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arcsch \frac x a \begin {cases} \mathop + \dfrac a 2 \int \dfrac {x \rd x} {\sqrt {x^2 + a^2} } + C & : x > 0 \\ \mathop - \dfrac a 2 \int \dfrac {x \rd x} {\sqrt {x^2 + a^2} } + C & : x < 0 \end {cases}\)





Definition of Absolute Value














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arcsch \frac x a \begin {cases} \mathop + \dfrac a 2 \sqrt {x^2 + a^2} + C & : x > 0 \\ \mathop - \dfrac a 2 \sqrt {x^2 + a^2} + C & : x < 0 \end {cases}\)





Primitive of $\dfrac x {\sqrt {x^2 + a^2} }$














\(\ds \)

\(=\)







\(\ds \begin {cases}
\dfrac {x^2} 2 \arcsch \dfrac x a + \dfrac {a \sqrt {x^2 + a^2} } 2 + C & : x > 0 \\
\dfrac {x^2} 2 \arcsch \dfrac x a - \dfrac {a \sqrt {x^2 + a^2} } 2 + C & : x < 0 \\
\end {cases}\)






simplifying



$\blacksquare$


Also see
Primitive of $x \arsinh \dfrac x a$
Primitive of $x \arcosh \dfrac x a$
Primitive of $x \artanh \dfrac x a$
Primitive of $x \arcoth \dfrac x a$
Primitive of $x \arsech \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.670$




