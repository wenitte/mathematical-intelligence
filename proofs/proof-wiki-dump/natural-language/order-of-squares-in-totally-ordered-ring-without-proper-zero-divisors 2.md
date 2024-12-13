# 

Source: https://proofwiki.org/wiki/Order_of_Squares_in_Totally_Ordered_Ring_without_Proper_Zero_Divisors


It has been suggested that this page be renamed.In particular: A totally ordered ring without proper zero divisors is an ordered integral domainTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $\struct {R, +, \circ, \le}$ be a totally ordered ring without proper zero divisors whose zero is $0_R$.
Let $x, y \in R$ be positive, that is, $0_R \le x, y$.

Then $x \le y \iff x \circ x \le y \circ y$.
That is, the square mapping is an order embedding of $\struct {R_{\ge 0}, \le}$ into itself.

When $R$ is one of the standard sets of numbers $\Z, \Q, \R$, then this translates into:

If $x, y$ are positive, then $x \le y \iff x^2 \le y^2$.


Proof
From Order of Squares in Ordered Ring, we have:

$x \le y \implies x \circ x \le y \circ y$

To prove the opposite implication, we use a Proof by Contradiction.
Aiming for a contradiction, suppose $x \circ x \le y \circ y$ but $x \not\le y$.
Since $\le$ is a total ordering, this means $y < x$.
Since $0_R \le y$, Extended Transitivity shows that $0_R < x$, so in particular $x ≠ 0_R$.
As $\le$ is compatible with the ring structure $\struct {R, +, \circ}$ and $x$ and $y$ are both positive, we have:

$y \circ y \le y \circ x \le x \circ x$
Since we assume $x \circ x \le y \circ y$, Ordering Cycle implies Equality shows that:

$y \circ y = x \circ x = y \circ x$
Therefore:














\(\ds 0_R\)

\(=\)







\(\ds x \circ x + \paren {-\paren {y \circ x} }\)





Definition of Ring Negative














\(\ds \)

\(=\)







\(\ds x \circ x + \paren {-y} \circ x\)





Product with Ring Negative














\(\ds \)

\(=\)







\(\ds \paren {x + \paren {-y} } \circ x\)





Ring Axiom $\text D$: Distributivity of Product over Addition



Since $x \ne y$, we have that $x + \paren {-y} \ne 0_R$; otherwise, by Ring Axiom $\text A1$: Associativity of Addition, we would have $x = \paren {x + \paren {-y} } + y = y$.
We have already shown that $x \ne 0_R$.
But then $x$ and $x + \paren {-y}$ are proper zero divisors of $R$, contradicting the hypothesis that $R$ has no proper zero divisors.
$\blacksquare$


Also see
Order of Squares in Ordered Ring
Order of Squares in Ordered Field




