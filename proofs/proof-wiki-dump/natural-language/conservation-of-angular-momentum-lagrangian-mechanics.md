# 

Source: https://proofwiki.org/wiki/Conservation_of_Angular_Momentum_(Lagrangian_Mechanics)


Work In ProgressYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Theorem
Let $P$ be a physical system composed of a finite number of particles.
Let $P$ have the action $S$:

$\ds S = \int_{t_0}^{t_1} L \rd t$
where:

$L$ is the standard Lagrangian
$t$ is time.

Let $L$ be invariant with respect to rotation around the $z$-axis.

Then the total angular momentum of $P$ along the $z$-axis is conserved.


Proof
By assumption, $S$ is invariant under the following family of transformations:














\(\ds T\)

\(=\)







\(\ds t\)




















\(\ds X_i\)

\(=\)







\(\ds x_i \cos \epsilon + y_i \sin \epsilon\)




















\(\ds Y_i\)

\(=\)







\(\ds -x_i \sin \epsilon + y_i \cos \epsilon\)




















\(\ds Z_i\)

\(=\)







\(\ds z_i\)









where $\epsilon \in \R$.

By Noether's Theorem:

$\nabla_{\dot {\mathbf x} } L \cdot \boldsymbol \psi + \paren {L - \dot {\mathbf x} \cdot \nabla_{\dot {\mathbf x} } L } \phi = C$
where:














\(\ds \phi\)

\(=\)







\(\ds 0\)




















\(\ds \psi_{i x}\)

\(=\)







\(\ds \valueat {\dfrac {\partial X_i} {\partial \epsilon} } {\epsilon \mathop = 0}\)

\(\ds = y_i\)


















\(\ds \psi_{i y}\)

\(=\)







\(\ds \valueat {\dfrac {\partial Y_i} {\partial \epsilon} } {\epsilon \mathop = 0}\)

\(\ds = -x_i\)


















\(\ds \psi_{i z}\)

\(=\)







\(\ds 0\)









and $C$ is an arbitrary constant.

Then it follows that:

$\ds \sum_i \paren {\dfrac {\partial L} {\partial {\dot x}_i} y_i - \dfrac {\partial L} {\partial {\dot y}_i} x_i} = C$

Since the right hand side is the $z$ component of angular momentum of $P$ along the $z$-axis, we conclude that it is conserved.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.22$: Conservation Laws




