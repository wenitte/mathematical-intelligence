# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Intervals_is_Convex_Set

Theorem
Let $n \in \N$.
For all $k \in \set {1, \ldots, n}$, let $\Bbb I_k$ be a real interval of any of the real interval types.

Then the cartesian product $\Bbb I_1 \times \ldots \times \Bbb I_n$ is a convex set.


Proof
Let $\mathbf x, \mathbf y \in \Bbb I_1 \times \ldots \times \Bbb I_n$ with:














\(\ds \mathbf x\)

\(=\)







\(\ds \tuple {x_1, \ldots, x_n}\)




















\(\ds \mathbf y\)

\(=\)







\(\ds \tuple {y_1, \ldots, y_n}\)









where $x_k , y_k \in \Bbb I_k$ for all $k \in \set {1, \ldots, n}$.
Let $t \in \closedint 0 1$.
Suppose that $x_k \le y_k$.
It follows that:














\(\ds x_k\)

\(=\)







\(\ds t x_k + \paren {1-t} x_k\)




















\(\ds \)

\(\le\)







\(\ds t x_k + \paren {1-t} y_k\)





as $1-t \in \closedint 0 1$














\(\ds \)

\(\le\)







\(\ds t y_k + \paren {1-t} y_k\)




















\(\ds \)

\(=\)







\(\ds y_k\)









By definition of real interval, it follows that $t x_k + \paren {1-t} y_k \in \Bbb I_k$.
If instead $x_k \ge y_k$, it follows by similar calculations that:

$x_k \ge t x_k + \paren {1-t} y_k \ge y_k$
By definition of real interval, it follows that $t x_k + \paren {1-t} y_k \in \Bbb I_k$.
It follows that $t \mathbf x + \paren {1-t} \mathbf y \in \Bbb I_1 \times \ldots \times \Bbb I_n$.
By definition of convex set, it follows that $\Bbb I_1 \times \ldots \times \Bbb I_n$ is a convex set.
$\blacksquare$





