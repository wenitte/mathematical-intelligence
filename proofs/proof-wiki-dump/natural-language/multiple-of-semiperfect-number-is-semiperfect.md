# 

Source: https://proofwiki.org/wiki/Multiple_of_Semiperfect_Number_is_Semiperfect

Theorem
Let $n \in \Z_{>0}$ be a semiperfect number.
Let $k \in \Z_{>0}$ be a (strictly) positive integer.

Then $k n$ is also a semiperfect number.


Proof
Let $P$ be a subset of the divisors of $n$ such that the sum of the elements of $P$ equals $n$.
Let $\sigma = \ds \sum_{p \mathop \in P} p$ be the sum of the elements of $P$.
Let:

$Q = \set {k p: p \in P}$
be the set of elements of $P$ multiplied by $k$.
We have by definition that:

$\forall p \in P: p \divides P$
where $p \divides P$ denotes divisibility.
Then we have:

$\forall p \in P: k p \divides k P$
Thus $Q$ constitutes a subset of the divisors of $k n$.
But:














\(\ds n k\)

\(=\)







\(\ds k \sigma\)




















\(\ds \)

\(=\)







\(\ds k \sum_{p \mathop \in P} p\)




















\(\ds \)

\(=\)







\(\ds \sum_{p \mathop \in P} k p\)




















\(\ds \)

\(=\)







\(\ds \sum_{q \mathop \in Q} q\)









demonstrating that $Q$ constitutes a subset of the divisors of $k n$ equal to $k n$.
Hence the result, by definition of semiperfect number.
$\blacksquare$





