# 

Source: https://proofwiki.org/wiki/Recursion_Property_of_Elementary_Symmetric_Function/Proof_2

Theorem
Let $\set {z_1, z_2, \ldots, z_{n + 1} }$ be a set of $n + 1$ numbers, duplicate values permitted.

Then for $1 \le m \le n$:

$\map {e_m} {\set {z_1, \ldots, z_n, z_{n + 1} } } = z_{n + 1} \map {e_{m - 1} } {\set {z_1, \ldots, z_n} } + \map {e_m} {\set {z_1, \ldots, z_n} }$


Proof
Recall the definition of elementary symmetric function:














\(\ds \map {e_m} {\set {z_1, z_2, \ldots, z_n} }\)

\(=\)







\(\ds \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \mathop \cdots \mathop < j_m \mathop \le n} \paren {\prod_{i \mathop = 1}^m z_{j_i} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{1 \mathop \le j_1 \mathop < j_2 \mathop < \mathop \cdots \mathop < j_m \mathop \le n} z_{j_1} z_{j_2} \cdots z_{j_m}\)










Consider the summands of $\map {e_m} {\set {z_1, z_2, \ldots, z_n, z_{n + 1} } }$:

$z_{j_1} z_{j_2} \cdots z_{j_m}$
where $1 \le j_1 < j_2 < \cdots j_m \le n + 1$.

They consist of $2$ types:

Type $(1)$: such that $j_m < n + 1$
Type $(2)$: such that $j_m = n + 1$.

We have that:

the summands of Type $(1)$ are exactly the summands of $\map {e_m} {\set {z_1, z_2, \ldots, z_n} }$
the summands of Type $(2)$ consist of the summands of $\map {e_{m - 1} } {\set {z_1, z_2, \ldots, z_n} }$ multiplied by $z_{n + 1}$.

Hence the result.
$\blacksquare$





