# 

Source: https://proofwiki.org/wiki/Mellin_Transform_of_Power_Times_Function

Theorem
Let $t^n: \R \to \R$ be $t$ to the $n$th power for some $n \in \N_{\ge 0}$.
Let $\MM$ be the Mellin transform.

Then:

$\map {\MM \set {t^n \map f t} } s = \map {\MM \set {\map f t} } {s + n}$
given that both transforms exist.


Proof













\(\ds \map {\MM \set {t^n \map f t} } s\)

\(=\)







\(\ds \int_0^{\to +\infty} t^{s - 1} t^n \map f t \rd t\)





Definition of Mellin Transform














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} t^{\paren {s + n} - 1} \map f t \rd t\)





Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \map {\MM \set {\map f t} } {s + n}\)





Definition of Mellin Transform



$\blacksquare$





