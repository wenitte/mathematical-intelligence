# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_is_Reflexive_iff_Weak_and_Weak-*_Topologies_on_Normed_Dual_coincide



Theorem
Let $X$ be a normed vector space. 
Let $X^\ast$ be the normed dual of $X$.
Let $w$ be the weak topology on $X^\ast$. 
Let $w^\ast$ be the weak-$\ast$ topology on $X^\ast$. 

Then $X$ is reflexive if and only if $\struct {X^\ast, w} = \struct {X^\ast, w^\ast}$. 


Proof
Necessary Condition
Suppose that $X$ is reflexive.
Then for each $\Phi \in X^{\ast \ast}$ there exists $x \in X$ such that $\Phi = x^\wedge$.
Conversely, by Evaluation Linear Transformation on Normed Vector Space is Linear Transformation from Space to Second Normed Dual, we have $x^\wedge \in X^{\ast \ast}$ for each $x \in X$. 
Hence, we have: 

$\set {x^\wedge : x \in X} = X^{\ast \ast}$
By definition, $w$ is the initial topology on $X^\ast$ generated by $X^{\ast \ast}$, and $w^\ast$ is the initial topology on $X^\ast$ generated by the family $\set {x^\wedge : x \in X}$.
It follows that $w = w^\ast$. 
$\Box$

Sufficient Condition
Suppose that $\struct {X^\ast, w} = \struct {X^\ast, w^\ast}$.
Then $\struct {X^\ast, w}^\ast = \struct {X^\ast, w^\ast}^\ast$. 
From Characterization of Continuity of Linear Functional in Weak Topology, we have $\struct {X^\ast, w}^\ast = X^{\ast \ast}$.
From Characterization of Continuity of Linear Functional in Weak-* Topology , we have $\struct {X^\ast, w^\ast}^\ast = \iota X$.
So we have: 

$\iota X = X^{\ast \ast}$
From Normed Vector Space is Reflexive iff Surjective Evaluation Linear Transformation, we have that $X$ is reflexive.
$\blacksquare$





