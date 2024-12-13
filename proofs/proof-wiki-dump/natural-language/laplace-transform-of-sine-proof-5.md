# 

Source: https://proofwiki.org/wiki/Laplace_Transform_of_Sine/Proof_5

Theorem
Let $\sin$ denote the real sine function.
Let $\laptrans f$ denote the Laplace transform of a real function $f$.

Then:

$\laptrans {\sin at} = \dfrac a {s^2 + a^2}$
where $a \in \R_{>0}$ is constant, and $\map \Re s > 0$.


Proof
From Laplace Transform of Second Derivative:

$(1): \quad \laptrans {\map {f} t} = s^2 \laptrans {\map f t} - s \, \map f 0 - \map {f'} 0$
under suitable conditions.

Then:














\(\ds \map f t\)

\(=\)







\(\ds \sin a t\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} t\)

\(=\)







\(\ds a \cos a t\)




















\(\ds \map {f} t\)

\(=\)







\(\ds -a^2 \sin a t\)




















\(\ds \map f 0\)

\(=\)







\(\ds 0\)




















\(\ds \map {f'} 0\)

\(=\)







\(\ds a\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {-a^2 \sin a t}\)

\(=\)







\(\ds s^2 \laptrans {\sin a t} - s \times 0 - a\)





from $(1)$, substituting for $\map f t$, $\map {f'} 0$  and $\map f 0$








\(\ds \leadsto \ \ \)





\(\ds -a^2 \laptrans {\sin a t}\)

\(=\)







\(\ds s^2 \laptrans {\sin a t} - a\)














\(\ds \leadsto \ \ \)





\(\ds \laptrans {\sin a t}\)

\(=\)







\(\ds \dfrac a {s^2 + a^2}\)





rearranging



$\blacksquare$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Solved Problems: Laplace Transform of Derivative: $16$




