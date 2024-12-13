# 

Source: https://proofwiki.org/wiki/Inverse_of_Product_of_Subsets_of_Group



Theorem
Let $\struct {G, \circ}$ be a group.
Let $X, Y \subseteq G$.

Then:

$\paren {X \circ Y}^{-1} = Y^{-1} \circ X^{-1}$
where $X^{-1}$ is the inverse of $X$.


Proof 1
First, note that:














\(\ds \)

\(\)







\(\ds x \in X, y \in Y\)




















\(\ds \)

\(\leadsto\)







\(\ds x^{-1} \in X^{-1}, y^{-1} \in Y^{-1}\)





Definition of Inverse of Subset of Group














\(\ds \)

\(\leadsto\)







\(\ds y^{-1} \circ x^{-1} \in Y^{-1} \circ X^{-1}\)





Definition of Subset Product




Now:














\(\ds x \circ y\)

\(\in\)







\(\ds X \circ Y\)





Definition of Subset Product








\(\ds \leadsto \ \ \)





\(\ds \paren {x \circ y}^{-1}\)

\(\in\)







\(\ds \paren {X \circ Y}^{-1}\)





Definition of Inverse of Subset of Group








\(\ds \leadsto \ \ \)





\(\ds y^{-1} \circ x^{-1}\)

\(\in\)







\(\ds \paren {X \circ Y}^{-1}\)





Inverse of Group Product








\(\ds \leadsto \ \ \)





\(\ds Y^{-1} \circ X^{-1}\)

\(\subseteq\)







\(\ds \paren {X \circ Y}^{-1}\)





Definition of Subset




By a similar argument we see that $\paren {X \circ Y}^{-1} \subseteq Y^{-1} \circ X^{-1}$.

Hence the result.
$\blacksquare$


Proof 2
Superset
We will show that $\forall z \in Y^{-1} \circ X^{-1}: z \in \paren {X \circ Y}^{-1}$, from which:

$Y^{-1} \circ X^{-1} \subseteq \paren {X \circ Y}^{-1}$

Let $z \in Y^{-1} \circ X^{-1}$.
By the definition of subset product:

$\exists x' \in X^{-1}, y' \in Y^{-1}: z = y' \circ x'$
Then by Inverse of Group Product:

$(2)\quad z^{-1} = x'^{-1} \circ y'^{-1}$
By the definition of inverse of subset:

$x'^{-1} \in X$ and $y'^{-1} \in Y$
By the definition of subset product:

$x'^{-1} \circ y'^{-1} \in X \circ Y$
Thus by $(2)$:

$z^{-1} \in X \circ Y$
By the definition of inverse of subset:

$z \in \paren {X \circ Y}^{-1}$


Subset
We will show that $\forall z \in \paren {X \circ Y}^{-1}: z \in Y^{-1} \circ X^{-1}$, from which:

$\paren {X \circ Y}^{-1} \subseteq Y^{-1} \circ X^{-1}$

Let $z \in \paren {X \circ Y}^{-1}$.
By the definition of inverse of subset:

$z^{-1} \in X \circ Y$
From Inverse of Inverse of Subset of Group:

$z^{-1} \in \paren {X^{-1} }^{-1} \circ \paren {Y^{-1} }^{-1}$
Thus by the superset proof above:

$z^{-1} \in \paren {Y^{-1} \circ X^{-1} }^{-1}$
From the definition of inverse of subset:

$z \in Y^{-1} \circ X^{-1}$
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Exercise $\text{G}$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $6 \ \text{(i)}$




