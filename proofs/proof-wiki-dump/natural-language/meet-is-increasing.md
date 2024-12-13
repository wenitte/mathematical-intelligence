# 

Source: https://proofwiki.org/wiki/Meet_is_Increasing

Theorem
Let $\struct {S, \preceq}$ be a meet semilattice.
Let $f: S \times S \to S$ be a mapping such that:

$\forall s, t \in S: \map f {s, t} = s \wedge t$
Then:

$f$ is increasing as a mapping from the simple order product $\struct {S \times S, \precsim}$ of $\struct {S, \preceq}$ and $\struct {S, \preceq}$ into $\struct {S, \preceq}$.


Proof
Let $\tuple {x, y}, \tuple {z, t} \in S \times S$ such that:

$\tuple {x, y} \precsim \tuple {z, t}$
By definition of simple order product:

$x \preceq z$ and $y \preceq t$
By Meet Semilattice is Ordered Structure:

$x \wedge y \preceq z \wedge t$
By definition of $f$:

$\map f {x, y} \preceq \map f {z, t}$
Thus by definition:

$f$ is increasing mapping.
$\blacksquare$


Sources
Mizar article WAYBEL_2:funcreg 7




