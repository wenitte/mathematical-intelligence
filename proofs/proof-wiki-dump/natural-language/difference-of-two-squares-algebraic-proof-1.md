# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Squares/Algebraic_Proof_1

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring whose zero is $0_R$.
Let $x, y \in R$.

Then:

$x \circ x + \paren {- \paren {y \circ y} } = \paren {x + y} \circ \paren {x + \paren {-y} }$

When $R$ is one of the standard sets of numbers, that is $\Z, \Q, \R$, and so on, then this translates into:

$x^2 - y^2 = \paren {x + y} \paren {x - y}$


Proof













\(\ds \paren {x + y} \circ \paren {x + \paren {-y} }\)

\(=\)







\(\ds x \circ x + y \circ x + x \circ \paren {-y} + y \circ \paren {-y}\)





Distributivity of $\circ$ over $+$ in a ring














\(\ds \)

\(=\)







\(\ds x \circ x + x \circ y + x \circ \paren {-y} + y \circ \paren {-y}\)





$R$ is a commutative ring














\(\ds \)

\(=\)







\(\ds x \circ x + x \circ \paren {y + \paren {-y} } + \paren {-\paren {y \circ y} }\)





various ring properties














\(\ds \)

\(=\)







\(\ds x \circ x + x \circ 0_R + \paren {-\paren {y \circ y} }\)




















\(\ds \)

\(=\)







\(\ds x \circ x + \paren {-\paren {y \circ y} }\)









$\blacksquare$





