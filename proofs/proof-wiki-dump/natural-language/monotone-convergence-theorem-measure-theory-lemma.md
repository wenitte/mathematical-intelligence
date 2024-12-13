# 

Source: https://proofwiki.org/wiki/Monotone_Convergence_Theorem_(Measure_Theory)/Lemma



Lemma
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $u : X \to \overline \R_{\ge 0}$ be a positive $\Sigma$-measurable function. 
Let $\sequence {u_n}_{n \mathop \in \N}$ be an sequence of positive $\Sigma$-measurable functions $u_n : X \to \overline \R_{\ge 0}$ such that: 

$\map {u_i} x \le \map {u_j} x$ for all $i \le j$
and:

$\ds \map u x = \lim_{n \mathop \to \infty} \map {u_n} x$
for all $x \in X$. 
Let $\sequence {u_{n, k} }_{k \mathop \in \N}$ be an increasing sequence of positive simple functions such that: 

$\ds u_n = \lim_{k \mathop \to \infty} u_{n, k}$
Let: 

$\ds g_n = \max \set {u_{1, n}, u_{2, n}, \ldots, u_{n, n} }$
for each $n \in \N$.

Then: 

$(1) \quad$ $\sequence {g_n}_{n \mathop \in \N}$ is increasing
$(2) \quad$ $\ds \map u x = \lim_{n \mathop \to \infty} \map {g_n} x$
$(3) \quad$ $g_n \le u_n$ for each $n \in \N$.


Proof
Proof of $(1)$
Let $x \in X$ and $n \in \N$, we can write: 














\(\ds \map {g_{n + 1} } x\)

\(=\)







\(\ds \max \set {\map {u_{1, n} } x, \map {u_{2, n} } x, \ldots, \map {u_{n, n} } x, \map {u_{\paren {n + 1}, \paren {n + 1} } } x}\)




















\(\ds \)

\(=\)







\(\ds \max \set {\max \set {\map {u_{1, n} } x, \map {u_{2, n} } x, \ldots, \map {u_{n, n} } x}, \map {u_{\paren {n + 1}, \paren {n + 1} } } x}\)





Definition of Pointwise Maximum of Real-Valued Functions: General Definition














\(\ds \)

\(=\)







\(\ds \max \set {\map {g_n} x, \map {u_{\paren {n + 1}, \paren {n + 1} } } x}\)





definition of $g_n$














\(\ds \)

\(\ge\)







\(\ds \map {g_n} x\)





Definition of Pointwise Maximum of Real-Valued Functions



so: 

$\sequence {g_n}_{n \mathop \in \N}$ is increasing.
$\Box$

Proof of $(2)$
We now show that: 

$\ds \map u x = \lim_{n \to \infty} \map {g_n} x$
for each $x \in X$.
Suppose that $\map u x$ is finite. 
Since: 

$\sequence {g_n}_{n \mathop \in \N}$ is increasing
we have: 

$\map {g_n} x \le \map u x$
for all $n \in \N$ and $x \in X$, from Monotone Convergence Theorem (Real Analysis): Increasing Sequence.
So it suffices to show that for all $\epsilon > 0$ there exists $N \in \N$ such that: 

$\map {g_n} x > \map u x - \epsilon$
for all $n > N$.
Fix $\epsilon > 0$. 
We have: 

$\ds \map u x = \lim_{n \mathop \to \infty} \paren {\map {u_n} x}$
From the definition of a convergent sequence, there exists $N_1 \in \N$ such that: 

$\ds \size {\map {u_n} x - \map u x} < \frac \epsilon 2$
So we have: 

$\ds \map {u_n} x > \map u x - \frac \epsilon 2$
for $n \ge N_1$.
Noting that: 

$\ds \map {u_{N_1} } x = \lim_{k \mathop \to \infty} \map {u_{N_1, k} } x$
We can pick $N_2 \in \N$ such that:

$\ds \map {u_{N_1, k} } x > \map {u_n} x - \frac \epsilon 2 > \map u x - \epsilon$
for $k \ge N_2$.
We then have: 














\(\ds \map {g_{N_1 + N_2} } x\)

\(=\)







\(\ds \max \set {\map {u_{1, \paren {N_1 + N_2} } } x, \map {u_{2, \paren {N_1 + N_2} } } x, \ldots, \map {u_{\paren {N_1 + N_2}, \paren {N_1 + N_2} } } x}\)




















\(\ds \)

\(\ge\)







\(\ds \map {u_{N_1, N_1 + N_2} } x\)





Definition of Pointwise Maximum of Real-Valued Functions: General Definition














\(\ds \)

\(>\)







\(\ds \map u x - \epsilon\)





since $N_1 + N_2 > N_2$



Since $\sequence {g_n}_{n \mathop \in \N}$ is increasing, we therefore have: 

$\map {g_n} x > \map u x - \epsilon$
for all $n \ge N_1 + N_2 = N$.
Showing that: 

$\ds \map u x = \lim_{n \mathop \to \infty} \map {g_n} x$
in the case $\map u x < \infty$. 

Now suppose that $\map u x = \infty$. 
We aim to show that for each $M > 0$ there exists $N \in \N$ such that: 

$\map {g_n} x \ge M$
for each $n \ge N$. 
Since: 

$\ds \infty = \lim_{n \mathop \to \infty} \map {u_n} x$
there exists an $N_1 \in \N$ such that: 

$\ds \map {u_n} x \ge M + \frac 1 2$
for each $n \ge N_1$. 
Since: 

$\ds \map {u_n} x = \lim_{k \mathop \to \infty} \map {u_{n, k} } x$
there exists an $N_2 \in \N$ such that: 

$\ds \map {u_{n, k} } x \ge \map {u_n} x - \frac 1 2 \ge M$
for all $k \ge N_2$. 
As before, we have: 














\(\ds \map {g_{N_1 + N_2} } x\)

\(=\)







\(\ds \max \set {\map {u_{1, \paren {N_1 + N_2} } } x, \map {u_{2, \paren {N_1 + N_2} } } x, \ldots, \map {u_{\paren {N_1 + N_2}, \paren {N_1 + N_2} } } x}\)




















\(\ds \)

\(\ge\)







\(\ds \map {u_{N_1, N_1 + N_2} } x\)





Definition of Pointwise Maximum of Real-Valued Functions: General Definition














\(\ds \)

\(>\)







\(\ds M\)





since $N_1 + N_2 > N_2$



Again, since $\sequence {g_n}_{n \mathop \in \N}$ is increasing, we therefore have: 

$\map {g_n} x > M$
for all $n \ge N_1 + N_2 = N$.
Showing that: 

$\ds \map u x = \lim_{n \mathop \to \infty} \map {g_n} x$
in the case $\map u x = \infty$.
$\Box$

Proof of $(3)$
Note from the definition of pointwise supremum, we have that:

$\ds u_{i, n} \le \sup_{k \mathop \in \N} u_{i, k} = u_i$
for each $i \in \N$. 
So:














\(\ds g_n\)

\(=\)







\(\ds \max \set {u_{1, n}, u_{2, n}, \ldots, u_{n, n} }\)




















\(\ds \)

\(\le\)







\(\ds \max \set {u_1, u_2, \ldots, u_n}\)




















\(\ds \)

\(=\)







\(\ds u_n\)





since $\sequence {u_n}_{n \mathop \in \N}$ is increasing



$\blacksquare$





