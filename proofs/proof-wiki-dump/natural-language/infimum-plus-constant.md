# 

Source: https://proofwiki.org/wiki/Infimum_Plus_Constant

Theorem
Let $T$ be a subset of the set of real numbers.
Let $T$ be bounded below.
Let $\xi \in \R$.

Then:

$\ds \map {\inf_{x \mathop \in T} } {x + \xi} = \xi + \map {\inf_{x \mathop \in T} } x$
where $\inf$ denotes infimum.


Proof
From Negative of Infimum is Supremum of Negatives, we have that:

$\ds -\inf_{x \mathop \in T} x = \map {\sup_{x \mathop \in T} } {-x} \implies \inf_{x \mathop \in T} x = -\map {\sup_{x \mathop \in T} } {-x}$
Let $S = \set {x \in \R: -x \in T}$.
From Negative of Infimum is Supremum of Negatives, $S$ is bounded above.
We have:














\(\ds \map {\sup_{x \mathop \in S} } {x + \xi}\)

\(=\)







\(\ds \xi + \map {\sup_{x \mathop \in S} } x\)





Supremum Plus Constant








\(\ds \leadsto \ \ \)





\(\ds \map {\inf_{x \mathop \in T} } {x + \xi}\)

\(=\)







\(\ds -\map {\sup_{x \mathop \in T} } {-x + \xi}\)




















\(\ds \)

\(=\)







\(\ds \xi - \map {\sup_{x \mathop \in T} } {-x}\)




















\(\ds \)

\(=\)







\(\ds \xi + \map {\inf_{x \mathop \in T} } x\)









$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 2$: Continuum Property: Exercise $\S 2.13 \ (3)$




