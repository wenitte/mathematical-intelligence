# 

Source: https://proofwiki.org/wiki/Order_of_Squares_in_Ordered_Field


It has been suggested that this page be renamed.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $\struct {R, +, \circ, \le}$ be an ordered field whose zero is $0_R$ and whose unity is $1_R$.
Suppose that $\forall a \in R: 0 < a \implies 0 < a^{-1}$.
Let $x, y \in \struct {R, +, \circ, \le}$ such that $0_R \le x, y$.

Then $x \le y \iff x \circ x \le y \circ y$.
That is, the square function is an order embedding of $\struct {R_{\ge 0}, \le}$ into itself.

When $R$ is one of the standard fields of numbers $\Q$ and $\R$, then this translates into:

If $x, y$ are positive then $x \le y \iff x^2 \le y^2$.


Proof
From Order of Squares in Ordered Ring, we have:

$x \le y \implies x \circ x \le y \circ y$
To prove the reverse implication, suppose that $x \circ x \le y \circ y$.
Thus:














\(\ds x \circ x\)

\(\le\)







\(\ds y \circ y\)














\(\ds \leadsto \ \ \)





\(\ds x \circ x + \paren {-\paren {x \circ x} }\)

\(\le\)







\(\ds y \circ y + \paren {-\paren {x \circ x} }\)














\(\ds \leadsto \ \ \)





\(\ds 0_R\)

\(\le\)







\(\ds y \circ y + \paren {-\paren {x \circ x} }\)














\(\ds \leadsto \ \ \)





\(\ds 0_R\)

\(\le\)







\(\ds \paren {y + \paren {-x} } \circ \paren {y + x}\)





Difference of Two Squares, which applies because a field is a commutative ring.



As $0_R \le x, y$ we have $0_R \le x + y$.
Hence by the premise we have $0_R \le \paren {x + y}^{-1}$.
So as $0_R \le \paren {y + \paren {-x} } \circ \paren {y + x}$ we can multiply both sides by $\paren {x + y}^{-1}$ and get $0_R \le \paren {y + \paren {-x} }$.
Adding $-x$ to both sides gives us $x \le y$.
$\blacksquare$


Also see
Order of Squares in Ordered Ring
Order of Squares in Totally Ordered Ring without Proper Zero Divisors




