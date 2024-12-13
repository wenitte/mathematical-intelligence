# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_t%5E2_by_Cosine_a_t

Theorem
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {t^2 \cos a t} = \dfrac {2 s^3 - 6 a^2 s} {\paren {s^2 + a^2}^3}$


Proof













\(\ds \laptrans {t^2 \cos a t}\)

\(=\)







\(\ds -\map {\dfrac {\d^2} {\d s^2} } {\laptrans {\cos a t} }\)





Higher Order Derivatives of Laplace Transform














\(\ds \)

\(=\)







\(\ds -\map {\dfrac {\d^2} {\d s^2} } {\dfrac a {s^2 + a^2} }\)





Laplace Transform of Sine














\(\ds \)

\(=\)







\(\ds \dfrac {2 s^3 - 6 a^2 s} {\paren {s^2 + a^2}^3}\)





Quotient Rule for Derivatives



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Multiplication by Powers of $t$: $20 \ \text{(b)}$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of Special Laplace Transforms: $32.59$




