# 

Source: https://proofwiki.org/wiki/Infinite_Group_has_Infinite_Number_of_Subgroups



Theorem
Let $\struct {G, \circ}$ be an infinite group.

Then $\struct {G, \circ}$ has an infinite number of distinct subgroups.


Proof
There are two cases to consider: either $\struct {G, \circ}$ has an infinite cyclic subgroup, or it does not.


Case 1
Suppose that $\struct {G, \circ}$ has an infinite cyclic subgroup denoted as $H$.
Let $a \in G$ be the element of $G$ such that $\gen a = H$.
Then by Distinct Subgroups of Infinite Cyclic Group, $\sequence {\gen {a^k} }_{k \mathop \in \N^*}$ is a sequence of distinct subgroups of $H$.

So, by Subgroup of Subgroup is Subgroup, it follows that $\struct {G, \circ}$ has an infinite number of subgroups.


Case 2
Suppose that $\struct {G, \circ}$ does not have an infinite cyclic subgroup.
Then for every $x \in G$, we have that $\gen x$ is a finite group.

Let $a, b \in G$.
Let $\sim$ be the equivalence relation on $G$ defined as:

$a \sim b \iff \gen a = \gen b$

Let $\eqclass a \sim$ denote the equivalence class of $a$ under $\sim$.
Let $x \sim a$.
Then:

$\gen x = \gen a$
Since $x \in \gen x$, it follows that:

$x \in \gen a$

It has been shown that:

$\eqclass a \sim \subseteq \gen a$
By Subset of Finite Set is Finite, every equivalence class under $\sim$ is finite.
By Equivalence Class holds Equivalent Elements:

$\eqclass a \sim \ne \eqclass b \sim \implies a \not \sim b \implies \gen a \ne \gen b$

So every equivalence class generates a unique subgroup of $\struct {G, \circ}$.

By Union of Equivalence Classes is Whole Set, the union of all equivalence classes under $\sim$ must equal $G$.
From Finite Union of Finite Sets is Finite, it follows that this must be a (countably) infinite union.
Thus there must exist an infinite number of equivalence classes, and hence an infinite number of subgroups.

The result then follows from Proof by Cases.
$\blacksquare$





