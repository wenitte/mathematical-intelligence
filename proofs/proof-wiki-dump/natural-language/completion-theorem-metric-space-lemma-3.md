# 

Source: https://proofwiki.org/wiki/Completion_Theorem_(Metric_Space)/Lemma_3

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

$\tilde M = \struct {\tilde A, \tilde d}$ is a completion of $M$.


Proof
We are to show that:

$(1): \quad \tilde M$ is a complete metric space
$(2): \quad A \subseteq \tilde A$
$(3): \quad A$ is dense in $\tilde M$
$(4): \quad \forall x, y \in A : \map {\tilde d} {x, y} = \map d {x, y}$

For $x \in A$, let $\hat x = \tuple {x, x, x, \ldots}$ be the constant sequence with value $x$.
Let $\phi: A \to \tilde A: x = \eqclass {\hat x} \sim$.

We first demonstrate that $(2)$ holds, by showing that $A \subseteq \tilde A$.














\(\ds \map \phi x\)

\(=\)







\(\ds \map \phi y\)














\(\ds \leadsto \ \ \)





\(\ds \eqclass {\hat x} \sim\)

\(=\)







\(\ds \eqclass {\hat y} \sim\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \map d {x, y}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \map d {x, y}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)









Thus:

$A \subseteq \tilde A$
$\Box$

Henceforth we identify $A$ with its isomorphic copy in $\tilde A$ when it is convenient.

Now we demonstrate that $(4)$ holds, by showing that $\phi$ is an injection from $A$ into $\tilde A$.
For any $x, y \in A$:














\(\ds \map {\tilde d} {\eqclass {\hat x} \sim, \eqclass {\hat y} \sim}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map d {x, y}\)




















\(\ds \)

\(=\)







\(\ds \map d {x, y}\)









That is:

$\forall x, y \in A : \map {\tilde d} {x, y} = \map d {x, y}$
$\Box$

Now we demonstrate that $(3)$ holds, by showing that $A$ is dense in $\tilde A$.
Recall that the closure of $A$ is the union of $A$ and the limit points of $A$.
Let $\eqclass {x_n} \sim \in \tilde A$ and $\epsilon \in \R_{>0}$ be arbitrary.
If we can find $x \in A$ such that $\map {\tilde d} {\eqclass {\hat x} \sim, \eqclass {x_n} \sim} < \epsilon$ then we have shown that $A$ is dense in $\tilde A$.
Since $\sequence {x_n}$ is Cauchy, there exists $N \in \N$ such that:

$\forall m, n \ge N: \map d {x_m, x_n} < \epsilon$
Then we have:














\(\ds \map {\tilde d} {\eqclass {\hat x_N} \sim, \eqclass {x_n} \sim}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map d {x_N, x_n}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









and therefore $A$ is dense in $\tilde A$.
$\Box$

Finally we demonstrate that $(1)$ holds, by showing that $\struct {\tilde A, \tilde d}$ is complete.
By the completeness criterion it is sufficient to show that every Cauchy sequence in $\phi \sqbrk A$ converges in $\tilde A$.
Let $\sequence {\hat w_n}$ be a Cauchy sequence in $\phi \sqbrk A$, so each $\hat w_n$ has the form $\tuple {w_n, w_n, w_n, \ldots}$.
Since $\phi$ is an isometry:

$\forall m, n \in \N: \map {\tilde d} {\hat w_n, \hat w_m} = \map d {w_n, w_m}$
Therefore, $\tuple {w_1, w_2, w_3, \ldots}$ is Cauchy in $A$.
Let $W = \sqbrk {\tuple {w_1, w_2, w_3, \ldots} } \in \tilde A$.
We claim that $\sequence {\hat w_n}$ converges to $W$ in $\tilde A$.
Let $\epsilon \in \R_{>0}$ be arbitrary.
Since $\tuple {w_1, w_2, w_3, \ldots}$ is Cauchy in $A$, there exists $N \in \N$ such that for all $m, n \ge N$, we have $\map d {w_n, w_m} < \epsilon$.
Thus for all $n > N$:

$\ds \map {\tilde d} {w_n, W} = \lim_{n \mathop \to \infty} \map d {w_n, W} < \epsilon$
Therefore, $\sequence {\hat w_n} \to W$ as $N \to \infty$, and $\tilde A$ is complete.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice, by way of Completeness Criterion (Metric Spaces).
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.





