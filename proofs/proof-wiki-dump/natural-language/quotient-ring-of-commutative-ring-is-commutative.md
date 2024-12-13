# 

Source: https://proofwiki.org/wiki/Quotient_Ring_of_Commutative_Ring_is_Commutative

Theorem
Let $\struct {R, +, \circ}$ be a ring whose zero is $0_R$ and whose unity is $1_R$.
Let $J$ be an ideal of $R$.
Let $\struct {R / J, +, \circ}$ be the quotient ring defined by $J$.

If $\struct {R, +, \circ}$ is a commutative ring, then so is $\struct {R / J, +, \circ}$.


Proof
Let $\struct {R, +, \circ}$ be a commutative ring
That means $\circ$ is commutative on $R$.
Thus:










\(\ds \forall x, y \in R: \, \)



\(\ds \paren {x + J} \circ \paren {y + J}\)

\(=\)







\(\ds x \circ y + J\)





Definition of $\circ$ in $R / J$














\(\ds \)

\(=\)







\(\ds y \circ x + J\)





Commutativity of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {y + J} \circ \paren {x + J}\)





Definition of $\circ$ in $R / J$



$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 60.2$ Factor rings: $\text{(iii)}$




