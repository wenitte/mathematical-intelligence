# 

Source: https://proofwiki.org/wiki/Derivative_Operator_on_Continuously_Differentiable_Function_Space_with_C%5E1_Norm_is_Continuous

Theorem
Let $I = \closedint 0 1$ be a closed real interval.
Let $\map C I$ be the real-valued, continuous on $I$ function space.
Let $\map {C^1} I$ be the continuously differentiable function space.
Let $x \in \map {C^1} I$ be a continuoulsly differentiable real-valued function.
Let $D : \map {C^1} I \to \map \CC I$ be the derivative operator such that:

$\forall t \in \closedint 0 1 : \map {D x} t := \map {x'} t$
Suppose $\map C I$ and $\map {C^1} I$ are equipped with $C^0$ and $C^1$ norms respectively

Then $D$ is continuous.


Proof













\(\ds \norm {D x}_\infty\)

\(=\)







\(\ds \norm {x'}_\infty\)




















\(\ds \)

\(\le\)







\(\ds \norm {x'}_\infty + \norm x_\infty\)




















\(\ds \)

\(=\)







\(\ds \norm x_{1, \infty}\)









We have that the Derivative Operator is Linear Mapping.
By definition and Continuity of Linear Transformation between Normed Vector Spaces, $D$ is continuous.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.3$: The normed space $\map {CL} {X,Y}$




