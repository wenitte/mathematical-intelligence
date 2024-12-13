# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_1



Theorem
Let $f: \R \to \R$ be the function defined as:

$\forall t \in \R: \map f t = 1$

Then the Laplace transform of $\map f t$ is given by:

$\laptrans {\map f t} = \dfrac 1 s$
for $\map \Re s > 0$.


Proof 1













\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \laptrans 1\)





Definition of $\map f t$














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \int_0^L e^{-s t} \rd t\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \intlimits {-\frac 1 s e^{-s t} } 0 L\)





Primitive of Exponential Function














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {-\frac 1 s e^{-s L}  - \paren {-\frac 1 s} }\)





Exponential of Zero














\(\ds \)

\(=\)







\(\ds \lim_{L \mathop \to \infty} \paren {\frac {1 - e^{-s L} } s}\)





simplification














\(\ds \)

\(=\)







\(\ds \frac 1 s\)





Complex Exponential Tends to Zero



$\blacksquare$


Proof 2
From Laplace Transform of Derivative:

$(1): \quad \laptrans {\map {f'} t} = s \laptrans {\map f t} - \map f 0$
under suitable conditions.

Then:














\(\ds \map f t\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} t\)

\(=\)







\(\ds 0\)




















\(\ds \map f 0\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans 0\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds s \laptrans 1 - 1\)





from $(1)$, substituting for $\map f t$ and $\map f 0$








\(\ds \leadsto \ \ \)





\(\ds s \laptrans 1\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans 1\)

\(=\)







\(\ds \dfrac 1 s\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of some Elementary Functions: $1$.
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of Special Laplace Transforms: $32.25$




