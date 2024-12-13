# 

Source: https://proofwiki.org/wiki/Nagata-Smirnov_Metrization_Theorem/Lemma_2


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $\BB = \ds \bigcup_{n \mathop \in \N} \BB_n$ be a $\sigma$-locally finite basis of $T$ where $\BB_n$ is locally finite set of subsets for each $n \in \N$.

Let $I = \set{\tuple{B, n} : B \in \BB, B \in \BB_n}$.
For each $\tuple{B, n} \in I$, let $f_{\tuple{B, n}}:S \to \closedint 0 1$:

$B = \set{x \in S : \map {f_{\tuple{B, n}}} x \ne 0}$

Let $g_n : S \to \closedint 0 1$ be the mapping defined by:

$\map {g_n} x$ is the limit of the generalized sum $\ds \sum_{B \in \BB_n} \map {f_{\tuple{B, n}}^2} x$

For all $n \in \N$, let:

$I_n = \set{\tuple{B, k} \in I : k \ge n}$

Then:

for all $n \in \N$ and $x \in S$:
the generalized sum $\ds \sum_{\tuple{B, k} \mathop \in I_n} \sqbrk{\dfrac 1 {\paren{\sqrt 2}^k} \dfrac {\map {f_{\tuple{B, k}}} x} {\sqrt {1 + \map {g_k} x}}}^2$ converges
and:

$\ds \sum_{\tuple{B, k} \mathop \in I_n} \sqbrk{\dfrac 1 {\paren{\sqrt 2}^k} \dfrac {\map {f_{\tuple{B, k}}} x} {\sqrt {1 + \map {g_k} x}}}^2 \le \sum_{m \mathop = n}^\infty \dfrac 1 {2^k}$


Proof
Let $n \in \N$.
Let $x \in S$.

Let $\FF$ denote the set of finite subsets of $I_n$.

Let $F \in \FF$.
Hence:

$\set{k \in \N : \exists B \in \BB_k : \tuple{B, k} \in F}$ is finite.

Let $\set{n_1, n_2, \ldots, n_m} = \set{k \in \N : \exists B \in \BB_k : \tuple{B, k} \in F}$.
We have:














\(\ds \sum_{\tuple{B, k} \mathop \in F} \sqbrk{\dfrac 1 {\paren{\sqrt 2}^k} \dfrac {\map {f_{\tuple{b, k} } } x} {\sqrt {1 + \map {g_k} x} } }^2\)

\(=\)







\(\ds \sum_{\tuple{B, k} \mathop \in F} \sqbrk{\dfrac {\map {f^2_{\tuple{b, k} } } x} {2^n \paren{1 + \map {g_k} x} } }\)





squaring the terms to remove square roots














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \sqbrk{\sum_{\tuple{B, n_k} \mathop \in F} \dfrac {\map {f^2_{\tuple{b, n_k} } } x} {2^{n_k} \paren{1 + \map {g_{n_k} } x} } }\)





Summation over Union of Disjoint Finite Index Sets














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \sqbrk{ \dfrac 1 {2^{n_k} \paren{1 + \map {g_{n_k} } x} }  \ds \sum_{\tuple{B, n_k} \mathop \in F}  \map {f^2_{\tuple{b, n_k} } } x}\)





Real Number Axiom $\R \text D$: Distributivity of Multiplication over Addition














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^m \sqbrk{\dfrac 1 {2^{n_k} \paren{1 + \map {g_{n_k} } x} }  \ds \sum_{B \mathop \in \BB_{n_k} }  \map {f^2_{\tuple{b, n_k} } } x}\)





Absolutely Convergent Generalized Sum Converges to Supremum














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \dfrac {\map {g_{n_k} } x} {2^{n_k} \paren{1 + \map {g_{n_k} } x} }\)





definition of $g_{n_k}$














\(\ds \)

\(<\)







\(\ds \sum_{k \mathop = 1}^m \dfrac 1 {2^{n_k} }\)





as $\map {g_{n_k} } x < 1 + \map {g_{n_k} } x$














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = n}^\infty \dfrac 1 {2^k}\)




















\(\ds \)

\(<\)







\(\ds \infty\)





Sum of Infinite Geometric Sequence




Since $F$ was arbitrary, it follows that:

$\forall F \in \FF : \ds \sum_{\tuple{B, k} \mathop \in F} \sqbrk{\dfrac 1 {\paren{\sqrt 2}^k} \dfrac {\map {f_{\tuple{b, k} } } x} {\sqrt {1 + \map {g_k} x} } }^2 \le \sum_{k \mathop = n}^\infty \dfrac 1 {2^k}$

From Bounded Generalized Sum is Absolutely Convergent:

the generalized sum $\ds \sum_{\tuple{B, k} \mathop \in I_n} \sqbrk{\dfrac 1 {\paren{\sqrt 2}^k} \dfrac {\map {f_{\tuple{B, k}}} x} {\sqrt {1 + \map {g_k} x}}}^2$ converges
and:

$\ds \sum_{\tuple{B, k} \mathop \in I_n} \sqbrk{\dfrac 1 {\paren{\sqrt 2}^k} \dfrac {\map {f_{\tuple{B, k}}} x} {\sqrt {1 + \map {g_k} x}}}^2 \le \sum_{k \mathop = n}^\infty \dfrac 1 {2^k}$
$\blacksquare$





