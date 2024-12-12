# 

Source: https://proofwiki.org/wiki/Derivative_Operator_on_Continuously_Differentiable_Function_Space_with_Supremum_Norm_is_not_Continuous

Theorem
Let $I = \closedint 0 1$ be a closed real interval.
Let $\map C I$ be the real-valued, continuous on $I$ function space.
Let $\map {C^1} I$ be the continuously differentiable function space.
Let $x \in \map {C^1} I$ be a continuously differentiable real-valued function.
Let $D : \map {C^1} I \to \map C I$ be the derivative operator such that:

$\forall t \in \closedint 0 1 : \map {Dx} t := \map {x'} t$
Suppose $\map C I$ and $\map {C^1} I$ are equipped with the supremum norm.

Then $D$ is not continuous.


Proof
Aiming for a contradiction, suppose $D$ is continuous.
We have that the Derivative Operator is Linear Mapping.
By Continuity of Linear Transformation between Normed Vector Spaces:

$\exists M \in \R_{> 0} : \forall x \in \map {C^1} I : \norm {\map D x}_\infty \le M \norm x_\infty$
Suppose $x = t^n$ with $n \in \N$.
Then:

$\norm x_\infty = \norm {t^n}_\infty = 1$
$\norm {x'}_\infty = \norm {n t^{n-1}}_\infty = n$
Hence:














\(\ds \norm {D x}_\infty\)

\(=\)







\(\ds \norm {x'}_\infty\)




















\(\ds \)

\(=\)







\(\ds n\)




















\(\ds \)

\(\le\)







\(\ds M \norm x_\infty\)




















\(\ds \)

\(=\)







\(\ds M \cdot 1\)









In other words:

$\forall n \in \N : n \le M$
But $M$ is finite.
This is a contradiction.
Hence, $D$ is not continuous.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




