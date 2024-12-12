# 

Source: https://proofwiki.org/wiki/Complete_and_Totally_Bounded_Metric_Space_is_Sequentially_Compact/Lemma

Lemma
Let $\struct {A , d}$ be a totally bounded metric space.

There exists a mapping $f : \Z_{>0} \times A^\N \to A^\N$ such that:

for all $N \in \Z_{>0}$ and $\sequence {x_n}_{n \mathop \in \N}\in A^\N$:
$\sequence {y_n}_{n \mathop \in \N} := \map f {N, \sequence {x_n}_{n \mathop \in \N}}$ is a subsequence of $\sequence {x_n}_{n \mathop \in \N}$
and:
$\forall k, l \in \N: \map d {y_k, y_l} \le \dfrac 1 N$


Proof
Since $\struct {A, d}$ is totally bounded, for each $N\in\Z_{>0}$ there exist:

$\map k N \in \Z_{>0}$
and:

$c_1^{\paren N}, \ldots, c_{\map k N}^{\paren N}\in A$
such that:

$\ds \inf_{1 \mathop \le i \mathop \le \map k N} \map d {c_i ^{\paren N}, x} \le \dfrac 1 {2N}$
for all $x \in A$. 
We write:

$\ds \SS_N := \tuple {c_1^{\paren N}, \ldots, c_{\map k N}^{\paren N} } \in \bigcup_{k \mathop \in \Z_{>0} } A^k$
By the axiom of countable choice, there exists a sequence $\sequence {\SS_N}_{N\in\Z_{>0}}$ of such sets.
In the following, we define $f$ using this $\sequence {\SS_N}_{N\in\Z_{>0}}$.

Given $N\in\Z_{>0}$ and $\sequence {x_n}_{n \mathop \in \N}$, consider:

$\SS_N = \tuple {c_1 ^{\paren N},\ldots, c_{\map k N} ^{\paren N}}$
Observe:

$\ds \N = \bigcup_{i \mathop = 1} ^{\map k N} \set {n \mathop \in \N : \map d {x_n, c_i ^{\paren N} } \le \dfrac 1 {2N} }$
As $\size \N = \infty$, we have:

$\exists i \in \closedint 1 {\map k N} : \size {\set {n \mathop \in \N : \map d {x_n, c_i ^{\paren N}} \le \dfrac 1 {2N} } } = +\infty$
Therefore, we can choose the minimum of all such indices:

$i_N := \min \set {i \in \closedint 1 {\map k N} : \size {\set {n \mathop \in \N : \map d {x_n, c_i ^{\paren N} } \le \dfrac 1 {2N} } } = +\infty}$
Now, we define:

$\map f {N, \sequence {x _n}_{n \mathop \in \N}} := \sequence {x_{m_n} } _{n \mathop \in \N}$
where $m_0 < m_1 < \cdots$ are defined as:

$\set {m_0, m_1, \ldots} = \set {n \mathop \in \N : \map d {x_n, c_{i_N}^{\paren N} } \le \dfrac 1 {2N} }$
Indeed, by Metric Space Axiom $(\text M 2)$: Triangle Inequality:

$\forall k, l \in \N: \map d {x_{m_k}, x_{m_l} } \le \map d {x_{m_k}, c_{i_N}^{\paren N} } + \map d {c_{i_N}^{\paren N}, x_{m_l} }  \le \dfrac 1 {2N} + \dfrac 1 {2N} = \dfrac 1 N$
$\blacksquare$





