# 

Source: https://proofwiki.org/wiki/Division_Subring_Test



Theorem
Let $\struct {K, +, \circ}$ be a division ring, and let $L$ be a subset of $K$.

Then $\struct {L, +, \circ}$ is a division subring of $\struct {K, +, \circ}$ if and only if these all hold:

$(1) \quad L^* \ne \O$
$(2) \quad \forall x, y \in L: x + \paren {-y} \in L$
$(3) \quad \forall x, y \in L: x \circ y \in L$
$(4) \quad x \in L^* \implies x^{-1} \in L^*$


Proof
Necessary Condition
Suppose $\struct {L, +, \circ}$ is a division subring of $\struct {K, +, \circ}$.
The conditions $(1)$ to $(3)$ hold by virtue of the Subring Test.
Then $(4)$ also holds by the definition of a division ring:

$\forall x \in L^*: \exists ! x^{-1} \in L^*: x^{-1} \circ x = x \circ x^{-1} = 1_L$
$\Box$


Sufficient Condition
Suppose the conditions $(1)$ to $(4)$ hold.
By $(1)$ to $(3)$, it follows from Subring Test that $\struct {L, +, \circ}$ is a subring of $\struct {K, +, \circ}$.
By $(4)$, every element of $L^*$ has a product inverse.
Thus, from the Two-Step Subgroup Test, $\struct {L^*, \circ}$ is a group.
Therefore, $\struct {L, +, \circ}$ is a ring in which every element has a product inverse, which makes $\struct {L, +, \circ}$ a division ring.
$\blacksquare$





