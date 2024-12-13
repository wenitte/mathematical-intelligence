# 

Source: https://proofwiki.org/wiki/Kernel_of_Linear_Transformation_is_Orthocomplement_of_Image_of_Adjoint/Corollary

Corollary to Kernel of Linear Transformation is Orthocomplement of Image of Adjoint
Let $\HH$ be a Hilbert space.
Let $\map \BB \HH$ denote the set of normal operators on $\HH$.

Let $A \in \map \BB \HH$ be a normal operator.
Then:

$\ker A = \paren {\Img A}^\perp$
where:

$A^*$ denotes the adjoint of $A$
$\ker A$ is the kernel of $A$
$\Img A$ is the image of $A$
$\perp$ signifies orthocomplementation


Proof
From Kernel of Linear Transformation is Orthocomplement of Image of Adjoint, we have: 

$\ker A = \paren {\Img {A^\ast} }^\perp$
From Kernel of Normal Operator is Kernel of Adjoint, we then have: 

$\ker A = \ker A^\ast$
and so: 

$\ker A^\ast = \paren {\Img {A^\ast} }^\perp$
Substituting $A^\ast$ for $A$ we obtain:

$\ker A^{\ast \ast} = \paren {\Img {A^{\ast \ast} } }^\perp$
From Adjoint is Involutive, we can conclude:

$\ker A = \paren {\Img A}^\perp$
$\blacksquare$





