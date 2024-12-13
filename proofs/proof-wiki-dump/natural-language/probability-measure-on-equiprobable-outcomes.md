# 

Source: https://proofwiki.org/wiki/Probability_Measure_on_Equiprobable_Outcomes

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be an equiprobability space.
Let $\card \Omega = n$.
Then:

$\forall \omega \in \Omega: \map \Pr \omega = \dfrac 1 n$
$\forall A \subseteq \Omega: \map \Pr A = \dfrac {\card A} n$.


Proof
By definition, $\map \Pr {\omega_i} = \map \Pr {\omega_j}$ for all $\omega_i, \omega_j \in \Omega$.
So let $\map \Pr {\omega_i} = p$.

Also, by definition of probability measure, we have:

$\map \Pr \Omega = 1$

We have that $\set {\omega_i} \cap \set {\omega_j} = \O$ when $i \ne j$ and so, by definition of definition of probability measure:

$\map \Pr {\set {\omega_i} \cup \set {\omega_j} } = \map \Pr {\set {\omega_i} } + \map \Pr {\set {\omega_j} }$

Using the fact that $\ds \Omega = \bigcup_{i \mathop = 1}^n \set {\omega_i}$:

$\ds \map \Pr \Omega = \sum_{i \mathop = 1}^n \map \Pr {\set {\omega_i} } = \sum_{i \mathop = 1}^n p = n p$
But we have that $\map \Pr \Omega = 1$, and so $1 = n p$.
Hence:

$\forall \omega \in \Omega: \map \Pr \omega = \dfrac 1 n$

Now consider $A \subseteq \Omega$.
Let the cardinality of $A$ be $k$, that is $\card A = k$.
Thus:

$\ds \map \Pr A = \sum_i \map \Pr {\omega_i} \sqbrk {\omega_i \in A}$
where $\sqbrk {\omega_i \in A}$ uses Iverson's convention.
Hence:

$\map \Pr A = k p$
and so:

$\map \Pr A = \dfrac {\card A} n$
$\blacksquare$





