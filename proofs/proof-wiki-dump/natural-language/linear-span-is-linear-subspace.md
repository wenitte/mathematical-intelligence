# 

Source: https://proofwiki.org/wiki/Linear_Span_is_Linear_Subspace



Theorem
Let $V$ be a vector space over a division ring $K$.
Let $S \subseteq V$ be a subset of $V$.

Then the linear span $\map \span S$ is a subspace of $V$.


Proof 1
First, suppose that $S = \O$.
By definition of linear combination of empty set, it follows that $\map \span \O = \set \bszero$, where $\bszero$ denotes the zero vector of $V$.
From Zero Subspace is Subspace, it follows that the trivial vector space $\set \bszero$ is a subspace of $V$.

Suppose instead that $S$ is non-empty.
All $v \in \map \span S$ are of the form:

$v = \ds \sum_{k \mathop = 1}^n \lambda_k v_k$
where $n \in \N$, $\lambda_1, \ldots, \lambda_n \in K$, and $v_1, \ldots, v_n \in S$.
We use the Two-Step Vector Subspace Test to prove that $\map \span S$ is a subspace of $V$.
For any $\lambda \in K$, it follows from Vector Space Axiom $(\text V 6)$: Distributivity over Vector Addition that:

$\ds \lambda v = \lambda \paren {\sum_{k \mathop = 1}^n \lambda_k v_k} = \sum_{k \mathop = 1}^n \paren {\lambda \lambda_k} v_k$
which shows that $\lambda v \in \map \span S$, which is the first condition of the Two-Step Vector Subspace Test.

For any $w \in \map \span S$, let $w$ be of the form:

$w = \ds \sum_{l \mathop = 1}^m \mu_l w_k$
where $m \in \N$, $\mu_1, \ldots, \mu_m \in K$, and $w_1, \ldots, w_m \in S$.
Define the three sets:














\(\ds N\)

\(:=\)







\(\ds \set {1 \le k \le n: v_k \notin \set {w_1, \ldots, w_m} }\)




















\(\ds M\)

\(:=\)







\(\ds \set {1 \le l \le m: w_l \notin \set {v_1, \ldots, v_n} }\)




















\(\ds \OO\)

\(:=\)







\(\ds \set {\tuple {k,l}: 1 \le k \le n, 1 \le l \le m, v_k = w_l}\)










It follows that:














\(\ds v + w\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \lambda_k v_k + \sum_{l \mathop = 1}^m \mu_l w_k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in N} \lambda_k v_k + \sum_{l \mathop \in M} \mu_l w_l + \sum_{\tuple {k,l} \mathop \in \OO} \paren {\lambda_k + \mu_l} v_k\)





Vector Space Axiom $(\text V 5)$: Distributivity over Scalar Addition



which shows that $v + w \in \map \span S$, which is the second condition of the Two-Step Vector Subspace Test.
$\blacksquare$


Proof 2
This is a special case of Generated Submodule is Linear Combinations.
As such, the statement follows immediately from that theorem.
$\blacksquare$


Sources
1994: Robert Messer: Linear Algebra: Gateway to Mathematics: $\S 3.2$




