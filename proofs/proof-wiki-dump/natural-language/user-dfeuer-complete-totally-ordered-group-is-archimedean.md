# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Complete_Totally_Ordered_Group_is_Archimedean

{{tidy}}
{{MissingLinks|throughout}}

Theorem
Let $G$ be a Dedekind-complete totally ordered group.

Then $G$ is Archimedean.


Proof
Let $e$ be the identity of $G$.
Let $e < x < y$.
Suppose for the sake of contradiction that $x^n < y$ for all $n \in \N_{>0}$.
Let $P = \{ x^n: n \in \N_{>0} \}$.
Then $P$ is bounded above by $y$.
Since $G$ is Dedekind-complete, $P$ has a supremum $m$.
Then $mx^{-1} < m$, so $mx^{-1}$ is not an upper bound of $P$, so there is an $n \in \N_{>0}$ such that $mx^{-1}\le x^n$.
But then $m \le x^{n+1} < x^{n+2}$, contradicting the fact that $m$ is an upper bound of $P$.
Thus $x^n \ge y$ for some $n \in \N_{>0}$.
$\blacksquare$





