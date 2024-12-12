# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_in_Set_of_Integers

Theorem
Let $\sequence{x_n}_{n \in \N}$ be a sequence in the set $\Z$ of integers considered as a subspace of the real number line $\R$ under the Euclidean metric.
Then $\sequence{x_n}_{n \in \N}$ converges in $\R$ to a limit if and only if:

$\exists k \in \N: \forall m \in \N: m > k: x_m = x_k$
That is, if and only if the sequence reaches some value of $\Z$ and "stays there".


Corollary
Let $\sequence {x_n}_{n \mathop \in \N}$ be a sequence of distinct terms in the set $\Z$.
Then $\sequence {x_n}_{n \mathop \in \N}$ is not convergent.


Proof
Suppose $\sequence{x_n}_{n \in \N}$ converges to a limit $l$.
Consider the open set in $\R$:

$U := \openint{l - \dfrac 1 2}{l + \dfrac 1 2}$
Then $\forall x \in \Z: x \in U \implies x = l$
It follows by definition of convergence that:

$\exists k \in \N: \forall m \in \N: m > k: x_m = x_k$
where $x_k = l$.

Now suppose that:

$\exists k \in \N: \forall m \in \N: m > k: x_m = x_k$
Then trivially $\sequence{x_n}_{n \in \N}$ converges to the limit $x_k$.
$\blacksquare$





