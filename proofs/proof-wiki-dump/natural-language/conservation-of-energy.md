# 

Source: https://proofwiki.org/wiki/Conservation_of_Energy


Work In ProgressYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Theorem
Let $P$ be a physical system.
Let it have the action $S$:

$\ds S = \int_{t_0}^{t_1} L \rd t$
where $L$ is the standard Lagrangian, and $t$ is time.
Suppose $L$ does not depend on time explicitly:

$\dfrac {\partial L} {\partial t} = 0$

Then the total energy of $P$ is conserved.


Proof
By assumption, $S$ is invariant under the following family of transformations:

$T = t + \epsilon$
$\mathbf X = \mathbf x$
By Noether's Theorem:

$\nabla_{\dot {\mathbf x} } L \cdot \boldsymbol \psi + \paren {L - \dot {\mathbf x} \cdot \nabla_{\dot {\mathbf x} } L} \phi = C$
where $\phi = 1$, $\boldsymbol \psi = \mathbf 0$ and $C$ is an arbitrary constant.
Then it follows that:














\(\ds L - \dot {\mathbf x} \cdot \nabla_{\dot {\mathbf x} } L\)

\(=\)







\(\ds T - U - \dot {\mathbf x} \cdot \nabla_{\dot{\mathbf x} } \paren {T - U}\)




















\(\ds \)

\(=\)







\(\ds T - U - \dot {\mathbf x} \cdot \nabla_{\dot{\mathbf x} } \paren{\frac m 2 \dot {\mathbf x}^2}\)




















\(\ds \)

\(=\)







\(\ds T - U - m \dot {\mathbf x}^2\)




















\(\ds \)

\(=\)







\(\ds T - U - 2 T\)




















\(\ds \)

\(=\)







\(\ds - \paren {T + U}\)









Since the last term is the total energy of $P$, we conclude that it is conserved.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.22$: Conservation Laws
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): conservation of energy
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): conservation of energy




