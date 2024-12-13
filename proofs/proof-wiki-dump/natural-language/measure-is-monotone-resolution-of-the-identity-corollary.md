# 

Source: https://proofwiki.org/wiki/Measure_is_Monotone/Resolution_of_the_Identity/Corollary

Corollary
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B \HH$ be the space of bounded linear transformations on $\HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
Let $E, F \in \map \BB X$ be such that $E \subseteq F$.

Then:

$\Img {\map \EE E} \subseteq \Img {\map \EE F}$


Proof
Let $\le_{\map B \HH}$ be the canonical preordering of $\map B \HH$.
From Measure is Monotone: Resolution of the Identity, we have:

$\map \EE E \le_{\map B \HH} \map \EE F$
From the implication $(1) \implies (4)$ in Characterization of Canonical Preordering of Projections on Hilbert Space, we have:

$\Img {\map \EE E} \subseteq \Img {\map \EE F}$
$\blacksquare$





