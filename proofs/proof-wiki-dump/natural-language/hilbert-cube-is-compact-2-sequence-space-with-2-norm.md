# 

Source: https://proofwiki.org/wiki/Hilbert_Cube_is_Compact/2-Sequence_Space_with_2-Norm



Theorem
Let $\ell^2$ be the 2-sequence space.
Let $\norm {\, \cdot \,}_2$ be the 2-norm.
Let $C$ be the Hilbert cube.

Then $C$ is compact in $\struct {\ell^2, \norm {\, \cdot \,}_2}$.


Proof
Construction of subsequence
Let $\sequence {\mathbf x_m}_{m \mathop \in \N}$ be a sequence in $C$.
Let $\mathbf x_m = \tuple {x_m^{\paren n}}_{n \mathop \in \N}$.
By definition of Hilbert cube:

$\ds \forall n,m \in \N : 0 \le x_m^{\paren n} \le \frac 1 n$
Consider the case $n = 1$.
Then:

$\ds \forall m \in \N : 0 \le x_m^{\paren 1} \le 1$
By Closed Real Interval is Compact, $\closedint 0 1$ is compact.
Hence, $\sequence {x^{\paren 1}_m}_{m \mathop \in \N}$ has a subsequence $\sequence {x^{\paren 1}_{\map {m_1} j}}_{j \mathop \in \N}$ that is convergent with limit, say, $\ds x^{\paren 1} \in \closedint 0 1$.
Consider the case $n = 2$.
By analogous arguments, $\sequence {x^{\paren 2}_{\map {m_1} j}}_{j \mathop \ge 2}$ has a subsequence $\sequence {x^{\paren 2}_{\map {m_2} j}}_{j \mathop \ge 2}$ that is convergent with limit, say, $\ds x^{\paren 2} \in \closedint 0 {\frac 1 2}$.
Proceeding in this manner, for all $k \in \N$ a sequence $\sequence {x^{\paren k}_{\map {m_{k - 1}} j}}_{j \mathop \ge k}$ has a convergent subsequence $\sequence {x^{\paren k}_{\map {m_k} j}}_{j \mathop \ge k}$ with a limit $\ds x^{\paren k} \in \closedint 1 {\frac 1 k}$.
From all these sequences we construct a subsequence $\sequence {\mathbf x_{\map {m_j} j}}_{j \mathop \in \N}$.
Let $\mathbf x := \tuple {x^{\paren n}}_{n \mathop \in \N}$.
$\mathbf x \in C$ because $\ds \forall n \in \N : 0 \le x^{\paren n} \le \frac 1 n$. 


Convergence of the subsequence
The goal is to prove that for all sufficiently large $j$'s $\ds \norm {\mathbf x_{\map {m_j} j} - \mathbf x}_2$ is small.
By definition of $p$-norm:

$\ds \norm {\mathbf x_{\map {m_j} j} - \mathbf x}_2^2 = \sum_{n \mathop = 1}^\infty \paren {x^{\paren n}_{\map {m_j} j} - x^{\paren n}}^2$
Split this as follows:

$\ds \norm {\mathbf x_{\map {m_j} j} - \mathbf x}_2^2 = \sum_{n \mathop = 1}^N \paren {x^{\paren n}_{\map {m_j} j} - x^{\paren n}}^2 + \sum_{n \mathop = N + 1}^\infty \paren {x^{\paren n}_{\map {m_j} j} - x^{\paren n} }^2$

Let $\epsilon \in \R_{> 0}$.
By Basel Problem $\ds \sum_{n \mathop = 1}^\infty \frac 1 {n^2}$ converges.
Let $N \in \N$ be such that:

$\ds \sum_{n \mathop = N + 1}^\infty \frac 1 {n^2} < \epsilon$
Then:














\(\ds \sum_{n \mathop = N + 1}^\infty \paren {x^{\paren n}_{\map {m_j} j} - x^{\paren n} }^2\)

\(=\)







\(\ds \sum_{n \mathop = N + 1}^\infty \paren {x^{\paren n}_{\map {m_j} j} }^2 + \sum_{n \mathop = N + 1}^\infty \paren {x^{\paren n} }^2 - 2 \sum_{n \mathop = N + 1}^\infty x^{\paren n}_{\map {m_j} j} x^{\paren n}\)




















\(\ds \)

\(<\)







