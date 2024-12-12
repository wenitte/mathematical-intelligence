# 

Source: https://proofwiki.org/wiki/Fr%C3%A9chet_Space_(Functional_Analysis)_is_Complete_Metric_Space



Theorem
Let $\struct {\R^\omega, d}$ be the Fréchet space on $\R^\omega$.
Then $\struct {\R^\omega, d}$ is a complete metric space.


Proof
From Fréchet Space (Functional Analysis) is Metric Space, $\struct {\R^\omega, d}$ is a metric space.
It remains to be demonstrated that $\struct {\R^\omega, d}$ is complete.
Let $\sequence {x^{\paren n}}_{n \mathop \in \N}$ be an arbitrary Cauchy sequence in $\R^\omega$, where as an exception we denote the index of the Cauchy sequence as a superscript.
Recall that each $\forall n \in \N: x^{\paren n} \in \R^\omega$ itself is a sequence in $\R$ by the definition of $\R^\omega$.
More precisely, each $x^{\paren n} \in \R^\omega$ can be written as

$x^{\paren n} := \sequence { {x_i}^{\paren n} }_{i \mathop \in \N}$
where ${x_i}^{\paren n} \in \R$ for all $i \in \N$.


Lemma
For each $j \in \N$, the real sequence $ \sequence { {x_j}^{\paren n}}_{n \mathop \in \N} $ is convergent.


Proof
Let $j \in \N$.
In view of Cauchy's convergence criterion, it suffices to show that $\sequence { {x_j}^{\paren n}} _{n \mathop \in \N} $ is a Cauchy sequence in $\R$.
Let $\epsilon > 0$ be arbitrary.
Since $ \sequence {x^{\paren n}} _{n\in\N} $ is a Cauchy sequence in $\R^\omega$, there is a $N \in \N$ such that:

$\forall m, n \in \N: m, n \ge N: \map d {x^{\paren m}, x^{\paren n}} < \dfrac {2^{-j} \epsilon} {1 + \epsilon}$

Thus:

$\dfrac {2^{-j} \size {{x_j}^{\paren m} - {x_j}^{\paren n}} } {1 + \size {{x_j}^{\paren m} - {x_j}^{\paren n}} } \le \sum_{i \mathop \in \N} \dfrac {2^{-i} \size {{x_i}^{\paren m} - {x_i}^{\paren n}} } {1 + \size {{x_i}^{\paren m} - {x_i}^{\paren n}} } = \map d {x_m, x_n} < \dfrac {2^{-j} \epsilon} {1 + \epsilon}$
which implies:

$\size { {x_j}^{\paren m} - {x_j}^{\paren n}} < \epsilon$
Altogether:

$\forall m, n \in \N: m, n \ge N: \size {{x_j}^{\paren m} - {x_j}^{\paren n}} < \epsilon$
$\Box$

Let $\ds x^{\paren \infty} := \sequence {{x_i}^{\paren \infty}}_{i \mathop \in \N} \in \R^\omega$, where $\ds {x_i}^{\paren \infty} := \lim_{n \mathop \to \infty} {x_i}^{\paren n}$ exists for each $i \in \N$ by the preceding lemma.
It remains to show that $x^{\paren \infty}$ is the limit of $\sequence {x^{\paren n}}_{n \in \N}$ in $\R^\omega$.
To this end, let $\epsilon > 0$ be arbitrary.
For each $i \in \N$, there is a $N_i \in \N$ such that:

$\forall n \ge N_i: \size { {x_i}^{\paren \infty} - {x^{\paren n}} _i} < \dfrac \epsilon 4$
Furthermore, $M \in \N$ be so large that $\dfrac 1 {2^M} < \dfrac \epsilon 2$.
Finally, let $N := \max \set {N_0, N_1, \ldots, N_M}$.
Then, for all $n \ge N$:














\(\ds d (x^{\paren n}, x^{\paren \infty})\)

\(=\)







\(\ds \sum_{i \mathop = 0}^M \dfrac {2^{-i} \lvert {x_i}^{\paren n} - {x_i}^{\paren \infty}\rvert} {1 + \lvert {x_i}^{\paren n} - {x_i}^{\paren \infty}\rvert} + \sum_{i \mathop = M+1}^\infty \dfrac {2^{-i} \lvert {x_i}^{\paren n} - {x_i}^{\paren \infty}\rvert} {1 + \lvert {x_i}^{\paren n} - {x_i}^{\paren \infty}\rvert}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{i \mathop = 0}^M 2^{-i} \lvert {x_i}^{\paren n} - {x_i}^{\paren \infty} \rvert + \sum_{i \mathop = M + 1}^\infty 2^{-i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^M 2^{-i} \lvert {x_i}^{\paren n} - {x_i}^{\paren \infty}\rvert + \frac 1 {2^M}\)




















\(\ds \)

\(\le\)







\(\ds \map {\sum_{i \mathop = 0}^M} {2^{-i} \dfrac \epsilon 4}  + \frac 1 {2^M}\)




















\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $37$. Fréchet Space: $7$




