# 

Source: https://proofwiki.org/wiki/Complex_Power/Examples/(1_%2B_i_%5Ctan_(4m%2B1_over_4n)_pi)%5En

Example of Complex Power
For $m, n \in \Z$ such that $n \ne 0$:

$\paren {1 + i \map \tan {\dfrac {4 m + 1} {4 n} \pi} }^n = \paren {-1}^m \paren {\sec \dfrac {4 m + 1} {4 n} \pi}^n \paren {\dfrac {1 + i} {\sqrt 2} }$


Proof
First setting $x = \dfrac {4 m + 1} {4 n} \pi$, we have:














\(\ds 1 + i \tan x\)

\(=\)







\(\ds 1 + i \frac {\sin x} {\cos x}\)





Definition of Real Tangent Function














\(\ds \)

\(=\)







\(\ds \frac {\cos x + i \sin x} {\cos x}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {1 + i \tan x}^n\)

\(=\)







\(\ds \frac {\cos n x + i \sin n x} {\cos^n x}\)





De Moivre's Theorem








\(\ds \leadsto \ \ \)





\(\ds \paren {1 + i \tan \paren {\dfrac {4 m + 1} {4 n} \pi} }^n\)

\(=\)







\(\ds \frac {\cos n \paren {\dfrac {4 m + 1} {4 n} \pi} + i \sin n \paren {\dfrac {4 m + 1} {4 n} \pi} } {\cos^n \paren {\dfrac {4 m + 1} {4 n} \pi} }\)





substituting back for $x$














\(\ds \)

\(=\)







\(\ds \frac {\map \cos {\dfrac {4 m + 1} 4 \pi} + i \map \sin {\dfrac {4 m + 1} 4 \pi} } {\map {\cos^n} {\dfrac {4 m + 1} {4 n} \pi} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \cos {m \pi + \dfrac \pi 4} + i \map \sin {m \pi + \dfrac \pi 4} } {\map {\cos^n} {\dfrac {4 m + 1} {4 n} \pi} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \cos {m \pi + \dfrac \pi 4} + i \map \sin {m \pi + \dfrac \pi 4} } \paren {\map \sec {\dfrac {4 m + 1} {4 n} \pi} }^n\)





Definition of Secant Function




Now we have:














\(\ds \map \cos {m \pi + \dfrac \pi 4} + i \map \sin {m \pi + \dfrac \pi 4}\)

\(=\)







\(\ds \paren {-1}^m \paren {\cos \dfrac \pi 4 + i \sin \dfrac \pi 4}\)





Sine and Cosine of Angle plus Integer Multiple of Pi














\(\ds \)

\(=\)







\(\ds \paren {-1}^m \paren {\frac {\sqrt 2} 2 + i \frac {\sqrt 2} 2}\)





Cosine of $\dfrac \pi 4$














\(\ds \)

\(=\)







\(\ds \paren {-1}^m \paren {\dfrac {1 + i} {\sqrt 2} }\)





simplifying




The result follows.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 2$. Geometrical Representations: Exercise $10$




