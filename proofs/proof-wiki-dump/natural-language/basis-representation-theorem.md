# 

Source: https://proofwiki.org/wiki/Basis_Representation_Theorem

  This article was Featured Proof between 10 January 2010 and 18 February 2010.




Theorem
Let $b \in \Z: b > 1$.

For every $n \in \Z_{> 0}$, there exists one and only one sequence $\sequence {r_j}_{0 \mathop \le j \mathop \le t}$ such that:

$(1): \quad \ds n = \sum_{k \mathop = 0}^t r_k b^k$
$(2): \quad \ds \forall k \in \closedint 0 t: r_k \in \N_b$
$(3): \quad r_t \ne 0$

This unique sequence is called the representation of $n$ to the base $b$, or, informally, we can say $n$ is (written) in base $b$.


Proof
Let $\map {s_b} n$ be the number of ways of representing $n$ to the base $b$.
We need to show that $\map {s_b} n = 1$ always.

Now, it is possible that some of the $r_k = 0$ in a particular representation.
So we may exclude these terms, and it won't affect the representation.

So, suppose:

$n = r_k b^k + r_{k - 1} b^{k - 1} + \cdots + r_t b^t$
where $r_k \ne 0, r_t \ne 0$.

Then:














\(\ds n - 1\)

\(=\)







\(\ds r_k b^k + r_{k - 1} b^{k - 1} + \cdots + r_t b^t - 1\)




















\(\ds \)

\(=\)







\(\ds r_k b^k + r_{k - 1} b^{k - 1} + \cdots + \paren {r_t - 1} b^t + b^t - 1\)




















\(\ds \)

\(=\)







\(\ds r_k b^k + r_{k - 1} b^{k - 1} + \cdots + \paren {r_t - 1} b^t + \sum_{j \mathop = 0}^{t - 1} {\paren {b - 1} b^j}\)





Sum of Geometric Sequence




Note that we have already specified that $b > 1$.
So for each representation of $n$ to the base $b$, we can find a representation of $n - 1$.
If $n$ has another representation to the base $b$, then the same procedure will generate a new representation of $n - 1$.
Thus:

$(1): \quad \map {s_b} n \le \map {s_b} {n - 1}$

Note that this holds even if $n$ has no representation at all, because if this is the case, then $\map {s_b} n = 0 \le \map {s_b} {n - 1}$.

So for $m, n \in \N$ such that $m \ge n$, the inequality $(1)$ implies the following:

$\forall m, n: \map {s_b} m \le \map {s_b} {m - 1} \le \ldots \le \map {s_b} {n + 1} \le \map {s_b} n$

From N less than M to the N‎ and the fact that $b^n$ has at least one representation (itself), we see:

$1 \le \map {s_b} {b^n} \le \map {s_b} n \le \map {s_b} 1 = 1$

The entries at either end of this inequality are $1$, so all the intermediate entries must also be $1$.
So $\map {s_b} n = 1$ and the theorem has been proved.
$\blacksquare$


Motivation
So, once we have chosen a base $b > 1$, we can express any positive integer $n$ uniquely as:

$\ds n = \sum_{k \mathop = 0}^t {r_k b^k}: r_0, r_1, \ldots, r_t \in \set {0, 1, \ldots, b - 1}$

Then we can write $\ds n = \sum_{j \mathop = 0}^t {r_k b^k}$ as:

$\sqbrk {r_t r_{t - 1} \ldots r_2 r_1 r_0}_b$


Also see
Definition:Number Base


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $24$. The Division Algorithm: Theorem $24.2$
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {1-2}$ The Basis Representation Theorem: Theorem $\text {1-3}$
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Properties of the Natural Numbers: $\S 21 \alpha$




