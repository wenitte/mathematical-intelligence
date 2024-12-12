# 

Source: https://proofwiki.org/wiki/Bernoulli%27s_Inequality/Proof_2

Theorem
Let $x \in \R$ be a real number such that $x > -1$.
Let $n \in \Z_{\ge 0}$ be a positive integer.

Then:

$\paren {1 + x}^n \ge 1 + n x$


Proof
Let $y = 1 + x$.
Then $y \ge 0$, and:

$\paren {1 + x}^n = 1 + \paren {y^n - 1}$
If $y \ge 1$, then by Sum of Geometric Sequence:

$\ds y^n - 1 = \paren {y - 1} \sum_{k \mathop = 0}^{n - 1} y^k \ge n \paren {y - 1} = n x$
If $y < 1$, then by Sum of Geometric Sequence:

$\ds y^n - 1 = -\paren {1 - y} \sum_{k \mathop = 0}^{n - 1} y^k \ge -n \paren {1 - y} = n x$
Hence the result.
$\blacksquare$


Source of Name
This entry was named for Jacob Bernoulli.





