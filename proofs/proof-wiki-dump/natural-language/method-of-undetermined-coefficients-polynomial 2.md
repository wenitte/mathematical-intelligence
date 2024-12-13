# 

Source: https://proofwiki.org/wiki/Method_of_Undetermined_Coefficients/Polynomial

Proof Technique
Consider the nonhomogeneous linear second order ODE with constant coefficients:

$(1): \quad y + p y' + q y = \map R x$
Let $\map R x$ be a polynomial in $x$:

$\ds \map R x = \sum_{j \mathop = 0}^n a_j x^j$

The Method of Undetermined Coefficients can be used to solve $(1)$ in the following manner.


Method and Proof
Let $\map {y_g} x$ be the general solution to:

$y + p y' + q y = 0$
From Solution of Constant Coefficient Homogeneous LSOODE, $\map {y_g} x$ can be found systematically.
Let $\map {y_p} x$ be a particular solution to $(1)$.
Then from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$\map {y_g} x + \map {y_p} x$
is the general solution to $(1)$.

It remains to find $\map {y_p} x$.

Let $\ds \map R x = \sum_{j \mathop = 0}^n a_j x^j$.

Assume that there is a particular solution to $(1)$ of the form:

$\ds y_p = \sum_{j \mathop = 0}^n A_j x^j$
We have:














\(\ds \frac {\d} {\d x} y_p\)

\(=\)







\(\ds \sum_{j \mathop = 1}^n j A_j x^{j - 1}\)





Power Rule for Derivatives














\(\ds \frac {\d^2} {\d x^2} y_p\)

\(=\)







\(\ds \sum_{j \mathop = 2}^n j \paren {j - 1} A_j x^{j - 2}\)





Power Rule for Derivatives




Inserting into $(1)$:














\(\ds \sum_{j \mathop = 2}^n j \paren {j - 1} A_j x^{j - 2} + p \sum_{j \mathop = 1}^n j A_j x^{j - 1} + q \sum_{j \mathop = 0}^n A_j x^j\)

\(=\)







\(\ds \sum_{j \mathop = 0}^n a_j x^j\)









The coefficients $A_0$ to $A_n$ can hence be solved in terms of $a_0$ to $a_n$ using the techniques of simultaneous equations.
The general form is tedious and unenlightening to evaluate.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.3$ Particular solution: polynomial $\map f x$
1972: George F. Simmons: Differential Equations ... (previous) ... (next): $\S 3.18$: The Method of Undetermined Coefficients




