# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Cosine_Function



Theorem
$\ds \int \arcosh x \rd x = x \arcosh x - \sqrt {x^2 - 1} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arcosh x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {x^2 - 1} }\)





Derivative of $\arcosh \dfrac x a$, setting $a := 1$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds x\)





Primitive of Constant




Then:














\(\ds \int \arcosh x \rd x\)

\(=\)







\(\ds x \arcosh x - \int x \paren {\frac 1 {\sqrt {x^2 - 1} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arcosh x - \int \frac {x \rd x} {\sqrt {x^2 - 1} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arcosh x - \sqrt {x^2 - 1} + C\)





Primitive of $\dfrac x {\sqrt {x^2 - a^2} }$, setting $a := 1$



$\blacksquare$


Also see
Primitive of $\arsinh x$
Primitive of $\artanh x$
Primitive of $\arcoth x$


Sources
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




