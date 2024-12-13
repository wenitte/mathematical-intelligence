# 

Source: https://proofwiki.org/wiki/Semigroup_is_Group_Iff_Latin_Square_Property_Holds/Proof_2



Theorem
Let $\left({S, \circ}\right)$ be a semigroup.

Then $\left({S, \circ}\right)$ is a group if and only if for all $a, b \in S$ the Latin square property holds in $S$:

$a \circ x = b$
$y \circ a = b$
for $x$ and $y$ each unique in $S$.


Proof
Necessary Condition
Let $\struct {S, \circ}$ be a group.
$\struct {S, \circ}$ is a semigroup by the definition of a group.
By Group has Latin Square Property, the Latin square property holds in $S$.
$\Box$


Sufficient Condition
Let $a \in G$.
We have by hypothesis:

$\exists e \in S: a \circ e = a$
and such an $e$ is unique.
Let $b \in G$.
Also by hypothesis:

$\exists x \in G: x \circ a = b$
and such an $x$ is unique.
Hence:














\(\ds b\)

\(=\)







\(\ds x \circ a\)




















\(\ds \)

\(=\)







\(\ds x \circ a \circ e\)




















\(\ds \)

\(=\)







\(\ds b \circ e\)









Also by hypothesis:

$\exists a' \in G: a' \circ a = e$
Thus $\struct {S, \circ}$ satisfies the right-hand Group Axioms
Thus $\struct {S, \circ}$ is a group.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Theorem $1$




