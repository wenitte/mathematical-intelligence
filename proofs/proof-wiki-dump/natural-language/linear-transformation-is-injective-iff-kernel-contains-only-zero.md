# 

Source: https://proofwiki.org/wiki/Linear_Transformation_is_Injective_iff_Kernel_Contains_Only_Zero



Theorem
Let $\mathbf V, \mathbf V'$ be vector spaces, with respective zeroes $\mathbf 0, \mathbf 0'$.
Let $T: \mathbf V \to \mathbf V'$ be a linear transformation.

Then:

$T$ is injective if and only if $\map \ker T = \set {\mathbf 0}$
where:

$\mathbf 0$ is the zero of the domain of $T$
$\map \ker T$ is the kernel of $T$.


Corollary
Let $\mathbf A$ be in the matrix space $\map {\mathbf M_{m, n} } \R$
Then the mapping: 

$\R^n \to \R^m: \mathbf x \mapsto \mathbf {A x}$
is injective if and only if:

$\map {\mathrm N} {\mathbf A} = \set {\mathbf 0}$
where $\map {\mathrm N} {\mathbf A}$ is the null space of $\mathbf A$.


Proof
Sufficient Condition
That $\mathbf 0 \in \map \ker T$ follows from Kernel of Linear Transformation contains Zero Vector.
That $\map \ker T$ is a singleton follows from the definition of injection.
$\Box$


Necessary Condition
Let $\map \ker T = \set {\mathbf 0}$.
Consider:

$\map T {\mathbf x} = \mathbf b$
where $\mathbf b$ is in the codomain of $T$.
Let this equation have a solution:

$\mathbf x = \mathbf x_1 \in \mathbf V$
Suppose $\mathbf x = \mathbf x_2 \in \mathbf V$ is also a solution.
Clearly:

$\map T {\mathbf x_1} = \map T {\mathbf x_2}$
Observe that:














\(\ds \map T {\mathbf x_1}\)

\(=\)







\(\ds \mathbf b\)














\(\ds \land \ \ \)





\(\ds \map T {\mathbf x_2}\)

\(=\)







\(\ds \mathbf b\)














\(\ds \leadsto \ \ \)





\(\ds \map T {\mathbf x_1} - \map T {\mathbf x_2}\)

\(=\)







\(\ds \mathbf b - \mathbf b\)




















\(\ds \)

\(=\)







\(\ds \mathbf 0'\)














\(\ds \leadsto \ \ \)





\(\ds \map T {\mathbf x_1 - \mathbf x_2}\)

\(=\)







\(\ds \mathbf 0'\)





Definition of Linear Transformation on Vector Space








\(\ds \leadsto \ \ \)





\(\ds \paren {\mathbf x_1 - \mathbf x_2}\)

\(\in\)







\(\ds \map \ker T\)





Definition of Kernel of Linear Transformation








\(\ds \leadsto \ \ \)





\(\ds \mathbf x_1 - \mathbf x_2\)

\(=\)







\(\ds \mathbf 0\)





Definition of Set Equality: recall $\map \ker T = \set {\mathbf 0}$








\(\ds \leadsto \ \ \)





\(\ds \mathbf x_1\)

\(=\)







\(\ds \mathbf x_2\)









As $\mathbf x_1, \mathbf x_2$ were arbitrary:

$\forall \mathbf x_1,\mathbf x_2 \in \mathbf V: \map T {\mathbf x_1} = \map T {\mathbf x_2} \implies \mathbf x_1 = \mathbf x_2$
and the result follows from the definition of injectivity.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): Appendix $\text{A}$ Preliminaries: $\S 1.$ Linear Algebra




