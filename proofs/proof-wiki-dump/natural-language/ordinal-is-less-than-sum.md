# 

Source: https://proofwiki.org/wiki/Ordinal_is_Less_than_Sum

Theorem
Let $x$ and $y$ be ordinals.

Then:

$x \le \paren {x + y}$
$x \le \paren {y + x}$


Proof
By Proof by Cases, one of the following holds by Empty Set is Subset of All Sets:

$\O < y$
$y = \O$
By Ordinal Addition by Zero:

$x = \paren {x + \O} = \paren {\O + x}$
By Membership is Left Compatible with Ordinal Addition:

$\O < y \implies x < \paren {x + y}$
But if $y = \O$, then it is clear the inequality $x \le \paren {x + y}$ holds as well.
So in either case:

$x \le \paren {x + y}$
Similarly, by Subset is Right Compatible with Ordinal Addition:

$\O \le y \implies x \le \paren {y + x}$
The fact that $\O \le y$ is clear from Empty Set is Subset of All Sets.
Therefore:

$x \le \paren {y + x}$
$\blacksquare$





