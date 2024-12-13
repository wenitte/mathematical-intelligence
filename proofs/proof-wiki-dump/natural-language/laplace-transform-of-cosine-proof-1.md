# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Cosine/Proof_1

Theorem
Let $\cos$ be the real cosine function.
Let $\laptrans f$ denote the Laplace transform of the real function $f$.

Then:

$\laptrans {\cos a t} = \dfrac s {s^2 + a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > a$.


Proof













\(\ds \map {\laptrans {\cos {a t} } } s\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \cos {a t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \int_0^L e^{-s t} \cos {a t} \rd t\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \intlimits {\frac {e^{-s t} \paren {-s \cos a t + a \sin a t} } {\paren {-s}^2 + a^2} } 0 L\)





Primitive of $e^{a x} \cos b x$














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\frac {e^{-s L} \paren {-s \cos a L + a \sin a L} } {s^2 + a^2} - \frac {e^{-s \times 0} \paren {-s \, \map \cos {0 \times a} + a \, \map \sin {0 \times a} } } {s^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\frac {s \, \map \cos {0 \times a} - a \, \map \sin {0 \times a} } {s^2 + a^2} - \frac {e^{-s L} \paren {-s \cos a L + a \sin a L} } {s^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {s \, \map \cos {0 \times a} - a \, \map \sin {0 \times a} } {s^2 + a^2} - 0\)





Exponential Tends to Zero














\(\ds \)

\(=\)







\(\ds \frac {s \cos 0 - a \sin 0} {s^2 + a^2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac s {s^2 + a^2}\)





Sine of Zero is Zero, Cosine of Zero is One



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transforms of some Elementary Functions: $2 \ \text{(b)}$




