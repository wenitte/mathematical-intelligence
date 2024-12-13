# 

Source: https://proofwiki.org/wiki/Poisson%27s_Differential_Equation_for_Rotational_and_Solenoidal_Field



Theorem
Let $R$ be a region of ordinary space.
Let $\mathbf V$ be a vector field over $R$.
Let $\mathbf V$ be both rotational and solenoidal.

Let $\mathbf A$ be a vector field such that $\mathbf V = \curl \mathbf A$.

Then $\mathbf V$ satisfies this version of Poisson's differential equation:

$\curl \mathbf V = -\nabla^2 \mathbf A \ne \bszero$


Proof
As $\mathbf V$ is rotational it is not conservative.
Hence from Vector Field is Expressible as Gradient of Scalar Field iff Conservative $\mathbf V$ cannot be the gradient of some scalar field.
However, by definition of rotational vector field:

$\curl \mathbf V \ne \bszero$
As $\mathbf V$ is solenoidal:

$\operatorname {div} \mathbf V = 0$
Hence from Divergence of Curl is Zero, for some vector field $\mathbf A$ over $R$:

$\operatorname {div} \mathbf V = \operatorname {div} \curl \mathbf A = 0$
and so:

$\mathbf V = \curl \mathbf A$
Then we have:














\(\ds \curl \mathbf V\)

\(=\)







\(\ds \curl \curl \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \grad \operatorname {div} \mathbf A - \nabla^2 \mathbf A\)





Curl of Curl is Gradient of Divergence minus Laplacian














\(\ds \)

\(=\)







\(\ds -\nabla^2 \mathbf A\)





Definition of Solenoidal Vector Field: setting $\operatorname {div} \mathbf A = 0$



$\blacksquare$


Examples
Magnetic Field in Conductor carrying Steady Current
Consider a conductor of electricity $C$.
Let $C$ be carrying a steady current $I$.
From Curl Operator: Magnetic Field of Conductor, the curl of the magneto-motive force per unit area $\mathbf H$ is given by:

$\curl \mathbf H = \mathbf J$
Hence this  satisfies Poisson's Differential Equation for Rotational and Solenoidal Field:

$\curl \mathbf J = -\nabla^2 \mathbf J$


Rotational Motion of Incompressible Fluid
Let $B$ be a body of incompressible fluid.
Let $B$ be undergoing rotational motion.
Let $\mathbf V$ be the vector field which describes the rotational motion of $B$.
Then $\mathbf V$ satisfies Poisson's Differential Equation for Rotational and Solenoidal Field.


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $7$. The Classification of Vector Fields: $\text {(iii)}$




