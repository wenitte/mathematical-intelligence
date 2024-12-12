# 

Source: https://proofwiki.org/wiki/Divergence_of_Product_of_Scalar_Field_with_Gradient_of_Scalar_Field



Theorem
Let $R$ be a region of space.
Let $U$ and $W$ be scalar fields over $R$.

Then:

$\map {\operatorname {div} } {U \grad W} = U \nabla^2 W + \paren {\grad U} \cdot \paren {\grad W}$
where:

$\operatorname {div}$ denotes the divergence operator
$\grad$ denotes the gradient operator
$\nabla^2$ denotes the Laplacian.


Proof













\(\ds \map {\operatorname {div} } {U \mathbf A}\)

\(=\)







\(\ds \map U {\operatorname {div} \mathbf A} + \mathbf A \cdot \grad U\)





Product Rule for Divergence








\(\ds \leadsto \ \ \)





\(\ds \map {\operatorname {div} } {U \grad W}\)

\(=\)







\(\ds \map U {\operatorname {div} \grad W} + \paren {\grad W} \cdot \paren {\grad U}\)





substituting $\grad W$ for $\mathbf A$














\(\ds \)

\(=\)







\(\ds U \nabla^2 W + \paren {\grad U} \cdot \paren {\grad W}\)





Laplacian on Scalar Field is Divergence of Gradient



$\blacksquare$


Also presented as
This result can also be presented as:

$\map {\operatorname {div} } {U \grad W} = U \nabla^2 W + \nabla U \cdot \nabla W$
presupposing the implementation of $\grad$ as an operation using the del operator.


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $8$. Two Useful Divergence Formulae: $(5.9)$




