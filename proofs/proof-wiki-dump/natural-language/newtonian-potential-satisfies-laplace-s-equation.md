# 

Source: https://proofwiki.org/wiki/Newtonian_Potential_satisfies_Laplace%27s_Equation

Theorem
Let $R$ be a region of space.
Let $S$ be a Newtonian potential over $R$ defined as:

$\forall \mathbf r = x \mathbf i + y \mathbf j + z \mathbf k \in R: \map S {\mathbf r} = \dfrac k r$
where:

$\tuple {\mathbf i, \mathbf j, \mathbf k}$ is the standard ordered basis on $R$
$\mathbf r = x \mathbf i + y \mathbf j + z \mathbf k$ is the position vector of an arbitrary point in $R$ with respect to the origin
$r = \norm {\mathbf r}$ is the magnitude of $\mathbf r$
$k$ is some predetermined constant.

Then $S$ satisfies Laplace's equation:

$\nabla^2 S = 0$
where $\nabla^2$ denotes the Laplacian.


Proof
From Gradient of Newtonian Potential:

$\grad S = -\dfrac {k \mathbf r} {r^3}$
where $\grad$ denotes the gradient operator.

Then:














\(\ds \operatorname {div} \grad S\)

\(=\)







\(\ds \map {\operatorname {div} } {-\dfrac {k \mathbf r} {r^3} }\)





where $\operatorname {div}$ denotes divergence














\(\ds \)

\(=\)







\(\ds \nabla \cdot \paren {-\dfrac {k \mathbf r} {r^3} }\)





Divergence Operator on Vector Space is Dot Product of Del Operator














\(\ds \)

\(=\)







\(\ds -k \paren {\mathbf i \dfrac \partial {\partial x} + \mathbf j \dfrac \partial {\partial y} + \mathbf k \dfrac \partial {\partial z} } \cdot {\dfrac {x \mathbf i + y \mathbf j + z \mathbf k} {\paren {x^2 + y^2 + z^2}^{3/2} } }\)





Definition of Del Operator














\(\ds \)

\(=\)







\(\ds 0\)





Power Rule for Derivatives and tedious messy algebra








\(\ds \leadsto \ \ \)





\(\ds \nabla^2 S\)

\(=\)







\(\ds 0\)





Definition of Laplacian on Scalar Field



$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $9$. The Vector Field $\map \grad {k / r}$: $(5.12)$




