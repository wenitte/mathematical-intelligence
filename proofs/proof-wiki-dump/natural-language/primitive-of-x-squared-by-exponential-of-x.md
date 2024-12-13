# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Exponential_of_x

Theorem
$\ds \int x^2 e^x \rd x = e^x \paren {x^2 - 2 x + 2} + C$


Proof 1
From Primitive of $x^2 e^{a x}$:

$\ds \int x^2 e^{a x} \rd x = \frac {e^{a x} } a \paren {x^2 - \frac {2 x} a + \frac 2 {a^2} } + C$

The result follows by setting $a = 1$.
$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x^2\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 2 x\)





Derivative of Power




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds e^x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds e^x\)





Primitive of $e^x$




Then:














\(\ds \int x^2 e^x \rd x\)

\(=\)







\(\ds x^2 e^x - \int 2 x e^x \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x^2 e^x - 2 \int x e^x \rd x + C\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds x^2 e^x - 2 \paren {e^x \paren {x - 1} } + C\)





Primitive of $x e^{a x}$ with $a = 1$














\(\ds \)

\(=\)







\(\ds e^x \paren {x^2 - 2 x + 2} + C\)





simplifying



$\blacksquare$





