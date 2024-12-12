# 

Source: https://proofwiki.org/wiki/Composition_of_Dirac_Delta_Distribution_with_Function_with_Simple_Zero/Corollary

Corollary to Composition of Dirac Delta Distribution with Function with Simple Zero
Dirac delta distribution is even: 

$\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} {-x} \map \phi x \rd x = \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} x \map \phi x \rd x$
which can be abbreviated to:

$\map \delta {-x} = \map \delta x$


Proof
Let $\map \phi x \in \map \DD \R$ be a test function.
Let $\sequence {\map {\delta_n} x}_{n \mathop \in \N}$ be a delta sequence.
By definition:

$\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} x \map \phi x \rd x = \map \phi 0$
Consider a delta sequence $\sequence {\map {\delta_n} {-x} }_{n \mathop \in \N}$.
This is a composition of $\sequence {\map {\delta_n} x}_{n \mathop \in \N}$ with the function $\map f x = - x$ with a simple zero at $x_0 = 0$.
By Composition of Dirac Delta Distribution with Function with Simple Zero:














\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} {- x} \map \phi x \rd x\)

\(=\)







\(\ds \frac {\map \phi 0} {\size {-1} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi 0\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int_{-\infty}^\infty \map {\delta_n} x \map \phi x \rd x\)





Definition of Delta Sequence



Abusing the notation, this could be understood as:

$\ds \int_{-\infty}^\infty \map \delta {- x} \map \phi x \rd x = \int_{-\infty}^\infty \map \delta x \map \phi x \rd x$
or

$\map \delta {- x} = \map \delta x$
$\blacksquare$


Sources
1998: Ram Prakash Kanwal: Generalized Functions: Theory and Technique (2nd ed.): Chapter $2$. The Schwartz-Sobolev Theory of Distributions $2.5$ Algebraic Operations on Distributions




