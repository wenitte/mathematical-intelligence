# 

Source: https://proofwiki.org/wiki/Form_of_Geometric_Sequence_of_Integers_in_Lowest_Terms

Theorem
Let $G_n = \sequence {a_j}_{0 \mathop \le j \mathop \le n}$ be a geometric sequence of length $n$ consisting of positive integers only.
Let $r$ be the common ratio of $G_n$.
Let the elements of $G_n$ be the smallest positive integers such that $G_n$ has common ratio $r$.

Then the $j$th term of $G_n$ is given by:

$a_j = p^{n - j} q^j$
where $r = \dfrac q p$.

That is:

$G_n = \tuple {p^n, p^{n - 1} q, p^{n - 2} q^2, \ldots, p q^{n - 1}, q^n}$


Proof
From Form of Geometric Sequence of Integers the $j$th term of $G_n$ is given by:

$a_j = k p^{n - j} q^j$
where the common ratio is $\dfrac q p$.
Thus:

$a_0 = k p^n$
$a_n = k q^n$
From Geometric Sequence in Lowest Terms has Coprime Extremes it follows that $k = 1$.
Hence the result.
$\blacksquare$





