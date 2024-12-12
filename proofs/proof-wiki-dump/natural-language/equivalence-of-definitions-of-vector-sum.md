# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Vector_Sum



Theorem
The following definitions of the concept of Vector Sum are equivalent:

Component Definition
Let $\mathbf u$ and $\mathbf v$ be represented by their components considered to be embedded in a real $n$-space:














\(\ds \mathbf u\)

\(=\)







\(\ds \tuple {u_1, u_2, \ldots, u_n}\)




















\(\ds \mathbf v\)

\(=\)







\(\ds \tuple {v_1, v_2, \ldots, v_n}\)










Then the (vector) sum of $\mathbf u$ and $\mathbf v$ is defined as:

$\mathbf u + \mathbf v := \tuple {u_1 + v_1, u_2 + v_2, \ldots, u_n + v_n}$

Note that the $+$ on the right hand side is conventional addition of numbers, while the $+$ on the left hand side takes on a different meaning.
The distinction is implied by which operands are involved.

Triangle Law
Let $\mathbf u$ and $\mathbf v$ be represented by arrows embedded in the plane such that:

$\mathbf u$ is represented by $\vec {AB}$
$\mathbf v$ is represented by $\vec {BC}$
that is, so that the initial point of $\mathbf v$ is identified with the terminal point of $\mathbf u$.


Then their (vector) sum $\mathbf u + \mathbf v$ is represented by the arrow $\vec {AC}$.


Proof
Let the Cartesian coordinate system be selected such that $\mathbf u$ and $\mathbf v$ are embedded in the $x$-$y$ plane.
Then:














\(\ds \mathbf u\)

\(=\)







\(\ds \tuple {u_1, u_2}\)




















\(\ds \mathbf v\)

\(=\)







\(\ds \tuple {v_1, v_2}\)









and all other components, if there are any, are then zero.
Thus by the component definition:

$\mathbf u + \mathbf v = \tuple {u_1 + v_1, u_2 + v_2}$
$\Box$

Now we use the triangle law:




Let:














\(\ds A\)

\(=\)







\(\ds \tuple {A_x, A_y}\)




















\(\ds B\)

\(=\)







\(\ds \tuple {B_x, B_y}\)




















\(\ds C\)

\(=\)







\(\ds \tuple {C_x, C_y}\)










Thus we have:














\(\ds \mathbf u + \mathbf v\)

\(=\)







\(\ds \vec {AC}\)




















\(\ds \)

\(=\)







\(\ds \tuple {C_x - A_x, C_y - A_y}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {C_x - B_x} + \paren {B_x - A_x}, \paren {C_y - B_y} + \paren {B_y - A_y} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {v_1 + u_1, v_2 + u_2}\)









It is seen that $\mathbf u + \mathbf v$ calculated using the triangle law is the same as $\mathbf u + \mathbf v$ calculated using the component definition.
$\blacksquare$





