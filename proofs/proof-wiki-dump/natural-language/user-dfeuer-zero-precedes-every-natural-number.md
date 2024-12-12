# 

Source: https://proofwiki.org/wiki/User:Dfeuer/Zero_Precedes_Every_Natural_Number

Theorem
Let $(P, 0, s)$ be a Peano structure.
Let $\le$ be the natural ordering of $P$.

Then $0 \le n$ for each $n \in P$.


Proof
$\le$ is the reflexive closure of $<$, where $<$ is the transitive closure of $s$.
Thus $\le$ is reflexive, so $0 \le 0$.
Suppose that $0 \le n$.
By the definition of transitive closure, $s$ is a subset of $<$, so $n < s(n)$.
Thus since $<$ is transitive, $0 \le s(n)$.
Thus by the definition of Peano structure, $0 \le n$ for each $n \in P$.
$\blacksquare$





