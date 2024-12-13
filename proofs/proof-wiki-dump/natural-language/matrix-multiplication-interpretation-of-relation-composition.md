# 

Source: https://proofwiki.org/wiki/Matrix_Multiplication_Interpretation_of_Relation_Composition



Theorem
Let $A$, $B$ and $C$ be finite non-empty sets that are initial segments of $\N_{\ne 0}$.
Let $\RR \subseteq B \times A$ and $\SS \subseteq C \times B$ be relations.
Let $\mathbf R$ and $\mathbf S$ be matrices which we define as follows:

$\sqbrk r_{i j} = \begin{cases}
\T & : \tuple {i, j} \in \RR \\
\F & : \tuple {i, j} \notin \RR \\
\end{cases}$

$\sqbrk s_{i j} = \begin{cases}
\T & : \tuple {i, j} \in \SS \\
\F & : \tuple {i, j} \notin \SS \\
\end{cases}$
Then we can interpret the matrix product $\mathbf R \mathbf S$ as the composition $\SS \circ \RR$.
To do so we temporarily consider $\struct {\set {\T, \F}, \land, \lor}$ to be our "ring" on which we are basing matrix multiplication.
Then:

$\sqbrk {r s}_{i j} = \T \iff \tuple {i, j} \in \SS \circ \RR$


Proof
Sufficient Condition
Suppose for some $i, j$:

$\sqbrk {r s}_{i j} = \T$
Then by definition of $\lor$ there must exist some $k$ for which:

$\sqbrk r_{i k} \land \sqbrk s_{k j} = \T$
which by our definition implies:

$\tuple {i, k} \in \RR$
$\tuple {k, j} \in \SS$

Then by definition of a composite relation:

$\tuple {i, j} \in \RR \circ \SS$


Necessary Condition
Suppose for some $i, j$:

$\tuple {i, j} \in \SS \circ \RR$
Then there exists a $k$ for which:

$\tuple {i, k} \in \RR$
$\tuple {k, j} \in \SS$
Hence:

$\sqbrk r_{i k} = \T$
$\sqbrk s_{k j} = \T$
and there exists some $k$ for which:

$\sqbrk r_{i k} \land \sqbrk s_{k j} = \T$
Hence by definition of $\lor$:

$\sqbrk {r s}_{i j} = \T$
$\blacksquare$





