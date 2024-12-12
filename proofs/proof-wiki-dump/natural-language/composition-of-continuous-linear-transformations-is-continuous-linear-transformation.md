# 

Source: https://proofwiki.org/wiki/Composition_of_Continuous_Linear_Transformations_is_Continuous_Linear_Transformation



Theorem
Let $K$ be a field.
Let $\struct {X, \norm {\, \cdot \,}_X}$, $\struct {Y, \norm {\, \cdot \,}_Y}$, $\struct{Z, \norm {\, \cdot \,}_Z}$ be normed vector spaces over $K$.
$\map {CL} {X, Y}$ be the continuous linear transformation space.
Let $\norm {\, \cdot \,}$ be the supremum operator norm.
Let $S \circ T : X \to Z$ be the composition of mappings such that:

$\forall T \in \map {CL} {X, Y} : \forall S \in \map {CL} {Y, Z} : \forall x \in X : \map {S \circ T} x := \map S {\map T x}$

Then $S \circ T \in \map {CL} {X, Z}$.


Proof
Linearity
Follows from Composition of Linear Transformations is Linear Transformation.


Continuity
We have that:










\(\ds \forall x \in X: \, \)



\(\ds \norm{\map {S \circ T} x}_Z\)

\(=\)







\(\ds \norm {\map S {\map T x} }_Z\)




















\(\ds \)

\(\le\)







\(\ds \norm S \norm {\map T x}_Y\)





Supremum Operator Norm as Universal Upper Bound














\(\ds \)

\(\le\)







\(\ds \norm S \norm T \norm x_X\)





Supremum Operator Norm as Universal Upper Bound














\(\ds \)

\(=\)







\(\ds M \norm x_X\)





$\R \ni M := \norm S \norm T$



By Continuity of Linear Transformation between Normed Vector Spaces, $S \circ T$ is continuous.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




