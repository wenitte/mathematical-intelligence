# 

Source: https://proofwiki.org/wiki/Primitive_of_Reciprocal_of_Root_of_x_squared_minus_a_squared/Inverse_Hyperbolic_Cosine_Form



Theorem
$\ds \int \frac {\d x} {\sqrt {x^2 - a^2} } = \dfrac {\size x} x \arcosh {\size {\frac x a} } + C$
for $x^2 > a^2$.


Proof
When $x = a$ we have that $\sqrt {x^2 - a^2} = 0$ and then $\dfrac 1 {\sqrt {x^2 - a^2} }$ is not defined.
When $\size x < a$ we have that $x^2 - a^2 < 0$ and then $\sqrt {x^2 - a^2}$ is not defined.
Hence the domain needs to be restricted to $\size x > a$, or that is: $\size {\dfrac x a} > 1$.

Let $x > a$.
Let:














\(\ds u\)

\(=\)







\(\ds \map \arcosh {\frac x a}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a \cosh u\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d x} {\d u}\)

\(=\)







\(\ds a \sinh u\)





Derivative of Hyperbolic Cosine Function








\(\ds \leadsto \ \ \)





\(\ds \int \frac {\d x} {\sqrt {x^2 - a^2} }\)

\(=\)







\(\ds \int \frac {a \sinh u} {\sqrt {a^2 \cosh^2 u - a^2} } \rd u\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds \frac a a \int \frac {\sinh u} {\sqrt {\cosh^2 u - 1} } \rd u\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds \int \frac {\sinh u} {\sinh u} \rd u\)





Difference of Squares of Hyperbolic Cosine and Sine














\(\ds \)

\(=\)







\(\ds \int 1 \rd u\)




















\(\ds \)

\(=\)







\(\ds u + C\)





Integral of Constant














\(\ds \)

\(=\)







\(\ds \map \arcosh {\frac x a} + C\)





Definition of $u$














\(\ds \)

\(=\)







\(\ds \arcosh \size {\frac x a} + C\)





as $\dfrac x a > 0$














\(\ds \)

\(=\)







\(\ds \dfrac {\size x} x \arcosh \size {\frac x a} + C\)





as $x > 0$, so $\dfrac {\size x} x = 1$




Let $x < -a$.
Let $z = -x$.
Hence:

$\dfrac {\d z} {\d x} = -1$
Then:














\(\ds \int \frac {\d x} {\sqrt {x^2 - a^2} }\)

\(=\)







\(\ds \int \frac {-\d z} {\sqrt {\paren {-z}^2 - a^2} }\)





Integration by Substitution














\(\ds \)

\(=\)







\(\ds -\int \frac {\d z} {\sqrt {z^2 - a^2} }\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds -\map \arcosh {\frac z a} + C\)





from above














\(\ds \)

\(=\)







\(\ds -\map \arcosh {\frac {-x} a} + C\)





substituting back














\(\ds \)

\(=\)







\(\ds -\arcosh \size {\frac x a} + C\)





as $\dfrac x a < 0$














\(\ds \)

\(=\)







\(\ds \dfrac {\size x} x \arcosh \size {\frac x a} + C\)





as $x < 0$, so $\dfrac {\size x} x = -1$



$\blacksquare$


Also see
Primitive of $\dfrac 1 {\sqrt {x^2 + a^2} }$: Inverse Hyperbolic Sine Form
Primitive of $\dfrac 1 {\sqrt {a^2 - x^2} }$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 7$. Standard Integrals: $15$.
who glosses over the details of what happens for negative $x$.
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: Standard Forms: $\text {(xi)}$
who covers positive $x$ only.
1968: George B. Thomas, Jr.: Calculus and Analytic Geometry (4th ed.) ... (previous) ... (next): Front endpapers: A Brief Table of Integrals: $36$.
who neglects the case of negative $x$.
1976: K. Weltner and W.J. Weber: Mathematics for Engineers and Scientists ... (previous) ... (next): $6$. Integral Calculus: Appendix: Table of Fundamental Standard Integrals
who neglects the case of negative $x$.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
who neglects the case of negative $x$.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
who neglects the case of negative $x$.
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Appendix $7$: Integrals
who covers positive $x$ only
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): Appendix $8$: Integrals
who covers positive $x$ only




