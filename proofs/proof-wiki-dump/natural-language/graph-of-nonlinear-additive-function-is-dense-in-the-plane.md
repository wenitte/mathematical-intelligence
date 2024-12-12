# 

Source: https://proofwiki.org/wiki/Graph_of_Nonlinear_Additive_Function_is_Dense_in_the_Plane


This article needs to be linked to other articles.In particular: Plenty to be doneYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $f: \R \to \R$ be an additive function which is not linear.
Then the graph of $f$ is dense in the real number plane.


Proof
From Additive Function is Linear for Rational Factors:

$\map f q = q \map f 1$
for all $q \in \Q$.
Without loss of generality, let:

$\map f q = q$
for all $q \in \Q$.
Since $f$ is not linear, let $\alpha \in \R \setminus \Q$ be such that:

$\map f \alpha = \alpha + \delta$
for some $\delta \ne 0$.

Consider an arbitrary nonempty circle in the plane.
Let:

its centre be $\tuple {x, y}$ where $x \ne y$ and $x, y \in \Q$
its radius be $r > 0$.
We will show how to find a point of the graph of $f$ inside this circle.
As $x \ne y$ and $r$ can be arbitrarily small, this will prove the theorem.

Since $\delta \ne 0$, let $\beta = \dfrac {y - x} \delta$.
Since $x \ne y$:

$\beta \ne 0$
As Rationals are Everywhere Dense in Topological Space of Reals,
there exists a rational number $b \ne 0$ such that:

$\size {\beta - b} < \dfrac r {2 \size \delta}$
As Rationals are Everywhere Dense in Topological Space of Reals, there also exists a rational number $a$ such that:

$\size {\alpha - a} < \dfrac r {2 \size b}$
Now put:

$X = x + b \paren {\alpha - a}$
$Y = \map f X$
Then:

$\size {X - x} = \size {b \paren {\alpha - a} } < \frac r 2$
so $X$ is in the circle.
Then:














\(\ds Y\)

\(=\)







\(\ds \map f {x + b \paren {\alpha - a} }\)





Definition of $Y$ and $X$














\(\ds \)

\(=\)







\(\ds \map f x + \map f {b \alpha} - \map f {b a}\)





Definition of Cauchy Functional Equation














\(\ds \)

\(=\)







\(\ds x + b \map f \alpha - b \map f a\)





Additive Function is Linear for Rational Factors














\(\ds \)

\(=\)







\(\ds y - \delta \beta + b \map f \alpha - b \map f a\)





Definition of $y$














\(\ds \)

\(=\)







\(\ds y - \delta \beta + b \paren {\alpha + \delta} - b a\)





Additive Function is Linear for Rational Factors














\(\ds \)

\(=\)







\(\ds y + b \paren {\alpha - a} - \delta \paren {\beta - b}\)









Therefore 

$\size {Y - y} = \size {b \paren {\alpha - a} - \delta \paren {\beta - b} } \le \size {b \paren {\alpha - a} } + \size {\delta \paren {\beta - b} } \le r$
so $Y$ is in the circle as well.
Hence the point $\tuple {X, Y}$ is inside the circle.
$\blacksquare$


Also see
Definition:Additive Function
Definition:Cauchy Functional Equation
Definition:Everywhere Dense




