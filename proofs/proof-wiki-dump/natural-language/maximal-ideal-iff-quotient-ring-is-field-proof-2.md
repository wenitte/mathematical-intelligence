# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_iff_Quotient_Ring_is_Field/Proof_2

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $J$ be an ideal of $R$.

The following are equivalent:

$(1): \quad$ $J$ is a maximal ideal.
$(2): \quad$ The quotient ring $R / J$ is a field.


Proof
Let $\mathbb L_J$ be the set of all ideals of $R$ which contain $J$.
Let the ordered set $\struct {\map {\mathbb L} {R / J}, \subseteq}$ be the set of all ideals of $R / J$.

Let the mapping $\Phi_J: \struct {\mathbb L_J, \subseteq} \to \struct {\map {\mathbb L} {R / J}, \subseteq}$ be defined as:

$\forall a \in \mathbb L_J: \map {\Phi_J} a = \map {q_J} a$
where $q_J: a \to a / J$ is the quotient epimorphism from $a$ to $a / J$.

Then from Ideals Containing Ideal Isomorphic to Quotient Ring, $\Phi_J$ is an isomorphism.

Now from Quotient Ring Defined by Ring Itself is Null Ring, $\map {q_J} J$ is the null ideal of $R / J$.
At the same time, $\map {q_J} R$ is the entire ring $R / J$.
Let $R / J$ not be the null ring.
Then by Epimorphism Preserves Rings and Epimorphism Preserves Commutativity, $R / J$ is a commutative ring with unity.

By definition, $J$ is a maximal ideal of $R$ if and only if $\mathbb L_J = \set {J, R}$ and $J$ is a proper ideal of $R$.
By Ideals of Field, $R / J$ is a field if and only if:

$\map {\mathbb L} {R / J} = \set {\map {q_J} J, \map {q_J} R}$
and the null ideal $\map {q_J} J$ is a proper ideal of $R / J$.

As $\Phi_J: \mathbb L_J \to \map {\mathbb L} {R / J}$ is an isomorphism, $J$ is a maximal ideal if and only if $J$ is a field.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers: Theorem $23.6$




