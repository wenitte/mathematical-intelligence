# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Exponential/Real_Argument/Proof_3

Theorem
Let $\laptrans f$ denote the Laplace transform of a function $f$.
Let $e^x$ be the real exponential.
Then:

$\map {\laptrans {e^{a t} } } s = \dfrac 1 {s - a}$
where $a \in \R$ is constant, and $\map \Re s > \map \Re a$.


Proof
From Laplace Transform of Derivative:

$(1): \quad \laptrans {\map {f'} t} = s \laptrans {\map f t} - \map f 0$
under suitable conditions.

Then:














\(\ds \map f t\)

\(=\)







\(\ds e^{a t}\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} t\)

\(=\)







\(\ds a e^{a t}\)




















\(\ds \map f 0\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {a e^{a t} }\)

\(=\)







\(\ds s \laptrans {e^{a t} } - 1\)





from $(1)$, substituting for $\map f t$ and $\map f 0$








\(\ds \leadsto \ \ \)





\(\ds a \laptrans {e^{a t} }\)

\(=\)







\(\ds s \laptrans {e^{a t} } - 1\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {e^{a t} }\)

\(=\)







\(\ds \dfrac 1 {s - a}\)





rearranging



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transform of Derivative: $15 \ \text{(c)}$




