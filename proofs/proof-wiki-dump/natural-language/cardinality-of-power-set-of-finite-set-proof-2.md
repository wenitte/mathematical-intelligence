# 

Source: https://proofwiki.org/wiki/Cardinality_of_Power_Set_of_Finite_Set/Proof_2

Theorem
Let $S$ be a set such that:

$\card S = n$
where $\card S$ denotes the cardinality of $S$,

Then:

$\card {\powerset S} = 2^n$
where $\powerset S$ denotes the power set of $S$.


Proof
Enumerating the subsets of $S$ is equivalent to counting all of the ways of selecting $k$ out of the $n$ elements of $S$ with $k = 0, 1, \ldots, n$.
So, from Cardinality of Set of Subsets, the number we are looking for is:

$\ds \card {\powerset S} = \sum_{k \mathop = 0}^n \binom n k$
But from the binomial theorem:

$\ds \paren {x + y}^n = \sum_{k \mathop = 0}^n \binom n k x^{n - k} y^k$
It follows that:

$2^n = \ds \paren {1 + 1}^n = \sum_{k \mathop = 0}^n \binom n k \paren 1^{n - k} \paren 1^k = \sum_{k \mathop = 0}^n \binom n k = \card {\powerset S}$
$\blacksquare$


Sources
1951: Nathan Jacobson: Lectures in Abstract Algebra: Volume $\text { I }$: Basic Concepts ... (previous) ... (next): Introduction $\S 1$: Operations on Sets
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.3$. Partitions: Example $35$




