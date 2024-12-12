# 

Source: https://proofwiki.org/wiki/Evaluation_Linear_Transformation_on_Normed_Vector_Space_is_Linear_Transformation_from_Space_to_Second_Normed_Dual

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {X, \norm \cdot_X}$ be a normed vector space over $\Bbb F$.
Let $\struct {X^\ast, \norm \cdot_{X^\ast} }$ be the normed dual of $\struct {X, \norm \cdot_X}$.
Let $\map L {X^\ast, \Bbb F}$ be the set of linear functionals on $X^\ast$. 
For each $x \in X$, define $x^\wedge : X^\ast \to \Bbb F$ by: 

$\map {x^\wedge} f = \map f x$
Define $J : X \to \map L {X^\ast, \Bbb F}$ by: 

$\map J x = x^\wedge$
for each $x \in X$.

Then: 

$J$ is a linear transformation $X \to X^{\ast \ast}$.
where $X^{\ast \ast}$ denotes the second normed dual.


Proof
We first show that $J$ is a linear transformation.
Let $x, y \in X$ and $\alpha, \beta \in \Bbb F$.
Then, we have, for each $f \in X^\ast$:














\(\ds \map {\paren {\map J {\alpha x + \beta y} } } f\)

\(=\)







\(\ds \map {\paren {\alpha x + \beta y}^\wedge} f\)




















\(\ds \)

\(=\)







\(\ds \map f {\alpha x + \beta y}\)




















\(\ds \)

\(=\)







\(\ds \alpha \map f x + \beta \map f y\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds \alpha \map {x^\wedge} f + \beta \map {y^\wedge} f\)




















\(\ds \)

\(=\)







\(\ds \alpha \map {\paren {\map J x} } f + \beta \map {\paren {\map J y} } f\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\alpha \map J x + \beta \map J y} } f\)









So:

$\map J {\alpha x + \beta y} = \alpha \map J x + \beta \map J y$
So $J$ is linear.

We now show that, for each $x \in X$, we have: 

$\map J x = x^\wedge \in X^{\ast \ast}$
where $X^{\ast \ast}$ is the second normed dual.
We first show that $x^\wedge$ is a linear functional for each $x \in X$.
Let $x \in X$, $f, g \in X^\ast$ and $\alpha, \beta \in \Bbb F$.
Then: 














\(\ds \map {x^\wedge} {\alpha f + \beta g}\)

\(=\)







\(\ds \map {\paren {\alpha f + \beta g} } x\)




















\(\ds \)

\(=\)







\(\ds \alpha \map f x + \beta \map g x\)




















\(\ds \)

\(=\)







\(\ds \alpha \map {x^\wedge} f + \beta \map {x^\wedge} g\)









so $x^\wedge$ is a linear functional for each $x \in X$.
We now show that $x^\wedge$ is bounded for each $x \in X$.
Let $x \in X$.
Then, for each $f \in X^\ast$, we have: 














\(\ds \cmod {\map {x^\wedge} f}\)

\(=\)







\(\ds \cmod {\map f x}\)





Definition of Evaluation Linear Transformation on Normed Vector Space














\(\ds \)

\(\le\)







\(\ds \norm f_{X^\ast} \norm x_X\)





Fundamental Property of Norm on Bounded Linear Functional



So: 

$x^\wedge$ is a bounded linear functional.
That is:

$\map J x \in X^{\ast \ast}$
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $26.1$: The Second Dual




