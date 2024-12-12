# 

Source: https://proofwiki.org/wiki/General_Solution_of_Linear_2nd_Order_ODE_from_Homogeneous_2nd_Order_ODE_and_Particular_Solution

Theorem
Consider the nonhomogeneous linear second order ODE:

$(1): \quad \dfrac {\d^2 y} {\d x^2} + \map P x \dfrac {\d y} {\d x} + \map Q x y = \map R x$
Let $\map {y_g} x$ be the general solution of the homogeneous linear second order ODE:

$(2): \quad \dfrac {\d^2 y} {\d x^2} + \map P x \dfrac {\d y} {\d x} + \map Q x y = 0$
Let $\map {y_p} x$ be a particular solution of $(1)$.

Then $\map {y_g} x + \map {y_p} x$ is the general solution of $(1)$.


Proof
Let $\map {y_g} {x, C_1, C_2}$ be a general solution of $(2)$.
Note that $C_1$ and $C_2$ are the two arbitrary constants that are to be expected of a second order ODE.
Let $\map {y_p} x$ be a certain fixed particular solution of $(1)$.
Let $\map y x$ be an arbitrary particular solution of $(1)$.
Then:














\(\ds \)

\(\)







\(\ds \paren {y - y_p}' ' + \map P x \paren {y - y_p}' + \map Q x \paren {y - y_p}\)






Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: 2nd derivative causing display issueYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.














\(\ds \)

\(=\)







\(\ds \paren {y' ' + \map P x y' + \map Q x y} - \paren {y_p' ' + \map P x y_p' + \map Q x y_p}\)




















\(\ds \)

\(=\)







\(\ds \map R x - \map R x\)




















\(\ds \)

\(=\)







\(\ds 0\)









We have that $\map {y_g} {x, C_1, C_2}$ is a general solution of $(2)$.
Thus:

$\map y x - \map {y_p} x = \map {y_g} {x, C_1, C_2}$
or:

$\map y x = \map {y_g} {x, C_1, C_2} + \map {y_p} x$
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.2$ The general equation
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.14$: Second Order Linear Equations: Introduction: Theorem $\text{B}$




