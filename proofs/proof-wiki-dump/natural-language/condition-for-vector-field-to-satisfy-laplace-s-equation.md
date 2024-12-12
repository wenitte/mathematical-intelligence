# 

Source: https://proofwiki.org/wiki/Condition_for_Vector_Field_to_satisfy_Laplace%27s_Equation



Theorem
Let $\mathbf V$ be a vector field over a region of space $R$.
Then:

$\mathbf V$ is both solenoidal and conservative
if and only if:

$\mathbf V$ is the gradient of a scalar field $F$ over $R$ which satisfies Laplace's equation:
$\nabla^2 F \equiv 0$


Proof
Sufficient Condition
Let $\mathbf V$ be both solenoidal and conservative.
Then from Vector Field is Expressible as Gradient of Scalar Field iff Conservative:

$\mathbf V = \grad F$
for some scalar field $F$ over $R$.
Because $\mathbf V$ is solenoidal, we have:

$\operatorname {div} \mathbf V = 0$
that is:

$\operatorname {div} \grad F = 0$
Hence by Laplacian on Scalar Field is Divergence of Gradient:

$\nabla^2 F = 0$
where $\nabla^2$ is the Laplacian on $F$.
This holds throughout $R$, and so the equality is an equivalence:

$\nabla^2 F \equiv 0$
$\Box$


Necessary Condition
Let $\mathbf V$ be the gradient of a scalar field $F$ over $R$ which satisfies Laplace's equation:

$\nabla^2 F \equiv 0$
Thus $F$ is such that:

$\mathbf V = \grad F$
and from Vector Field is Expressible as Gradient of Scalar Field iff Conservative it follows that $\mathbf V$ is conservative.
Then by Laplacian on Scalar Field is Divergence of Gradient:

$\operatorname {div} \grad F = 0$
That is:

$\operatorname {div} \mathbf V = 0$
and so by definition $\mathbf V$ is solenoidal.
$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $7$. The Classification of Vector Fields: $\text {(i)}$




