# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine_Integral_Function/Proof_4

Theorem
$\laptrans {\map \Si t} = \dfrac 1 s \arctan \dfrac 1 s$
where:

$\laptrans f$ denotes the Laplace transform of the function $f$
$\Si$ denotes the sine integral function


Proof
Let $\map f t := \map \Si t = \ds \int_0^t \dfrac {\sin u} u \rd u$.
Then:

$\map f 0 = 0$
and:














\(\ds \map \Si t\)

\(=\)







\(\ds \int_0^t \dfrac {\sin u} u \rd u\)





Definition of Sine Integral Function














\(\ds \)

\(=\)







\(\ds \int_0^1 \dfrac {\sin t v} v \rd v\)





Integration by Substitution $u = t v$








\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map \Si t}\)

\(=\)







\(\ds \laptrans {\int_0^1 \dfrac {\sin t v} v \rd v}\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty e^{-s t} \paren {\int_0^1 \dfrac {\sin t v} v \rd v} \rd t\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^1 \dfrac 1 v \paren {\int_0^\infty e^{-s t} \sin t v \rd t} \rd v\)





exchanging order of integration














\(\ds \)

\(=\)







\(\ds \int_0^1 \dfrac {\laptrans {\sin t v} } v \rd v\)





Definition of Laplace Transform














\(\ds \)

\(=\)







\(\ds \int_0^1 \dfrac {\d v} {s^2 + v^2}\)





Laplace Transform of Sine














\(\ds \)

\(=\)







\(\ds \intlimits {\dfrac 1 s \arctan \dfrac v s} 0 1\)





Primitive of $\dfrac 1 {x^2 + a^2}$














\(\ds \)

\(=\)







\(\ds \dfrac 1 s \arctan \dfrac 1 s\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Sine, Cosine and Exponential Integrals: $36$: Method $4$




