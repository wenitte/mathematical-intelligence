# 

Source: https://proofwiki.org/wiki/Existence_of_Non-Zero_Continuous_Linear_Functional_vanishing_on_Proper_Closed_Subspace_of_Hausdorff_Locally_Convex_Space

Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {X, \PP}$ be a Hausdorff locally convex space over $\GF$.
Let $Y$ be a proper closed linear subspace of $X$.
Let $x_0 \in X \setminus Y$. 

Then there exists a continuous linear functional $f : X \to \GF$ such that: 

$\map f y = 0$ for each $y \in Y$
and:

$\map f {x_0} \ne 0$


Proof
Let:

$X_0 = \map \span {Y \cup \set x}$
From Linear Span is Linear Subspace, we have: 

$X_0$ is a linear subspace of $X$.
Note that we can then write any $u \in X_0$ in the form: 

$u = y + \alpha x$
for $y \in Y$ and $\alpha \in \mathbb F$. 
We want to define a map in terms of this representation, so we show that this representation is unique. 
Let: 

$u = y_1 + \alpha_1 x = y_2 + \alpha_2 x$
Then: 

$\paren {\alpha_2 - \alpha_1} x = y_1 - y_2$
If $\alpha_1 = \alpha_2$, then we have $y_1 = y_2$ as required.
Aiming for a contradiction, suppose suppose that $\alpha_1 \ne \alpha_2$, then we would have: 

$\ds x = \frac 1 {\alpha_2 - \alpha_1} \paren {y_1 - y_2}$
and so $x \in Y$, from the definition of a linear subspace, contradiction. 
So, we must have $\alpha_1 = \alpha_2$ and $y_1 = y_2$, and so the representation is unique. 

Now, define $f_0 : X_0 \to \GF$ by: 

$\map {f_0} {y + \lambda x_0} = \lambda$
for each $y \in Y$, $\lambda \in \GF$.
We have $\map {f_0} x = 0$ if and only if $x \in Y$, so that: 

$\ker f_0 = Y$
This is closed, so by Characterization of Continuous Linear Functionals on Topological Vector Space, we have: 

$f_0$ is continuous.
From Hahn-Banach Theorem for Continuous Linear Functional on Locally Convex Space, there exists a continuous linear functional $f$ extending $f_0$. 
Then we have: 

$\map f {x_0} = \map {f_0} {x_0} = 1 \ne 0$
and: 

$\map f y = \map {f_0} y = 0$
for each $y \in Y$.
So $f$ is a continuous linear functional satisfying our requirements.
$\blacksquare$





