# 

Source: https://proofwiki.org/wiki/Integral_to_Infinity_of_e%5E-t_by_Error_Function_of_Root_t

Theorem
$\ds \int_0^\infty e^{-t} \erf \sqrt t \rd t = \dfrac {\sqrt 2} 2$
where $\erf$ denotes the error function.


Proof
Using the technique of Evaluation of Integral using Laplace Transform:














\(\ds \int_0^\infty e^{-s t} \erf \sqrt t \rd t\)

\(=\)







\(\ds \dfrac 1 {s \sqrt {s + 1} }\)





Laplace Transform of Error Function of Root








\(\ds \leadsto \ \ \)





\(\ds \int_0^\infty \erf \sqrt t \rd t\)

\(=\)







\(\ds \dfrac 1 {1 \sqrt {1 + 1} }\)





letting $s \to 0^+$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 2}\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt 2} 2\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Evaluation of Integrals: $46 \ \text{(b)}$




