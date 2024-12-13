# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine_Integral_Function



Theorem
$\laptrans {\map \Si t} = \dfrac 1 s \arctan \dfrac 1 s$
where:

$\laptrans f$ denotes the Laplace transform of the function $f$
$\Si$ denotes the sine integral function


Proof 1
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


Proof 2













\(\ds \laptrans {\dfrac {\sin t} t}\)

\(=\)







\(\ds \arctan \dfrac 1 s\)





Laplace Transform of $\dfrac {\sin t} t$








\(\ds \leadsto \ \ \)





\(\ds \laptrans {\int_{u \mathop \to 0}^{u \mathop = t} \frac {\sin u} u \rd u}\)

\(=\)







\(\ds \dfrac 1 s \arctan \dfrac 1 s\)





Laplace Transform of Integral








\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map \Si t}\)

\(=\)







\(\ds \dfrac 1 s \arctan \dfrac 1 s\)





Definition of Sine Integral



$\blacksquare$


Proof 3
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


Proof 4
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
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of Special Functions: $8$




