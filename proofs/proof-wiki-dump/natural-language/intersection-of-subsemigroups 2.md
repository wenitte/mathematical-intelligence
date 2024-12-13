# 

Source: https://proofwiki.org/wiki/Intersection_of_Subsemigroups

Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $\struct {T_1, \circ}$ and $\struct {T_2, \circ}$ be subsemigroups of $\struct {S, \circ}$.
Then the intersection of $\struct {T_1, \circ}$ and $\struct {T_2, \circ}$ is itself a subsemigroup of that $\struct {S, \circ}$.


General Result
Let $\mathbb H$ be a set of subsemigroups of $\struct {S, \circ}$, where $\mathbb H \ne \O$.

Then the intersection $\bigcap \mathbb H$ of the members of $\mathbb H$ is the largest subsemigroup of $\struct {S, \circ}$ contained in each member of $\mathbb H$.


Proof

This article needs proofreading.In particular: check if proof is correct if $\struct {S, \circ}$ is the empty semigroupIf you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Suppose $\struct {S, \circ}$ is a semigroup where $S$ is the empty set. 
Suppose $\struct {T_1, \circ}$ and $\struct {T_2, \circ}$ are subsemigroups of $\struct {S, \circ}$. 
Then it follows that $T_1$ and $T_2$ are both empty.
Since $S$, $T_1$ and $T_2$ are empty, by Intersection with Empty Set, it follows that the intersection of $\struct {T_1, \circ}$ and $\struct {T_2, \circ}$ is equal to $\struct {S, \circ}$. 
Hence, by Semigroup is Subsemigroup of Itself, it follows that the intersection of $\struct {T_1, \circ}$ and $\struct {T_2, \circ}$ is itself a subsemigroup of that $\struct {S, \circ}$.

Now suppose $\struct {S, \circ}$ is a semigroup, where $S$ is non-empty. 
Let $T = T_1 \cap T_2$ where $T_1, T_2$ are subsemigroups of $\struct {S, \circ}$. Then:














\(\ds \)

\(\)







\(\ds a, b \in T\)




















\(\ds \)

\(\leadsto\)







\(\ds a, b \in T_1 \land a, b \in T_2\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds a \circ b \in T_1 \land a \circ b \in T_2\)





Subsemigroups are closed














\(\ds \)

\(\leadsto\)







\(\ds a \circ b \in T\)





Definition of Set Intersection




Thus $\struct {T, \circ}$ is closed, and is therefore a semigroup from the Subsemigroup Closure Test.
$\blacksquare$





