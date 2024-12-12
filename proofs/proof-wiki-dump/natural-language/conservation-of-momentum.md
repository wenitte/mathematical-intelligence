# 

Source: https://proofwiki.org/wiki/Conservation_of_Momentum


Work In ProgressYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.
Theorem
Let $P$ be a physical system.
Let it have the action $S$:

$\ds S = \int_{t_0}^{t_1} L \rd t$
where $L$ is the standard Lagrangian, and $t$ is time.
Suppose $L$ does not depend on one of the coordinates explicitly:

$\dfrac {\partial L} {\partial x_j} = 0$

Then the total momentum of $P$ along the axis $x_j$ is conserved.


Proof
By assumption, $S$ is invariant under the following family of transformations:

$T = t$
$X_j = x_j + \epsilon$
$X_{i \mathop \ne j} = x_{i \mathop \ne j}$
By Noether's Theorem:

$\nabla_{\mathbf x} L \cdot \boldsymbol \psi + \paren {L - \dot {\mathbf x} \cdot \nabla_{\dot {\mathbf x} } L} \phi = C$
where $\phi = 0$, $\psi_i = 1$,  $\psi_{j \mathop \ne i} = 0$  and $C$ is an arbitrary constant.
Then it follows that:

$\dfrac {\partial L} {\partial x_j} = C$
Since the last term is the momentum of $P$, we conclude that it is conserved.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.22$: Conservation Laws
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): conservation of momentum
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): conservation of momentum




