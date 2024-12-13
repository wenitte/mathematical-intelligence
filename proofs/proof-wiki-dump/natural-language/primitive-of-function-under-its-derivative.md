# 

Source: https://proofwiki.org/wiki/Primitive_of_Function_under_its_Derivative



Theorem
Let $f$ be a real function which is integrable.

Then:

$\ds \int \frac {\map {f'} x} {\map f x} \rd x = \ln \size {\map f x} + C$
where $C$ is an arbitrary constant.


Proof
By Integration by Substitution (with appropriate renaming of variables):

$\ds \int \map g u \rd u = \int \map g {\map f x} \map {f'} x \rd x$
Then:














\(\ds \int \frac {\map {f'} x} {\map f x} \rd x\)

\(=\)







\(\ds \int \frac {\d u} u\)





putting $\map g u := \dfrac 1 u$














\(\ds \)

\(=\)







\(\ds \ln \size u + C\)





Primitive of Reciprocal














\(\ds \)

\(=\)







\(\ds \ln \size {\map f x} + C\)





Definition of $u$



$\blacksquare$


Also presented as
Primitive of Function under its Derivative can also be presented as:

$\ds \int \frac {\d u} u = \ln \size u + C$
where it is understood that $u$ is a function of $x$.


Examples
Primitive of $\dfrac {2 x - 5} {\paren {x - 2} \paren {x - 3} }$
$\ds \int \dfrac {2 x - 5} {\paren {x - 2} \paren {x - 3} } = \ln \size {\paren {x - 2} \paren {x - 3} } + C$


Primitive of $\dfrac {2 x + a} {x^2 + a x + b}$
$\ds \int \dfrac {2 x + a} {x^2 + a x + b} \rd x = \ln \size {x^2 + a x + b} + C$


Sources
1944: R.P. Gillespie: Integration (2nd ed.) ... (previous) ... (next): Chapter $\text {II}$: Integration of Elementary Functions: $\S 8$. Change of Variable
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Integration
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: General Rules: $\text {III}$.
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Appendix $\text I$: Table of Indefinite Integrals $7$.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Appendix: Table $2$: Integrals




