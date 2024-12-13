# 

Source: https://proofwiki.org/wiki/Maximal_Left_and_Right_Ideal_iff_Quotient_Ring_is_Division_Ring/Quotient_Ring_is_Division_Ring_implies_Maximal_Right_Ideal

Theorem
Let $R$ be a ring with unity.
Let $J$ be an ideal of $R$.
If the quotient ring $R / J$ is a division ring then $J$ is a maximal right ideal.


Proof
Let $K$ be a right ideal of $R$ such that $J \subsetneq K \subset R$.
Let $x \in K \setminus  J$.
As $x \notin J$ then $x + J \ne J$, the zero in $R / J$.
As $R / J$ is a division ring then $x + J \in R / J$ has an inverse, say $s + J$.
That is:

$1_R + J = \paren {x + J} \circ \paren {s + J} = \paren {x \circ s} + J$
By Left Cosets are Equal iff Product with Inverse in Subgroup then:

$1_R - x \circ s \in J \subsetneq K$
By the definition of a right ideal:

$x \in K$ and $s \in R \implies x \circ s \in K$
$1_R - x \circ s \in K$ and $x \circ s \in K \implies \paren {1_R - x \circ s} + \paren {x \circ s} = 1_R \in K$
$1_R \in K \implies \forall y \in R, 1_R \circ y = y \in K$
Hence $K = R$
The result follows.
$\blacksquare$





