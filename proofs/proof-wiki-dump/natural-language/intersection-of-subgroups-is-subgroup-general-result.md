# 

Source: https://proofwiki.org/wiki/Intersection_of_Subgroups_is_Subgroup/General_Result

Theorem
Let $\struct {G, \circ}$ be a group.
Let $\mathbb S$ be a set of subgroups of $\struct {G, \circ}$, where $\mathbb S \ne \O$.

Then the intersection $\ds \bigcap \mathbb S$ of the elements of $\mathbb S$ is itself a subgroup of $G$.

Also, $\ds \bigcap \mathbb S$ is the largest subgroup of $\struct {G, \circ}$ contained in each element of $\mathbb S$.


Proof
Let $\ds H = \bigcap \mathbb S$.
Let $H_k$ be an arbitrary element of $\mathbb S$.
Then:














\(\ds a, b\)

\(\in\)







\(\ds H\)














\(\ds \leadsto \ \ \)

\(\ds \forall k: \, \)



\(\ds a, b\)

\(\in\)







\(\ds H_k\)





Definition of Intersection of Set of Sets








\(\ds \leadsto \ \ \)

\(\ds \forall k: \, \)



\(\ds a \circ b^{-1}\)

\(\in\)







\(\ds H_k\)





Group properties








\(\ds \leadsto \ \ \)





\(\ds a \circ b^{-1}\)

\(\in\)







\(\ds H\)





Definition of Intersection of Set of Sets








\(\ds \leadsto \ \ \)





\(\ds H\)

\(\le\)







\(\ds G\)





One-Step Subgroup Test



$\Box$

Now to show that $\struct {H, \circ}$ is the largest such subgroup.
Let $K$ be a subgroup of $\struct {G, \circ}$ such that:

$\forall S \in \mathbb S: K \subseteq S$
Then by definition $K \subseteq H$.
Let $x, y \in K$.
Then:

$x \circ y^{-1} \in K \implies x \circ y^{-1} \in H$
Thus any subgroup of all elements of $\mathbb S$ is also a subgroup of $H$ and so no larger than $H$.
Thus $\ds H = \bigcap \mathbb S$ is the largest subgroup of $S$ contained in each element of $\mathbb S$.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.2$. Subgroups: Example $94$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Theorem $14.5$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Theorem $18$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text J$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 35 \beta$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\S 1.2$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 36.7$ Subgroups
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Proposition $4.6$




