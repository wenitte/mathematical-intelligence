# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Cosine/Proof_2

Theorem
Let $\cos$ be the real cosine function.
Let $\laptrans f$ denote the Laplace transform of the real function $f$.

Then:

$\laptrans {\cos a t} = \dfrac s {s^2 + a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > a$.


Proof













\(\ds \laptrans {e^{i a t} }\)

\(=\)







\(\ds \frac 1 {s - i a}\)





Laplace Transform of Exponential














\(\ds \)

\(=\)







\(\ds \frac {s + i a} {s^2 + a^2}\)





multiply top and bottom by $s + i a$



Also:














\(\ds \laptrans {e^{i a t} }\)

\(=\)







\(\ds \laptrans {\cos a t + i \sin a t}\)





Euler's Formula














\(\ds \)

\(=\)







\(\ds \laptrans {\cos a t} + i \laptrans {\sin a t}\)





Linear Combination of Laplace Transforms



So:














\(\ds \laptrans {\cos a t}\)

\(=\)







\(\ds \map \Re {\laptrans {e^{i a t} } }\)




















\(\ds \)

\(=\)







\(\ds \map \Re {\frac {s + i a} {s^2 + a^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac s {s^2 + a^2}\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transforms of some Elementary Functions: $2$




