# 

Source: https://proofwiki.org/wiki/Injection_iff_Left_Inverse/Proof_3

Theorem
A mapping $f: S \to T, S \ne \O$ is an injection if and only if:

$\exists g: T \to S: g \circ f = I_S$
where $g$ is a mapping.

That is, if and only if $f$ has a left inverse.


Proof
Let $f: S \to T$ be an injection.
Then $f$ is a one-to-many relation.
By Inverse of Many-to-One Relation is One-to-Many, $f^{-1}: T \to S$ is many-to-one.
By Many-to-One Relation Extends to Mapping, there is a Mapping $g: T \to S$ such that $f^{-1} \subseteq g$.
Let $\tuple {x, y} \in g \circ f$.
Then:

$\exists z \in T: \tuple {x, z} \in f, \tuple {z, y} \in g$
Since $\tuple {x, z} \in f$:

$\tuple {z, x} \in f^{-1} \subseteq g$
Since $\tuple {z, y} \in g$, $\tuple {z, x} \in g$ and $g$ is a mapping:

$x = y$
so:

$\tuple {x, y} \in I_S$
So we see that:

$g \circ f \subseteq I_S$

Let $x \in S$.
Then:

$\tuple {x, \map f x} \in f$
and:

$\tuple {\map f x, x} \in f^{-1} \subseteq g$
So:

$\tuple {x, x} \in g \circ f$
Thus:

$I_S \subseteq g \circ f$
By definition of set equality:

$I_S = g \circ f$
$\blacksquare$

Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle, by way of Many-to-One Relation Extends to Mapping.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





