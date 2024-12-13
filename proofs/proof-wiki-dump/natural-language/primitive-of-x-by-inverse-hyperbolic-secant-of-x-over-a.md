# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Inverse_Hyperbolic_Secant_of_x_over_a



Theorem
$\ds \int x \arsech \frac x a \rd x = \dfrac {x^2} 2 \arsech \dfrac x a - \dfrac {a \sqrt {a^2 - x^2} } 2 + C$
where $\arsech$ denotes the real area hyperbolic secant.


Corollary
$\ds \int x \paren {-\sech^{-1} \frac x a} \rd x = -\dfrac {x^2} 2 \paren {-\sech^{-1} \frac x a} + \dfrac {a \sqrt {a^2 - x^2} } 2 + C$
where $-\sech^{-1}$ denotes the negative branch of the real inverse hyperbolic secant multifunction.


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arsech \frac x a\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac {-a} {x \sqrt {a^2 - x^2} }\)





Derivative of $\arsech \dfrac x a$




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














\(\ds \int x \arsech \frac x a \rd x\)

\(=\)







\(\ds \frac {x^2} 2 \arsech \frac x a - \int \frac {x^2} 2 \paren {\frac {-a} {x \sqrt {a^2 - x^2} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arsech \frac x a + \frac a 2 \int \frac {x \rd x} {\sqrt {a^2 - x^2} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arsech \frac x a + \frac a 2 \paren {-\sqrt {a^2 - x^2} } + C\)





Primitive of $\dfrac x {\sqrt {a^2 - x^2} }$














\(\ds \)

\(=\)







\(\ds \frac {x^2} 2 \arsech \frac x a - \frac {a \sqrt {a^2 - x^2} } 2 + C\)





simplifying



$\blacksquare$


Also see
Primitive of $x \arsinh \dfrac x a$
Primitive of $x \arcosh \dfrac x a$
Primitive of $x \artanh \dfrac x a$
Primitive of $x \arcoth \dfrac x a$
Primitive of $x \arcsch \dfrac x a$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 14$: Integrals involving Inverse Hyperbolic Functions: $14.667$




