# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_on_Strictly_Well-Founded_Relation_preserves_Strictly_Well-Founded_Structure

Theorem
Let $A_1$ and $A_2$ be classes.
Let $\prec_1$ and $\prec_2$ be relations.
Let $\phi: \struct {A_1, \prec_1} \to \struct {A_2, \prec_2}$ be an order isomorphism.

Then $\struct {A_1, \prec_1}$ is a strictly well-founded structure if and only if $\struct {A_2, \prec_2}$ is also a strictly well-founded structure.


Proof
Take any nonempty subset $B \subseteq A_1$.
From Order Isomorphism Preserves Strictly Minimal Elements:

$x$ is a strictly minimal element of $B$ if and only if $\map \phi x$ is a strictly minimal element of $\phi \sqbrk B$.
By the definition of strictly well-founded relation, $\struct {A_1, \prec_1}$ is strictly well-founded if and only if $\struct {A_2, \prec_2}$ is strictly well-founded.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 6.32$




