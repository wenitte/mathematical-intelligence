# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Increasing_Net_Converges_to_Point_iff_Supremum



Theorem
Let $(D,\preceq)$ be a directed set.
Let $(L,\le)$ be a totally ordered set considered under the order topology.
Let $(x_i)_{i\in D}$ be a net in $G$.
Suppose that $(x_i)$ is increasing. That is, suppose that for all $i,j\in D$, $i\preceq j \implies x_i \le x_j$.
Let $x\in L$.

Then $(x_i)$ converges to $x$ iff $x$ is the supremum of $P = \{ x_i \mid i\in D \}$.


Proof
Forward implication
Suppose that $(x_i)$ converges to $x$.
Suppose for the sake of contradiction that for some $j \in D$, $x_j > x$.
Then since $(x_i)$ is increasing, $\forall k\in D: (k \succeq j\implies x_k\ge x_j > x)$.
But since $(x_i)$ converges to $x$, and $x_j > x$, $(x_i)$ is eventually less than $x_j$, a contradiction. Thus $x$ is an upper bound of $P$.
Let $m < x$.
Since $(x_i)$ converges to $x$, it is eventually greater than $m$.
Thus $m$ is not an upper bound of $P$.
We conclude that $x$ is the supremum of $P$.
$\Box$


Reverse implication
Suppose that $x$ is the supremum of $P$.
Let $b > x$.
Then $x_i < b$ for every $i\in D$, so $(x_i)$ is certainly eventually less than $b$.
Let $a<x$. Then $a$ is not an upper bound of $P$, so for some $j\in D$, $x_j > a$.
But then since $(x_i)$ is increasing, $\forall k\in D: (k\succeq j\implies x_k \ge x_j > a)$, so $(x_i)$ is eventually greater than $a$.
Thus we conclude that $(x_i)$ converges to $x$.
$\blacksquare$





