# 

Source: https://proofwiki.org/wiki/Euclidean_Metric_on_Real_Number_Plane_is_Rotation_Invariant


It has been suggested that this page or section be merged into Cartesian Metric is Rotation Invariant.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $r_\alpha: \R^2 \to \R^2$ denote the rotation of the Euclidean plane about the origin through an angle of $\alpha$.
Let $d_2$ denote the Euclidean metric on $\R^2$.

Then $d_2$ is unchanged by application of $r_\alpha$:

$\forall x, y \in \R^2: \map {d_2} {\map {r_\alpha} x, \map {r_\alpha} y} = \map {d_2} {x, y}$


Proof
Let $x = \tuple {x_1, x_2}$ and $y = \tuple {y_1, y_2}$ be arbitrary points in $\R^2$.
Note that $\paren {\map {d_2} {x, y} }^2$ can be expressed as:

$\paren {\map {d_2} {x, y} }^2 = \paren {\mathbf x - \mathbf y}^\intercal \paren {\mathbf x - \mathbf y}$
where:

$x$ and $y$ are expressed in vector form: $\mathbf x = \begin {pmatrix} x_1 \\ x_2 \end {pmatrix}, y = \begin {pmatrix} y_1 \\ y_2 \end {pmatrix}$
$\paren {\mathbf x - \mathbf y}^\intercal$ denotes the transpose of $\paren {\mathbf x - \mathbf y}$

Then:














\(\ds \map {d_2} {\map {r_\alpha} x, \map {r_\alpha} y}\)

\(=\)







\(\ds \map {d_2} {\begin {pmatrix} \cos \alpha & \sin \alpha \\ -\sin \alpha & \cos \alpha \end {pmatrix} \begin {pmatrix} x_1 \\ x_2 \end {pmatrix}, \begin {pmatrix} \cos \alpha & \sin \alpha \\ -\sin \alpha & \cos \alpha \end {pmatrix} \begin {pmatrix} y_1 \\ y_2 \end {pmatrix} }\)





Matrix Form of Plane Rotation














\(\ds \)

\(=\)







\(\ds \map {d_2} {\begin {pmatrix} x_1 \cos \alpha + x_2 \sin \alpha \\ -x_1 \sin \alpha + x_2 \cos \alpha \end {pmatrix}, \begin {pmatrix} y_1 \cos \alpha + y_2 \sin \alpha \\ -y_1 \sin \alpha + y_2 \cos \alpha \end {pmatrix} }\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\begin {pmatrix} \paren {x_1 - y_1} \cos \alpha + \paren {x_2 - y_2} \sin \alpha \\ -\paren {x_1 - y_1} \sin \alpha + \paren {x_2 - y_2} \cos \alpha \end {pmatrix}^\intercal \begin {pmatrix} \paren {x_1 - y_1} \cos \alpha + \paren {x_2 - y_2} \sin \alpha \\ -\paren {x_1 - y_1} \sin \alpha + \paren {x_2 - y_2} \cos \alpha \end {pmatrix} }\)





Definition of Euclidean Metric on Real Number Plane














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {\paren {x_1 - y_1}^2 + \paren {x_2 - y_2}^2} \paren {\cos^2 \alpha + \sin^2 \alpha} + 2 \paren {x_1 - y_1} \paren {x_2 - y_2} \cos \alpha \sin \alpha - 2 \paren {x_1 - y_1} \paren {x_2 - y_2} \cos \alpha \sin \alpha}\)





multiplying out and gathering terms














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {x_1 - y_1}^2 + \paren {x_2 - y_2}^2}\)





Sum of Squares of Sine and Cosine and simplifying














\(\ds \)

\(=\)







\(\ds \map {d_2} {x, y}\)





Definition of Euclidean Metric on Real Number Plane



$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $2$: Continuity generalized: metric spaces: Exercise $2.6: 21$




