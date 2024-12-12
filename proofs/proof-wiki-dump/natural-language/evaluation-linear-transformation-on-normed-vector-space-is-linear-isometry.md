# 

Source: https://proofwiki.org/wiki/Evaluation_Linear_Transformation_on_Normed_Vector_Space_is_Linear_Isometry

Theorem
Let $\struct {X, \norm \cdot_X}$ be a normed vector space.
Let $\struct {X^{\ast \ast}, \norm \cdot_{X^{\ast \ast} } }$ be the second normed dual of $\struct {X, \norm \cdot_X}$.
Let $J : X \to X^{\ast \ast}$ be the evaluation linear transformation for $X$. 

Then: 

$J$ is a linear isometry.


Proof
From Evaluation Linear Transformation on Normed Vector Space is Linear Transformation from Space to Second Normed Dual, we have that: 

$J$ is a linear transformation.
It remains to show that:

$\norm {\map J x}_{X^{\ast \ast} } = \norm x_X$
for each $x \in X$.
For each $x \in X$, we denote: 

$\map J x = x^\wedge$
We then aim to show: 

$\norm {x^\wedge}_{X^{\ast \ast} } = \norm x_X$
for each $x \in X$. 

As shown in Evaluation Linear Transformation on Normed Vector Space is Linear Transformation from Space to Second Normed Dual, we have:

$\cmod {\map {x^\wedge} f} \le \norm f_{X^\ast} \norm x_X$
for each $f \in X^\ast$.
So, we have: 

$\norm x_X \in \set {c > 0 : \cmod {\map {x^\wedge} f} \le c \norm f_{X^\ast} \text { for all } f \in X^\ast}$
So, from the definition of the norm on bounded functionals and the definition of infimum, we have: 

$\norm {x^\wedge}_{X^{\ast \ast} } \le \norm x_X$

We now aim to show that: 

$\norm x_X \le \norm {x^\wedge}_{X^{\ast \ast} }$
From Existence of Support Functional, there exists $f \in X^\ast$ such that: 

$\map f x = \norm x_X$
and:

$\norm f_{X^\ast} = 1$
Then we have: 














\(\ds \cmod {\map {x^\wedge} f}\)

\(=\)







\(\ds \cmod {\map f x}\)




















\(\ds \)

\(=\)







\(\ds \norm x_X\)




















\(\ds \)

\(=\)







\(\ds \norm f_{X^\ast} \norm x_X\)









So we have: 

$\norm x_X \in \set {\cmod {\map {x^\wedge} f} : \norm f_{X^\ast} = 1}$
So from the definition of the norm on bounded functionals and the definition of supremum, we have: 

$\norm {x^\wedge}_{X^{\ast \ast} } \ge \norm x_X$

So we have: 

$\norm {\map {x^\wedge} f} = \norm x_X$
That is: 

$\norm {\map J x}_{X^{\ast \ast} } = \norm x_X$
$\blacksquare$





