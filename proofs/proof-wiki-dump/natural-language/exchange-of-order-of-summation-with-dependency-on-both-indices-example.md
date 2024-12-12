# 

Source: https://proofwiki.org/wiki/Exchange_of_Order_of_Summation_with_Dependency_on_Both_Indices/Example

Theorem
Let $n \in \Z$ be an integer.
Let $R: \Z \to \set {\T, \F}$ be the propositional function on the set of integers defining:

$\forall i \in \Z: \map R 1 := \paren {n = k i \text { for some } k \in \Z}$

Let $S: \Z \times \Z \to \set {\T, \F}$ be a propositional function on the Cartesian product of the set of integers with itself defining:

$\forall i, j \in \Z: \map S {i, j} := \paren {1 \le j < i}$

Consider the summation:

$\ds \sum_{\map R i} \sum_{\map S {i, j} } a_{i j}$

Then:

$\ds \sum_{\map R i} \sum_{\map S {i, j} } a_{i j} = \sum_{\map {S'} j} \sum_{\map {R'} {i, j} } a_{i j}$
where:

$\map {S'} j$ denotes the propositional function:
$\forall j \in \Z: \map {S'} j := \paren {1 < j \le n}$
$\map {R'} {i, j}$ denotes the propositional function:
$\forall i, j \in \Z: \map {R'} {i, j} := \paren {n = k i \text { for some } k \in \Z \text { and } i > j}$


Proof
From Exchange of Order of Summation with Dependency on Both Indices:

$\map {S'} j$ denotes the propositional function:
there exists an $i$ such that both $\map R i$ and $\map S {i, j}$ hold
$\map {R'} {i, j}$ denotes the propositional function:
both $\map R i$ and $\map S {i, j}$ hold.

The definition of $\map {R'} {i, j}$ follows immediately:

$\map R i := \paren {n = k i \text { for some } k \in \Z}$
and:

$\map S {i, j} := \paren {1 \le j < i}$

Then:














\(\ds \map {S'} j\)

\(=\)







\(\ds \paren {\exists i \in \Z: n = k i}\)




















\(\ds \)

\(\)





\(\, \ds \land \, \)

\(\ds \paren {1 \le j < i}\)









By Absolute Value of Integer is not less than Divisors, it follows from $\map R i$ that $i \le n$.
That is, for $\map {S'} j$ to hold, $i \le n$.
But for all $j \in \Z$ such that $1 \le j < n$ it follows that $i = n$ fulfils the condition that $n = k i$.
Hence:

$\map {S'} j := \paren {1 < j \le n}$
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: Exercise $18$




