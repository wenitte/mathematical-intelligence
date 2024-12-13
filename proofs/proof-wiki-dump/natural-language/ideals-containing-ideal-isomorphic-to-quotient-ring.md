# 

Source: https://proofwiki.org/wiki/Ideals_Containing_Ideal_Isomorphic_to_Quotient_Ring

Theorem
Let $J$ be an ideal of a ring $R$.
Let $\mathbb L_J$ be the set of all ideals of $R$ which contain $J$.
Let the ordered set $\struct {\map {\mathbb L} {R / J}, \subseteq}$ be the set of all ideals of $R / J$.

Let the mapping $\Phi_J: \struct {\mathbb L_J, \subseteq} \to \struct {\map {\mathbb L} {R / J}, \subseteq}$ be defined as:

$\forall a \in \mathbb L_J: \map {\Phi_J} a = \map {q_J} a$
where $q_J: a \to a / J$ is the quotient epimorphism from $a$ to $a / J$ from the definition of quotient ring.

Then $\Phi_J$ is an isomorphism.


Proof
Let $b \in \mathbb L_J$.
From the way $\mathbb L_J$ is defined:

$J \subseteq b$
Thus by Preimage of Image of Subring under Ring Homomorphism:

$\map {q_J^{-1} } {\map {q_J} b} = b + J = b$
Let $c$ be an ideal of $R / J$.
Then, by Image of Preimage of Subring under Ring Epimorphism:

$\map {q_J} {\map {q_J^{-1} } c} = c$
Thus by Bijection iff Left and Right Inverse, $\Phi_J$ is a bijection.
Hence:

$\forall c \in \map {\mathbb L} {R / J}: \map {q_J^{-1} } {\Phi_J} c = \map {q_J^{-1} } c$

Now to show that $\Phi_J$ is an isomorphism.
Let $b_1, b_2 \in \mathbb L_J$.
Let $b_1 \subseteq b_2$.
Then from Subset Maps to Subset:

$\map {q_J} {b_1} \subseteq \map {q_J} {b_2}$

Conversely, suppose $\map {q_J} {b_1} \subseteq \map {q_J} {b_2}$.
By what we have just proved:

$b_1 = \map {q_J^{-1} } {\map {q_J} {b_1} } \subseteq \map {q_J^{-1} } {\map {q_J} {b_2} } = b_2$
Thus $\Phi_J$ is an isomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $22$. New Rings from Old: Theorem $22.7$




