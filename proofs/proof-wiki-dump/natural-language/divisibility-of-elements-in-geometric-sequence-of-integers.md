# 

Source: https://proofwiki.org/wiki/Divisibility_of_Elements_in_Geometric_Sequence_of_Integers

Theorem
Let $Q_n = \sequence {a_j}_{0 \mathop \le j \mathop \le n}$ be a geometric sequence of integers.
Let $j \ne k$.
Then:

$\paren {\exists j \in \set {0, 1, \ldots, n - 1}: a_j \divides a_{j + 1} } \iff \paren {\forall j, k \in \set {0, 1, \ldots, n}, j < k: a_j \divides a_k}$
where $\divides$ denotes integer divisibility.

That is:

One term of a geometric sequence of integers is the divisor of the next term
if and only if

All terms are divisors of all later terms.


Proof
Let $a_j \divides a_{j + 1}$ for some $j \in \set {0, 1, \ldots, n - 1}$.
Then by definition of integer divisibility:

$\exists r \in \Z: r a_j = a_{j + 1}$
Thus the common ratio of $Q_n$ is $r$.
So by definition of geometric sequence:

$\forall j, k \in \set {0, 1, \ldots, n}, j < k: r^{k - j} a_j = a_k$
and so $a_j \divides a_k$.

The converse is trivial.
$\blacksquare$





