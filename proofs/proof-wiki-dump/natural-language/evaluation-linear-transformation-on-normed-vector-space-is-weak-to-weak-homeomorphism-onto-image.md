# 

Source: https://proofwiki.org/wiki/Evaluation_Linear_Transformation_on_Normed_Vector_Space_is_Weak_to_Weak-*_Homeomorphism_onto_Image

Theorem
Let $\Bbb F \in \set {\R, \C}$.
Let $X$ be a normed vector space over $\Bbb F$. 
Let $X^\ast$ be the normed dual of $X$. 
Let $X^{\ast \ast}$ be the second normed dual of $X$. 
Let $w$ be the weak topology on $X$.
Let $w^\ast$ be the weak-$\ast$ topology on $X^{\ast \ast}$.
Let $\iota : X \to X^{\ast \ast}$ be the evaluation linear transformation.

Then $\iota : \struct {X, w} \to \struct {\iota X, w^\ast}$ is a homeomorphism.


Proof
From Evaluation Linear Transformation on Normed Vector Space is Weak to Weak-* Continuous Embedding into Second Normed Dual, $\iota$ is continuous.
From Evaluation Linear Transformation on Normed Vector Space is Linear Isometry, $\iota$ is bijective.
It remains to show that $\iota^{-1} : \struct {\iota X, w^\ast} \to \struct {X, w}$ is continuous.
From Continuity in Initial Topology, it is enough to show that: 

$f \circ \iota^{-1} : \struct {\iota X, w^\ast} \to \Bbb F$ is continuous.
From Characterization of Continuity of Linear Functional in Weak-* Topology‎ and Subspace Topology on Initial Topology is Initial Topology on Restrictions, there exists $g \in X^\ast$ such that: 

$f \circ \iota^{-1} = g^\wedge \restriction_{\iota X}$
We have, for $x^\wedge \in \iota X$:

$\map {\paren {f \circ \iota^{-1} } } {x^\wedge} = \map f x$
Now note that: 

$\map f x = \map {x^\wedge} f = \map {f^\wedge} {x^\wedge}$
from the definition of the evaluation linear transformation.
So we have: 

$f^\wedge \restriction_{\iota X} = f \circ \iota^{-1}$
So $f \circ \iota^{-1} : \struct {\iota X, w^\ast} \to \Bbb F$ is continuous.
So by Continuity in Initial Topology $\iota^{-1} : \struct {\iota X, w^\ast} \to \struct {X, w}$ is continuous.
So $\iota : \struct {X, w} \to \struct {\iota X, w^\ast}$ is a homeomorphism.
$\blacksquare$





