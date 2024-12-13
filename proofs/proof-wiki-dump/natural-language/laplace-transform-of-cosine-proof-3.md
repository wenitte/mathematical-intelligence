# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Cosine/Proof_3

Theorem
Let $\cos$ be the real cosine function.
Let $\laptrans f$ denote the Laplace transform of the real function $f$.

Then:

$\laptrans {\cos a t} = \dfrac s {s^2 + a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > a$.


Proof













\(\ds \laptrans {\cos a t}\)

\(=\)







\(\ds \laptrans {\frac {e^{i a t} + e^{-i a t} } 2}\)





Euler's Cosine Identity














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\laptrans {e^{i a t} } + \laptrans {e^{-i a t} } }\)





Linear Combination of Laplace Transforms














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac 1 {s - i a} + \frac 1 {s + i a} }\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\frac {s + i a + s - i a} {s^2 + a^2} }\)





simplifying














\(\ds \)

\(=\)







\(\ds \frac s {s^2 + a^2}\)





simplifying



$\blacksquare$





