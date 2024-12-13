# 

Source: https://proofwiki.org/wiki/Real_Numbers_are_Uncountably_Infinite/Set-Theoretical_Approach:_Proof_1

Theorem
The set of real numbers $\R$ is uncountably infinite.


Proof
By Surjection from Natural Numbers iff Countable, a set $A$ is countable if and only if there exists a surjection $f: \N \to A$.
Suppose there exists a surjection $f: \N \to \R$.
Then $\forall x \in \R: \exists n \in \N: \map f n = x$ as $f$ is surjective.
Let $d_{n, 0}$ be the integer before the decimal point of $\map f n$.
Similarly, for all $m > 0$, let $d_{n, m}$ be the $m$th digit in the decimal expansion of $\map f n$.
Let $e_0$ be an integer different from $d_{0, 0}$.
Similarly, for all $m > 0$, let $e_m$ be an integer different from $d_{m, m}$.
Specifically, we can define $e_0$ to be $d_{0, 0} + 1$, and:

$e_m = \begin {cases} 1 & : d_{m, m} \ne 1 \\ 2 & : d_{m, m} = 1 \end {cases}$

Now consider the real number $\ds x = e_0 + \sum_{n \mathop = 1}^\infty \frac {e_n} {10^n}$.
Its decimal expansion is:

$x = \sqbrk {e_0 . e_1 e_2 e_3 \ldots}_{10}$
Since $e_0 \ne d_{0, 0}$, $x \ne \map f 0$.
Similarly, for each $n \in \N$ such that $n \ge 1$, we have that $e_n \ne d_{n, n}$ and so $x \ne \map f n$.
Thus $x$ is a real number which is not in the set $\set {\map f n: n \in \N}$.
Hence $f$ can not be surjective.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Work out where this goes in the sequence flowIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1968: A.N. Kolmogorov and S.V. Fomin‎: Introductory Real Analysis: $\S 2.4$: Theorem $5$




