# 

Source: https://proofwiki.org/wiki/Ordered_Set_of_All_Mappings_is_Lattice_iff_Codomain_is_Lattice_or_Domain_is_Empty/Lemma

Lemma for Ordered Set of All Mappings is Lattice iff Codomain is Lattice or Domain is Empty
Let $S$ be a set.
Let $\struct {T, \preccurlyeq}$ be an ordered set.
Let $\struct {T^S, \preccurlyeq}$ denote the ordered set of all mappings from $S$ to $T$.

Let $S = \O$.
Then $\struct {T^S, \preccurlyeq}$ is a lattice.


Proof
Recall the definition of lattice:
Let $\struct {S, \preceq}$ be an ordered set.
Then $\struct {S, \preceq}$ is a lattice if and only if:

for all $x, y \in S$, the subset $\set {x, y}$ admits both a supremum and an infimum.

Let $S = \O$.
Then there is one mapping from $S$ to $T$, and that is the empty mapping $e: S \to T$.
Thus we have $T^S = \set e$
From Supremum of Singleton and Infimum of Singleton:

$\sup \set e = e = \inf \set e$
Hence $T^S$ (trivially, in the degenerate sense) is a lattice.
$\blacksquare$





