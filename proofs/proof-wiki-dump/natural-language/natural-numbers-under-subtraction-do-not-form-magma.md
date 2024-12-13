# 

Source: https://proofwiki.org/wiki/Natural_Numbers_under_Subtraction_do_not_form_Magma

Theorem
The set of natural numbers $\N$ under the operation of subtraction does not form a magma.


Proof
Proof by Counterexample:
Recall the definition of magma:

$\struct {S, \circ}$ is a magma if and only if $\forall a, b \in S: a \circ b \in S$:
That is, a magma is closed under its operation.

Recall that the operation of natural number subtraction of $n - m$ is defined as:

$n - m = p$
where $p \in \N$ such that $n = m + p$.
But this is defined only when $n \ge m$.

Consider $4 - 7$.
Then there exists no $p \in N$ such that $4 = 7 + p$.
Thus $4 - 7$ is not defined on $\N$.
Thus the algebraic structure $\struct {\N, -}$ is not closed.
Hence the algebraic structure $\struct {\N, -}$ is not a magma by definition.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): groupoid
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): groupoid




