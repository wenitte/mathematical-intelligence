# 

Source: https://proofwiki.org/wiki/Lebesgue_Pre-Measure_is_Pre-Measure

Theorem
The Lebesgue pre-measure $\lambda^n$ on the half-open $n$-rectangles $\JJ_{ho}^n$ is a pre-measure.


Proof
We employ Characterization of Pre-Measures.

It is known that $\map {\lambda^n} \O = 0$ by definition of Lebesgue pre-measure.
The only possibility for two disjoint half-open $n$-rectangles to constitute a single, large half-open $n$-rectangle is when they are of the form:

$\horectr {\mathbf a} {\mathbf b} \quad \horectr {\mathbf a'} {\mathbf b'}$
such that we have for some $i$ with $1 \le i \le n$:

$i \ne j \implies a_j = a'_j$
$i \ne j \implies b_j = b'_j$
$i = j \implies a'_j = b_j$
which intuitively can be visualised as two cubes that together form one large bar, namely $\horectr {\mathbf a} {\mathbf b'}$.

In this situation, we have:














\(\ds \map {\lambda^n} {\horectr {\mathbf a} {\mathbf b} } + \map {\lambda^n} {\horectr {\mathbf a'} {\mathbf b'} }\)

\(=\)







\(\ds \prod_{j \mathop = 1}^n \paren {b_j - a_j} + \prod_{j \mathop = 1}^n \paren {b'_j - a'_j}\)





Definition of Lebesgue Pre-Measure














\(\ds \)

\(=\)







\(\ds \paren {b_i - a_i + b'_i - a'_i} \prod_{\substack{j \mathop = 1 \\ j \mathop \ne i} } \paren {b_j - a_j}\)





By the noted properties of $a_j, b_j, a'_j, b'_j$














\(\ds \)

\(=\)







\(\ds \map {\lambda^n} {\horectr {\mathbf a} {\mathbf b'} }\)





Definition of Lebesgue Pre-Measure



Thus it is verified that $\lambda^n$ is finitely additive.

Finally, suppose that $\horectr {\mathbf a_m} {\mathbf b_m} \downarrow \O$ is a decreasing sequence of sets, with limit $\O$.
Then there exists at least one $j$ with $1 \le j \le n$ such that:

$\ds \lim_{m \mathop \to \infty} a_{m, j} = \lim_{m \mathop \to \infty} b_{m, j}$
which by Combination Theorem for Sequences is equivalent to:

$\ds \lim_{m \mathop \to \infty} b_{m, j} - a_{m, j} = 0$
The fact that the sequence is decreasing means that, from Cartesian Product of Subsets, for all $m \in \N$, for all $1 \le i \le n$:

$\hointr {a_{m, i} } {b_{m, i} } \subseteq \hointr {a_{1, i} } {b_{1, i} }$
and whence $b_{m, i} - a_{m, i} \le b_{1, i} - a_{m, 1}$.

Hence we have:














\(\ds \lim_{m \mathop \to \infty} \map {\lambda^n} {\horectr {\mathbf a_m} {\mathbf b_m} }\)

\(=\)







\(\ds \lim_{m \mathop \to \infty} \prod_{i \mathop = 1}^n \paren {b_{m, i} - a_{m, i} }\)





Definition of Lebesgue Pre-Measure














\(\ds \)

\(\le\)







\(\ds \lim_{m \mathop \to \infty} \paren {b_{m, j} - a_{m, j} } \prod_{\substack{i \mathop = 1 \\ i \mathop \ne j} } \paren {b_{1, i} - a_{1, i} }\)





By the above discussion














\(\ds \)

\(=\)







\(\ds 0\)





Combination Theorem for Sequences




This verifies the last condition for Characterization of Pre-Measures, since $\lambda^n$ only takes finite values.
Hence $\lambda^n$ is a pre-measure.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $6.5$




