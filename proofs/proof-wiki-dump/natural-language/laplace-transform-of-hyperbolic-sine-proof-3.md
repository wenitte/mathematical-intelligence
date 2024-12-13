# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Hyperbolic_Sine/Proof_3

Theorem
Let $\sinh t$ be the hyperbolic sine, where $t$ is real.
Let $\laptrans f$ denote the Laplace transform of the real function $f$.

Then:

$\laptrans {\sinh a t} = \dfrac a {s^2 - a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > a$.


Proof













\(\ds \laptrans {\sinh a t}\)

\(=\)







\(\ds \laptrans {\frac {e^{a t} - e^{-a t} } 2}\)





Definition of Hyperbolic Sine














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \paren {\frac {e^{a t} - e^{-a t} } 2} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \int_0^{\to +\infty} e^{-s t} e^{a t} \rd t - \dfrac 1 2 \int_0^{\to +\infty} e^{-s t} e^{-a t} \rd t\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \dfrac 1 2 \laptrans {e^{a t} } - \dfrac 1 2 \laptrans {e^{-a t} }\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac 1 {s-a} - \frac 1 {s + a} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {s + a - s + a} {\paren {s - a} \paren {s + a} } }\)




















\(\ds \)

\(=\)







\(\ds \frac a {s^2 - a^2}\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transforms of some Elementary Functions: $3 \ \text {(a)}$




