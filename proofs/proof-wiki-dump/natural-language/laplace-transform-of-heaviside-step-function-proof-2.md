# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Heaviside_Step_Function/Proof_2

Theorem
Let $\map {u_c} t$ denote the Heaviside step function:

$\map {u_c} t = \begin{cases}
1 & : t > c \\
0 & : t < c
\end{cases}$

The Laplace transform of $\map {u_c} t$ is given by:

$\laptrans {\map {u_c} t} = \dfrac {e^{-s c} } s$
for $\map \Re s > c$.


Proof













\(\ds \laptrans 1\)

\(=\)







\(\ds \dfrac 1 s\)





Laplace Transform of 1








\(\ds \leadsto \ \ \)





\(\ds \laptrans {1 \times \map {u_c} t}\)

\(=\)







\(\ds \dfrac 1 s \times e^{-c s}\)





Laplace Transform of Function of t minus a














\(\ds \)

\(=\)







\(\ds \dfrac {e^{-s c} } s\)





simplification



Hence the result.
$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Impulse Functions. The Dirac Delta Function: $40$




