# 

Source: https://proofwiki.org/wiki/Analytic_Function_on_Banach_Space_is_Continuous

Theorem
Let $U$ be an open subset of $\C$.
Let $\struct {X, \norm {\, \cdot \,} }$ be a Banach space over $\C$.
Let $f : U \to X$ be an analytic function.

Then $f$ is continuous.


Proof
Let $x \in U$. 
Since $f : U \to X$ is analytic function, the limit:

$\ds \lim_{y \mathop \to x} \frac {\map f y - \map f x} {y - x} = \map {f'} x$ exists.
We have, from Norm Axiom $\text N 2$: Positive Homogeneity:

$\ds \norm {\map f y - \map f x} = \cmod {y - x} \norm {\frac {\map f y - \map f x} {y - x} }$
From Modulus of Limit: Normed Vector Space, we have:

$\ds \lim_{y \mathop \to x} \norm {\frac {\map f y - \map f x} {y - x} } = \norm {\map {f'} x}$
We also have:

$\ds \lim_{y \mathop \to x} \cmod {y - x} = 0$
So from Product Rule for Complex Sequences, we have:

$\ds \lim_{y \mathop \to x} \norm {\map f y - \map f x} = 0$
So, we have that $f$ is continuous at $x$.
Since $x \in U$ was arbitrary, we have that $f$ is continuous.
$\blacksquare$