\(\ds \sum_{n \mathop = N + 1}^\infty \frac 1 {n^2} + \sum_{n \mathop = N + 1}^\infty \frac 1 {n^2} + 2 \sqrt {\sum_{n \mathop = N + 1}^\infty \paren {x^{\paren n}_{\map {m_j} j} }^2} \sqrt {\sum_{n \mathop = N + 1}^\infty \paren {x^{\paren n} }^2 }\)





Cauchy's Inequality














\(\ds \)

\(<\)







\(\ds \epsilon + \epsilon + 2 \sqrt \epsilon \sqrt \epsilon\)




















\(\ds \)

\(=\)







\(\ds 4 \epsilon\)










We have that $\sequence {\map {m_N} j}_{j \mathop \ge n}$ is a subsequence of $\sequence {\map {m_n} j}_{j \mathop \ge n}$.
Likewise, $\sequence {x^{\paren n}_{\map {m_N} j}}_{j \mathop \ge n}$ is a subsequence of  $\sequence {x^{\paren n}_{\map {m_n} j}}_{j \mathop \ge n}$.
By Limit of Subsequence equals Limit of Sequence, $\sequence {x^{\paren n}_{\map {m_N} j}}_{j \mathop \ge n}$ converges to the same limit as $\sequence {x^{\paren n}_{\map {m_n} j}}_{j \mathop \ge n}$:

$\ds \forall n \le N : \lim_{j \to \infty} x^{\paren n}_{\map {m_N} j} = x^{\paren n}$
Then $\sequence {\map {m_j} j}_{j \mathop \ge N}$ is a subsequence of $\sequence {\map {m_N} j}_{j \mathop \ge N}$.
However, $N \ge n$.
Therefore, $\sequence {\map {m_j} j}_{j \mathop \ge N}$ is also a subsequence  of $\sequence {\map {m_j} j}_{j \mathop \ge n}$ for each $n \le N$ .
Hence:

$\ds \forall n \le N : \lim_{j \to \infty} x^{\paren n}_{\map {m_j} j} = x^{\paren n}$
By definition of limit:

$\forall \epsilon_n \in \R_{>0}: \exists J_n \in \N: \forall j \in \N: j > J_n \implies \size {x^{\paren n}_{\map {m_j} j} - x^{\paren n}} < \epsilon_n$
Let $\ds J := \max_{n \mathop : 1 \mathop \le n \mathop \le N} \set {J_n}$.
Let $\ds \epsilon := \sum_{n \mathop = 1}^N \epsilon_n^2$.
We have that:

$\ds \sum_{n \mathop = 1}^N \size {x^{\paren n}_{\map {m_j} j} - x^{\paren n}}^2 = \sum_{n \mathop = 1}^N \paren {x^{\paren n}_{\map {m_j} j} - x^{\paren n} }^2$
Then:

$\ds \exists J \in \N : \forall j > J : \sum_{n = 1}^N \paren {x^{\paren n}_{\map {m_j} j} - x^{\paren n} }^2 < \epsilon$
Hence:














\(\ds \norm {\mathbf x_{\map {m_j} j} - \mathbf x}_2^2\)

\(=\)







\(\ds \sum_{n \mathop = 1}^N \paren {x^{\paren n}_{\map {m_j} j} - x^{\paren n} }^2 + \sum_{n \mathop = N + 1}^\infty \paren {x^{\paren n}_{\map {m_j} j} - x^{\paren n} }^2\)




















\(\ds \)

\(<\)







\(\ds \epsilon + 4 \epsilon\)




















\(\ds \)

\(=\)







\(\ds 5 \epsilon\)









Let $\epsilon' := 5 \epsilon$.
Since $\epsilon$ and $\epsilon_n$'s were arbitrary, we have that:

$\ds \forall \epsilon' \in \R_{> 0} : \exists J \in \N : \forall j \in \N : j > J \implies \norm {\mathbf x_{\map {m_j} j} - \mathbf x}_2 < \epsilon'$
Hence, an arbitrary sequence $\sequence {\mathbf x_m}_{m \mathop \in \N}$ in $C$ has a subsequence $\sequence {\mathbf x_{\map {m_j} j} }_{j \mathop \in \N}$ that is convergent to $\mathbf x \in C$ in $\struct {\ell^2, \norm {\, \cdot \,}_2}$.
By definition, $C$ is compact in $\struct {\ell^2, \norm {\, \cdot \,}_2}$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 1.5$: Normed and Banach spaces. Compact sets




