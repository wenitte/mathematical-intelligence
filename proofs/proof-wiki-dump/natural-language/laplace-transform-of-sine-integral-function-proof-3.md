# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine_Integral_Function/Proof_3

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







\(\ds \int_0^t \dfrac 1 u \paren {u - \dfrac {u^3} {3!} + \dfrac {u^5} {5!} - \dfrac {u^7} {7!} + \dotsb} \rd u\)





Definition of Real Sine Function














\(\ds \)

\(=\)







\(\ds t - \dfrac {t^3} {3 \times 3!} + \dfrac {t^5} {5 \times 5!} - \dfrac {t^7} {7 \times 7!} + \dotsb\)





Primitive of Power








\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map \Si t}\)

\(=\)







\(\ds \laptrans {t - \dfrac {t^3} {3 \times 3!} + \dfrac {t^5} {5 \times 5!} - \dfrac {t^7} {7 \times 7!} + \dotsb}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {s^2} - \dfrac 1 {3 \times 3!} \dfrac {3!} {s^4} + \dfrac 1 {5 \times 5!} \dfrac {5!} {s^6} - \dfrac 1 {7 \times 7!} \dfrac {7!} {s^8} + \dotsb\)





Laplace Transform of Positive Integer Power














\(\ds \)

\(=\)







\(\ds \dfrac 1 {s^2} - \dfrac 1 {3 s^4} + \dfrac 1 {5 s^6} - \dfrac 1 {7 s^8} + \dotsb\)





simplifying














\(\ds \)

\(=\)







\(\ds \dfrac 1 s \paren {\dfrac {\paren {1 / s} } 1 - \dfrac {\paren {1 / s}^3} 3 + \dfrac {\paren {1 / s}^5} 5 - \dfrac {\paren {1 / s}^7} 7 + \dotsb}\)





rearranging














\(\ds \)

\(=\)







\(\ds \dfrac 1 s \arctan \dfrac 1 s\)





Power Series Expansion for Real Arctangent Function



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Sine, Cosine and Exponential Integrals: $36$: Method $3$




