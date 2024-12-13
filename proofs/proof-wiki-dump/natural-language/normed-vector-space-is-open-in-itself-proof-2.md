# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Open_in_Itself/Proof_2

Theorem
Let $M = \struct{X, \norm {\, \cdot \,}}$ be a normed vector space.

Then the set $X$ is an open set of $M$.


Proof
By definition, a subset $S \subseteq X$ is open if:

$\forall x \in X : \exists \epsilon \in \R_{>0} : \map {B_\epsilon} x \subseteq S$
Let $S = X$.
Aiming for a contradiction, suppose $X$ is not open.
By De Morgan's laws:

$\exists x \in X : \forall \epsilon \in \R_{>0} : \map {B_\epsilon} x \cap \paren {X \setminus S} \ne \O$
Note that:

$X \setminus S = X \setminus X = \O$.
By Intersection with Empty Set:

$\map {B_\epsilon} x \cap \O = \O$
Hence:

$\exists x \in X : \forall \epsilon \in \R_{>0} : \O \ne \O$.
Since Empty Set is Unique, we have a contradiction.
$\blacksquare$





