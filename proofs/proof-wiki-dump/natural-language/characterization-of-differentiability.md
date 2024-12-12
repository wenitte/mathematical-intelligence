# 

Source: https://proofwiki.org/wiki/Characterization_of_Differentiability

Theorem

This page has been identified as a candidate for refactoring of medium complexity.In particular: one-dimensional case deserves its own page, perhapsUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Let $\mathbb X$ be an open rectangle of $\R^n$. 
Let $f: \mathbb X \to \R, \mathbf x \mapsto \map f {\mathbf x}$ be a real-valued function.
Let $\mathbf x = \begin {bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix} \in \R^n$.
Let $\map {\Delta f} {\mathbf x} = \map f {\mathbf x + \Delta \mathbf x} - \map f {\mathbf x}$ .
Let $\dfrac {\partial f} {\partial x_j}$ be the partial derivative of $f$ with respect to $x_j$.

Then $f$ is differentiable if and only if there exists some $\map {\Delta f} {\mathbf x}$ such that:

$\ds \map {\Delta  f} {\mathbf x} = \sum_{i \mathop = 1}^n \frac {\partial \map f {\mathbf x} } {\partial x_i} \Delta x_i + \sum_{i \mathop = 1}^n \varepsilon_i \Delta x_i$
where $\forall i: 1 \le i \le n: \varepsilon_i \to 0$ as $\Delta x_i \to 0$.


Proof
Suppose $f: \R^1 \to \R$.
Define:

$\map f x = y$
$\Delta y = \map f {x + \Delta x} - \Delta x$

From the definition of the derivative of a real function, we can say that $f$ is differentiable if and only if:

$\dfrac {\Delta y} {\Delta x} \to \dfrac {\d y} {\d x}$
as $\Delta x \to 0$.
Clearly, this is equivalent to saying that $f$ is differentiable if and only if:

$\dfrac {\Delta y} {\Delta x} - \dfrac {\d y} {\d x} = \varepsilon$
as $\varepsilon \to 0$, where $\varepsilon \in \R$ is some real number.
Solving this equation for $\Delta y$:

$\Delta y = \dfrac {\d y} {\d x} \Delta x + \varepsilon \Delta x$
That is, if and only if the real function is differentiable $\varepsilon \to 0$ as $\Delta x \to 0$.
$\Box$

Now consider $f: \R^n \to \R$, $n > 1$.
From the definition of differentiability of a real-valued function, $f$ is differentiable if and only if:

$\map {\Delta f} {\mathbf x} = \map {\nabla f} {\mathbf x} \cdot \Delta \mathbf x + \begin{bmatrix} \\ \varepsilon_1 \\ \varepsilon_2 \\ \vdots \\ \varepsilon_n \end {bmatrix} \cdot \Delta \mathbf x$
such that $\begin{bmatrix} \\ \varepsilon_1 \\ \varepsilon_2 \\ \vdots \\ \varepsilon_n \end{bmatrix} \to \mathbf 0$ as $\Delta \mathbf x \to \mathbf 0$.


Work In ProgressIn particular: needs to change to accommodate the new (more general) definition of differentiabilityYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by completing it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{WIP}} from the code. 
Observe that:














\(\ds \map {\nabla f} {\mathbf x} \cdot \Delta \mathbf x + \begin {bmatrix} \\ \varepsilon_1 \\ \varepsilon_2 \\ \vdots \\ \varepsilon_n \end {bmatrix} \cdot \Delta \mathbf x\)

\(=\)







\(\ds \begin {bmatrix} \frac {\map {\partial f} {\mathbf x} } {\partial x_1} \\ \frac {\map {\partial f} {\mathbf x} } {\partial x_2} \\ \vdots \\ \frac {\map {\partial f} {\mathbf x} } {\partial x_n} \end {bmatrix} \cdot \begin {bmatrix} \Delta x_1 \\ \Delta x_2 \\ \vdots \\ \Delta x_n \end {bmatrix} + \begin {bmatrix} \\ \varepsilon_1 \\ \varepsilon_2 \\ \vdots \\ \varepsilon_n \end {bmatrix} \cdot \begin {bmatrix} \Delta x_1 \\ \Delta x_2 \\ \vdots \\ \Delta x_n \end {bmatrix}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \frac {\map {\partial f} {\mathbf x} } {\partial x_i} \Delta x_i + \sum_{i \mathop = 1}^n \varepsilon_i \Delta x_i\)





Definition of Dot Product



where $\begin {bmatrix} \\ \varepsilon_1 \\ \varepsilon_2 \\ \vdots \\ \varepsilon_n \end {bmatrix} \to \begin {bmatrix} \\ 0 \\ 0 \\ \vdots \\ 0 \end {bmatrix}$ as $\begin {bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix} \to  \begin {bmatrix} 0 \\ 0 \\ \vdots \\ 0 \end{bmatrix}$.
$\blacksquare$


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): $13.4$




