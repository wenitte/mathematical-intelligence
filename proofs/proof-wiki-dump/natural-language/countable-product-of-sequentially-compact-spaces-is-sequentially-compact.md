# 

Source: https://proofwiki.org/wiki/Countable_Product_of_Sequentially_Compact_Spaces_is_Sequentially_Compact



Theorem
Let $I$ be an indexing set with countable cardinality.
Let $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$ be a family of topological spaces indexed by $I$.
Let $\ds \struct {S, \tau} = \prod_{\alpha \mathop \in I} \struct {S_\alpha, \tau_\alpha}$ be the product space of $\family {\struct {S_\alpha, \tau_\alpha} }_{\alpha \mathop \in I}$.

Let each of $\struct {S_\alpha, \tau_\alpha}$ be sequentially compact.

Then $\struct {S, \tau}$ is also sequentially compact.


Proof

This article needs to be tidied.In particular: By the very nature of the proof, the indices are a pain to look at.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Let $\sequence { {\mathbf x}_n}$ be a sequence in $S$.
That is, for each $n \in \N$, ${\mathbf x}_n$ is a tuple $\family {x_n^i}_{i \mathop \in I}$ indexed by $I$.
We claim there is a strictly increasing sequence $\sequence {n_r}$ in $\N$ such that the subsequence $\sequence { {\mathbf x}_{n_r} }$ converges in $\struct {S, \tau}$.
By Sequence on Product Space Converges to Point iff Projections Converge to Projections of Point, it suffices to construct a strictly increasing sequence $\sequence {n_r}$ in $\N$ such that the subsequence $\sequence { \map {\pr_i} { {\mathbf x}_{n_r} } }$ converges in $\struct {S_i, \tau_i}$ for every $i \in I$.
Let $\set {i_0, i_1, \ldots}$ be an enumeration of $I$.
By induction, for each $m \in \N$ we construct a strictly increasing sequence $\sequence {n^m_r}$ in $\N$ and an element $x^{i_m} \in S_{i_m}$ as follows.
By sequential compactness of $\struct {S_{i_0}, \tau_{i_0} }$, there is a strictly increasing sequence $\sequence {n^0_r}$ in $\N$ such that the subsequence $\sequence { x^{i_0}_{n^0_r} }$ converges in $\struct {S_{i_0}, \tau_{i_0} }$ to some point $x^{i_0} \in S_{i_0}$.
Suppose inductively that the strictly increasing sequence $\sequence {n^m_r}$ has been defined for some $m \in \N$.
Applying sequential compactness of $\struct {S_{i_{m+1} }, \tau_{i_{m+1} } }$ to the sequence $\sequence { x^{i_{m+1} }_{n^m_r} }$, there is a subsequence $\sequence {n^{m+1}_r}$ of $\sequence {n^m_r}$ such that the subsequence $\sequence { x^{i_{m+1} }_{n^{m+1}_r} }$ converges in $\struct {S_{i_{m+1} }, \tau_{i_{m+1} } }$ to some point $x^{i_{m+1} } \in S_{i_{m+1} }$.
Moreover, by each $\sequence { x^{i_m}_{n^{m'}_r} }$ is a subsequence of $\sequence { x^{i_m}_{n^m_r} }$ whenever $m,m' \in \N$ such that $m' \ge m$.
Since $I$ is countable, consider separately the cases where $I$ is finite and $I$ is countably infinite.


Case I
Suppose $I = \set {i_0, \ldots, i_M}$ is finite.
Then the above inductive process must terminate after $M + 1$ steps.
Define $\sequence {n_r} := \sequence {n^M_r}$.
Define $\mathbf x := \family {x^i}_{i \mathop \in I} \in S$.
Let $m \le M$.
We claim that the subsequence $\sequence { \map {\pr_{i_m} } { {\mathbf x}_{n_r} } }$ converges to $\map {\pr_{i_m} } { \mathbf x }$.
By construction, the subsequence $\sequence { x^{i_m}_{n^m_r} }$ converges to $x^{i_m}$.
By Subsequence of Subsequence, $\sequence { x^{i_m}_{n^M_r} }$ is a subsequence of $\sequence { x^{i_m}_{n^m_r} }$.
Then:














\(\ds \lim_{r \to \infty} \sequence { \map {\pr_{i_m} } { {\mathbf x}_{n_r} } }\)

\(=\)







\(\ds \lim_{r \to \infty} \sequence { x^{i_m}_{n^M_r} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{r \to \infty} \sequence { x^{i_m}_{n^m_r} }\)





Limit of Subsequence equals Limit of Sequence














\(\ds \)

\(=\)







\(\ds x^{i_m}\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_{i_m} } { \mathbf x }\)









The result follows.
$\Box$


Case II
Suppose $I = \set {i_0, i_1, \ldots }$ is countably infinite.
Then by axiom of dependent choice, the inductive process gives a strictly increasing sequence $\sequence {n^m_r}$ in $\N$ and an element $x^{i_m} \in S_{i_m}$ for every $m \in \N$.
Define $\sequence {n_r} := \sequence {n^r_r}$.
Define $\mathbf x := \family {x^i}_{i \mathop \in I} \in S$.
Let $m \in \N$.
We claim that the subsequence $\sequence { \map {\pr_{i_m} } { {\mathbf x}_{n_r} } }$ converges to $\map {\pr_{i_m} } {\mathbf x}$.
By Subsequence of Subsequence, $\sequence { x^{i_m}_{n^{r}_r} }$ is a subsequence of $\sequence { x^{i_m}_{n^m_r} }$.
Then:














\(\ds \lim_{r \to \infty} \sequence { \map {\pr_{i_m} } { {\mathbf x}_{n_r} } }\)

\(=\)







\(\ds \lim_{r \to \infty} \sequence { x^{i_m}_{n^M_r} }\)




















\(\ds \)

\(=\)







\(\ds \lim_{r \to \infty} \sequence { x^{i_m}_{n^m_r} }\)





Limit of Subsequence equals Limit of Sequence














\(\ds \)

\(=\)







\(\ds x^{i_m}\)




















\(\ds \)

\(=\)







\(\ds \map {\pr_{i_m} } { \mathbf x }\)









The result follows.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




