# 

Source: https://proofwiki.org/wiki/Intersection_of_Subrings_is_Subring

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\mathbb L$ be a non-empty set of subrings of $R$.

Then the intersection $\bigcap \mathbb L$ of the members of $\mathbb L$ is itself a subring of $R$.


Proof
Let $L = \bigcap \mathbb L$.

By Intersection of Subgroups is Subgroup, $\struct {L, +}$ is a subgroup of $\struct {R, +}$.
By the One-Step Subgroup Test:

$\forall x, y \in \struct {L, +}: x + \paren {-y} \in L$
By Intersection of Subsemigroups, $\struct {L, \circ}$ a subsemigroup of $\struct {R, \circ}$.
So by definition of subsemigroup:

$\forall x, y \in \struct {L, \circ}: x \circ y \in L$
By the Subring Test it follows that $\struct {L, +, \circ}$ is a subring of $\struct {R, +, \circ}$.
$\blacksquare$


Sources
1970: B. Hartley and T.O. Hawkes: Rings, Modules and Linear Algebra ... (previous) ... (next): $\S 2.3$: Some properties of subrings and ideals: Lemma $2.13 \ \text{(i)}$




