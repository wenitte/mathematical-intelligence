# 

Source: https://proofwiki.org/wiki/Least_Upper_Bound_Property/Proof_2

Theorem
Let $S \subset \R$ be a non-empty subset of the set of real numbers such that $S$ is bounded above.
Then $S$ admits a supremum in $\R$.
This is known as the least upper bound property of the real numbers.


Proof
Let $S$ be bounded above.
Let $L$ be the set of real numbers defined as:

$\alpha \in L \iff \exists x \in S: \alpha < x$
Let $R := \relcomp \R L$, where $\complement_\R$ denotes complement in $\R$.
By construction of $L$, every element of $L$ is less than some element of $S$.
Hence no element of $L$ is an upper bound of $S$.
By construction of $R$, for every element $x$ of $R$, there exists no element of $S$ which is greater than $x$.
Hence every element of $R$ is an upper bound of $S$.
So, to prove the existence of $\sup S$, it is sufficient to demonstrate that $R$ contains a smallest number.

We verify that $L$ and $R$ fulfil the conditions for Dedekind's Theorem to hold.
We confirm that $\tuple {L, R}$ is a Dedekind cut of $\R$:

$(1): \quad \set {L, R}$ is a partition of $\R$
$(2): \quad L$ does not have a greatest element
$(3): \quad \forall x \in L: \forall y \in R: x < y$
By Union with Relative Complement:

$L \cup R = \R$
By Set with Relative Complement forms Partition, $\tuple {L, R}$ forms a partition of $\R$.
So $(1)$ holds immediately.

Let $\alpha \in L$.
Then there exists $x \in S$ such that $\alpha < x$.
Let $\alpha'$ be such that $\alpha < \alpha' < x$.
Then $\alpha' \in L$
So whatever $\alpha \in L$ is, it cannot be the greatest element of $L$.
Thus $(2)$ holds.

Let $\alpha \in L$.
Let $\beta \in R$.
Then there exists $x \in S$ such that $\alpha < x$.
By construction of $R$, $x \le \beta$.
Thus $\alpha < \beta$ for all $\alpha \in L, \beta \in R$.
Thus $(3)$ holds.

By the corollary to Dedekind's Theorem, either $L$ contains a greatest element or $R$ contains a smallest element.
We have shown that $L$ does not contain a greatest element.
Hence $R$ contains a smallest element.
Hence if $S$ is bounded above, it has a supremum.

Thus $\R$ is Dedekind complete by definition.

Now let $S$ be bounded below.
By Dedekind Completeness is Self-Dual, it follows that $S$ admits an infimum.
$\blacksquare$


Sources
1964: Walter Rudin: Principles of Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $1$: The Real and Complex Number Systems: Real Numbers: $1.36$. Theorem




