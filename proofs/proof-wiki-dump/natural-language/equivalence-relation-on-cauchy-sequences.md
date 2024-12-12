# 

Source: https://proofwiki.org/wiki/Equivalence_Relation_on_Cauchy_Sequences

Lemma
Let $\struct {X, d}$ be a metric space.
Let $\CC \sqbrk X$ denote the set of all Cauchy sequences of elements from $X$.
Let a relation $\sim$ be defined on $\CC \sqbrk X$ by:

$\ds \sequence {x_n} \sim \sequence {y_n}  \iff \lim_{n \mathop \to \infty} \map d {x_n, y_n} = 0$

Then $\sim$ is an equivalence relation on $\CC \sqbrk X$.


Proof
We must show that $\sim$ is

reflexive,
symmetric and
transitive
on $\CC \sqbrk X$.
To this end, let $\sequence {x_n}, \sequence {y_n}, \sequence {z_n} \in \CC \sqbrk X$ be arbitrary.

For each $n \in \N$ we have that $\map d {x_n, x_n} = 0$ by Metric Space Axiom $(\text M 1)$.
Therefore $\ds \lim_{n \mathop \to \infty} \map d {x_n, x_n} = 0$.
This shows that $\sequence {x_n} \sim \sequence {x_n}$.
Thus $\sim$ is reflexive.
$\Box$

By Metric Space Axiom $(\text M 3)$, $\map d {x_n, y_n} = \map d {y_n, x_n}$ for each $n \in \N$.
Therefore:

$\ds \lim_{n \mathop \to \infty} \map d {x_n, y_n} = \lim_{n \mathop \to \infty} \map d {y_n, x_n}$
So $\sequence {x_n} \sim \sequence {y_n}$ implies that $\sequence {y_n} \sim \sequence {x_n}$.

Thus $\sim$ is symmetric.
$\Box$

Finally, by Metric Space Axiom $(\text M 2)$: Triangle Inequality, $\map d {x_n, z_n} \le \map d {x_n, y_n} + \map d {y_n, z_n}$ for each $n \in \N$.
Therefore, by the sum rule for limits of sequences:

$\ds \lim_{n \mathop \to \infty} \map d {x_n, z_n} \le \lim_{n \mathop \to \infty} \map d {x_n, y_n} + \lim_{n \mathop \to \infty} \map d {y_n, z_n}$
Thus $\sequence {x_n} \sim \sequence {y_n}$ and $\sequence {y_n} \sim \sequence {z_n}$ together imply that $\sequence {x_n} \sim \sequence {z_n}$.

Thus $\sim$ is transitive.
$\Box$

So $\sim$ is shown to be reflexive, symmetric and transitive, and therefore an equivalence relation on $\CC \sqbrk X$.
$\blacksquare$





