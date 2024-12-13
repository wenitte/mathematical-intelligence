# 

Source: https://proofwiki.org/wiki/Maximal_Left_and_Right_Ideal_iff_Quotient_Ring_is_Division_Ring/Quotient_Ring_is_Division_Ring_implies_Maximal_Left_Ideal

Theorem
Let $R$ be a ring with unity.
Let $J$ be an ideal of $R$.
If the quotient ring $R / J$ is a division ring then $J$ is a maximal left ideal.


Proof
Let $K$ be a left ideal of $R$ such that $J \subsetneq K \subset R$.
Let $x \in K \setminus J$.
As $x \notin J$, then $x + J \ne J$, the zero in $R / J$.
As $R / J$ is a division ring, $x + J \in R / J$ has an inverse, say $s + J$.
That is:

$1_R + J =  \paren {s + J} \circ \paren {x + J} = \paren {s \circ x} + J$
By Left Cosets are Equal iff Product with Inverse in Subgroup then:

$1_R - s \circ x \in J \subsetneq K$
By the definition of a left ideal then:

$x \in K$ and $s \in R \implies s \circ x \in K$
$1_R - s \circ x \in K$ and $s \circ x \in K \implies \paren {1_R - s \circ x} + \paren {s \circ x } = 1_R \in K$
$1_R \in K \implies \forall y \in R, y \circ 1_R = y \in K$
Hence $K = R$
The result follows.
$\blacksquare$


Sources




