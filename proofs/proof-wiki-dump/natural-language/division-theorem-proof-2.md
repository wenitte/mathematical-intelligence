# 

Source: https://proofwiki.org/wiki/Division_Theorem/Proof_2

Theorem
For every pair of integers $a, b$ where $b \ne 0$, there exist unique integers $q, r$ such that $a = q b + r$ and $0 \le r < \size b$:

$\forall a, b \in \Z, b \ne 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < \size b$


Proof
Consider the set of integer multiples $x \size b$ of $\size b$ less than or equal to $a$:

$M := \set {k \in \Z: \exists x \in \Z: k = x \size b, k \le a}$
We have that:

$-\size a \size b \le -\size a \le a$
and so $M \ne \O$.
From Set of Integers Bounded Above by Integer has Greatest Element, $M$ has a greatest element $h \size b$.
Then $h \size b \le a$ and so:

$a = h \size b + r$
where $r \ge 0$.
On the other hand:

$\paren {h + 1} \size b = h \size b + \size b > h \size b$
So:

$\paren {h + 1} \size b > a$
and:

$h \size b + \size b > h \size b + r$
Thus:

$r \le b$
Setting:

$q = h$ when $b > 0$
$q = -h$ when $b < 0$
it follows that:

$h \size b = q b$
and so:

$a = q b + r$
as required.
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 6$: The division process in $I$: Theorem




