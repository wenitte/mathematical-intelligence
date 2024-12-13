# 

Source: https://proofwiki.org/wiki/Principle_of_Stationary_Action_with_Standard_Lagrangian_implies_Newton%27s_Laws_of_Motion


Work In ProgressYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code.

This article needs to be linked to other articles.In particular: categoryYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\MM$ be an $n$-dimensional Euclidean manifold.
Let $P$ be a physical system composed of a countable number of classical particles with inertial masses $m_i$ with $i \in \N$.
Let $\mathbf x = \map {\mathbf x} t$ be twice-differentiable vector-valued function embedded in $\MM$.
Suppose ${\mathbf x}_i$ represents the position of the $i$th particle of $P$.
Suppose the action of $P$ is of the following form:

$\ds S = \int_{t_0}^{t_1} L \rd t$
where $L$ is the standard Lagrangian.
Suppose, all (internal or external) forces ${\mathbf F}_i$ acting upon $P$ are of the form:

${\mathbf F}_i = -\dfrac {\partial U} {\partial \mathbf x_i}$
where:

$U = \map U {t, \set {\mathbf x_i} }$ is a differentiable real function
$\set {\mathbf x_i}$ denotes dependence on the positions of all the particles.

Then the stationary point of $S$ implies Newton's Second Law of Motion.


Proof
Standard Lagrangian is of the following form:

$\ds L = \sum_{i \mathop = 1}^n \frac {m_i} 2 \dot {\mathbf x}_i^2 - U$
By the Principle of Stationary Action, equations of motion of $P$ are:

$\forall i \in \N: m_i {\ddot {\mathbf x} }_i + \dfrac {\partial U} {\partial \mathbf x_i} = 0$
By definition of velocity:

${\dot {\mathbf x} }_i = {\mathbf v}_i$
By assumption:

${\mathbf F}_i = -\dfrac {\partial U} {\partial {\mathbf x}_i}$
Then it follows that the equations of motion of $P$ can be rewritten as:

$\map {\dfrac \d {\d t} } {m_i {\mathbf v}_i } = {\mathbf F}_i$
By definition, these equations together represent Newton's Second Law of Motion.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.21$: The Principle of Least Action




