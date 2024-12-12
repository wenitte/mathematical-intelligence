# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Convergent_P-adic_Sequence



Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\sequence {x_n} $ be a sequence in $\Q_p$.

The following definitions of the concept of convergent $p$-adic sequence are equivalent:

Definition 1
The sequence $\sequence {x_n}$ converges to the limit $x \in \Q_p$ if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies \norm {x_n - x}_p < \epsilon$
Definition 2
The sequence $\sequence {x_n}$ converges to the limit $x \in \Q_p$ if and only if:

$\sequence {x_n}$ converges to $x$ in the $p$-adic norm
Definition 3
The sequence $\sequence {x_n}$ converges to the limit $x \in \Q_p$ if and only if:

$\sequence {x_n}$ converges to $x$ in the $p$-adic metric
Definition 4
The sequence $\sequence {x_n}$ converges to the limit $x \in \Q_p$ if and only if:

the real sequence $\sequence {\norm {x_n - x}_p }$ converges to $0$ in the reals $\R$


Proof
From P-adic Numbers form Non-Archimedean Valued Field:

the $p$-adic norm is the norm on a division ring.
By definition, the $p$-adic metric is the metric induced by the $p$-adic norm.
From Equivalence of Definitions of Convergence in Normed Division Rings, it follows that 
Definition 2, Definition 3 and Definition 4 are equivalent.

By definition of convergence in a normed division ring, $\sequence {x_n}$ converges to $x$ in the $p$-adic norm if and only if:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: \forall n \in \N: n > N \implies \norm {x_n - x}_p < \epsilon$
So Definition 1 is equivalent to Definition 2.
$\blacksquare$





