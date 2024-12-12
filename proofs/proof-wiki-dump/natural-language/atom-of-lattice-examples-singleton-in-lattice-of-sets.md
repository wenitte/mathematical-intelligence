# 

Source: https://proofwiki.org/wiki/Atom_of_Lattice/Examples/Singleton_in_Lattice_of_Sets

Examples of Atoms of a Lattice
Let $\powerset S$ denote the power set of a set $S$.
Let $\struct {\powerset S, \subseteq}$ be the relational structure defined on $\powerset S$ by the subset relation $\subseteq$.
From Power Set is Lattice, $\struct {\powerset S, \subseteq}$ is a lattice.

The atoms of $\struct {\powerset S, \subseteq}$ are the singleton subsets of $S$.


Proof
From Empty Set is Bottom of Lattice of Power Set, the bottom of $\struct {\powerset S, \subseteq}$ is the empty set $\O$.
Let $A$ be an atom of $\struct {\powerset S, \subseteq}$.
Recalling the definition of atom.

$\forall B \in S: B \subsetneqq A \implies B = \O$
We note that $\O$ itself is not an atom of $\struct {\powerset S, \subseteq}$ by definition.

Let $T \subseteq S$ be a subset of $S$ with strictly more than $1$ element.
Let $a, b \in T$.
Then

$\set a \subsetneqq T$
but:

$\set a \ne \O$
Hence for such a $T$, there exists a proper subset of $T$ which is not an atom of $\struct {\powerset S, \subseteq}$.
Hence a subset of $S$ with more than $1$ element is not an atom of $\struct {\powerset S, \subseteq}$.

Let $a \in S$ be arbitrary.
Then we have:

$\set a \in \powerset S$
that is:

$\set a \subseteq S$
Let $B \subseteq \set a$ such that $B \ne \set a$.
Let $b \in B$ such that $b \ne a$.
Then:

$b \notin \set a$
and so:

$B \not \subsetneqq A$
Hence if $B \subsetneqq A$ it follows that:

$B = \O$
Hence, by definition, $\set a$ is an atom of $\struct {\powerset S, \subseteq}$.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): atom
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): atom




