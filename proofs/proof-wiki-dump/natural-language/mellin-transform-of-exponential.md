# 

Source: https://proofwiki.org/wiki/Mellin_Transform_of_Exponential

Theorem
Let $a$ be a complex constant and $e^t$ be the complex exponential.
Let $\MM$ be the Mellin transform.

Then:

$\map {\MM \set {e^{-a t} } } s = a^{-s} \, \map \Gamma s$
where $\map \Re a, \map \Re s > 0$


Proof













\(\ds \map {\MM \set {e^{-a t} } } s\)

\(=\)







\(\ds \int_0^{\to +\infty} t^{s - 1} e^{-a t} \rd t\)





Definition of Mellin Transform














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} \paren {\dfrac t a}^{s - 1} e^{-a \paren {\frac t a} } \frac {\d t} a\)





Integration by Substitution, $t \mapsto \dfrac t a$, $\d t \mapsto \dfrac {\d t} a$














\(\ds \)

\(=\)







\(\ds a^{-s} \int_0^{\to +\infty} t^{s - 1} e^{-t} \rd t\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a^{-s} \, \map \Gamma s\)





Definition of Gamma Function



$\blacksquare$


Also see
Mellin Transform of Higher Order Exponential




