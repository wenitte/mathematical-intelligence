# 

Source: https://proofwiki.org/wiki/Evaluation_of_Integral_using_Laplace_Transform/Examples/Example_1

Examples of Use of Evaluation of Integral using Laplace Transform
$\ds \int_0^\infty \dfrac {e^{-t} - e^{-3 t} } t \rd t = \ln 3$


Proof
Let $\map f t = e^{-t} - e^{-3 t}$.
Then from Laplace Transform of Exponential:

$\laptrans {\map f t} = \dfrac 1 {s + 1} - \dfrac 1 {s + 3}$
Hence:














\(\ds \laptrans {\dfrac {e^{-t} - e^{-3 t} } t}\)

\(=\)







\(\ds \int_0^\infty \paren {\dfrac 1 {u + 1} - \dfrac 1 {u + 3} } \rd u\)





Integral of Laplace Transform








\(\ds \leadsto \ \ \)





\(\ds \int_0^\infty e^{-s t} \paren {\dfrac {e^{-t} - e^{-3 t} } t} \rd t\)

\(=\)







\(\ds \map \ln {\dfrac {s + 3} {s + 1} }\)





Definition of Laplace Transform, Primitive of Reciprocal








\(\ds \leadsto \ \ \)





\(\ds \int_0^\infty \dfrac {e^{-t} - e^{-3 t} } t \rd t\)

\(=\)







\(\ds \ln 3\)





taking the limit as $s \to 0^+$



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Evaluation of Integrals: $45 \ \text{(b)}$




