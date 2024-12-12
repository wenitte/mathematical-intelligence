# 

Source: https://proofwiki.org/wiki/Bounds_for_Integer_Expressed_in_Base_k

Theorem
Let $n \in \Z$ be an integer.
Let $k \in \Z$ such that $k \ge 2$.
Let $n$ be expressed in base $k$ notation:

$n = \ds \sum_{j \mathop = 1}^s a_j k^j$
where each of the $a_j$ are such that $a_j \in \set {0, 1, \ldots, k - 1}$.

Then:

$0 \le n < k^{s + 1}$


Proof
As none of the coefficients $a_j$ in $\ds \sum_{j \mathop = 1}^s a_j k^j$ is (strictly) negative, the summation itself likewise cannot be negative
Thus:

$0 \le n$
The equality is satisfied when $a_j = 0$ for all $j$.

We then have:














\(\ds n\)

\(=\)







\(\ds \sum_{j \mathop = 1}^s a_j k^j\)




















\(\ds \)

\(\le\)







\(\ds \paren {k - 1} \sum_{j \mathop = 1}^s k^j\)





as $a_j \le k - 1$ for all $j$














\(\ds \)

\(=\)







\(\ds \paren {k - 1} \dfrac {k^{s + 1} - 1} {k - 1}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds k^{s + 1} - 1\)




















\(\ds \)

\(<\)







\(\ds k^{s + 1}\)









$\blacksquare$


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-2}$ The Basis Representation Theorem: Exercise $6$




