# 

Source: https://proofwiki.org/wiki/Measure_is_Monotone/Resolution_of_the_Identity

Theorem
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B \HH$ be the space of bounded linear transformations on $\HH$.
Let $\le_{\map B \HH}$ be the canonical preordering of $\map B \HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
Let $E, F \in \map \BB X$ be such that $E \subseteq F$.

Then:

$\map \EE E \le_{\map B \HH} \map \EE F$


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
Write:

$F = E \cup \paren {F \setminus E}$
From $(4)$ in the definition of a resolution of the identity, we have:

$\map \EE F = \map \EE E + \map \EE {F \setminus E}$
From Bounds on Projection in Unital C*-Algebra, we have:

${\mathbf 0}_{\map B \HH} \le_{\map B \HH} \map \EE {F \setminus E}$
From $(1)$ in the definition of a preordered vector space, we have:

$\map \EE E + \map \EE {F \setminus E} \ge_{\map B \HH} \map \EE E$
Hence:

$\map \EE E \le_{\map B \HH} \map \EE F$
$\blacksquare$





