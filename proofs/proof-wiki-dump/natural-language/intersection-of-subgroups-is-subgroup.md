# 

Source: https://proofwiki.org/wiki/Intersection_of_Subgroups_is_Subgroup



Theorem
The intersection of two subgroups of a group is itself a subgroup of that group:

$\forall H_1, H_2 \le \struct {G, \circ}: H_1 \cap H_2 \le G$

It also follows that $H_1 \cap H_2 \le H_1$ and $H_1 \cap H_2 \le H_2$.


General Result
Let $\mathbb S$ be a set of subgroups of $\struct {G, \circ}$, where $\mathbb S \ne \O$.

Then the intersection $\ds \bigcap \mathbb S$ of the elements of $\mathbb S$ is itself a subgroup of $G$.

Also, $\ds \bigcap \mathbb S$ is the largest subgroup of $\struct {G, \circ}$ contained in each element of $\mathbb S$.


Proof
Let $H = H_1 \cap H_2$ where $H_1, H_2 \le \struct {G, \circ}$.
Then:














\(\ds \)

\(\)







\(\ds a, b \in H\)




















\(\ds \)

\(\leadsto\)







\(\ds a, b \in H_1 \land a, b \in H_2\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds a \circ b^{-1} \in H_1 \land a \circ b^{-1} \in H_2\)





Group Properties














\(\ds \)

\(\leadsto\)







\(\ds a \circ b^{-1} \in H\)





Definition of Set Intersection














\(\ds \)

\(\leadsto\)







\(\ds H \le G\)





One-Step Subgroup Test




As $H \subseteq H_1$ and $H \subseteq H_2$, the other results follow directly.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 5.2$. Subgroups: Example $94$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Theorem $17$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 36.6$ Subgroups
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms




