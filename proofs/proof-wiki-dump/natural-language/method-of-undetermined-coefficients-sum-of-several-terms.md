# 

Source: https://proofwiki.org/wiki/Method_of_Undetermined_Coefficients/Sum_of_Several_Terms

Proof Technique
Consider the nonhomogeneous linear second order ODE with constant coefficients:

$(1): \quad y + p y' + q y = \map R x$
Let $\map R x$ be of the form:

$\map R x = \ds \sum_{k \mathop = 1}^n \map {f_k} x$
where each of the $f_k$ is either:

a real polynomial function: $\map {f_k} x = \ds \sum_{j \mathop = 0}^m a_j x^j$ for some integer $m$
a function of the form $\map {f_k} x = A e^r x$
a function of the form $\map {f_k} x = A \cos r x + B \sin r x$
the product of a combination of the three above.

The Method of Undetermined Coefficients can be used to solve $(1)$ in the following manner.


Method and Proof
Let $\map {y_g} x$ be the general solution to:

$(2): \quad y + p y' + q y = 0$
From Solution of Constant Coefficient Homogeneous LSOODE, $\map {y_g} x$ can be found systematically.
Let $\map {y_p} x$ be a particular solution to $(1)$.
Then from General Solution of Linear 2nd Order ODE from Homogeneous 2nd Order ODE and Particular Solution:

$\map {y_g} x + \map {y_p} x$
is the general solution to $(1)$.

It remains to find $\map {y_p} x$.

For each $k$, use the Method of Undetermined Coefficients to find a particular solution to the nonhomogeneous linear second order ODE:

$y + p y' + q y = \map {f_k} x$
Then from Combination of Solutions to Non-Homogeneous LSOODE with same Homogeneous Part, all that remains to be done is to add them all up.
$\blacksquare$


Sources
1958: G.E.H. Reuter: Elementary Differential Equations & Operators ... (previous) ... (next): Chapter $1$: Linear Differential Equations with Constant Coefficients: $\S 2$. The second order equation: $\S 2.6$ Particular solution: some further cases $\text{(iv)}$




