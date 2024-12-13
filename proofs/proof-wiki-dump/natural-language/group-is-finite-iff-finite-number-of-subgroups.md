# 

Source: https://proofwiki.org/wiki/Group_is_Finite_iff_Finite_Number_of_Subgroups



Theorem
Let $\struct {G, \circ}$ be a group.

Then $G$ is finite if and only if $\struct {G, \circ}$ has a  finite number of subgroups.


Proof
Necessary Condition
Suppose that $\struct {G, \circ}$ is a finite group.
Let $\struct {H, \circ}$ be a subgroup of $\struct {G, \circ}$.
$H \subseteq G$ by definition.
Therefore:

$H \in \powerset G$
where $\powerset G$ denotes the power set of $G$.

By Power Set of Finite Set is Finite, $\powerset G$ is finite.
It is seen that the set of all subgroups form a subset of $\powerset G$.
The result then follows from Subset of Finite Set is Finite.
$\Box$


Sufficient Condition
Suppose that $\struct {G, \circ}$ is a group with only a finite number of subgroups.
It is noted that an Infinite Group has Infinite Number of Subgroups.
The result then follows from the Rule of Transposition.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 41 \eta$




