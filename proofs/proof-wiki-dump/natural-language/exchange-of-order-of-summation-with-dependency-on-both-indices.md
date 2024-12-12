# 

Source: https://proofwiki.org/wiki/Exchange_of_Order_of_Summation_with_Dependency_on_Both_Indices



Theorem
Let $R: \Z \to \set {\T, \F}$ be a propositional function on the set of integers.
Let $S: \Z \times \Z \to \set {\T, \F}$ be a propositional function on the Cartesian product of the set of integers with itself.
Let $\ds \sum_{\map R i} x_i$ denote a summation over $R$.

Let the fiber of truth of both $R$ and $S$ be finite.

Then:

$\ds \sum_{\map R i} \sum_{\map S {i, j} } a_{i j} = \sum_{\map {S'} j} \sum_{\map {R'} {i, j} } a_{i j}$
where:

$\map {S'} j$ denotes the propositional function:
there exists an $i$ such that both $\map R i$ and $\map S {i, j}$ hold
$\map {R'} {i, j}$ denotes the propositional function:
both $\map R i$ and $\map S {i, j}$ hold.


Infinite Series
Let the fiber of truth of both $R$ and $S$ be infinite.

Let:

$\ds \sum_{\map R i} \sum_{\map S {i, j} } \size {a_{i j} }$
exist.

Then:

$\ds \sum_{\map R i} \sum_{\map S {i, j} } a_{i j} = \sum_{\map {S'} j } \sum_{\map {R'} {i, j} } a_{i j}$
where:

$\map {S'} j$ denotes the propositional function:
there exists an $i$ such that both $\map R i$ and $\map S {i, j}$ hold
$\map {R'} {i, j}$ denotes the propositional function:
both $\map R i$ and $\map S {i, j}$ hold.


Proof













\(\ds \sum_{\map R i} \sum_{\map S {i, j} } a_{i j}\)

\(=\)







\(\ds \sum_{i, j \mathop \in \Z} a_{i j} \sqbrk {\map R i} \sqbrk {\map S {i, j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, j \mathop \in \Z} a_{i j} \sqbrk {\map R i \land \map S {i, j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, j \mathop \in \Z} a_{i j} \sqbrk {\map {S'} j} \sqbrk {\map {R'} {i, j} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\map {S'} j} \sum_{\map {R'} {i, j} } a_{i j}\)









$\blacksquare$


Example
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


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.3$: Sums and Products: $(9)$




