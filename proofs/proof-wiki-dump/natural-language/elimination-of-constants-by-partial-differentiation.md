# 

Source: https://proofwiki.org/wiki/Elimination_of_Constants_by_Partial_Differentiation

Theorem
Let $x_1, x_2, \dotsc, x_m$ be independent variables.
Let $c_1, c_2, \dotsc, c_n$ be arbitrary constants.
Let this equation:

$(1): \quad \map f {x_1, x_2, \dotsc, x_m, z, c_1, c_2, \dotsc, c_n} = 0$
define a dependent variable $z$ via the implicit function $f$.

Then it may be possible to eliminate the constants by successive partial differentiation of $(1)$.


Proof
We differentiate $(1)$ partially with respect to each of $x_j$ for $1 \le j \le m$:

$(2): \quad \dfrac {\partial f} {\partial x_j} + \dfrac {\partial f} {\partial z} \cdot \dfrac {\partial z} {\partial x_j} = 0$
Suppose $m \ge n$.
Then there exist sufficient equations of the form of $2$ for the constants $c_1, c_2, \dotsc, c_n$ to be eliminated.
Otherwise suppose $m > n$.
Then we differentiate $(2)$ partially for each $j$ with respect to each of $x_j$ for $1 \le j \le m$, to obtain:














\(\ds \dfrac {\partial^2 f} {\partial {x_j}^2} + 2 \dfrac {\partial^2 f} {\partial x_j \partial z} + \dfrac {\partial^2 f} {\partial z^2} \cdot \paren {\dfrac {\partial z} {\partial x_j} }^2 + \dfrac {\partial f} {\partial z} \cdot \dfrac {\partial^2 z} {\partial {x_j}^2}\)

\(=\)







\(\ds 0\)





for $1 \le j \le m$














\(\ds \dfrac {\partial^2 f} {\partial x_j \partial x_k} + \dfrac {\partial^2 f} {\partial x_j \partial z} \cdot \dfrac {\partial z} {\partial x_k} + \dfrac {\partial^2 f} {\partial x_k \partial z} \cdot \dfrac {\partial z} {\partial x_j} + \dfrac {\partial^2 f} {\partial z^2} \cdot \dfrac {\partial z} {\partial x_j} \cdot \dfrac {\partial z} {\partial x_k} + \dfrac {\partial f} {\partial z} \cdot \dfrac {\partial^2 f} {\partial x_j \partial x_k}\)

\(=\)







\(\ds 0\)





for $1 \le j \le m$, $1 \le k \le m$, $j \ne k$



and continue the operation until enough equations have been obtained so that the remaining constants can be eliminated.
$\blacksquare$


Sources
1926: E.L. Ince: Ordinary Differential Equations ... (previous) ... (next): Chapter $\text I$: Introductory: $\S 1.21$ Formation of Partial Differential Equations through the Elimination of Arbitrary Constants




