# 

Source: https://proofwiki.org/wiki/Difference_of_Two_Squares/Algebraic_Proof_2

Theorem
Let $\struct {R, +, \circ}$ be a commutative ring whose zero is $0_R$.
Let $x, y \in R$.

Then:

$x \circ x + \paren {- \paren {y \circ y} } = \paren {x + y} \circ \paren {x + \paren {-y} }$

When $R$ is one of the standard sets of numbers, that is $\Z, \Q, \R$, and so on, then this translates into:

$x^2 - y^2 = \paren {x + y} \paren {x - y}$


Proof
This is a special case of Difference of Two Powers:

$\ds a^n - b^n = \paren {a - b} \paren {a^{n - 1} + a^{n - 2} b + a^{n - 3} b^2 + \cdots + a b^{n - 2} + b^{n - 1} } = \paren {a - b} \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} b^j$
The result follows by setting $n = 2$.
$\blacksquare$





