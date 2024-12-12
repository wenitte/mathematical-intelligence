# 

Source: https://proofwiki.org/wiki/Directed_Set_has_Strict_Successors_iff_Unbounded_Above



Theorem
Let $\struct {S, \le}$ be a directed set.
Then every element of $S$ has a strict successor in $S$ if and only if $S$ has no upper bound in $S$.


Proof
Necessary Condition
Suppose that each element of $S$ has a strict successor in $S$.
If $x$ is any element of $S$, then $x$ has a strict successor.
Therefore, $x$ is not an upper bound of $S$.
$\Box$


Sufficient Condition
Suppose $S$ has no upper bound in $S$.
Let $x \in S$.
Since $S$ has no upper bound, $x$ is not an upper bound of $S$.
Thus for some $p \in S$, $p \not\le x$.
By the definition of a directed set, there is a $y \in S$ such that $p \le y$ and $x \le y$.
Since $p \not\le x$, it follows that $x \ne y$.

Hence, since we already know that $x \le y$, in fact $x < y$.
Thus $y$ is a strict successor of $x$.
$\blacksquare$





