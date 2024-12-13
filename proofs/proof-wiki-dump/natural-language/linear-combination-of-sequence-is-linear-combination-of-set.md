# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Sequence_is_Linear_Combination_of_Set



Theorem
Let $G$ be an $R$-module.
Let $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ be a sequence of elements of $G$.
Let $b$ be an element of $G$.

Then:

$b$ is a linear combination of the sequence $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$
if and only if:

$b$ is a linear combination of the set $\set {a_k: 1 \mathop \le k \mathop \le n}$


Proof
Necessary Condition
By definition of linear combination of subset:

Every linear combination of $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ is a linear combination of $\set {a_k: 1 \mathop \le k \mathop \le n}$.
$\Box$


Sufficient Condition
Let $b$ be a linear combination of $\set {a_k: 1 \mathop \le k \mathop \le n} = \set {a_1, a_2, \ldots, a_n}$.
Then there exists:

a sequence $\sequence {c_j}_{1 \mathop \le j \mathop \le m}$ of elements of $\set {a_1, a_2, \ldots, a_n}$
and:

a sequence $\sequence {\mu_j}_{1 \mathop \le j \mathop \le m}$ of scalars such that:
$\ds b = \sum_{j \mathop = 1}^m \mu_j c_j$

For each $k \in \closedint 1 n$, let $\lambda_k$ be defined as follows.
If:

$a_k \in \set {c_1, c_2, \ldots, c_m}$
and:

$a_i \ne a_j$ for all indices $i$ such that $1 \le i < k$
let $\lambda_k$ be the sum of all scalars $\mu_j$ such that $c_j = a_k$.

If:

$a_k \notin \set {c_1, c_2, \ldots, c_m}$
or:

$a_i = a_j$ for some index $i$ such that $1 \le i < k$
let $\lambda_k = 0$.

It follows that:

$\ds b = \sum_{j \mathop = 1}^m \mu_j c_j = \sum_{k \mathop = 1}^n \lambda_k a_k$

Let $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ and $\sequence {b_j}_{1 \mathop \le j \mathop \le m}$ be sequences of elements of $G$ such that $\set {a_1, a_2, \ldots, a_n}$ and $\set {b_1, b_2, \ldots, b_m}$ are identical.

Then as a consequence of the above:

an element is a linear combination of $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$
if and only if:

it is a linear combination of $\set {a_k: 1 \mathop \le k \mathop \le n}$
$\blacksquare$


This article, or a section of it, needs explaining.In particular: The above lacks coherence. Source is to be revisited and reinterpreted.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 27$. Subspaces and Bases




