# 

Source: https://proofwiki.org/wiki/Integral_of_Arcsine_Function


It has been suggested that this page or section be merged into Primitive of Arcsine of x over a.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
$\ds \int \arcsin x \rd x = x \arcsin x + \sqrt {1 - x^2} + C$
for $x \in \closedint {-1} 1$.


Proof













\(\ds \int \arcsin x \rd x\)

\(=\)







\(\ds \int 1 \cdot \arcsin x \rd x\)




















\(\ds \)

\(=\)







\(\ds x \arcsin x - \int x \paren {\frac \rd {\rd x} \arcsin x} \rd x\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \arcsin x - \int \frac x {\sqrt {1 - x^2} } \rd x\)





Derivative of Arcsine Function




Substitute:














\(\ds u\)

\(=\)







\(\ds 1 - x^2\)




















\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds -2 x\)





differentiating with respect to $x$








\(\ds \leadsto \ \ \)





\(\ds -\frac 1 2 \frac {\d u} {\d x}\)

\(=\)







\(\ds x\)




















\(\ds \int \arcsin x \rd x\)

\(=\)







\(\ds x \arcsin x - \int \frac {- \frac 1 2} {\sqrt u} \frac {\d u} {\d x} \rd x\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds x \arcsin x + \frac 1 2 \int u^{-1/2} \rd u\)




















\(\ds \)

\(=\)







\(\ds x \arcsin x + u^{1/2} + C\)





Integral of Power














\(\ds \)

\(=\)







\(\ds x \arcsin x + \sqrt {1 - x^2} + C\)





from $u = 1 - x^2$



$\blacksquare$


Sources
Weisstein, Eric W. "Inverse Sine." From MathWorld--A Wolfram Web Resource.  https://mathworld.wolfram.com/InverseSine.html




