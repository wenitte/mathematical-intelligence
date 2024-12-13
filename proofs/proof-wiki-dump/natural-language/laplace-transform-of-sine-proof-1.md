# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine/Proof_1

Theorem
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {\sin at} = \dfrac a {s^2 + a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > 0$.


Proof













\(\ds \map {\laptrans {\sin {a t} } } s\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \sin {a t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \int_0^L e^{-s t} \sin {a t} \rd t\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \intlimits {\frac {e^{-s t} \paren {-s \sin a t - a \cos a t} } {\paren {-s}^2 + a^2} } 0 L\)





Primitive of $e^{a x} \sin b x$














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\dfrac {e^{-s L} \paren {-s \sin a L - a \cos a L} } {s^2 + a^2} - \dfrac {e^{-s \times 0} \paren {-s \, \map \sin {0 \times a} - a \, \map \cos {0 \times a} } } {s^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\dfrac {s \sin 0 + a \cos 0} {s^2 + a^2} - \dfrac {e^{-s L} \paren {s \sin a L + a \cos a L} } {s^2 + a^2} }\)





Exponential of Zero and rearranging














\(\ds \)

\(=\)







\(\ds \dfrac {s \sin 0 + a \cos 0} {s^2 + a^2} - 0\)





Exponential Tends to Zero














\(\ds \)

\(=\)







\(\ds \frac a {s^2 + a^2}\)





Sine of Zero is Zero, Cosine of Zero is One



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transforms of some Elementary Functions: $2 \ \text{(a)}$




