# 

Source: https://proofwiki.org/wiki/Curl_of_Gradient_is_Zero



Definition
Let $\map {\R^3} {x, y, z}$ denote the real Cartesian space of $3$ dimensions..
Let $\map U {x, y, z}$ be a scalar field on $\R^3$.

Then:

$\map \curl {\grad U} = \mathbf 0$
where:

$\curl$ denotes the curl operator
$\grad$ denotes the gradient operator.


Proof
From Curl Operator on Vector Space is Cross Product of Del Operator and definition of the gradient operator:














\(\ds \grad \mathbf U\)

\(=\)







\(\ds \nabla U\)




















\(\ds \map \curl {\grad U}\)

\(=\)







\(\ds \nabla \times \paren {\nabla U}\)









where $\nabla$ denotes the del operator.

Hence we are to demonstrate that:

$\nabla \times \paren {\nabla U} = \mathbf 0$

Let $\tuple {\mathbf i, \mathbf j, \mathbf k}$ be the standard ordered basis on $\R^3$.

Then:














\(\ds \nabla \times \paren {\nabla U}\)

\(=\)







\(\ds \nabla \times \paren {\dfrac {\partial U} {\partial x} \mathbf i + \dfrac {\partial U} {\partial y} \mathbf j + \dfrac {\partial U} {\partial z} \mathbf k}\)





Definition of Gradient Operator














\(\ds \)

\(=\)







\(\ds \paren {\dfrac \partial {\partial y} \dfrac {\partial U} {\partial z} - \dfrac \partial {\partial z} \dfrac {\partial U} {\partial y} } \mathbf i + \paren {\dfrac \partial {\partial z} \dfrac {\partial U} {\partial x} - \dfrac \partial {\partial x} \dfrac {\partial U} {\partial z} } \mathbf j + \paren {\dfrac \partial {\partial x} \dfrac {\partial U} {\partial y} - \dfrac \partial {\partial y} \dfrac {\partial U} {\partial x} } \mathbf k\)





Definition of Curl Operator














\(\ds \)

\(=\)







\(\ds \paren {\dfrac {\partial^2 U} {\partial y \partial z} - \dfrac {\partial^2 U} {\partial z \partial y} } \mathbf i + \paren {\dfrac {\partial^2 U} {\partial z \partial x} - \dfrac {\partial^2 U} {\partial x \partial z} } \mathbf j + \paren {\dfrac {\partial^2 U} {\partial x \partial y} - \dfrac {\partial^2 U} {\partial y \partial x} } \mathbf k\)










From Clairaut's Theorem:

$\dfrac {\partial^2 U} {\partial x \partial y} = \dfrac {\partial^2 U} {\partial y \partial x}$
and the same mutatis mutandis for the other partial derivatives.
The result follows.
$\blacksquare$


Physical Interpretation
From Vector Field is Expressible as Gradient of Scalar Field iff Conservative, the vector field given rise to by $\grad F$ is conservative.
The characteristic of a conservative field is that the contour integral around every simple closed contour is zero.
Since the curl is defined as a particular closed contour contour integral, it follows that $\map \curl {\grad F}$ equals zero.


Examples
Electrostatic Field
Let $R$ be a region of space in which there exists an electric potential field $F$.
From Electric Force is Gradient of Electric Potential Field, the electrostatic force $\mathbf V$ experienced within $R$ is the negative of the gradient of $F$:

$\mathbf V = -\grad F$
Hence from Curl of Gradient is Zero, the curl of $\mathbf V$ is zero.


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $2$. The Operator $\curl \grad$: $(5.3)$
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 22$: Miscellaneous Formulas involving $\nabla$: $22.43$




