# 

Source: https://proofwiki.org/wiki/Length_of_Element_of_Arc_in_Orthogonal_Curvilinear_Coordinates



Theorem
Let $\tuple {q_1, q_2, q_3}$ denote a set of orthogonal curvilinear coordinates.
Let the relation between those orthogonal curvilinear coordinates and Cartesian coordinates be expressed as:














\(\ds x\)

\(=\)







\(\ds \map x {q_1, q_2, q_3}\)




















\(\ds y\)

\(=\)







\(\ds \map y {q_1, q_2, q_3}\)




















\(\ds z\)

\(=\)







\(\ds \map z {q_1, q_2, q_3}\)









where $\tuple {x, y, z}$ denotes the Cartesian coordinates.

Let $S$ be an infinitesimal arc.
Let $\d s$ be the length of $S$

Then:














\(\ds \d s^2\)

\(=\)







\(\ds {h_1}^2 {\rd q_1}^2 + {h_2}^2 {\rd q_2}^2 + {h_3}^2 {\rd q_3}^2\)




















\(\ds \)

\(=\)







\(\ds \sum_i {h_i}^2 {\rd q_i}^2\)





for $i \in \set {1, 2, 3}$




where:

$\d q_i$ is the projection of $S$ onto the unit normal to the curvilinear coordinate surface determined by $q_i$, for $i \in \set {1, 3}$
${h_i}^2 = \paren {\dfrac {\partial x} {\partial q_i} }^2 + \paren {\dfrac {\partial y} {\partial q_i} }^2 + \paren {\dfrac {\partial z} {\partial q_i} }^2$


Proof
By definition of the metric of $\tuple {q_1, q_2, q_3}$:














\(\ds \d s^2\)

\(=\)







\(\ds \d x^2 + \d y^2 + \d z^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{i, j} {h_{i j} }^2 \rd q_i \rd q_j\)





for $i, j \in \set {1, 2, 3}$



From Value of Curvilinear Coordinate Metric:

$\forall i, j \in \set {1, 2, 3}: {h_{i j} }^2 = \dfrac {\partial x} {\partial q_i} \dfrac {\partial x} {\partial q_j} + \dfrac {\partial y} {\partial q_i} \dfrac {\partial y} {\partial q_j} + \dfrac {\partial z} {\partial q_i} \dfrac {\partial z} {\partial q_j}$

But we have that $\tuple {q_1, q_2, q_3}$ is orthogonal.
From Definition 1 of orthogonal curvilinear coordinates:

$\dfrac {\partial x} {\partial q_i} \dfrac {\partial x} {\partial q_j} + \dfrac {\partial y} {\partial q_i} \dfrac {\partial y} {\partial q_j} + \dfrac {\partial z} {\partial q_i} \dfrac {\partial z} {\partial q_j} = 0$
wherever $i \ne j$.
Hence we have:














\(\ds \d s^2\)

\(=\)







\(\ds {h_{1 1} }^2 {\rd q_1}^2 + {h_{2 2} }^2 {\rd q_2}^2 + {h_{3 3} }^2 {\rd q_3}^2\)




















\(\ds \)

\(=\)







\(\ds \sum_i {h_{i i} }^2 {\rd q_i}^2\)





for $i \in \set {1, 2, 3}$



Elements $h_{i i}$ are those elements of the metric which do not vanish when $\tuple {q_1, q_2, q_3}$ is orthogonal.
To streamline notation, we rename them $h_1$, $h_2$ and $h_3$.

Hence:














\(\ds \d s^2\)

\(=\)







\(\ds {h_1}^2 {\rd q_1}^2 + {h_2}^2 {\rd q_2}^2 + {h_3}^2 {\rd q_3}^2\)




















\(\ds \)

\(=\)







\(\ds \sum_i {h_i}^2 {\rd q_i}^2\)





for $i \in \set {1, 2, 3}$



where:

${h_i}^2 = \paren {\dfrac {\partial x} {\partial q_i} }^2 + \paren {\dfrac {\partial y} {\partial q_i} }^2 + \paren {\dfrac {\partial z} {\partial q_i} }^2$
$\blacksquare$


Also see
Definition:Scale Factor for Orthogonal Curvilinear Coordinates


Sources
1961: Ian N. Sneddon: Special Functions of Mathematical Physics and Chemistry (2nd ed.) ... (previous) ... (next): Chapter $\text I$: Introduction: $\S 1$. The origin of special functions: $(1.3)$
1970: George Arfken: Mathematical Methods for Physicists (2nd ed.) ... (previous) ... (next): Chapter $2$ Coordinate Systems $2.1$ Curvilinear Coordinates: $(2.8)$




