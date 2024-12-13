# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Hyperbolic_Cosine/Proof_2

Theorem
Let $\cosh t$ be the hyperbolic cosine, where $t$ is real.
Let $\laptrans f$ denote the Laplace transform of the real function $f$.

Then:

$\laptrans {\cosh a t} = \dfrac s {s^2 - a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > a$.


Proof













\(\ds \laptrans {\cosh at}\)

\(=\)







\(\ds \laptrans {\frac {e^{at} + e^{-at} } 2}\)





Definition of Hyperbolic Cosine














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\laptrans {e^{at} } + \laptrans {e^{-at} } }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac 1 {s - a} + \frac 1 {s + a} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {s + a + s - a} {\paren {s - a} \paren {s + a} } }\)




















\(\ds \)

\(=\)







\(\ds \frac s {s^2 - a^2}\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transforms of some Elementary Functions: $3 \ \text {(b)}$




