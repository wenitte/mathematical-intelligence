# 

Source: https://proofwiki.org/wiki/Banach_Space_is_Reflexive_iff_Normed_Dual_is_Reflexive



Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $X$ be a Banach space over $\Bbb F$.
Let $X^\ast$ be the normed dual space of $X$. 

Then: 

$X$ is reflexive if and only if $X^\ast$ is reflexive.


Proof
Let $X^{\ast \ast}$ be the second normed dual of $X$.
Let $X^{\ast \ast \ast}$ be the normed dual of $X^{\ast \ast}$. 

Necessary Condition
Suppose that $X$ is reflexive.
We want to show that $X^\ast$ is reflexive.
From Normed Vector Space is Reflexive iff Surjective Evaluation Linear Transformation, for each $\Phi \in X^{\ast \ast \ast}$ we aim to find $\phi \in X^\ast$ such that: 

$\map \Phi F = \map {\phi^\wedge} F = \map {\map {J_{X^\ast} } f} F$ for each $F \in X^{\ast \ast}$
where $J_{X^\ast}$ is the evaluation linear transformation $X^\ast \to X^{\ast \ast \ast}$.
Since $X$ is reflexive, for each $F \in X^{\ast \ast}$ there exists $x \in X$ such that:

$F = x^\wedge = \map {J_X} x$
where $J_X$ is the evaluation linear transformation $X \to X^{\ast \ast}$.
So, it suffices to find $\phi$ such that for each $x \in X$ we have: 














\(\ds \map \Phi {x^\wedge}\)

\(=\)







\(\ds \map {\phi^\wedge} {x^\wedge}\)




















\(\ds \)

\(=\)







\(\ds \map {x^\wedge} \phi\)





Definition of Evaluation Linear Transformation














\(\ds \)

\(=\)







\(\ds \map \phi x\)





Definition of Evaluation Linear Transformation



for each $x \in X$. 
We show that this actually defines an element $\phi \in X^\ast$.
From Evaluation Linear Transformation on Normed Vector Space is Linear Transformation from Space to Second Normed Dual, we have that: 

$x \mapsto x^\wedge$ is a linear transformation from $X$ to $X^{\ast \ast}$.
Further, from Evaluation Linear Transformation on Normed Vector Space is Linear Isometry:

$x \mapsto x^\wedge$ is a bounded linear transformation from $X$ to $X^{\ast \ast}$.
Since we also have that: 

$\Phi$ is a bounded linear functional $X^{\ast \ast} \to \Bbb F$
we have: 

$\phi$ is a bounded linear functional $X \to \Bbb F$
from Composition of Bounded Linear Transformations is Bounded Linear Transformation.
That is: 

$\phi \in X^\ast$
as required.
$\Box$


Sufficient Condition
Suppose that $X^\ast$ is reflexive.
Aiming for a contradiction, suppose that $X$ is not reflexive.
From Normed Vector Space is Reflexive iff Surjective Evaluation Linear Transformation, this means that: 

for all $\Phi \in X^{\ast \ast \ast}$ there exists $\phi \in X^\ast$ such that $\Phi = \phi^\wedge$
but:

for some $F \in X^{\ast \ast}$ there does not exist $x \in X$ such that $F = x^\wedge$.
From Image of Evaluation Linear Transformation on Banach Space is Closed Linear Subspace of Second Dual, we have that: 

$\map J X = \set {x^\wedge \in X^{\ast \ast} : x \in X}$ is a closed linear subspace of $X^{\ast \ast}$.
From Existence of Distance Functional, there exists $\Phi \in X^{\ast \ast \ast}$ such that: 

$\norm {\Phi}_{X^{\ast \ast \ast} } = 1$
and: 

$\map \Phi F = 0$ for all $F \in \map J X$.
That is: 

$\map \Phi {x^\wedge} = 0$ for all $x \in X$.
Since $X^\ast$ is reflexive, there exists $\phi \in X^\ast$ such that: 

$\Phi = \phi^\wedge$
Then for each $x \in X$ we have: 














\(\ds 0\)

\(=\)







\(\ds \map \Phi {x^\wedge}\)




















\(\ds \)

\(=\)







\(\ds \map {\phi^\wedge} {x^\wedge}\)




















\(\ds \)

\(=\)







\(\ds \map {x^\wedge} \phi\)





Definition of Evaluation Linear Transformation














\(\ds \)

\(=\)







\(\ds \map \phi x\)





Definition of Evaluation Linear Transformation



Then we have: 

$\Phi \equiv 0$
so:

$\norm \Phi_{X^{\ast \ast \ast} } = 0 \ne 1$
a contradiction.
So we have that $X$ is reflexive.
$\blacksquare$





