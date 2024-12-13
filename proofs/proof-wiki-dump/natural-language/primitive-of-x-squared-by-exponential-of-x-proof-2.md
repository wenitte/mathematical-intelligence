# 

Source: https://proofwiki.org/wiki/Primitive_of_x_squared_by_Exponential_of_x/Proof_2

Theorem
$\ds \int x^2 e^x \rd x = e^x \paren {x^2 - 2 x + 2} + C$


Proof
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


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration: Integration by Parts: Example




