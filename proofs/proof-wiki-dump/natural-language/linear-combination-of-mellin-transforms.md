# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Mellin_Transforms

Theorem
Let $\MM$ be the Mellin transform.
Let $\map f t$, $g \left({t}\right)$ be functions such that $\MM \left\{ {\map f t}\right\} \left({s}\right)$ and $\MM \left\{ {\map f t}\right\} \left({s}\right)$ exist.
Let $\lambda \in \C$ be a constant.

Then:

$\map {\MM \set {\lambda \map f t + \map g t} } s = \lambda \map {\MM \set {\map f t} } s + \map {\MM \set {\map g t} } s$
everywhere all the above expressions are defined.


Proof













\(\ds \map {\MM \set {\lambda \map f t + \map g t} } s\)

\(=\)







\(\ds \int_0^{\to +\infty} t^{s - 1} \paren {\lambda \map f t + \map g t} \rd t\)





Definition of Mellin Transform














\(\ds \)

\(=\)







\(\ds \lambda \int_0^{\to +\infty} t^{s - 1} \map f t \rd t + \int_0^{\to +\infty} t^{s - 1} \map g t \rd t\)





distributing $t^{s - 1}$, Linear Combination of Complex Integrals














\(\ds \)

\(=\)







\(\ds \lambda \map {\MM \set {\map f t} } s + \map {\MM \set {\map g t} } s\)





Definition of Mellin Transform



$\blacksquare$





