# 

Source: https://proofwiki.org/wiki/Condition_for_Linear_Transformation



Theorem
Let $G$ be a unitary $R$-module.
Let $H$ be an $R$-module.
Let $\phi: G \to H$ be a mapping.

Then $\phi$ is a linear transformation if and only if:

$\forall x, y \in G: \forall \lambda, \mu \in R: \map \phi {\lambda x + \mu y} = \lambda \map \phi x + \mu \map \phi y$


Proof
Sufficient Condition









\(\ds \forall x, y \in G: \forall \lambda, \mu \in R: \, \)



\(\ds \map \phi {\lambda x + \mu y}\)

\(=\)







\(\ds \map \phi {\lambda x} + \map \phi {\mu y}\)





Definition of Linear Transformation: condition $(1)$














\(\ds \)

\(=\)







\(\ds \lambda \map \phi x + \mu \map \phi y\)





Definition of Linear Transformation: condition $(2)$



$\Box$


Necessary Condition
Let $\phi$ be such that the condition is satisfied.
Let $\lambda = \mu = 1_R$.
Then:

$\map \phi {x + y} = \map \phi x + \map \phi y$
Now let $\mu = 0_R$.
Then:

$\map \phi {\lambda x} = \lambda \map \phi x$
Thus the conditions are fulfilled for $\phi$ to be a homomorphism, that is, a linear transformation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations




