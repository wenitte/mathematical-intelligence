# 

Source: https://proofwiki.org/wiki/Relation_Compatibility_in_Totally_Ordered_Semigroup

Theorem
Let $\left({S, \circ, \preceq}\right)$ be an ordered semigroup such that:

$(1): \quad$ All the elements of $\left({S, \circ, \preceq}\right)$ are cancellable for $\circ$
$(2): \quad \preceq$ is a total ordering.
Then:

$\forall x, y, z \in S: x \circ z \preceq y \circ z \iff x \preceq y$


Proof
From Strict Ordering Preserved under Cancellability in Totally Ordered Semigroup:

$x \circ z \prec y \circ z \implies x \prec y$
From the definition of cancellable element:

$x \circ z = y \circ z \implies x = y$
$\blacksquare$





