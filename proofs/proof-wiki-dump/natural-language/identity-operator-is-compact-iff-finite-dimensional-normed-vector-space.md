# 

Source: https://proofwiki.org/wiki/Identity_Operator_is_Compact_iff_Finite-Dimensional_Normed_Vector_Space

Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space. 
Let $I : X \to X$ be the identity operator. 

Then $I$ is compact if and only if $X$ is finite-dimensional.


Proof
Let $\operatorname {ball} X$ be the closed unit ball in $\struct {X, \norm {\, \cdot \,} }$.
From the definition of a compact operator, we have that $I$ is compact if and only if:

$\overline {\operatorname {ball} X}$ is compact in $\struct {X, \norm \cdot_X}$.
From Closed Ball is Closed and Set is Closed iff Equals Topological Closure, this is equivalent to: 

$\operatorname {ball} X$ is compact in $\struct {X, \norm {\, \cdot \,} }$.
From Normed Vector Space is Finite Dimensional iff Unit Sphere is Compact, this is equivalent to:

$X$ is finite-dimensional.
$\blacksquare$





