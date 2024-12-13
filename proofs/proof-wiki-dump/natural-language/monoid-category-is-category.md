# 

Source: https://proofwiki.org/wiki/Monoid_Category_is_Category

Theorem
Let $\left({S, \circ}\right)$ be a monoid with identity $e_S$.
Let $\mathbf S$ be the associated monoid category.

Then $\mathbf S$ is a category.


Proof
Let us verify the axioms $(C1)$ up to $(C3)$ for a metacategory.

Suppose that $a, b \in \mathbf S_1$ are morphisms.
Since $\left({S, \circ}\right)$ is closed, $a \circ b$ is also a morphism.

Axiom $(C2)$ follows directly from the axioms for the identity $e_S$ in a monoid.

Axiom $(C3)$ holds because $\circ$ is associative.
This is because $\left({S, \circ}\right)$ is a monoid.

Hence $\mathbf S$ is a metacategory.
As $\mathbf S$ has only one object, and $\mathbf S_1 = S$, it follows that $\mathbf S$ is also a category.
$\blacksquare$





