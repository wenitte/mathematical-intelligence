# 

Source: https://proofwiki.org/wiki/Completion_Theorem_(Metric_Space)/Lemma_1

Lemma
Let $M = \struct {A, d}$ be a metric space.
Let $\CC \sqbrk A$ denote the set of all Cauchy sequences in $A$.
Define the equivalence relation $\sim$ on $\CC \sqbrk A$ by:

$\ds \sequence {x_n} \sim \sequence {y_n} \iff \lim_{n \mathop \to \infty} \map d {x_n, y_n} = 0$

Denote the equivalence class of $\sequence {x_n} \in \CC \sqbrk A$ by $\eqclass {x_n} \sim$.
Denote the set of equivalence classes under $\sim$ by $\tilde A$.
Define $\tilde d: \tilde A \to \R_{\ge 0}$ by:

$\ds \map {\tilde d} {\eqclass {x_n} \sim, \eqclass {y_n} \sim} = \lim_{n \mathop \to \infty} \map d {x_n, y_n}$
Then:

$\tilde d$ is well-defined on $\tilde A$.


Proof
Let $\sequence {x_n}$, $\sequence {\hat x_n}$, $\sequence {y_n}$, $\sequence {\hat y_n} \in \CC \sqbrk A$ be such that:

$\sequence {x_n} \sim \sequence {\hat x_n}$
$\sequence {y_n} \sim \sequence {\hat y_n}$
We have:














\(\ds \map d {x_n, y_n} - \map d {\hat x_n, \hat y_n}\)

\(\le\)







\(\ds \map d {x_n, \hat x_n} + \map d {\hat x_n, y_n} - \map d {\hat x_n, \hat y_n}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \map d {x_n, \hat x_n} + \map d {\hat x_n, \hat y_n} + \map d {\hat y_n, y_n} - \map d {\hat x_n, \hat y_n}\)





Metric Space Axiom $(\text M 2)$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \map d {x_n, \hat x_n} + \map d {\hat y_n, y_n}\)









By an identical argument, we can also show that:

$\map d {\hat x_n, \hat y_n} - \map d {x_n, y_n} \le \map d {x_n, \hat x_n} + \map d {\hat y_n, y_n}$
and therefore:

$\ds 0 \le \size {\map d {x_n, y_n} - \map d {\hat x_n, \hat y_n} } \le \map d {x_n, \hat x_n} + \map d {\hat y_n, y_n}$
Passing to the limit $n \to \infty$ and using the Combination Theorem for Sequences we have shown that:
$\ds \lim_{n \mathop \to \infty} \map d {x_n, y_n} = \lim_{n \mathop \to \infty} \map d {\hat x_n, \hat y_n}$
But this precisely means that:

$\map {\tilde d} {\eqclass {x_n} \sim, \eqclass {y_n} \sim} = \map {\tilde d} {\eqclass {\hat x_n} \sim, \eqclass {\hat y_n} \sim}$
$\blacksquare$





