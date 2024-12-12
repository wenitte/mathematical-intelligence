# 

Source: https://proofwiki.org/wiki/Goldstine%27s_Theorem

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space over $\GF$.
Let $\struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }$ be the normed dual space of $X$.
Let $\struct {X^{\ast \ast}, \norm {\, \cdot \,}_{X^{\ast \ast} } }$ be the second normed dual of $X$.
Let $w^\ast$ be the $w^\ast$-topology on $X^{\ast \ast}$. 
Let $\iota : X \to X^{\ast \ast}$ be the evaluation linear transformation.
Let $B_X^-$ be the closed unit ball of $X$.
Let $B_{X^{\ast \ast} }^-$ be the closed unit ball of $X^{\ast \ast}$.

Then: 

$\map {\cl_{w^\ast} } {\iota B_X^-} = B_{X^{\ast \ast} }^-$


Proof
From Closed Unit Ball in Normed Dual Space is Weak-* Closed, $B_{X^{\ast \ast} }^-$ is closed in $\struct {X^{\ast \ast}, w^\ast}$. 
In Normed Vector Space is Reflexive iff Closed Unit Ball in Original Space is Mapped to Closed Unit Ball in Second Dual, it is shown that $\iota B_X^- \subseteq B_{X^{\ast \ast} }$.
Hence, we have: 

$\map {\cl_{w^\ast} } {\iota B_X^-} \subseteq \map {\cl_{w^\ast} } {B_{X^{\ast \ast} }^-}$
from Set Closure Preserves Set Inclusion.
From Set is Closed iff Equals Topological Closure, we have $\map {\cl_{w^\ast} } {B_{X^{\ast \ast} }^-} = B_{X^{\ast \ast} }^-$.
So we have $\map {\cl_{w^\ast} } {\iota B_X^-} \subseteq B_{X^{\ast \ast} }^-$.
Now suppose that $\Phi \in X^{\ast \ast} \setminus \map {\cl_{w^\ast} } {\iota B_X^-}$.
We aim to deduce that $\norm \Phi_{X^{\ast \ast} } > 1$ so that we have: 

$\Phi \in X^{\ast \ast} \setminus B_{X^{\ast \ast} }^-$
This will give:

$X^{\ast \ast} \setminus \map {\cl_{w^\ast} } {\iota B_X^-} \subseteq X^{\ast \ast} \setminus B_{X^{\ast \ast} }^-$
and hence:

$B_{X^{\ast \ast} }^- \subseteq \map {\cl_{w^\ast} } {\iota B_X^-}$
from Set Complement inverts Subsets.
From Finite Topological Space is Compact, $\set \Phi$ is compact in $\struct {X^{\ast \ast}, w^\ast}$.
Further, $\set \Phi$ is convex from Singleton is Convex Set. 
We have that $\map {\cl_{w^\ast} } {\iota B_X^-}$ is closed in $\struct {X^{\ast \ast}, w^\ast}$.
Further, $\map {\cl_{w^\ast} } {\iota B_X^-}$ is convex from Image of Convex Set under Linear Transformation is Convex and Closure of Convex Set in Topological Vector Space is Convex.
Let $A = \set \Phi$ and $B = \map {\cl_{w^\ast} } {\iota B_X^-}$.
We can then apply: 

Hahn-Banach Separation Theorem: Hausdorff Locally Convex Space: Real Case: Compact Convex Set and Closed Convex Set in the case $\GF = \R$
Hahn-Banach Separation Theorem: Hausdorff Locally Convex Space: Complex Case: Compact Convex Set and Closed Convex Set
to obtain $\Psi \in \struct {X^{\ast \ast}, w^\ast}^\ast$ such that: 

$\ds \sup_{x \in A} \map \Re {\map \Psi x} < \inf_{x \in B} \map \Re {\map \Psi x}$
From Characterization of Continuity of Linear Functional in Weak-* Topology, there exists $f \in X^\ast$ such that $\Psi = f^\wedge$. 
Then we have: 

$\ds \sup_{x \in \set \Phi} \map \Re {\map {f^\wedge} \Psi} < \inf_{x \in \map {\cl_{w^\ast} } {\iota B_X^-} } \map \Re {\map {f^\wedge} x}$
That is: 

$\ds \map \Re {\map \Psi f} < \inf_{x \in \map {\cl_{w^\ast} } {\iota B_X^-} } \map \Re {\map {f^\wedge} x}$
So from Negative of Infimum is Supremum of Negatives we have: 

$\ds \map \Re {\map \Psi g} > \sup_{x \in \map {\cl_{w^\ast} } {\iota B_X^-} } \map \Re {\map {g^\wedge} x}$
for $g = -f$.
First, we have: 














\(\ds \map \Re {\map \Psi g}\)

\(\le\)







\(\ds \cmod {\map \Psi g}\)




















\(\ds \)

\(\le\)







\(\ds \norm \Psi_{X^{\ast \ast} } \norm g_{X^\ast}\)





Fundamental Property of Norm on Bounded Linear Functional



We have that $\iota B_X^- \subseteq \map {\cl_{w^\ast} } {\iota B_X^-}$, so we have: 














\(\ds \sup_{x \in \map {\cl_{w^\ast} } {\iota B_X^-} } \map \Re {\map {g^\wedge} x}\)

\(\ge\)







\(\ds \sup_{x \in \iota B_X^-} \map \Re {\map {g^\wedge} x}\)




















\(\ds \)

\(=\)







\(\ds \sup_{x \in B_X^-} \map \Re {\map {g^\wedge} {x^\wedge} }\)




















\(\ds \)

\(=\)







\(\ds \sup_{x \in B_X^-} \map \Re {\map {x^\wedge} g}\)





Definition of Evaluation Linear Transformation














\(\ds \)

\(=\)







\(\ds \sup_{x \in B_X^-} \map \Re {\map g x}\)





Definition of Evaluation Linear Transformation



From Realification of Normed Dual is Isometrically Isomorphic to the Normed Dual of Realification, we have: 

$\ds \sup_{x \in B_X^-} \map \Re {\map g x} = \norm g_{X^\ast}$
Hence we obtain: 

$\norm \Psi_{X^{\ast \ast} } \norm g_{X^\ast} > \norm g_{X^\ast}$
Hence we obtain, since all terms are positive: 

$\norm \Psi_{X^{\ast \ast} } > 1$
So we have: 

$\Phi \in X^{\ast \ast} \setminus B_{X^{\ast \ast} }^-$
giving: 

$X^{\ast \ast} \setminus \map {\cl_{w^\ast} } {\iota B_X^-} \subseteq X^{\ast \ast} \setminus B_{X^{\ast \ast} }^-$
and hence: 

$B_{X^{\ast \ast} }^- \subseteq \map {\cl_{w^\ast} } {\iota B_X^-}$
So we obtain: 

$\map {\cl_{w^\ast} } {\iota B_X^-} = B_{X^{\ast \ast} }^-$
$\blacksquare$


Source of Name
This entry was named for Herman Heine Goldstine.





