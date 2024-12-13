# 

Source: https://proofwiki.org/wiki/Power_Set_with_Intersection_is_Commutative_Monoid



Theorem
Let $S$ be a set and let $\powerset S$ be its power set.
Then $\struct {\powerset S, \cap}$ is a commutative monoid whose identity is $S$.

The only invertible element of this structure is $S$.
Thus (except in the degenerate case $S = \O$) $\struct {\powerset S, \cap}$ cannot be a group.


Proof
From Power Set is Closed under Intersection:

$\forall A, B \in \powerset S: A \cap B \in \powerset S$

From Set System Closed under Intersection is Commutative Semigroup, $\struct {\powerset S, \cap}$ is a commutative semigroup.

From Identity of Power Set with Intersection, we have that $S$ acts as the identity.

It remains to be shown that only $S$ has an inverse:
For $T \subseteq S$ to have an inverse under $\cap$, we require $T^{-1} \cap T = S$.
From this it follows that $T = S = T^{-1}$.

The result follows by definition of commutative monoid.
$\blacksquare$


Also see
Power Set with Union is Commutative Monoid


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Chapter $\text{I}$: Semi-Groups and Groups: $1$: Definition and examples of semigroups: Example $7$
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 4.4$. Gruppoids, semigroups and groups: Example $77$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Exercise $4.4$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{T}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 29$. Semigroups: definition and examples: $(3)$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $5$: Semigroups: Exercise $2$




