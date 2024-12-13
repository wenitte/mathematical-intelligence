# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_1/Proof_2

Theorem
Let $f: \R \to \R$ be the function defined as:

$\forall t \in \R: \map f t = 1$

Then the Laplace transform of $\map f t$ is given by:

$\laptrans {\map f t} = \dfrac 1 s$
for $\map \Re s > 0$.


Proof
From Laplace Transform of Derivative:

$(1): \quad \laptrans {\map {f'} t} = s \laptrans {\map f t} - \map f 0$
under suitable conditions.

Then:














\(\ds \map f t\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} t\)

\(=\)







\(\ds 0\)




















\(\ds \map f 0\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans 0\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds s \laptrans 1 - 1\)





from $(1)$, substituting for $\map f t$ and $\map f 0$








\(\ds \leadsto \ \ \)





\(\ds s \laptrans 1\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans 1\)

\(=\)







\(\ds \dfrac 1 s\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transform of Derivative: $15 \ \text{(a)}$




