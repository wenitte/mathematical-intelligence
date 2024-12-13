# 

Source: https://proofwiki.org/wiki/Null_Sets_Closed_under_Subset



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $N \in \Sigma$ be a $\mu$-null set, and let $M \in \Sigma$ be a subset of $N$.

Then $M$ is also a $\mu$-null set.


Resolution of the Identity
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B {\HH}$ be the space of bounded linear transformations on $\HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
Let $E, E' \in \map \BB X$ be such that:

$E \subseteq E'$ and $\map \EE {E'} = {\mathbf 0}_{\map B \HH}$

Then $\map \EE E = {\mathbf 0}_{\map B \HH}$.


Proof
As $\mu$ is a measure, $\map \mu M \ge 0$.
Also, by Measure is Monotone, $\map \mu M \le \map \mu N = 0$.
Hence $\map \mu M = 0$, and $M$ is a $\mu$-null set.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 4$: Problem $10 \ \text{(ii)}$




