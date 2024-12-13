# 

Source: https://proofwiki.org/wiki/Inverse_Integral_Operator_is_Linear_if_Unique

Theorem
Let $T$ be an integral operator.
Let $f$ be an integrable real function on a domain appropriate to $T$.
Let $F = \map T f$ and $G = \map T g$.
Let $T$ have a unique inverse $T^{-1}$.

Then $T^{-1}$ is a linear operator:

$\forall p, q \in \R: \map {T^{-1} } {p F + q G} = p \map {T^{-1} } F + q \map {T^{-1} } G$


Proof
Let:

$x_1 = \map {T^{-1} } F$
$x_2 = \map {T^{-1} } G$
Thus:

$F = \map T {x_1}$
$G = \map T {x_2}$

Then for all $p, q \in \R$:














\(\ds \map T {p x_1 + q x_2}\)

\(=\)







\(\ds p \map T {x_1} + q \map T {x_2}\)





Integral Operator is Linear














\(\ds \)

\(=\)







\(\ds p F + q G\)









and so $x = p F + q G$ is a solution to the equation:

$\map T x = p F + q G$
But this equation has only one solution:

$x = \map {T^{-1} } {p F + q G}$
Thus $p F + q G$ must coincide with the above:

$p \map {T^{-1} } F + q \map {T^{-1} } G = \map {T^{-1} } {p F + q G}$
which proves that $T^{-1}$ is a linear operator.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators: Chapter $2$: $\S 1.4$: The inverse of an operator
1968: Peter D. Robinson: Fourier and Laplace Transforms ... (previous) ... (next): $\S 1.1$. The Idea of an Integral Transform




