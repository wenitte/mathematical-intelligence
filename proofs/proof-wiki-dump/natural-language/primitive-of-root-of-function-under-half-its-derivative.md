# 

Source: https://proofwiki.org/wiki/Primitive_of_Root_of_Function_under_Half_its_Derivative

Theorem
Let $f$ be a real function which is integrable.

Then:

$\ds \int \frac {\map {f'} x} {2 \sqrt {\map f x} } \rd x = \sqrt {\map f x} + C$
where $C$ is an arbitrary constant.


Proof
By Integration by Substitution (with appropriate renaming of variables):

$\ds \int \map g u \rd u = \int \map g {\map f x} \map {f'} x \rd x$
Let $\map u x = \sqrt {\map f x}$














\(\ds \map u x\)

\(=\)







\(\ds \sqrt {\map f x}\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\d u} {\d x}\)

\(=\)







\(\ds \dfrac {\map {f'} x} {2 \sqrt {\map f x} }\)





Chain Rule for Derivatives, Derivative of Power




Then:














\(\ds \int \frac {\map {f'} x} {2 \sqrt {\map f x} } \rd x\)

\(=\)







\(\ds \int \rd u\)





Integration by Substitution: putting $\map u x = \sqrt {\map f x}$














\(\ds \)

\(=\)







\(\ds u + C\)





Primitive of Constant














\(\ds \)

\(=\)







\(\ds \sqrt {\map f x} + C\)





Definition of $u$



$\blacksquare$


Sources
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $10$: Integration: $10.4$. Standard integrals: General Rules: $\text {IV}$.




