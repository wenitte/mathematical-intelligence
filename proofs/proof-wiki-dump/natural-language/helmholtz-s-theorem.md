# 

Source: https://proofwiki.org/wiki/Helmholtz%27s_Theorem



Theorem
Let $R$ be a region of ordinary space.
Let $\mathbf V$ be a vector field over $R$.
Let $\mathbf V$ be both non-conservative and non-solenoidal.
Then $\mathbf V$ can be decomposed into the sum of $2$ vector fields:

one being conservative, with scalar potential $S$, but not solenoidal
one being solenoidal, with vector potential $\mathbf A$, but not conservative.
Thus $\mathbf V$ satifies the partial differential equations:




\(\text {(1)}: \quad\)









\(\ds \operatorname {div} \mathbf V = \operatorname {div} \grad S\)

\(=\)







\(\ds \nabla^2 S \ne 0\)










\(\text {(2)}: \quad\)









\(\ds \curl \mathbf V = \curl \curl \mathbf A\)

\(=\)







\(\ds \nabla^2 \mathbf A \ne \bszero\)









where:

$\operatorname {div}$ denotes the divergence operator
$\grad$ denotes the gradient operator
$\curl$ denotes the curl operator
$\nabla^2$ denotes the Laplacian.


Proof
Let us write:

$\mathbf V = \grad S + \curl \mathbf A$
where:

$S$ is a scalar field
$\mathbf A$ is a vector field chosen to be solenoidal

This article, or a section of it, needs explaining.In particular: It is not clear why this is always possibleYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Then:














\(\ds \operatorname {div} \mathbf V\)

\(=\)







\(\ds \operatorname {div} \grad S + \operatorname {div} \curl \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \operatorname {div} \grad S\)





Divergence of Curl is Zero














\(\ds \)

\(=\)







\(\ds \nabla^2 S\)





Laplacian on Scalar Field is Divergence of Gradient














\(\ds \)

\(\ne\)







\(\ds 0\)





as $\mathbf V$ is not solenoidal



and:














\(\ds \curl \mathbf V\)

\(=\)







\(\ds \curl \grad S + \curl \curl \mathbf A\)




















\(\ds \)

\(=\)







\(\ds \curl \curl \mathbf A\)





Curl of Gradient is Zero














\(\ds \)

\(=\)







\(\ds \grad \operatorname {div} \mathbf A - \nabla^2 \mathbf A\)





Curl of Curl is Gradient of Divergence minus Laplacian














\(\ds \)

\(=\)







\(\ds -\nabla^2 \mathbf A\)





as $\mathbf A$ is solenoidal: $\operatorname {div} \mathbf A = 0$














\(\ds \)

\(\ne\)







\(\ds \bszero\)





as $\mathbf A$ is not conservative




This article, or a section of it, needs explaining.In particular: It is not clear how it is certain that $\mathbf A$ is not conservativeYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

$\blacksquare$


Source of Name
This entry was named for Hermann Ludwig Ferdinand von Helmholtz.


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $7$. The Classification of Vector Fields: $\text {(iv)}$




