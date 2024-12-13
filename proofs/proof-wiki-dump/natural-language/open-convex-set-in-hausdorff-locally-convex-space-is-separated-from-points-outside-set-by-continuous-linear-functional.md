# 

Source: https://proofwiki.org/wiki/Open_Convex_Set_in_Hausdorff_Locally_Convex_Space_is_Separated_from_Points_outside_Set_by_Continuous_Linear_Functional



Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {X, \PP}$ be a Hausdorff locally convex space over $\GF$ equipped with its standard topology.
Let $X^\ast$ be the topological dual of $X$.
Let $C$ be an open convex set such that ${\mathbf 0}_X \in C$. 
Let $x_0 \in X \setminus C$. 

Then there exists $f \in X^\ast$ such that: 

$\map \Re {\map f x} < \map \Re {\map f {x_0} }$
for each $x \in X$. 


Proof
Case 1: $\GF = \R$
Let $\mu_C$ be the Minkowski functional of $C$. 
From Minkowski Functional of Convex Absorbing Set is Sublinear Functional, $\mu_A$ is a sublinear functional.
Let $Y = \span \set {x_0}$. 
Define $g : Y \to \R$ by: 

$\map g {\lambda x_0} = \lambda \map {\mu_C} {x_0}$
for each $\lambda \in \R$.
For $\lambda \in \R_{> 0}$, we have: 

$\lambda \map {\mu_C} {x_0} = \map {\mu_C} {\lambda x_0}$
by Seminorm Axiom $\text N 3$: Triangle Inequality.
For $\lambda \in \R_{\le 0}$, we have: 

$\lambda \map {\mu_C} {x_0} \le 0 \le \map {\mu_C} {\lambda x_0}$
So we have: 

$\map g y \le \map {\mu_C} y$
for all $y \in Y$. 
From Hahn-Banach Theorem: Real Vector Space, there exists a linear functional $f : X \to \R$  extending $g$ and satisfying: 

$\map f x \le \map {\mu_C} x$
for each $x \in X$. 
We show that $f$ is continuous.
Since $C$ is an open neighborhood of ${\mathbf 0}_X$, $-C$ is is an open neighborhood of ${\mathbf 0}_X$ by Dilation of Open Set in Topological Vector Space is Open.
Then $U = C \cap \paren {-C}$ is an open neighborhood of ${\mathbf 0}_X$.
From Characterization of Continuous Linear Functionals on Topological Vector Space, it is enough to show that $f$ is bounded on $U$. 
Let $x \in U$.
Then $x \in C$.
From Minkowski Functional of Open Convex Set containing Zero Vector in Topological Vector Space recovers Set, we have: 

$C = \set {y \in X : \map {\mu_C} x < 1}$
Hence we have that:

$\map f x \le \map {\mu_C} x < 1$
Since $x \in U$, we also have $x \in -C$.
So:

$\map f x = -\map f {-x} \ge -\map {\mu_C} x > -1$
Hence we deduce that: 

$\cmod {\map f x} < 1$
for all $x \in U$.
So $f$ is bounded on $U$, and we deduce that $f$ is continuous by Characterization of Continuous Linear Functionals on Topological Vector Space.
$\Box$

Case 2: $\GF = \C$
Let $X_\R$ be the realification of $X$. 
By Case 1, there exists $f \in X_\R^\ast$ such that: 

$\map f x < \map f {x_0}$
From Continuous Real Linear Functional on Complex Topological Vector Space is Real Part of Continuous Complex Linear Functional, there exists $g \in X^\ast$ such that: 

$\map f x = \map \Re {\map f x}$
for each $x \in X$. 
Then: 

$\map \Re {\map f x} < \map \Re {\map f {x_0} }$
$\blacksquare$





