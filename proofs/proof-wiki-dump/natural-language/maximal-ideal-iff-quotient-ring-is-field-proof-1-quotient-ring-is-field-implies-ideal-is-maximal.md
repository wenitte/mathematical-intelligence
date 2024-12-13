# 

Source: https://proofwiki.org/wiki/Maximal_Ideal_iff_Quotient_Ring_is_Field/Proof_1/Quotient_Ring_is_Field_implies_Ideal_is_Maximal

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring with unity whose zero is $0_R$ and whose unity is $1_R$.
Let $J$ be an ideal of $R$.

Let the quotient ring $R / J$ be a field.
Then $J$ is a maximal ideal.


Proof
Let $R / J$ be a field.
Let $K$ be a left ideal of $R$ such that $J \subsetneq K \subseteq R$.
We have that $J$ is the zero of $R / J$.
Let $x \in K \setminus J$.
Because $x \notin J$ then $x + J \ne J$.
Because $R / J$ is a field then $x + J \in R / J$ has a product inverse, say $s + J$.
Hence:

$1_R + J = \paren {s + J} \circ \paren {x + J} = \paren {s \circ x } + J$
By Left Cosets are Equal iff Product with Inverse in Subgroup:

$1_R - s \circ x \in J \subsetneq K$
By the definition of an ideal:

$x \in K, s \in R \implies s \circ x \in K$
$1_R - s \circ x \in K, s \circ x \in K \implies \paren {1_R - s \circ x} + \paren {s \circ x} = 1_R \in K$
$1_R \in K \implies \forall y \in R:  y \circ 1_R = y \in K$
Hence $K = R$.
The result follows.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $18$




