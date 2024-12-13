# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Identity_Mapping/Proof_2

Theorem
Let $\laptrans f$ denote the Laplace transform of a function $f$.
Let $\map {I_\R} t$ denote the identity mapping on $\R$ for $t > 0$.

Then:

$\laptrans {\map {I_\R} t} = \dfrac 1 {s^2}$
for $\map \Re s > 0$.


Proof













\(\ds \laptrans {\map {I_\R} t}\)

\(=\)







\(\ds \laptrans t\)





Definition of Identity Mapping














\(\ds \)

\(=\)







\(\ds \int_0^{\to +\infty} t e^{-st} \rd t\)





Definition of Laplace Transform




From Integration by Parts:

$\ds \int f g' \rd t = f g - \int f'g \rd t$
Here:














\(\ds f\)

\(=\)







\(\ds t\)














\(\ds \leadsto \ \ \)





\(\ds f'\)

\(=\)







\(\ds 1\)





Derivative of Identity Function














\(\ds g'\)

\(=\)







\(\ds e^{-st}\)














\(\ds \leadsto \ \ \)





\(\ds g\)

\(=\)







\(\ds -\frac 1 s e^{-s t}\)





Primitive of Exponential Function



So: 














\(\ds \int t e^{-s t} \rd t\)

\(=\)







\(\ds -\frac t s e^{-s t} - \frac 1 s \int e^{-s t} \rd t\)




















\(\ds \)

\(=\)







\(\ds -\frac t s e^{-s t} - \frac 1 {s^2} e^{-s t}\)





Primitive of Exponential Function




Evaluating at $t = 0$ and $t \to +\infty$:














\(\ds \laptrans t\)

\(=\)







\(\ds \intlimits {-\frac t s e^{-s t} - \frac 1 {s^2} e^{-s t} } {t \mathop = 0} {t \mathop \to +\infty}\)




















\(\ds \)

\(=\)







\(\ds -\frac 1 s \lim_{t \mathop \to +\infty} \frac t { e^{s t} } - \paren {0 - \frac 1 {s^2} }\)





Exponential of Zero and One, Exponent Combination Laws: Negative Power














\(\ds \)

\(=\)







\(\ds 0 + \frac 1 {s^2}\)





Limit at Infinity of Polynomial over Complex Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 {s^2}\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transforms of some Elementary Functions: $1 \ \text{(b)}$
For a video presentation of the contents of this page, visit the Khan Academy.




