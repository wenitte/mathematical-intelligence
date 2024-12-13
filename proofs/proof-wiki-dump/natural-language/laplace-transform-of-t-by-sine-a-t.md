# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_t_by_Sine_a_t



Theorem
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {t \sin a t} = \dfrac {2 a s} {\paren {s^2 + a^2}^2}$


Proof 1













\(\ds \laptrans {t \sin a t}\)

\(=\)







\(\ds -\map {\dfrac \d {\d s} } {\laptrans {\sin a t} }\)





Derivative of Laplace Transform














\(\ds \)

\(=\)







\(\ds -\map {\dfrac \d {\d s} } {\dfrac a {s^2 + a^2} }\)





Laplace Transform of Sine














\(\ds \)

\(=\)







\(\ds \dfrac {2 a s} {\paren {s^2 + a^2}^2}\)





Quotient Rule for Derivatives



$\blacksquare$


Proof 2
We have:














\(\ds \laptrans {\cos a t}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \cos a t \rd t\)





Definition of Laplace Transform




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \dfrac s {s^2 + a^2}\)





Laplace Transform of Cosine




Hence:














\(\ds \dfrac \d {\d a} \int_0^\infty e^{-s t} \cos a t \rd t\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \paren {\map {\dfrac \partial {\partial a} } {\cos a t} } \rd t\)





Derivative of Integral














\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-s t} \paren {-t \sin a t} \rd t\)





Derivative of Cosine Function














\(\ds \)

\(=\)







\(\ds -\laptrans {t \sin a t}\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \map {\dfrac \d {\d a} } {\dfrac s {s^2 + a^2} }\)





from $(1)$














\(\ds \)

\(=\)







\(\ds -\dfrac {2 a s} {\paren {s^2 + a^2}^2}\)





Quotient Rule for Derivatives



and the result follows.
$\blacksquare$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 32$: Table of Special Laplace Transforms: $32.43$




