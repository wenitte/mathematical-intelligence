# 

Source: https://proofwiki.org/wiki/Associativity_on_Indexing_Set

Theorem
Let $\struct {S, \circ}$ be a commutative semigroup.
Let $\family {x_\alpha}_{\alpha \mathop \in A}$ be a family of terms of $S$ indexed by a finite non-empty set $A$.
Let $\family {B_k}_{1 \mathop \le k \mathop \le n}$ be a family of distinct subsets of $A$ forming a partition of $A$.

Then:

$\ds \prod_{k \mathop = 1}^n \paren {\prod_{a \mathop \in B_k} x_\alpha} = \prod_{\alpha \mathop \in A} x_\alpha$


Proof
For each $k \in \N_{>0}$, let $\card {B_k} = p_k$.
Let:

$r_0 = 0$
$\ds \forall k \in \N_{>0}: r_k = \sum_{j \mathop = 1}^k {p_j}$
and:

$p = r_n$
Then:

$r_k - r_{k - 1} = p_k$
So, by Isomorphism to Closed Interval, both integer intervals $\closedint 1 {p_k}$ and $\closedint {r_{k - 1} + 1} {r_k}$ have $p_k$ elements.
By Unique Isomorphism between Equivalent Finite Totally Ordered Sets, there is a unique isomorphism $\tau_k: \closedint 1 {p_k} \to \closedint {r_{k - 1} + 1} {r_k}$ as both are totally ordered.
The orderings on both of these are those induced by the ordering on $\N$.

It is clear that $\tau_k$ is defined as:

$\forall j \in \closedint 1 {p_k}: \map {\tau_k} j = r_k + j$

For each $k \in \closedint 1 n$, let $\rho_k: \closedint 1 {p_k} \to B_k$ be a bijection.
By Strictly Increasing Sequence induces Partition, the mapping $\sigma: \closedint 1 p \to A$ defined by:

$\ds \forall j \in \closedint {r_{k - 1} + 1} {r_k}: \forall k \in \closedint 1 n: \map \sigma j = \map {\rho_k} {\map {\tau_k^{-1} } j}$
is a bijection.

Let $\forall j \in \closedint 1 p: y_j = x_{\map \sigma j}$.
By definition:

$\ds \prod_{\alpha \mathop \in A} {x_\alpha} = \prod_{j \mathop = 1}^p {x_{\map \sigma j} } = \prod_{j \mathop = 1}^p {y_j}$
Also:

$\ds \forall k \in \closedint 1 n: \prod_{\alpha \mathop \in B_k} {x_\alpha} = \prod_{i \mathop = 1}^{p^k} {x_{\map {\rho_k} i} }$
Also by definition:

$\ds \prod_{j \mathop = r_{k - 1} + 1}^{r_k} y_j = \prod_{i \mathop = 1}^{p_k} y_{\map {\tau_k} i} = \prod_{i \mathop = 1}^{p_k} x_{\map \sigma {\map {\tau_k} i} } = \prod_{i \mathop = 1}^{p_k} x_{\map {\rho_k} i}$

So by the General Associativity Theorem:














\(\ds \prod_{a \mathop \in A} {x_a}\)

\(=\)







\(\ds \prod_{j \mathop = 1}^p y_j\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {\prod_{j \mathop = r_{k - 1} \mathop + 1}^{r_k} {y_j} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {\prod_{i \mathop = 1}^{p_k} x_{\map {\rho_k} i} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {\prod_{a \mathop \in B_k} x_\alpha}\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.9$




