# 

Source: https://proofwiki.org/wiki/Greatest_Element_is_Unique



Theorem
Let $\struct {S, \preceq}$ be a ordered set.
If $S$ has a greatest element, then it can have only one.

That is, if $a$ and $b$ are both greatest elements of $S$, then $a = b$.


Class-Theoretical Formulation
Let $V$ be a basic universe.
Let $\RR \subseteq V \times V$ be an ordering.
Let $A$ be a subclass of the field of $\RR$.

Suppose $A$ has a greatest element $g$ with respect to $\RR$.
Then $g$ is unique.


Proof
Let $a$ and $b$ both be greatest elements of $S$.
Then by definition:

$\forall y \in S: y \preceq a$
$\forall y \in S: y \preceq b$
Thus it follows that:

$b \preceq a$
$a \preceq b$
But as $\preceq$ is an ordering, it is antisymmetric.
Hence, by definition of antisymmetric relation, $a = b$.
$\blacksquare$


Also see
Smallest Element is Unique


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 14$: Order
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.5$: Ordered Sets
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $5$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 3$: Relations: Exercise $3.11$




