# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine_of_Root



Theorem
$\laptrans {\sin \sqrt t} = \dfrac {\sqrt \pi} {2 s^{3/2} } \map \exp {-\dfrac 1 {4 s} }$
where $\laptrans f$ denotes the Laplace transform of the function $f$.


Proof 1













\(\ds \sin \sqrt t\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\paren {\sqrt t}^{2 n + 1} } {\paren {2 n + 1}!}\)





Definition of Real Sine Function














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {\paren {2 n + 1}!} t^{n + \frac 1 2}\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\sin \sqrt t}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\map \Gamma {n + \frac 3 2} } {\paren {2 n + 1}! s^{n + \frac 3 2} }\)





Laplace Transform of Power, Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac 1 {s^{3/2} } \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\paren {n + \frac 1 2} \map \Gamma {n + \frac 1 2} } {\paren {2 n + 1}! s^n}\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi} {2 s^{3/2} } \sum_{n \mathop = 0}^\infty \paren {-1}^n \frac {\paren {2 n + 1} \paren {2 n}!} {2^{2 n} n! \paren {2 n + 1}! s^n}\)





Gamma Function of Positive Half-Integer














\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi} {2 s^{3/2} } \sum_{n \mathop = 0}^\infty \frac {\paren {-1}^n} {2^{2 n} n! s^n}\)




















\(\ds \)

\(=\)







\(\ds \frac {\sqrt \pi} {2 s^{3/2} } \sum_{n \mathop = 0}^\infty \frac 1 {n!} \paren {-\frac 1 {2^2 s} }^n\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt \pi} {2 s^{3/2} } e^{-1/\paren {2^2 s} }\)





Definition of Exponential Function














\(\ds \)

\(=\)







\(\ds \dfrac {\sqrt \pi} {2 s^{3/2} } \map \exp {-\dfrac 1 {4 s} }\)





simplifying



$\blacksquare$


Proof 2
Let $\map y t := \sin \sqrt t$.
Differentiating twice with respect to $t$, we get:

$(1): \quad 4 t y + 2 y + y = 0$
Let $\map Y s = \laptrans {\map t y}$ be the Laplace transform of $y$.

Then taking the Laplace transform of $(1)$:














\(\ds -4 \map {\dfrac \d {\d s} } {\laptrans {\map {y} t} } + 2 \laptrans {\map {y'} t} + \laptrans {\map y t}\)

\(=\)







\(\ds 0\)





Derivative of Laplace Transform








\(\ds \leadsto \ \ \)





\(\ds -4 \map {\dfrac \d {\d s} } {s^2 \, \map Y s - s \, \map y 0 - \map {y'} 0} + 2 \paren {s \, \map Y s - \map y 0} + \map Y s\)

\(=\)







\(\ds 0\)





Laplace Transform of Derivative, Laplace Transform of Second Derivative








\(\ds \leadsto \ \ \)





\(\ds 4 s^2 \, \map {Y'} s - \paren {6 s - 1} \map Y s\)

\(=\)







\(\ds 0\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \map Y s\)

\(=\)







\(\ds \dfrac c {s^{3/2} } \, \map \exp {\dfrac 1 {4 s} }\)





solving the differential equation



For small $t$, we have:

$\sin \sqrt t \sim \sqrt t$
and:

$\laptrans {\sqrt t} = \dfrac {\sqrt \pi} {2 s^{3/2} }$
For large $t$, we have:

$Y \sim \dfrac c {2 s^{3/2} }$
Hence by comparison:

$c = \dfrac {\sqrt \pi} 2$
Hence:

$\laptrans {\sin \sqrt t} = \dfrac {\sqrt \pi} {2 s^{3/2} } \map \exp {-\dfrac 1 {4 s} }$
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Laplace Transforms of Special Functions: $4$




