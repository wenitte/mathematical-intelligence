# 

Source: https://proofwiki.org/wiki/Elements_of_Primitive_Pythagorean_Triple_are_Pairwise_Coprime

Theorem
Let $\tuple {x, y, z}$ be a primitive Pythagorean triple.
Then:

$x \perp y$
$y \perp z$
$x \perp z$
That is, all elements of $\tuple {x, y, z}$ are pairwise coprime.


Proof
We have that $x \perp y$ by definition.
Suppose there is a prime divisor $p$ of both $x$ and $z$.
That is:

$\exists p \in \mathbb P: p \divides x, p \divides z$
Then from Prime Divides Power:

$p \divides x^2, p \divides z^2$
Then from Common Divisor Divides Integer Combination:

$p \divides \paren {z^2 - x^2} = y^2$
So from Prime Divides Power again:

$p \divides y$
and:

$x \not \perp y$
This contradicts our assertion that $\tuple {x, y, z}$ is a primitive Pythagorean triple.
Hence $x \perp z$.
The same argument shows that $y \perp z$.
$\blacksquare$





