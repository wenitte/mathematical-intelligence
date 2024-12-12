# 

Source: https://proofwiki.org/wiki/Element_of_Matroid_Base_and_Circuit_has_Substitute/Lemma_2

Lemma for Element of Matroid Base and Circuit has Substitute
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $C \subseteq S$ be a dependent subset of $M$.
Let $x \in C$.
Let $X \subseteq S$ such that:

$\paren {C \setminus \set x} \cup X \in \mathscr I$

Then:

$x \notin \paren {C \setminus \set x} \cup X$


Proof
Aiming for a contradiction, suppose:

$x \in \paren {C \setminus \set x} \cup X$
Then:

$\set x, C \setminus \set x \subseteq \paren {C \setminus \set x} \cup X$
From Union of Subsets is Subset:

$C \subseteq \paren {C \setminus \set x} \cup X$
From matroid axiom $(\text I 2)$:

$C \in \mathscr I$
This contradicts:

$C \notin \mathscr I$
It follows that:

$x \notin \paren {C \setminus \set x} \cup X$
$\blacksquare$





