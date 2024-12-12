# 

Source: https://proofwiki.org/wiki/Derivative_of_Laplace_Transform/Examples/Example_1

Example of Use of Derivative of Laplace Transform
$\ds \int_0^\infty t e^{-2 t} \cos t \rd t = \dfrac 3 {25}$


Proof













\(\ds \int_0^\infty t e^{-s t} \cos t \rd t\)

\(=\)







\(\ds \laptrans {t \cos t}\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds -\frac \d {\d s} \laptrans {\cos t}\)





Derivative of Laplace Transform














\(\ds \)

\(=\)







\(\ds -\map {\frac \d {\d s} } {\dfrac s {s^2 + 1} }\)





Laplace Transform of Cosine














\(\ds \)

\(=\)







\(\ds \dfrac {s^2 - 1} {\paren {s^2 + 1}^2}\)





Quotient Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \int_0^\infty t e^{-2 t} \cos t \rd t\)

\(=\)







\(\ds \dfrac {2^2 - 1} {\paren {2^2 + 1}^2}\)





substituting $t = 2$














\(\ds \)

\(=\)







\(\ds \dfrac 3 {25}\)





evaluating



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Evaluation of Integrals: $45 \ \text{(a)}$




