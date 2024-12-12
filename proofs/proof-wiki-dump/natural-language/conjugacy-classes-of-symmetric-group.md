# 

Source: https://proofwiki.org/wiki/Conjugacy_Classes_of_Symmetric_Group

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $S_n$ denote the symmetric group on $n$ letters.

The conjugacy classes of $S_n$ are determined entirely by the cycle type.

That is, the conjugacy class $\conjclass x$ of an element $x$ of $S_n$ consists of all the elements of $S_n$ whose cycle type is the same as the cycle type of $x$.


Proof
Let $\sigma \in S_n$ have cycle type $\tuple {k_1, k_2, \ldots, k_n}$.
Let $\rho$ be conjugate to $\sigma$
From Conjugate Permutations have Same Cycle Type, $\rho$ has the same cycle type $\tuple {k_1, k_2, \ldots, k_n}$ as $\sigma$.
That is, all the elements of the same conjugacy class have the same cycle type.
$\Box$

Let $\sigma, \rho \in S_n$ have the same cycle type $\tuple {k_1, k_2, \ldots, k_n}$.
It is to be demonstrated that $\sigma$ and $\rho$ are in the same conjugacy class.

From Existence and Uniqueness of Cycle Decomposition, $\sigma$ and $\rho$ can each be expressed uniquely as the product of disjoint cycles:














\(\ds \sigma\)

\(=\)







\(\ds \alpha_1 \alpha_2 \dotsm \alpha_l\)




















\(\ds \rho\)

\(=\)







\(\ds \beta_1 \beta_2 \dotsm \beta_l\)









where $\alpha_i$ and $\beta_i$ are $k_i$-cycles.
For each $i$, let the $k_i$-cycles $\alpha_i$ and $\beta_i$ be expressed as:














\(\ds \alpha_i\)

\(=\)







\(\ds \alpha_{i1} \alpha_{i2} \dotsm \alpha_{i k_l}\)




















\(\ds \beta_i\)

\(=\)







\(\ds \beta_{i1} \beta_{i2} \dotsm \beta_{i k_l}\)









For all $i, j$ such that $1 \le i \le l$, $1 \le j \le k_i$, let:

$\tau := \map \tau {\alpha_{i j} } = \beta_{i j}$
Such a $\tau$ is bound to exist in $S_n$, as the underlying set of $S_n$ is the set of all permutations of $\set {1, 2, \ldots, n}$.
Thus from Product of Conjugates equals Conjugate of Products:

$\tau \alpha_i \tau^{-1} = \beta_i$

Hence:














\(\ds \tau \sigma \tau^{-1}\)

\(=\)







\(\ds \tau \alpha_1 \alpha_2 \dotsm \alpha_l \tau^{-1}\)




















\(\ds \)

\(=\)







\(\ds \tau \alpha_1 \tau^{-1} \tau \alpha_2 \tau^{-1} \dotsm \tau \alpha_l \tau^{-1}\)




















\(\ds \)

\(=\)







\(\ds \beta_1 \beta_2 \dotsm \beta_l\)




















\(\ds \)

\(=\)







\(\ds \rho\)









demonstrating that $\sigma$ and $\rho$ are conjugate.

That is, $\sigma$ and $\rho$ are in the same conjugacy class.
Hence the result.
$\blacksquare$





