# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Error_Function

Theorem
$\laptrans {\map \erf t} = \dfrac 1 s \map \exp {\dfrac {s^2} 4} \map \erfc {\dfrac s 2}$
where:

$\laptrans f$ denotes the Laplace transform of the function $f$
$\erf$ denotes the error function
$\erfc$ denotes the complementary error function
$\exp$ denotes the exponential function.


Proof
By Derivative of Error Function, we have: 

$\ds \map {\frac \d {\d t} } {\map \erf t} = \frac 2 {\sqrt \pi} e^{-t^2}$
By Primitive of Exponential Function, we have: 

$\ds \int e^{-s t} \rd t = -\frac {e^{-s t} } s$
So: 














\(\ds \laptrans {\map \erf t}\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \map \erf t \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \intlimits {-\frac 1 s e^{-s t} \map \erf t} 0 \infty - \int_0^\infty \paren {-\frac 2 {\sqrt \pi} \frac {e^{-s t} } s e^{-t^2} } \rd t\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds -\frac 1 s \lim_{t \mathop \to \infty} \paren {e^{-s t} \map \erf t} + \frac 1 s e^0 \erf 0 + \frac 2 {s \sqrt \pi} \int_0^\infty \exp \paren {-s t - t^2} \rd t\)









We have: 














\(\ds \lim_{t \mathop \to \infty} \paren {e^{-s t} \map \erf t}\)

\(=\)







\(\ds \paren {\lim_{t \mathop \to \infty} e^{-s t} } \paren {\lim_{t \mathop \to \infty} \map \erf t}\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds 0 \times 1\)





Exponential Tends to Zero and Infinity, Limit to Infinity of Error Function














\(\ds \)

\(=\)







\(\ds 0\)









We also have: 














\(\ds \frac 1 s e^0 \erf 0\)

\(=\)







\(\ds \frac 1 s \int_0^0 e^{-t^2} \rd t\)





Exponential of Zero, Definition of Error Function














\(\ds \)

\(=\)







\(\ds 0\)





Definite Integral on Zero Interval



Therefore: 














\(\ds \laptrans {\map \erf t}\)

\(=\)







\(\ds \frac 2 {s \sqrt \pi} \int_0^\infty \map \exp {-\paren {t^2 + s t} } \rd t\)




















\(\ds \)

\(=\)







\(\ds \frac 2 {s \sqrt \pi} \int_0^\infty \map \exp {-\paren {\paren {t + \frac s 2}^2 - \frac {s^2} 4} } \rd t\)





completing the square














\(\ds \)

\(=\)







\(\ds \frac 2 {s \sqrt \pi} \map \exp {\frac {s^2} 4} \int_0^\infty \map \exp {-\paren {t + \frac s 2}^2} \rd t\)





Exponential of Sum














\(\ds \)

\(=\)







\(\ds \frac 2 {s \sqrt \pi} \map \exp {\frac {s^2} 4} \int_{\frac s 2}^\infty \map \exp {-u^2} \rd u\)





substituting $u = t + \dfrac s 2$














\(\ds \)

\(=\)







\(\ds \frac 1 s \map \exp {\frac {s^2} 4} \paren {\frac 2 {\sqrt \pi} \int_{\frac s 2}^\infty \map \exp {-u^2} \rd u}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 s \map \exp {\frac {s^2} 4} \map \erfc {\frac s 2}\)





Definition of Complementary Error Function



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of Special Functions: $6$




