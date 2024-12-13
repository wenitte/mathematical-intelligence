# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine_of_t_over_t



Theorem
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {\dfrac {\sin t} t} = \arctan \dfrac 1 s$


Corollary
$\laptrans {\dfrac {\sin a t} t} = \arctan \dfrac a s$


Proof
From Limit of $\dfrac {\sin x} x$ at Zero:

$\ds \lim_{x \mathop \to 0} \frac {\sin x} x = 1$

From Laplace Transform of Sine:

$(1): \quad \laptrans {\sin t} = \dfrac 1 {s^2 + 1}$
From Laplace Transform of Integral:

$(2): \quad \ds \laptrans {\dfrac {\map f t} t} = \int_s^{\to \infty} \map F u \rd u$

Hence:














\(\ds \laptrans {\dfrac {\sin t} t}\)

\(=\)







\(\ds \int_s^{\to \infty} \dfrac 1 {u^2 + 1} \rd u\)





$(1)$ and $(2)$














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \int_s^L \dfrac 1 {u^2 + 1} \rd u\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \bigintlimits {\arctan u} s L\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\arctan L - \arctan s}\)




















\(\ds \)

\(=\)







\(\ds \dfrac \pi 2 - \arctan s\)




















\(\ds \)

\(=\)







\(\ds \arccot s\)





Sum of Arctangent and Arccotangent














\(\ds \)

\(=\)







\(\ds \arctan \dfrac 1 s\)





Arctangent of Reciprocal equals Arccotangent



$\blacksquare$


Also see
Laplace Transform of Sine Integral Function


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $8$. Division by $t$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Translation and Change of Scale Properties: $12$




