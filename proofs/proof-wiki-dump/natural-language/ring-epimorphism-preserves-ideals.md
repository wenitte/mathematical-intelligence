# 

Source: https://proofwiki.org/wiki/Ring_Epimorphism_Preserves_Ideals

Theorem
Let $\phi: \struct {R_1, +_1, \circ_1} \to \struct {R_2, +_2, \circ_2}$ be a ring epimorphism.
Let $J$ be an ideal of $R_1$.

Then $\phi \sqbrk J$ is an ideal of $R_2$.


Proof
$J$ is an ideal of $R_1$, so it is also a subring of $R_1$.
From Ring Homomorphism Preserves Subrings, it follows that $\phi \sqbrk J$ is a subring of $R_2$.

Now suppose $u \in \phi \sqbrk J$.
Let $v \in R_2$.
Then $\exists x \in J, y \in R_1$ such that $\map \phi x = u, \map \phi y = v$.
Thus, by the morphism property:

$u \circ_2 v = \map \phi x \circ_2 \map \phi y = \map \phi {x \circ_1 y}$
So $u \circ_2 v \in \phi \sqbrk J$ because $x \circ_1 y \in J$.
Similarly $v \circ_2 u \in \phi \sqbrk J$ also.
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.6: \ 2^\circ$




