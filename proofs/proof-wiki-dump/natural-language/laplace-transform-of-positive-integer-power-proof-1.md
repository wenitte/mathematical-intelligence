# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Positive_Integer_Power/Proof_1

Theorem
Let $\laptrans f$ denote the Laplace transform of a function $f$.
Let $t^n: \R \to \R$ be $t$ to the $n$th power for some $n \in \N_{\ge 0}$.

Then:

$\laptrans {t^n} = \dfrac {n!} { s^{n + 1} }$
for $\map \Re s > 0$.


Proof













\(\ds \laptrans {t^n}\)

\(=\)







\(\ds \int_0^{\to +\infty} t^n e^{-s t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \intlimits {\frac {e^{-s t} } {-s} \sum_{k \mathop = 0}^n \paren {\paren {-1}^k \frac {n^{\underline k} t^{n - k} } {\paren {-s}^k} } } {t \mathop = 0} {t \mathop \to +\infty}\)





Primitive of $x^n e^{a x}$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {0 - \frac 1 {-s} \paren {-1}^k \frac {n^{\underline k} 0^{n - k} } {\paren {-s}^k} }\)





Exponential Tends to Zero and Infinity, Exponent Combination Laws: Negative Power














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {\dfrac 1 {s^{k + 1} } n^{\underline k} 0^{n - k} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 {s^{k + 1} } n^{\underline n}\)





$0^{n - k} = 0$ for all terms except $n = k$, when $0^{n - n} = 1$














\(\ds \)

\(=\)







\(\ds \dfrac {n!} {s^{k + 1} }\)





Integer to Power of Itself Falling is Factorial



$\blacksquare$





