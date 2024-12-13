# 

Source: https://proofwiki.org/wiki/Quotient_Group_of_Ideal_is_Coset_Space

Theorem
Let $\struct {R, +, \circ}$ be a ring.
Let $J$ be an ideal of $R$.
Let $\struct {R / J, +}$ be the quotient group of $\struct {R, +}$ by $\struct {J, +}$.

Then each element of $\struct {R / J, +}$ is a coset of $J$ in $R$, that is, is of the form $x + J = \set {x + j: j \in J}$ for some $x \in R$.

The rule of addition of these cosets is: $\paren {x + J} + \paren {y + J} = \paren {x + y} + J$.

The identity of $\struct {R / J, +}$ is $J$ and for each $x \in R$, the inverse of $x + J$ is $\paren {-x} + J$.


Proof
From Ideal is Additive Normal Subgroup that $J$ is a normal subgroup of $R$ under $+$.
From Quotient Ring Addition is Well-Defined, $+$ is a well-defined operation.
The rest follows directly from the definition of quotient group.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 60$. Factor rings




