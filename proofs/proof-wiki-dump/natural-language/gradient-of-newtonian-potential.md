# 

Source: https://proofwiki.org/wiki/Gradient_of_Newtonian_Potential

Theorem
Let $R$ be a region of space.
Let $S$ be a Newtonian potential over $R$ defined as:

$\forall \mathbf r = x \mathbf i + y \mathbf j + z \mathbf k \in R: \map S {\mathbf r} = \dfrac k r$
where:

$\tuple {\mathbf i, \mathbf j, \mathbf k}$ is the standard ordered basis on $R$
$\mathbf r = x \mathbf i + y \mathbf j + z \mathbf k$ is the position vector of an arbitrary point in $R$ with respect to the origin
$r = \norm {\mathbf r}$ is the magnitude of $\mathbf r$
$k$ is some predetermined constant.

Then:

$\grad S = -\dfrac {k \mathbf r} {r^3} = -\dfrac {k \mathbf {\hat r} } {r^2}$
where:

$\grad$ denotes the gradient operator
$\mathbf {\hat r}$ denotes the unit vector in the direction of $\mathbf r$.

The fact that the gradient of $S$ is negative indicates that direction of the vector quantities that compose the vector field that is $\grad S$ all point towards the origin.


Proof
From the geometry of the sphere, the equal surfaces of $S$ are concentric spheres whose centers are at the origin.
As the origin is approached, the scalar potential is unbounded above.
We have:














\(\ds \grad S\)

\(=\)







\(\ds \map \grad {\dfrac k r}\)





Definition of $S$














\(\ds \)

\(=\)







\(\ds \map \nabla {\dfrac k r}\)





Definition of Gradient Operator














\(\ds \)

\(=\)







\(\ds k \map {\paren {\mathbf i \dfrac \partial {\partial x} + \mathbf j \dfrac \partial {\partial y} + \mathbf k \dfrac \partial {\partial z} } } {\dfrac 1 {\paren {x^2 + y^2 + z^2}^{1/2} } }\)





Definition of Del Operator














\(\ds \)

\(=\)







\(\ds -k \paren {\dfrac {x \mathbf i + y \mathbf j + z \mathbf k} {\paren {x^2 + y^2 + z^2}^{3/2} } }\)





Power Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\dfrac {k \mathbf r} {r^3}\)





Definition of $\mathbf r$ and simplifying














\(\ds \)

\(=\)







\(\ds -\dfrac {k \mathbf {\hat r} } {r^2}\)





as $\mathbf r = r \mathbf {\hat r}$



$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $9$. The Vector Field $\map \grad {k / r}$: $(5.11)$




