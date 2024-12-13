# 

Source: https://proofwiki.org/wiki/Intersection_of_Submodules_is_Submodule/General_Result

Theorem
Let $R$ be a ring.
Let $\struct {G, +_G}$ be an abelian group.
Let $M = \struct {G, +, \circ}_R$ be an $R$-module.
Let $S$ be a set of submodules of $M$.

Then the intersection $\ds \bigcap S$ is a submodule of $M$.


Proof
From Intersection of Subgroups is Subgroup:General Result, it follows that $\ds \bigcap S$ is a subgroup of $M$.
As a subgroup is closed for its operation, it follows that for all $x,y \in \ds \bigcap S$, we have $x+y, y+x \in \ds \bigcap S$.
As $M$ is an $R$-module, and the addition $+$ on $\ds \bigcap S$ is the restriction of the addition on $M$, it follows that $x+y = y+x$.
Hence, $\ds \bigcap S$ is an abelian group.

Let $\lambda \in R$, and let $x \in \ds \bigcap S$.
Let $H$ be a submodule of $M$ such that $H \in S$.
By definition of intersection, it follows that $x \in H$.
As a submodule is closed for scalar product, it follows that $\lambda \circ x, x \circ \lambda \in H$.
As this is true for all submodules in the set $S$, it follows that $\lambda \circ x, x \circ \lambda \in \ds \bigcap S$.
Hence, $\ds \bigcap S$ is closed for scalar product.

Next, we show that $\ds \struct {\bigcap S, +, \circ}_R$ satisfy the left module axioms, and the right module axioms.
By definition of $R$-module, each of these axioms are satisfied by $\struct {G, +, \circ}_R$.
As the addition $+$ and the scalar multiplication $\circ$ on $\ds \bigcap S$ are the restrictions of the operations $+, \circ$ on $M = \struct {G, +, \circ}_R$, it follows that the axioms also are satisfied by $\ds \struct {\bigcap S, +, \circ}_R$.
For instance, the Left Module Axiom $\text M 1$: (Left) Distributivity over Module Addition can be shown by:










\(\ds \forall x, y \in \bigcap S: \, \)



\(\ds x + y\)

\(\in\)







\(\ds \bigcap S\)





as $\ds \bigcap S$ is closed for addition










\(\ds \forall \lambda \in R: \, \)



\(\ds \lambda \circ x\)

\(\in\)







\(\ds \bigcap S\)





as $\ds \bigcap S$ is closed for scalar product














\(\ds \lambda \circ y\)

\(\in\)







\(\ds \bigcap S\)





as $\ds \bigcap S$ is closed for scalar product








\(\ds \leadsto \ \ \)





\(\ds \paren {\lambda \circ x} + \paren {\lambda \circ y}\)

\(\in\)







\(\ds \bigcap S\)





by combining the three statements above








\(\ds \leadsto \ \ \)





\(\ds \paren {\lambda \circ x} + \paren {\lambda \circ y}\)

\(\in\)







\(\ds G\)





as $\ds \bigcap S \subseteq G$








\(\ds \leadsto \ \ \)





\(\ds \paren {\lambda \circ x} + \paren {\lambda \circ y}\)

\(=\)







\(\ds \lambda \circ \paren {x + y}\)





Module Axiom $\text M 1$: Distributivity over Module Addition as applied to $\struct {G, +, \circ}_R$




Hence, $\ds \struct {\bigcap S, +, \circ}_R$ is a submodule of $M$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 27$. Subspaces and Bases: Theorem $27.2$




