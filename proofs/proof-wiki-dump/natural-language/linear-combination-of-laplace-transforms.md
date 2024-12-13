# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Laplace_Transforms



Theorem
Let $\laptrans f$ denote the Laplace transform of the real function $f$.
Let $f, g$ be functions such that $\laptrans f$ and $\laptrans g$ exist.
Let $\lambda, \mu \in \C$ or $\R$ be constants.

Then:

$\laptrans {\lambda \, \map f t + \mu \, \map g t} = \lambda \laptrans {\map f t} + \mu \laptrans {\map g t}$
everywhere all the above expressions are defined.


General Result
Linear Combination of Laplace Transforms/General Result

Proof













\(\ds \laptrans {\lambda \, \map f t + \mu \, \map g t}\)

\(=\)







\(\ds \int_0^{\to +\infty} e^{-s t} \paren {\lambda \, \map f t + \mu \, \map g t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \lim_{A \mathop \to +\infty} \paren {\int_0^A e^{-s t} \paren {\lambda \, \map f t + \mu \, \map g t} \rd t}\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lim_{A \mathop \to +\infty} \paren {\lambda \int_0^A e^{-s t} \map f t \rd t + \mu \int_0^A e^{-s t} \map g t \rd t}\)





distributing $e^{-s t}$, Linear Combination of Complex Integrals














\(\ds \)

\(=\)







\(\ds \lambda \lim_{A \mathop \to +\infty} \int_0^A e^{-s t} \map f t \rd t + \mu \lim_{A \mathop \to +\infty} \int_0^A e^{-s t} \map g t \rd t\)





Combination Theorem for Limits at Infinity














\(\ds \)

\(=\)







\(\ds \lambda \int_0^{\to +\infty} e^{-s t} \map f t \rd t + \mu \int_0^{\to +\infty} e^{-st} \map g t \rd t\)





Definition of Improper Integral














\(\ds \)

\(=\)







\(\ds \lambda \laptrans {\map f t} + \mu \laptrans {\map g t}\)





Definition of Laplace Transform



$\blacksquare$


Examples
Example $1$
$\laptrans {4 t^2 - 3 \cos 2 t + 5 e^{-t} } = \dfrac 8 {s^3} - \dfrac {3 s} {s^2 + 4} + \dfrac 5 {s + 1}$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Important Properties of Laplace Transforms: $1$. Linearity property: Theorem $1 \text{-} 2$
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Linearity Property: $5$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of General Properties of Laplace Transforms: $32.3$




