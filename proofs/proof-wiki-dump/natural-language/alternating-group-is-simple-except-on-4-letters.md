# 

Source: https://proofwiki.org/wiki/Alternating_Group_is_Simple_except_on_4_Letters



Theorem
Let $n$ be an integer such that $n \ne 4$.

Then the $n$th alternating group $A_n$ is simple.


Proof
Recall that a group is simple if its normal subgroups are itself and the trivial subgroup.
Let $n < 4$.
$A_2$ is the trivial group and hence simple.
$A_3$ is the cyclic group of order $3$, hence a prime group.
By Prime Group is Simple, $A_3$ is simple.
$\Box$

We note that $A_4$ is a special case.
From Normality of Subgroups of Alternating Group on 4 Letters, $A_4$ has a proper normal subgroup $K_4$, and so is not simple.
$\Box$

It remains to investigate the case where $n \ge 5$.
Let $N$ be a non-trivial normal subgroup of $A_n$.
It is to be shown that $N = A_n$.


Lemma 1
Let $\alpha \in A_n$ be a permutation on $\N_n$ such that $\map \alpha 1 = 2$.
Let $\beta$ be the $3$-cycle $\tuple {3, 4, 5}$.
Then the permutation $\beta^{-1} \alpha^{-1} \beta \alpha$ fixes $1$.
$\Box$


Lemma 2
Let $\alpha \in A_n$ be the permutation on $\N_n$ in the form:

$\alpha = \tuple {1, 2} \tuple {3, 4}$
Let $\beta$ be the $3$-cycle $\tuple {3, 4, 5}$.
Then:

$\beta^{-1} \alpha^{-1} \beta \alpha = \beta$
$\Box$


Lemma 3
Let $\rho \in S_n$ be an arbitrary $3$-cycle.
Let $\N_n$ denote the initial segment of the natural numbers $\set {0, 1, \ldots, n - 1}$.
Let $i, j, k \in \N_n$ be such that $\rho = \tuple {i, j, k}$.
Then there exists an even permutation $\sigma \in A_n$ such that $\map \sigma 1 = i$, $\map \sigma 2 = j$ and $\map \sigma 3 = k$.
$\Box$


Step $1$: $N$ contains a $3$-cycle
The first step is to show that $N$ contains a $3$-cycle.
Let $e$ denote the identity element of $A_n$.
Let $\alpha \ne e$ be an element of $N$ which fixes as many elements of $\N_n$ as possible.
From Existence and Uniqueness of Cycle Decomposition, we can express $\alpha$ in the form:

$\alpha = \alpha_1 \alpha_2 \dotsm \alpha_s$
where each of the $\alpha_i$ are disjoint cycles.
Let it be assumed that $\alpha_1, \ldots, \alpha_s$ are arranged in order of increasing length.
We can renumber $\N_n$ if we need to, so as to fix it so that:

$\alpha_1 = \tuple {1, 2, \ldots, k}$
and when $s > 1$ that:

$\alpha_2 = \tuple {k + 1, k + 2, \ldots, l}$

We investigate several cases.


Case $1$
$\alpha$ moves each of $1, 2, 3, 4, 5$, and maybe others.
This happens in one of the following situations:

when $s > 2$
when $s = 2$ and $\alpha = \tuple {1, 2, \ldots, k} \tuple {k + 1, k + 2, \ldots, l}$ where $l > 4$
when $s = 1$ and $\alpha = \alpha_1 = \tuple {1, 2, \ldots, k}$ where $k > 4$.
Let $\beta = \tuple {3, 4, 5}$.
We started with the assumption that $N$ is normal.
Hence we have that:

$\beta^{-1} \alpha^{-1} \beta \in N$
Thus:

$\beta^{-1} \alpha^{-1} \beta \alpha \in N$
However, from lemma 1, $\beta^{-1} \alpha^{-1} \beta \alpha$ leaves $1$ fixed.
This is in addition to all the other elements fixed by $\alpha$.
But Case $1$ was specifically stated such that $\alpha$ moves each of $1, 2, 3, 4, 5$.
So Case $1$ cannot happen.


Case $2$
$\alpha$ moves each of $1, 2, 3, 4$ and no others.
This happens only when $\alpha = \tuple {1, 2} \tuple {3, 4}$, because $\tuple {1, 2, 3, 4}$ is an odd permutation.
Again, let $\beta = \tuple {3, 4, 5}$.
We started with the assumption that $N$ is normal.
Hence we have that:

$\beta^{-1} \alpha^{-1} \beta \in N$
Thus:

$\beta^{-1} \alpha^{-1} \beta \alpha \in N$
However, from lemma 2:

$\beta^{-1} \alpha^{-1} \beta \alpha = \beta$
Thus $\beta \in N$ and $\beta$ moves fewer elements of $\N_n$ than $\alpha$.
But $\alpha$ was defined as fixing as many elements of $\N_n$ as possible.
So Case $2$ cannot happen.


Case $3$
$\alpha$ moves each of $1, 2, 3$ and no others.
This happens only when $\alpha = \tuple {1, 2, 3}$.
There can be no other cases now that Case $1$ and Case $2$ have been eliminated.
Thus we have shown that $N$ contains a $3$-cycle.
Thus the first step has been completed.
$\Box$


Step $2$: $N$ contains every $3$-cycle
Let $\rho \in S_n$ be an arbitrary $3$-cycle.
Let $i, j, k \in$ $\mathbb{N}_n$ be such that $\rho = (i, j, k)$.
By lemma 3, there exists an even permutation $\sigma \in A_n$ with the following form when presented in two-row notation:

$\sigma = \begin {pmatrix} 1 & 2 & 3 & \cdots \\ i & j & k & \cdots \end {pmatrix}$
Then $\sigma \tuple {1, 2, 3} \sigma^{-1} = \tuple {i, j, k} = \rho$ is an element of the normal subgroup $N$.
We have that $\rho$ is arbitrary.
So it follows that every $3$-cycle is an element of $N$.
It follows from Even Permutation is Product of 3-Cycles that every element of $A_n$ is in $N$.
That is:

$N = A_n$
and the result follows.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Symmetric Groups: $\S 83$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): alternating group
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $9$: Permutations: Definition $9.19$: Remark (in passing)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): alternating group
2002: John B. Fraleigh: A First Course in Abstract Algebra (7th ed.): Chapter $13$: $32 \, \text{a}$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): alternating group
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): alternating group




