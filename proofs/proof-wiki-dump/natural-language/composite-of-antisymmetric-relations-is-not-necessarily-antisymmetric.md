# 

Source: https://proofwiki.org/wiki/Composite_of_Antisymmetric_Relations_is_not_necessarily_Antisymmetric

Theorem
Let $A$ be a set.
Let $\RR$ and $\SS$ be antisymmetric relations on $A$.
Then their composite $\RR \circ \SS$ is not necessarily also antisymmetric.


Proof
Proof by Counterexample

Consider the ordering $\le$ on the natural numbers $\N$.
Consider its dual ordering $\ge$ also on $\N$.
Note that Dual Ordering is Ordering.
Both $\le$ and $\ge$ are a fortiori antisymmetric relations.
We have:

$1 \le 3$
$3 \ge 2$
and similarly:

$2 \le 3$
$3 \ge 1$
Hence it follows that:

$1 \le \circ \ge 2$
while at the same time:

$2 \le \circ \ge 1$
and so while both $\le$ and $\ge$ are antisymmetric, their composite $\le \circ \ge$ is not.
Hence the result.
$\blacksquare$





