# 

Source: https://proofwiki.org/wiki/Cyclic_Group_is_Abelian



Theorem
Let $G$ be a cyclic group.

Then $G$ is abelian.


Proof 1
Let $G$ be a cyclic group.
All elements of $G$ are of the form $a^n$, where $n \in \Z$.
Let $x, y \in G: x = a^p, y = a^q$.
From Powers of Group Elements: Sum of Indices:

$x y = a^p a^q = a^{p + q} = a^{q + p} = a^q a^p = y x$
Thus:

$\forall x, y \in G: x y = y x$
and $G$ is by definition abelian.
$\blacksquare$


Proof 2
We have that Integers under Addition form Abelian Group.
The result then follows from combining:

Epimorphism from Integers to Cyclic Group
Epimorphism Preserves Commutativity.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 9$: Cyclic Groups
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 43$
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Abelian group




