# 

Source: https://proofwiki.org/wiki/Divergence_of_Product_of_Scalar_Field_with_Curl_of_Vector_Field

Theorem
Let $R$ be a region of space.
Let $U$ be a scalar field over $R$.
Let $\mathbf A = \curl \mathbf B$ be a vector field over $R$ whose vector potential is $\mathbf B$.

Then:

$\map {\operatorname {div} } {U \curl \mathbf B} = \paren {\curl \mathbf B} \cdot \paren {\grad U}$
where:

$\operatorname {div}$ denotes the divergence operator
$\grad$ denotes the gradient operator
$\curl$ denotes the curl operator.


Proof













\(\ds \map {\operatorname {div} } {U \mathbf A}\)

\(=\)







\(\ds \map U {\operatorname {div} \mathbf A} + \mathbf A \cdot \grad U\)





Product Rule for Divergence








\(\ds \leadsto \ \ \)





\(\ds \map {\operatorname {div} } {U \curl \mathbf B}\)

\(=\)







\(\ds \map U {\operatorname {div} \curl \mathbf B} + \paren {\curl \mathbf B} \cdot \paren {\grad U}\)





substituting $\curl \mathbf B$ for $\mathbf A$














\(\ds \)

\(=\)







\(\ds \paren {\curl \mathbf B} \cdot \paren {\grad U}\)





Divergence of Curl is Zero



$\blacksquare$


Sources
1951: B. Hague: An Introduction to Vector Analysis (5th ed.) ... (previous) ... (next): Chapter $\text {V}$: Further Applications of the Operator $\nabla$: $8$. Two Useful Divergence Formulae: $(5.10)$




