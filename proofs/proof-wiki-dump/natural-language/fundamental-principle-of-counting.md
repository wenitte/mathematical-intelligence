# 

Source: https://proofwiki.org/wiki/Fundamental_Principle_of_Counting

  This article was Featured Proof between 9 November 2008 and 16 November 2008.




Theorem
Let $A$ be a finite set.
Let $\sequence {B_n}$ be a sequence of distinct finite subsets of $A$ which form a partition of $A$.
Let $p_k = \size {B_k}$ for each $k \in \closedint 1 n$.

Then:

$\ds \size A = \sum_{k \mathop = 1}^n p_k$

That is, the sum of the numbers of elements in the subsets of a partition of a set is equal to the total number of elements in the set.


Proof
Let $r_0 = 0$, and let:

$\ds \forall k \in \closedint 1 n: r_k = \sum_{j \mathop = 1}^k {p_j}$
Then:

$r_{k - 1} + p_k = r_k$
so:

$r_{k - 1} < r_k$.
Thus by Isomorphism to Closed Interval, $\closedint {r_{k - 1} } {r_k}$ has $r_k - r_{k - 1} = p_k$ elements.
As a consequence, there exists a bijection $\sigma_k: B_k \to \closedint {r_{k - 1} } {r_k}$ for each $k \in \closedint 1 n$.
Let $\sigma: A \to \N$ be the mapping that satisfies:

$\forall x \in B_k: \forall k \in \N: \map \sigma x = \map {\sigma_k} x$

By Strictly Increasing Sequence on Ordered Set, $\sequence {r_k}_{0 \mathop \le k \mathop \le n}$ is a strictly increasing sequence of natural numbers.
Thus by Strictly Increasing Sequence induces Partition, $\sigma: A \to \closedint 1 {r_n}$ is a bijection.

By Isomorphism to Closed Interval, $\closedint 1 {r_n}$ has $r_n$ elements.
Hence the result.
$\blacksquare$


Also known as
The Fundamental Principle of Counting is also known as:

the Addition Principle
the Sum Rule for Counting.


Also see
Product Rule for Counting


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 2.3$. Partitions
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.4$
2007: Alan Tucker: Applied Combinatorics (5th ed.)
2008: David Joyner: Adventures in Group Theory (2nd ed.) ... (previous) ... (next): Chapter $2$: 'And you do addition?': $\S 2.4$: Counting and mathematical induction: Theorem $2.4.1$




