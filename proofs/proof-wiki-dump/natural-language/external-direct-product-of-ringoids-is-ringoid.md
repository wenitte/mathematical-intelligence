# 

Source: https://proofwiki.org/wiki/External_Direct_Product_of_Ringoids_is_Ringoid

Theorem
Let $\struct {R_1, +_1, \circ_1}, \struct {R_2, +_2, \circ_2}, \ldots, \struct {R_n, +_n, \circ_n}$ be ringoids.
Let $\ds \struct {R, +, \circ} = \prod_{k \mathop = 1}^n \struct {R_k, +_k, \circ_k}$ be their external direct product.
Then $\struct {R, +, \circ}$ is a ringoid.


Proof
By definition of ringoid, $\circ_k$ distributes over $+_k$ for all $k = 1, 2, \ldots, n$.

Let $x, y, z \in R$.
Then:














\(\ds x \circ \paren {y + z}\)

\(=\)







\(\ds \tuple {x_1, x_2, \ldots, x_n} \circ \paren {\tuple {y_1, y_2, \ldots, y_n} + \tuple {z_1, z_2, \ldots, z_n} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1, x_2, \ldots, x_n} \circ \tuple {y_1 +_1 z_1, y_2 +_2 z_2, \ldots, y_n +_n z_n}\)




















\(\ds \)

\(=\)







\(\ds \tuple {x_1 \circ_1 \paren {y_1 +_1 z_1}, x_2 \circ_2 \paren {y_2 +_2 z_2}, \ldots, x_n \circ_n \paren {y_n +_n z_n} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {x_1 \circ_1 y_1} +_1 \paren {x_1 \circ_1 z_1}, \paren {x_2 \circ_2 y_2} +_2 \paren {x_2 \circ_2 z_2}, \ldots, \paren {x_n \circ_n y_n} +_n \paren {x_n \circ_n z_n} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {x_1 \circ_1 y_1}, \paren {x_2 \circ_2 y_2}, \ldots, \paren {x_n \circ_n y_n} } + \tuple {\left({x_1 \circ_1 z_1}\right), \paren {x_2 \circ_2 z_2}, \ldots, \paren {x_n \circ_n z_n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\tuple {x_1, x_2, \ldots, x_n} \circ \paren {y_1, y_2, \ldots, y_n} } + \paren {\tuple {x_1, x_2, \ldots, x_n} \circ \tuple {z_1, z_2, \ldots, z_n} }\)




















\(\ds \)

\(=\)







\(\ds \paren {x \circ y} + \paren {x \circ z}\)










In the same way:

$\paren {y + z} \circ x = \paren {y \circ x} + \paren {z \circ x}$
Thus $\circ$ is distributive over $+$.
By definition of ringoid, $\struct {R, +, \circ}$ is a ringoid.
$\blacksquare$





