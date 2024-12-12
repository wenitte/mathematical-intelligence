# 

Source: https://proofwiki.org/wiki/Element_of_Matroid_Base_and_Circuit_has_Substitute/Lemma_1

Lemma for Element of Matroid Base and Circuit has Substitute
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $B \subseteq S$ be a base of $M$.
Let $C \subseteq S$ be a circuit of $M$.
Let $x \in B \cap C$.

Then:

$C \setminus \set x$ is an independent proper subset of $C$


Proof
By definition of circuit:

$C$ is a minimal dependent subset of $S$
From Singleton of Element is Subset:

$\set x \subseteq C$ and $\set x \subseteq B$
From matroid axiom $(\text I 2)$:

$\set x \in \mathscr I$
Because $C \notin \mathscr I$:

$\set x \ne C$
Hence:

$\set x \subsetneq C$
From Set Difference with Non-Empty Proper Subset is Non-Empty Proper Subset:

$C \setminus \set x$ is a proper subset of $C$
As $C$ is a minimal dependent subset:

$C \setminus \set x \in \mathscr I$
$\blacksquare$





