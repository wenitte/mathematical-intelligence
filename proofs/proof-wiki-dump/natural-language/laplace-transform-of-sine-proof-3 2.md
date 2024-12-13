# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine/Proof_3

Theorem
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {\sin at} = \dfrac a {s^2 + a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > 0$.


Proof













\(\ds \laptrans {\sin a t}\)

\(=\)







\(\ds \laptrans {\frac {e^{i a t} - e^{-i a t} } {2 i} }\)





Euler's Sine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {\laptrans {e^{i a t} } - \laptrans {e^{-i a t} } }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {\frac 1 {s - i a} - \frac 1 {s + i a} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {\frac {s + i a - s + i a} {s^2 + a^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac 1 {2 i} \paren {\frac {2 i a} {s^2 + a^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac a {s^2 + a^2}\)





simplifying



$\blacksquare$





