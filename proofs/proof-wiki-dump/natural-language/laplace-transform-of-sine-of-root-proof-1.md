# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine_of_Root/Proof_1

Theorem
$\laptrans {\sin \sqrt t} = \dfrac {\sqrt \pi} {2 s^{3/2} } \map \exp {-\dfrac 1 {4 s} }$
where $\laptrans f$ denotes the Laplace transform of the function $f$.


Proof













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


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Miscellaneous Problems: $48$




