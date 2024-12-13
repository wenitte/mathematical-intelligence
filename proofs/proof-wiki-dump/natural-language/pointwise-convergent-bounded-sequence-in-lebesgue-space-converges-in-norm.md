# 

Source: https://proofwiki.org/wiki/Pointwise_Convergent_Bounded_Sequence_in_Lebesgue_Space_Converges_in_Norm

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $p \in \R_{\ge 1}$.
Let $\sequence {f_n}_{n \mathop \in \N}, f_n: X \to \R$ be a sequence in Lebesgue $p$-space $\map {\LL^p} \mu$.

Suppose that the pointwise limit $f := \ds \lim_{n \mathop \to \infty} f_n$ exists $\mu$-almost everywhere.
Suppose that for some $g \in \map {\LL^p} \mu$, the pointwise inequality $\size {f_n} \le g$ holds for all $n \in \N$.

Then $f \in \map {\LL^p} \mu$, and:

$\ds \lim_{n \mathop \to \infty} \norm {f - f_n}_p = 0$
where $\norm {\, \cdot \,}_p$ denotes the $p$-seminorm.


Proof
Since:

$\ds \size f = \lim _{n \to \infty} \size {f_n} \le g$
$\mu$-almost everywhere, we have:

$\ds \int \size f^p \rd \mu \le \int g^p \rd \mu < + \infty$
Thus:

$f \in \map {\LL^p} \mu$

Furthermore, since:

$\size {f_n - f} \le \size {f_n} + \size f \le 2 \size g$
we have:

$\size {f_n - f}^p \le 2^p \size g^p$
Since $2^p \size g^p$ is $\mu$-integrable:














\(\ds \lim_{n \mathop \to \infty} \int \size {f_n - f}^p \rd \mu\)

\(=\)







\(\ds \int \lim_{n \mathop \to \infty} \size {f_n - f}^p \rd \mu\)





Lebesgue's Dominated Convergence Theorem














\(\ds \)

\(=\)







\(\ds \int 0 \rd \mu\)





since $f = \ds \lim_{n \mathop \to \infty} f_n$ $\mu$-almost everywhere














\(\ds \)

\(=\)







\(\ds 0\)









$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $12.9$




