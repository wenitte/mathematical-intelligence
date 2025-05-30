# 

Source: https://proofwiki.org/wiki/Primitive_of_Inverse_Hyperbolic_Sine_Function/Proof_1

Theorem
$\ds \int \arsinh x \rd x = x \arsinh x - \sqrt {x^2 + 1} + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \arsinh x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac 1 {\sqrt {x^2 + 1} }\)





Derivative of $\arsinh \dfrac x a$, setting $a := 1$




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














\(\ds \int \arsinh x \rd x\)

\(=\)







\(\ds x \arsinh x - \int x \paren {\frac 1 {\sqrt {x^2 + 1} } } \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arsinh x - \int \frac {x \rd x} {\sqrt {x^2 + 1} } + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \arsinh x - \sqrt {x^2 + 1} + C\)





Primitive of $\dfrac x {\sqrt {x^2 + a^2} }$, setting $a := 1$



$\blacksquare$





