# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine_Integral_Function/Proof_1

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














\(\ds \map {f'} t\)

\(=\)







\(\ds \dfrac {\sin t} t\)














\(\ds \leadsto \ \ \)





\(\ds t \map {f'} t\)

\(=\)







\(\ds \sin t\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {t \map {f'} t}\)

\(=\)







\(\ds \laptrans {\sin t}\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 {s^2 + 1}\)





Laplace Transform of Sine








\(\ds \leadsto \ \ \)





\(\ds -\dfrac \d {\d s} \laptrans {\map {f'} t}\)

\(=\)







\(\ds \dfrac 1 {s^2 + 1}\)





Derivative of Laplace Transform








\(\ds \leadsto \ \ \)





\(\ds \map {\dfrac \d {\d s} } {s \laptrans {\map f t} - \map f 0}\)

\(=\)







\(\ds -\dfrac 1 {s^2 + 1}\)





Laplace Transform of Derivative








\(\ds \leadsto \ \ \)





\(\ds s \laptrans {\map f t}\)

\(=\)







\(\ds -\int \dfrac 1 {s^2 + 1} \rd s\)





$\map f 0 = 0$, and integrating both sides with respect to $s$








\(\ds \leadsto \ \ \)





\(\ds s \laptrans {\map f t}\)

\(=\)







\(\ds -\arctan s + C\)





Primitive of $\dfrac 1 {x^2 + a^2}$




By the Initial Value Theorem of Laplace Transform:

$\ds \lim_{s \mathop \to \infty} s \laptrans {\map f t} = \lim_{t \mathop \to 0} \map f t = \map f 0 = 0$
which leads to:

$c = \dfrac \pi 2$

Thus:














\(\ds s \laptrans {\map f t}\)

\(=\)







\(\ds \dfrac \pi 2 - \arctan s\)




















\(\ds \)

\(=\)







\(\ds \arccot s\)





Sum of Arctangent and Arccotangent














\(\ds \)

\(=\)







\(\ds \arctan \dfrac 1 s\)





Arctangent of Reciprocal equals Arccotangent








\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map f t}\)

\(=\)







\(\ds \dfrac 1 s \arctan \dfrac 1 s\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: The Sine, Cosine and Exponential Integrals: $36$: Method $1$




