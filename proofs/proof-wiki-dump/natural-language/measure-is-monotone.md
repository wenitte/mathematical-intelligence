# 

Source: https://proofwiki.org/wiki/Measure_is_Monotone



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.

Then $\mu$ is monotone, that is:

$\forall E, F \in \Sigma: E \subseteq F \implies \map \mu E \le \map \mu F$


Resolution of the Identity
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B \HH$ be the space of bounded linear transformations on $\HH$.
Let $\le_{\map B \HH}$ be the canonical preordering of $\map B \HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
Let $E, F \in \map \BB X$ be such that $E \subseteq F$.

Then:

$\map \EE E \le_{\map B \HH} \map \EE F$


Proof
A direct corollary of Non-Negative Additive Function is Monotone.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $4.3 \ \text{(ii)}$
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $1.2$: Measures




