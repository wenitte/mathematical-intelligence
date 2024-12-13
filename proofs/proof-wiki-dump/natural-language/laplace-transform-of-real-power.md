# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Real_Power

Theorem
Let $n$ be a constant real number such that $n > -1$
Let $f: \R \to \R$ be the real function defined as:

$\map f t = t^n$

Then $f$ has a Laplace transform given by:














\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} t^n \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma {n + 1} } {s^{n + 1} }\)









where $\Gamma$ denotes the gamma function.


Proof













\(\ds \laptrans {t^n}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} t^n \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-u} \paren {\dfrac u s}^n \rd \paren {\dfrac u s}\)





Integration by Substitution: $u := s t$ where $s > 0$ is assumed














\(\ds \)

\(=\)







\(\ds \dfrac 1 {s^{n + 1} } \int_0^\infty u^n e^{-u} \rd u\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\map \Gamma {n + 1} } {s^{n + 1} }\)





Definition of Gamma Function



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of Special Functions: $1$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Gamma Function: $31$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 15$: Definite Integrals involving Exponential Functions: $15.76$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of Special Laplace Transforms: $32.28$




