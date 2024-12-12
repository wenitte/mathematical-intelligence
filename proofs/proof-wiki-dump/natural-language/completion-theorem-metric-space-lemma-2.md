# 

Source: https://proofwiki.org/wiki/Completion_Theorem_(Metric_Space)/Lemma_2


This article needs to be linked to other articles.In particular: reference(s) for proof of $M2$You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


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

$\tilde d$ is a metric on $\tilde A$.


Proof
To prove $\tilde d$ is a metric, we verify that it satisfies the metric space axioms.


Proof of Metric Space Axiom $(\text M 4)$
Let $\map {\tilde d} {\eqclass {x_n} \sim, \eqclass {y_n} \sim} = \infty$.
Then $\sequence {x_n}$ and $\sequence {y_n}$ cannot both be Cauchy.
So $\map {\tilde d} {\eqclass {x_n} \sim, \eqclass {y_n} \sim} < \infty$ for $\eqclass {x_n} \sim, \eqclass {y_n} \sim \in \tilde A$.
By definition of $\tilde d$, for any $\eqclass {x_n} \sim, \eqclass {y_n} \sim \in \tilde A$, $\map {\tilde d} {\eqclass {x_n} \sim, \eqclass {y_n} \sim}$ must be a limit point of $R_{\ge 0}$.
The closure of $\R_{\ge 0}$ is $\R_{\ge 0}$, so $\tilde d: \tilde A \times \tilde A \to \R_{\ge 0}$.

So Metric Space Axiom $(\text M 4)$ holds for $\tilde d$.


Proof of Metric Space Axiom $(\text M 1)$
Let $\map {\tilde d} {\eqclass {x_n} \sim, \eqclass {y_n} \sim} = 0$, which means that:

$\ds \lim_{n \mathop \to \infty} \map d {x_n, y_n} = 0$
So by definition:

$\sequence {x_n} \sim \sequence {y_n}$
and:

$\eqclass {x_n} \sim = \eqclass {y_n} \sim$
As $d$ is a metric, we also find immediately:

$\map {\tilde d} {\eqclass {x_n} \sim, \eqclass {x_n} \sim} = 0$

So Metric Space Axiom $(\text M 1)$ holds for $\tilde d$.
$\Box$


Proof of Metric Space Axiom $(\text M 3)$
We have that:














\(\ds \map {\tilde d} {\eqclass {x_n} \sim, \eqclass {y_n} \sim}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map d {x_n, y_n}\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map d {y_n, x_n}\)





$d$ is a Metric














\(\ds \)

\(=\)







\(\ds \map {\tilde d} {\eqclass {y_n} \sim, \eqclass {x_n} \sim}\)









So Metric Space Axiom $(\text M 3)$ holds for $\tilde d$.
$\Box$


Proof of Metric Space Axiom $(\text M 2)$: Triangle Inequality
We have that:














\(\ds \map {\tilde d} {\eqclass {x_n} \sim, \eqclass {z_n} \sim}\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map d {x_n, z_n}\)




















\(\ds \)

\(\le\)







\(\ds \lim_{n \mathop \to \infty} \set{\map d {x_n, y_n} + \map d {y_n, z_n} }\)





$d$ is a metric, and using elementary properties of limits (Reference?)














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map d {x_n, y_n} +  \lim_{n \mathop \to \infty} \map d {y_n, z_n}\)





Sum Rule for Real Sequences














\(\ds \)

\(=\)







\(\ds \map {\tilde d} {\eqclass {x_n} \sim, \eqclass {y_n} \sim} + \map {\tilde d} {\eqclass {y_n} \sim, \eqclass {z_n} \sim}\)









So Metric Space Axiom $(\text M 2)$: Triangle Inequality holds for $\tilde d$.
$\Box$

Thus $\tilde d$ satisfies all the metric space axioms and so is a metric.
$\blacksquare$





