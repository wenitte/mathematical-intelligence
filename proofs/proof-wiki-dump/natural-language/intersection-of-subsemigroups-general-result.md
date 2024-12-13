# 

Source: https://proofwiki.org/wiki/Intersection_of_Subsemigroups/General_Result



Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $\mathbb H$ be a set of subsemigroups of $\struct {S, \circ}$, where $\mathbb H \ne \O$.

Then the intersection $\bigcap \mathbb H$ of the members of $\mathbb H$ is the largest subsemigroup of $\struct {S, \circ}$ contained in each member of $\mathbb H$.


Proof 1
Let $T = \bigcap \mathbb S$.
Then:














\(\ds a, b\)

\(\in\)







\(\ds T\)














\(\ds \leadsto \ \ \)

\(\ds \forall K \in \mathbb S: \, \)



\(\ds a, b\)

\(\in\)







\(\ds K\)





Definition of Set Intersection








\(\ds \leadsto \ \ \)

\(\ds \forall K \in \mathbb S: \, \)



\(\ds a \circ b\)

\(\in\)







\(\ds K\)





Subsemigroups are closed








\(\ds \leadsto \ \ \)





\(\ds a \circ b\)

\(\in\)







\(\ds T\)





Definition of Set Intersection




So by Subsemigroup Closure Test, $\struct {T, \circ}$ is a subsemigroup of $\struct {S, \circ}$.

Now to show that $\struct {T, \circ}$ is the largest such subsemigroup.

Let $x, y \in T$.
Then $\forall K \subseteq T: x \circ y \in K \implies x \circ y \in T$.
Thus $\forall K \in \mathbb S: K \subseteq T$.
Thus $T$ is the largest subsemigroup of $S$ contained in each member of $\mathbb S$.
$\blacksquare$


Proof 2
From Set of Subsemigroups forms Complete Lattice:

$\struct {\mathbb S, \subseteq}$ is a complete lattice.
where for every set $\mathbb H$ of subsemigroups of $S$:

the infimum of $\mathbb H$ necessarily admitted by $\mathbb H$ is $\ds \bigcap \mathbb H$.
Hence the result, by definition of infimum.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.7$




