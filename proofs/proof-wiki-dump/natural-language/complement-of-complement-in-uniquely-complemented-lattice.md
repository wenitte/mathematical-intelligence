# 

Source: https://proofwiki.org/wiki/Complement_of_Complement_in_Uniquely_Complemented_Lattice

Theorem
Let $\struct {S, \wedge, \vee, \preceq}$ be a uniquely complemented lattice.
For each $x \in S$, let $\neg x$ be the complement of $x$.

Then for each $x \in S$:

$\neg \neg x = x$


Proof
By the definition of a complement of $x$:

$\neg x \vee x = \top$
$\neg x \wedge x = \bot$
Since $\vee$ and $\wedge$ are commutative:

$x \vee \neg x = \top$
$x \wedge \neg x = \bot$
Thus by the definition of complement, $x$ is a complement of $\neg x$.
By the definition of a uniquely complemented lattice, $x = \neg \neg x$.
$\blacksquare$





