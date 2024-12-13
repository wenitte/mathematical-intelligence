# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine_of_t_over_t/Corollary

Theorem
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {\dfrac {\sin a t} t} = \arctan \dfrac a s$


Proof













\(\ds \laptrans {\dfrac {\sin t} t}\)

\(=\)







\(\ds \arctan \dfrac 1 s\)





Laplace Transform of Sine of t over t








\(\ds \leadsto \ \ \)





\(\ds \laptrans {\dfrac {\sin a t} {a t} }\)

\(=\)







\(\ds \dfrac 1 a \arctan \dfrac 1 {s / a}\)





Laplace Transform of Constant Multiple














\(\ds \)

\(=\)







\(\ds \dfrac 1 a \arctan \dfrac a s\)









But:














\(\ds \laptrans {\dfrac {\sin a t} {a t} }\)

\(=\)







\(\ds \int_0^\infty e^{-s t} \dfrac {\sin a t} {a t} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \dfrac 1 a \int_0^\infty e^{-s t} \dfrac {\sin a t} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 a \laptrans {\dfrac {\sin a t} t}\)









The result follows.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Translation and Change of Scale Properties: $12$




