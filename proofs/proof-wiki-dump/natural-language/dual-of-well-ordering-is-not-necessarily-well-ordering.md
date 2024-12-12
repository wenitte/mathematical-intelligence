# 

Source: https://proofwiki.org/wiki/Dual_of_Well-Ordering_is_not_necessarily_Well-Ordering

Theorem
Let $\struct {S, \preccurlyeq}$ be a well-ordered set.

Then its dual $\struct {S, \preccurlyeq}$ is not necessarily also a well-ordered set.


Proof
Consider the ordered structure $\struct {\N, \le}$.
From the Well-Ordering Principle, $\struct {\N, \le}$ is a well-ordered set..
Consider the dual $\struct {\N, \ge}$ of $\struct {\N, \le}$.
Let this be expressed as:

$\struct {\N, \preccurlyeq} := \struct {\N, \ge}$
so as to enhance the clarification of the nature of the ordering in question.
From Dual of Total Ordering is Total Ordering, $\struct {\N, \preccurlyeq}$ is a totally ordered set.
Aiming for a contradiction, suppose $\struct {\N, \preccurlyeq}$ is a well-ordered set.
Then there exists a minimal element of $\struct {\N, \preccurlyeq}$:

$\exists m \in \N: \forall x \in \N: x \preccurlyeq m \implies x = m$
But consider $y = m + 1$.
We have:

$y \ge m$ but $y \ne m$
That is:

$y \preccurlyeq m$ but $y \ne m$
and so $m$ cannot be a minimal element of $\struct {\N, \preccurlyeq}$ after all.
It follows that $\struct {\N, \preccurlyeq}$ is not a well-ordered set.
The result follows by Proof by Contradiction
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 14$: Orderings: Exercise $14.10$
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $27 \ \text {(c)}$




