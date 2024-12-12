# 

Source: https://proofwiki.org/wiki/Condition_for_Vector_Field_to_satisfy_Poisson%27s_Equation



Theorem
Let $\mathbf V$ be a vector field over a region of space $R$.
Then:

$\mathbf V$ is conservative but not solenoidal
if and only if:

$\mathbf V$ is the gradient of a scalar field $F$ over $R$ which satisfies Poisson's equation over $R$:
$\nabla^2 F = \phi$
where $\phi$ is a function which is not identically zero.


Proof
Sufficient Condition
Let $\mathbf V$ be conservative but not solenoidal.
From Vector Field is Expressible as Gradient of Scalar Field iff Conservative:

$\mathbf V = \grad F$
for some scalar field $F$ over $R$.
Because $\mathbf V$ is not solenoidal, we have:

$\exists \mathbf v \in R: \operatorname {div} \mathbf v \ne 0$
that is:

$\operatorname {div} \grad F \ne 0$
for at least some $\mathbf v \in R$.
Hence by Laplacian on Scalar Field is Divergence of Gradient:

$\nabla^2 F = \phi$
where:

$\phi$ is not identically zero
$\nabla^2$ is the Laplacian on $F$.
Hence $F$ satisfies Poisson's equation.
$\Box$


Necessary Condition
Let $\mathbf V$ be the gradient of a scalar field $F$ over $R$ which satisfies Poisson's equation:

$\nabla^2 F = \phi$
where $\phi$ is not identically zero.
Thus $F$ is such that:

$\mathbf V = \grad F$
and from Vector Field is Expressible as Gradient of Scalar Field iff Conservative it follows that $\mathbf V$ is conservative.
Then by Laplacian on Scalar Field is Divergence of Gradient:

$\exists \mathbf v \in R: \operatorname {div} \grad F \ne 0$
That is:

$\exists \mathbf v \in R: \operatorname {div} \mathbf V \ne 0$
and so by definition $\mathbf V$ is specifically not solenoidal.
$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $7$. The Classification of Vector Fields: $\text {(ii)}$




