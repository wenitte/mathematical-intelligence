# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Identity_Mapping/Proof_1

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







\(\ds \int_0^{\to +\infty} t e^{-s t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \intlimits {\frac {e^{-s t} } {-s} \paren {t - \frac 1 {-s} } } {t \mathop = 0} {t \mathop \to +\infty}\)





Primitive of $x e^{a x}$














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





