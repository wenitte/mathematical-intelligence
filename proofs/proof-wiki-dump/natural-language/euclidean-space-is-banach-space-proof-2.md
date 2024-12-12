# 

Source: https://proofwiki.org/wiki/Euclidean_Space_is_Banach_Space/Proof_2

Theorem
Let $m$ be a positive integer.
Then the Euclidean space $\R^m$, along with the Euclidean norm, forms a Banach space over $\R$.


Proof
By definition, Euclidean norm is the same as $p$-norm with $p = 2$.
Let $\sequence {\mathbf x_n}_{n \mathop \in \N} = \sequence {\tuple {x_n^{\paren 1}, x_n^{\paren 2}, \ldots, x_n^{\paren m} } }_{n \mathop \in \N} $ be a Cauchy sequence in $\R^m$.
Let $k \in \N_{> 0} : k \le m$.
Then:














\(\ds \size {x_n^{\paren k} - x_m^{\paren k} }\)

\(=\)







\(\ds \paren {\paren {x_n^{\paren k} - x_m^{\paren k} }^2}^{\frac 1 2}\)




















\(\ds \)

\(\le\)







\(\ds \paren {\sum_{k \mathop = 0}^m \paren {x_n^{\paren k} - x_m^{\paren k} }^2}^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \norm { {\bf x}_n - {\bf x}_m}_2\)









Hence, $\sequence {x_n^{\paren k} }_{n \mathop \in \N}$ is a Cauchy sequence in $\R$.
Then:

$\ds \lim_{n \mathop \to \infty} x_n^{\paren k} = L^{\paren k}$
Let $\mathbf L = \tuple {L^{\paren 1}, \ldots, L^{\paren m}} \in \R^m$
We have that for all $n > N$:














\(\ds \norm {\mathbf x_n - \mathbf L}\)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^m \size {x^{\paren k}_n - x^{\paren k} }^2}^{\frac 1 2}\)




















\(\ds \)

\(\le\)







\(\ds \paren {\sum_{k \mathop = 1}^m \frac {\epsilon^2} m}^{\frac 1 2}\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









Therefore, $\sequence {\mathbf x_n}_{n \mathop \in \N}$ converges to $\mathbf L$ in $\struct {\R^m, \norm {\, \cdot \,}_2}$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




