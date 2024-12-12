# 

Source: https://proofwiki.org/wiki/Congruence_Relation_on_Ring_induces_Ring

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $\EE$ be a congruence relation on $R$ for both $+$ and $\circ$.

Let $R / \EE$ be the quotient set of $R$ by $\EE$.
Let $+_\EE$ and $\circ_\EE$ be the operations induced on $R / \EE$ by $+$ and $\circ$ respectively.

Then $\struct {R / \EE, +_\EE, \circ_\EE}$ is a ring.


Proof
Let $q_\EE$ be the quotient mapping from $\struct {R, +, \circ}$ to $\struct {R / \EE, +_\EE, \circ_\EE}$.
From Quotient Mapping on Structure is Epimorphism:

$q_\EE: \struct {R, +} \to \struct {R / \EE, +_\EE}$ is an epimorphism
$q_\EE: \struct {R, \circ} \to \struct {R / \EE, \circ _\EE}$ is an epimorphism.

As the morphism property holds for both $+$ and $\circ$, it follows that $q_\EE: \struct {R, +, \circ} \to \struct {R / \EE, +_\EE, \circ_\EE}$ is also an epimorphism.
From Epimorphism Preserves Rings, it follows that $\struct {R / \EE, +_\EE, \circ_\EE}$ is a ring.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.1$




