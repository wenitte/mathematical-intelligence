# 

Source: https://proofwiki.org/wiki/Reflection_of_Plane_in_Line_through_Origin_is_Linear_Operator

Theorem
Let $M$ be a straight line in the plane $\R^2$ passing through the origin.
Let $s_M$ be the reflection of $\R^2$ in $M$.

Then $s_M$ is a linear operator for every straight line $M$ through the origin.


Proof
Let the angle between $M$ and the $x$-axis be $\alpha$.

To prove that $s_M$ is a linear operator it is sufficient to demonstrate that:

$(1): \quad \forall P_1, P_2 \in \R^2: \map {s_M} {P_1 + P_2} = \map {s_M} {P_1} + \map {s_M} {P_2}$
$(2): \quad \forall \lambda \in \R: \map {s_M} {\lambda P_1} = \lambda \map {s_M} {P_1}$

So, let $P_1 = \tuple {x_1, y_1}$ and $P_2 = \tuple {x_2, y_2}$ be arbitrary points in the plane.














\(\ds \map {s_M} {P_1 + P_2}\)

\(=\)







\(\ds \tuple {\paren {x_1 + x_2} \cos 2 \alpha + \paren {y_1 + y_2} \sin 2 \alpha, \paren {x_1 + x_2} \sin 2 \alpha - \paren {y_1 + y_2} \cos 2 \alpha}\)





Equations defining Plane Reflection: Cartesian














\(\ds \)

\(=\)







\(\ds \tuple {x_1 \cos 2 \alpha + y_1 \sin 2 \alpha, x_1 \sin 2 \alpha - y_1 \cos 2 \alpha} + \tuple {x_2 \cos 2 \alpha + y_2 \sin 2 \alpha, x_2 \sin 2 \alpha - y_2 \cos 2 \alpha}\)




















\(\ds \)

\(=\)







\(\ds \map {s_M} {P_1} + \map {s_M} {P_2}\)





Equations defining Plane Reflection: Cartesian




and:










\(\ds \forall \lambda \in \R: \, \)



\(\ds \map {s_M} {\lambda P_1}\)

\(=\)







\(\ds \map {s_M} {\lambda \tuple {x_1, y_1} }\)





Definition of $P_1$














\(\ds \)

\(=\)







\(\ds \tuple {\lambda x_1 \cos 2 \alpha + \lambda y_1 \sin 2 \alpha, \lambda x_1 \sin 2 \alpha - \lambda y_1 \cos 2 \alpha}\)





Equations defining Plane Reflection: Cartesian














\(\ds \)

\(=\)







\(\ds \lambda \tuple {x_1 \cos 2 \alpha + y_1 \sin 2 \alpha, x_1 \sin 2 \alpha - y_1 \cos 2 \alpha}\)




















\(\ds \)

\(=\)







\(\ds \lambda \map {s_M} {P_1}\)





Equations defining Plane Reflection: Cartesian



Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Example $28.4$




