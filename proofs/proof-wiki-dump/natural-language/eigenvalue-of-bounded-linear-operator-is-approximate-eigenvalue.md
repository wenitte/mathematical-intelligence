# 

Source: https://proofwiki.org/wiki/Eigenvalue_of_Bounded_Linear_Operator_is_Approximate_Eigenvalue

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $T : \HH \to \HH$ be a bounded linear operator.
Let $\lambda \in \C$ be an eigenvalue of $T$.

Then $\lambda$ is an approximate eigenvalue of $T$.


Proof
Since $\lambda$ is an eigenvalue of $T$, there exists $y \in \HH$ with $y \ne {\mathbf 0}_\HH$ such that:

$T y = \lambda y$
Setting:

$\ds x_n = \frac y {\norm y}$
we have $\norm {x_n} = 1$ by Norm Axiom $\text N 2$: Positive Homogeneity and:

$T x_n = \lambda x_n$
We then have:

$\norm {T x_n - \lambda x_n} = 0$ for each $n \in \N$.
So:

$\norm {T x_n - \lambda x_n} \to 0$
Hence $\lambda$ is an approximate eigenvalue of $T$.
$\blacksquare$





