# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Exponential/Real_Argument/Proof_1

Theorem
Let $\laptrans f$ denote the Laplace transform of a function $f$.
Let $e^x$ be the real exponential.
Then:

$\map {\laptrans {e^{a t} } } s = \dfrac 1 {s - a}$
where $a \in \R$ is constant, and $\map \Re s > \map \Re a$.


Proof













\(\ds \map {\laptrans {e^{a t} } } s\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} e^{a t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} e^{\paren {a - s} t} \rd t\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \int_0^L e^{\paren {a - s} t} \rd t\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \intlimits {\frac 1 {a - s} e^{\paren {a - s} t} } 0 L\)





Primitive of Exponential Function, Integration by Substitution














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \frac 1 {a - s} \paren {e^{\paren {a - s} L} - e^{\paren {a - s} 0} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \frac 1 {s - a} \paren {1 - e^{\paren {a - s} L} }\)





Exponential of Zero and rearranging




Because $s > a$, we have that $a - s < 0$.
Hence:

$\ds \lim_{L \mathop \to \infty} \paren {a - s} L \to -\infty$

So:














\(\ds \lim_{L \mathop \to \infty} \frac 1 {s - a} \paren {1 - e^{\paren {a - s} L} }\)

\(=\)







\(\ds \frac 1 {s - a} \paren {1 - 0}\)





Exponential Tends to Zero














\(\ds \)

\(=\)







\(\ds \frac 1 {s - a}\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transforms of some Elementary Functions: $1 \ \text{(c)}$




