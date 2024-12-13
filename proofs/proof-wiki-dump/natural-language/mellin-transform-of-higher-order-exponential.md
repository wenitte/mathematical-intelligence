# 

Source: https://proofwiki.org/wiki/Mellin_Transform_of_Higher_Order_Exponential

Theorem
Let $a$ be a complex constant.
Let $n$ be a natural number.
Let $e^t$ be the complex exponential of $t$.
Let $\MM$ be the Mellin transform.

Then:

$\map {\MM \set {e^{-a t^n} } } s = \dfrac {a^{-s/n} } n \map \Gamma {\dfrac s n}$
where $\map \Gamma z$ is the Gamma function and $\map \Re a$, $\map \Re s > 0$.


Proof













\(\ds \map {\MM \set {e^{-a t^n} } } s\)

\(=\)







\(\ds \int_0^{\to +\infty} t^{s-1} e^{-a t^n} \rd t\)





Definition of Mellin Transform














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} \paren {\dfrac t {\sqrt[n] a} }^{s - 1} e^{-a \paren {\dfrac t {\sqrt[n] {a} } }^n} \dfrac {\d t} {\sqrt[n] a}\)





Integration by Substitution, $t \mapsto \dfrac t {\sqrt[n] a}$, $\d t \mapsto \dfrac {\d t} {\sqrt[n] {a} }$














\(\ds \)

\(=\)







\(\ds a^{-s/n} \int_0^{\to +\infty} t^{s - 1} e^{-t^n} \rd t\)





Primitive of Constant Multiple of Function














\(\ds \)

\(=\)







\(\ds a^{-s/n} \int_0^{\to +\infty} t^{\paren {s - 1}/n} e^{-t} \dfrac {t^{1 / n - 1} \rd t} n\)





Integration by Substitution, $t \mapsto \sqrt[n] t$, $\d t \mapsto \dfrac {t^{1 / n - 1} \rd t} n$














\(\ds \)

\(=\)







\(\ds \dfrac{a^{-s/n} } n \int_0^{\to +\infty} t^{s/n-1} e^{-t} \rd t\)





Primitive of Constant Multiple of Function, Exponent Combination Laws














\(\ds \)

\(=\)







\(\ds \dfrac{a^{-s/n} } n \map \Gamma {\dfrac s n}\)





Definition of Gamma Function



$\blacksquare$





