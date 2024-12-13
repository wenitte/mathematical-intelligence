# 

Source: https://proofwiki.org/wiki/Order_of_Squares_in_Ordered_Ring

Theorem
Let $\struct {R, +, \circ, \le}$ be an ordered ring whose zero is $0_R$ and whose unity is $1_R$.
Let $x, y \in \struct {R, +, \circ, \le}$ such that $0_R \le x, y$.

Then:

$x \le y \implies x \circ x \le y \circ y$

When $R$ is one of the standard sets of numbers, that is $\Z, \Q, \R$, then this translates into:

If $x, y$ are positive then $x \le y \implies x^2 \le y^2$.


Proof
Assume $x \le y$.
As $\le$ is compatible with the ring structure of $\struct {R, +, \circ, \le}$, we have:

$x \ge 0 \implies x \circ x \le x \circ y$
$y \ge 0 \implies x \circ y \le y \circ y$
and thus as $\le$ is transitive, it follows that $x \circ x \le y \circ y$.
$\blacksquare$


Also see
Order of Squares in Ordered Field
Order of Squares in Totally Ordered Ring without Proper Zero Divisors
Power Function is Strictly Increasing on Positive Elements




