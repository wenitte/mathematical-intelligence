# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Domain_of_Relation

Theorem
Let $V$ be a basic universe.
Let $\RR \subseteq V \times V$ be a relation.

Then the domain $\Dom \RR$ of $\RR$ exists and is unique.


Proof
By the Axiom of Specification we can create the subclass of $V$:

$\Dom \RR = \set {x \in V: \exists y \in V: \tuple {x, y} \in \RR}$
Hence $\Dom \RR$ exists.
Suppose $\QQ \subseteq V$ such that $\QQ$ and $\Dom \RR$ are both the domain of $\RR$.
Then:

$\QQ = \set {x \in V: \exists y \in V: \tuple {x, y} \in \RR}$
Thus:

$x \in \QQ \implies x \in \Dom \RR$
and:

$x \in \Dom \RR \implies x \in \QQ$
Hence by the Axiom of Extension:

$\QQ = \Dom \RR$
and uniqueness has been demonstrated.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 8$ Relations




