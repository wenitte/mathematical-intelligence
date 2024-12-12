# 

Source: https://proofwiki.org/wiki/Alternating_Group_is_Simple_except_on_4_Letters/Lemma_3


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $n$ be an integer such that $n \ge 5$.
Let $A_n$ denote the alternating group on $n$ letters.

Let $\rho \in S_n$ be an arbitrary $3$-cycle.
Let $\N_n$ denote the initial segment of the natural numbers $\set {0, 1, \ldots, n - 1}$.
Let $i, j, k \in \N_n$ be such that $\rho = \tuple {i, j, k}$.
Then there exists an even permutation $\sigma \in A_n$ such that $\map \sigma 1 = i$, $\map \sigma 2 = j$ and $\map \sigma 3 = k$.


Proof
We will proceed by cases.
We have that $\card {\set {1, 2, 3} \cap \set {i, j, k} }$ is either $0$, $1$, $2$ or $3$.


Case $1$
$\card {\set {1, 2, 3} \cap \set {i, j, k} } = 0$ (this case is only possible when $n \ge 6$).
The permutation $\sigma = \tuple {1, i, 2, j} \tuple {3, k}$ is even (by Parity of K-Cycle and Sign of Composition of Permutations) and has the desired property.


Case $2$
$\card {\set {1, 2, 3} \cap \set {i, j, k} } = 1$.
Without loss of generality, suppose that $\set {1, 2, 3} \cap \set {i, j, k} = \set 1$.
We have two further sub-cases: $i = 1$ or $i \ne 1$.
If $i = 1$, then, the permutation $\sigma = \tuple {2, j} \tuple {3, k}$ is even (by Parity of K-Cycle and Sign of Composition of Permutations) and has the desired property.
Now suppose $i \ne 1$.
Without loss of generality, assume that $j = 1$.
Then the permutation $\sigma = \tuple {1, i, 3, k, 2}$ is even (by Parity of K-Cycle) and has the desired property.


Case $3$
$\card {\set {1, 2, 3} \cap \set {i, j, k} } = 2$.
Without loss of generality, assume that $\set {1, 2, 3} \cap \set {i, j, k} = \set {1, 2}$.
We have three further sub-cases::

$i = 1 \land j = 2$
$\paren {i = 1 \land j \ne 2} \lor \paren {i \ne 1 \land j = 2}$
or:

$i \ne 1 \land j \ne 2$.
(In other words, if $\sigma$ exists, it either fixes $2$, $1$, or $0$ letters of those in $\set {1, 2, 3}$.)
Suppose $i = 1 \land j = 2$.
Since $n \ge 5$, there exists an element $l \in \N_n \setminus \set {1, 2, 3, k}$.
Then, the permutation $\sigma = \tuple {3, k, l}$ is even (by Parity of K-Cycle) and has the desired property.
Now suppose $\paren {i = 1 \land j \ne 2} \lor \paren {i \ne 1 \land j = 2}$.
Without loss of generality, assume $\paren {i = 1 \land j \ne 2}$.
This implies $k = 2$.
Then, the permutation $\sigma = \tuple {2, j, 3}$ is even (by Parity of K-Cycle) and has the desired property.
Now suppose $i \ne 1 \land j \ne 2$.
If $i = 2$ and $j = 1$, then the permutation $\sigma = \tuple {1, 2} \tuple {3, k}$ is even (by Parity of K-Cycle and Sign of Composition of Permutations) and has the desired property.
Otherwise, without loss of generality, assume $i = 2$ and $k = 1$.
Since $n \ge 5$, there exists an element $l \in \N_n \setminus \set {1, 2, 3, k}$.
Then, the permutation $\sigma = \tuple {1, 2, j, l, 3}$ is even and has the desired property.


Case $4$
$\card {\set {1, 2, 3} \cap \set {i, j, k} } = 3$.
That is:

$\set {i, j, k} = \set {1, 2, 3}$
We have that a (not necessarily even) permutation $\sigma$ has the desired property if and only if it can be written as a disjoint product $\sigma = \beta\alpha$, where $\alpha$ is the permutation:

$ \begin{pmatrix} 1 & 2 & 3 & 4 & \cdots & n \\ i & j & k & 4 & \cdots & n \\ \end{pmatrix}$
If $\alpha$ fixes all letters, $\alpha$ is the identity. 
Take $\beta$ to be the identity.
Then $\sigma$ will be the identity permutation, so by Identity Mapping on Symmetric Group is Even Permutation, it will be even.
If $\alpha$ fixes one letter, $\alpha$ will be a transposition. 
Since $n \ge 5$, we can take $\beta$ to be another transposition disjoint from $\alpha$.
Then $\sigma$ will be the product of two disjoint transpositions.
Therefore, by Parity of K-Cycle and Sign of Composition of Permutations, $\sigma$ will be even.
If $\alpha$ fixes no letters, $\alpha$ will be a $3$-cycle. 
Take $\beta$ to be the identity permutation. 
Then $\sigma = \alpha$.
By Parity of K-Cycle, $\sigma$ will be even.

In all cases, we found an even permutation $\sigma$ with the desired property.
Also, $\rho$ was arbitrary.
Hence a $\sigma$ as described above always exists for any $3$-cycle.
$\blacksquare$





