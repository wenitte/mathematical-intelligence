# 

Source: https://proofwiki.org/wiki/Greatest_Element_is_Unique/Class_Theory

Theorem
Let $V$ be a basic universe.
Let $\RR \subseteq V \times V$ be an ordering.
Let $A$ be a subclass of the field of $\RR$.

Suppose $A$ has a greatest element $g$ with respect to $\RR$.
Then $g$ is unique.

That is, if $g$ and $h$ are both smallest elements of $A$, then $g = h$.


Proof
Let $g$ and $h$ both be smallest elements of $A$.
Then by definition:

$\forall y \in A: y \mathrel \RR g$
$\forall y \in A: y \mathrel \RR h$
Thus it follows that:

$g \preceq h$
$h \preceq g$
But as $\preceq$ is an ordering, it is antisymmetric.
Hence by definition of antisymmetric, $g = h$.
$\blacksquare$


Also see
Smallest Element of Class is Unique




