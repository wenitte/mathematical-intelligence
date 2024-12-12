# 

Source: https://proofwiki.org/wiki/Characterization_of_Spectrum_of_Bounded_Linear_Operator_in_Hilbert_Space_in_terms_of_Approximate_Eigenvalues



Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $T : \HH \to \HH$ be a bounded linear operator.
Let $\map \sigma T$ be the spectrum of $T$.

Then $\lambda \in \map \sigma T$ if and only if $\lambda$ is an approximate eigenvalue of $T$ or $\overline \lambda$ is an eigenvalue of $T^\ast$. 


Corollary
Let $T : \HH \to \HH$ be a self-adjoint bounded linear operator.
Then $\lambda \in \map \sigma T$ if and only if $\lambda$ is an approximate eigenvalue of $T$.


Proof
Sufficient Condition
Suppose that $\lambda$ is an approximate eigenvalue of $T$.
Then there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $\HH$ such that:

$\norm {x_n} = 1$ for each $n \in \N$
and:

$\norm {T x_n - \lambda x_n} \to 0$ as $n \to \infty$.
By Characterization of Injective Linear Transformations with Closed Range: Corollary, we either have:

$T - \lambda I$ is not injective or $\Rng {T - \lambda I}$ is not closed.
If $\Rng {T - \lambda I}$ is not closed then $\Rng {T - \lambda I} \ne \HH$, so $T - \lambda I$ is not surjective in this case.
Either way, $\lambda \in \map \sigma T$. 

Now suppose that $\overline \lambda$ is an eigenvalue of $T^\ast$. 
That is:

$\map \ker {T^\ast - \overline \lambda I} \ne \set { {\mathbf 0}_\HH}$
From Kernel of Linear Transformation is Orthocomplement of Image of Adjoint, we have:

$\map \ker {T^\ast - \overline \lambda I} = \paren {\Rng {\paren {T^\ast - \overline \lambda I}^\ast} }^\bot = \Rng {T - \lambda I}^\bot$
from Adjoint is Involutive.
So:

$\Rng {T - \lambda I}^\bot \ne \set { {\mathbf 0}_\HH}$
From Linear Subspace Dense iff Zero Orthocomplement, we therefore have:

$\Rng {T - \lambda I}$ is not everywhere dense.
In particular, $\Rng {T - \lambda I} \ne \HH$, so $\lambda \in \map \sigma T$.
$\Box$


Necessary Condition
Suppose that $\lambda \in \map \sigma T$.
From Spectrum of Adjoint of Bounded Linear Operator, we have $\overline \lambda \in \map \sigma {T^\ast}$. 
Suppose that $\lambda$ is not an approximate eigenvalue of $T$.
Then from Characterization of Injective Linear Transformations with Closed Range: Corollary, $T - \lambda I$ is injective and $\Rng {T - \lambda I}$ is closed.
From Kernel of Linear Transformation is Orthocomplement of Image of Adjoint, we have:

$\set { {\mathbf 0}_\HH} = \map \ker {T - \lambda I} = \paren {\Rng {T^\ast - \overline \lambda I} }^\bot$
Hence from Linear Subspace Dense iff Zero Orthocomplement, we therefore have:

$\Rng {T^\ast - \overline \lambda I}$ is everywhere dense.
Since $\Rng {T^\ast - \overline \lambda I}$ is closed, we then have:

$\Rng {T^\ast - \overline \lambda I} = \HH$
Aiming for a contradiction, suppose $\map \ker {T^\ast - \overline \lambda I} = \set { {\mathbf 0}_\HH}$.
In this case, $T^\ast - \overline \lambda I$ is a bijective bounded linear operator.
From the Banach Isomorphism Theorem, we then have that $T^\ast - \overline \lambda I$ is invertible as a bounded linear transformation. 
This contradicts that $\lambda \not \in \map \sigma T$.
Hence we have $\map \ker {T^\ast - \overline \lambda I} \ne \set { {\mathbf 0}_\HH}$.
Hence $\overline \lambda$ is an eigenvalue of $T^\ast$.
$\blacksquare$





