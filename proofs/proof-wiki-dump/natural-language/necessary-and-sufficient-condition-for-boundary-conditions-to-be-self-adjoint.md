# 

Source: https://proofwiki.org/wiki/Necessary_and_Sufficient_Condition_for_Boundary_Conditions_to_be_Self-adjoint


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\mathbf p$ be continuously differentiable.


This article, or a section of it, needs explaining.In particular: What is $\mathbf p$, and differentiable with respect to what?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

The boundary conditions

$\bigvalueat {\map {\mathbf y} a} {x \mathop = a} = \bigvalueat {\map {\boldsymbol \psi} {\mathbf y} } {x \mathop = a}$
are self-adjoint if and only if:

$\forall i, k \in \N: 1 \le i, k \le N: \valueat {\dfrac {\partial p_i \sqbrk {x, \mathbf y, \map {\boldsymbol \psi} {\mathbf y} } } {\partial y_k} } {x \mathop = a} = \valueat {\dfrac {\partial p_k \sqbrk {x, \mathbf y, \map {\boldsymbol \psi} {\mathbf y} } } {\partial y_i} } {x \mathop = a}$


Proof
Necessary Condition
By assumption the boundary conditions are self-adjoint.
Then there exists $\map g {x, \mathbf y}$ such that:

$\map {p_i} {x, \mathbf y, \map {\boldsymbol \psi} {\mathbf y} } = \dfrac {\partial \map g {x \mathbf y} } {\partial y_i}$
Because $\mathbf p \in C^1$:

$g \in C^2$

This article contains statements that are justified by handwavery.In particular: Why?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Differentiate both sides with respect to $y_k$:

$\dfrac {\partial \map {p_i} {x, \mathbf y, \map {\boldsymbol \psi} {\mathbf y} } } {\partial y_k} = \dfrac {\partial^2 \map g {x, \mathbf y} } {\partial y_k \partial y_i}$
By the Schwarz-Clairaut Theorem, partial derivatives commute, hence indices can be mutually replaced:

$\dfrac {\partial \map {p_i} {x, \mathbf y, \map {\boldsymbol \psi} {\mathbf y} } } {\partial y_k} = \dfrac {\partial \map {p_k} {x, \mathbf y, \map {\boldsymbol \psi} {\mathbf y} } } {\partial y_i}$
Fixing $x = a$ provides the result.
$\Box$


Sufficient condition
By assumption:

$\valueat {\dfrac {\partial p_i} {\partial y_j} } {x \mathop = a} = \valueat {\dfrac {\partial p_j} {\partial y_i} } {x \mathop = a}$
Then:

$\exists \map g {x, \mathbf y} \in C^2: \valueat {\dfrac {\partial p_i} {\partial y_j} } {x \mathop = a} = \valueat {\dfrac {\partial p_j} {\partial y_i} } {x \mathop = a} = \valueat {\dfrac {\partial^2 g} {\partial y_i \partial y_j} } {x \mathop = a}$
In other words:

$\bigvalueat {p_i} {x \mathop = a} = \valueat {\dfrac {\partial g} {\partial y_i} } {x \mathop = a}$

This article contains statements that are justified by handwavery.In particular: why?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence, the boundary conditions are self-adjoint.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 6.31$: Consistent Boundary Conditions. General Definition of a Field




