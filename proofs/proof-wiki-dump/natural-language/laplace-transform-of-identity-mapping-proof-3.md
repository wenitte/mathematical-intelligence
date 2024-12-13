# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Identity_Mapping/Proof_3

Theorem
Let $\laptrans f$ denote the Laplace transform of a function $f$.
Let $\map {I_\R} t$ denote the identity mapping on $\R$ for $t > 0$.

Then:

$\laptrans {\map {I_\R} t} = \dfrac 1 {s^2}$
for $\map \Re s > 0$.


Proof
From Laplace Transform of Derivative:

$(1): \quad \laptrans {\map {I_\R'} t} = s \laptrans {\map {I_\R} t} - \map {I_\R} 0$
under suitable conditions.

Then:














\(\ds \map {I_\R} t\)

\(=\)







\(\ds t\)














\(\ds \leadsto \ \ \)





\(\ds \map {I_\R'} t\)

\(=\)







\(\ds 1\)




















\(\ds \map {I_\R} 0\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans 1\)

\(=\)







\(\ds \dfrac 1 s\)





Laplace Transform of 1














\(\ds \)

\(=\)







\(\ds s \laptrans {\map {I_\R} t} - 0\)





from $(1)$, substituting for $\map f t$ and $\map f 0$








\(\ds \leadsto \ \ \)





\(\ds s \laptrans {\map {I_\R} t}\)

\(=\)







\(\ds \dfrac 1 s\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\map {I_\R} t}\)

\(=\)







\(\ds \dfrac 1 {s^2}\)









$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transform of Derivative: $15 \ \text{(b)}$




