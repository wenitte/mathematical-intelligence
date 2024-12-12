# 

Source: https://proofwiki.org/wiki/Derivative_of_Composite_Function/Jacobians

Theorem
Let $U$ be an open subset of $\R^n$.
Let $\mathbf f = \paren {f_1, f_2, \ldots, f_m}^\intercal: U \to \R^m$ be a vector valued function, differentiable at $\mathbf x = \paren {x_1, x_2, \ldots, x_n}^\intercal \in U$.
Let $\mathbf g = \paren {g_1, g_2, \ldots, g_k}^\intercal: U \to \R^k$ be a vector valued function, differentiable at $\map {\mathbf f} {\mathbf x} = \paren {\map {f_1} {\mathbf x}, \map {f_2} {\mathbf x}, \ldots, \map {f_m} {\mathbf x} }^\intercal \in U$.

The Jacobian matrix of a composite function $\mathbf g \circ \mathbf f$ is obtained by multiplying the Jacobian matrices of $\mathbf f$ and $\mathbf g$:

$\map {\mathbf J_{\mathbf g \circ \mathbf f} } {\mathbf x} = \map {\mathbf J_{\mathbf g} } {\map {\mathbf f} {\mathbf x} } \map {\mathbf J_{\mathbf f} } {\mathbf x}$


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
The Jacobian matrix of $\mathbf g \circ \mathbf f$ at $\mathbf x$ is defined to be the $k \times n$ matrix:

$\map {\mathbf J_{\mathbf g \circ \mathbf f} } {\mathbf x} = \begin{pmatrix}
 \map {\dfrac {\map \partial {g_1 \circ \mathbf f} } {\partial x_1} } {\mathbf x} & \cdots & \map {\dfrac {\map \partial {g_1 \circ \mathbf f} } {\partial x_n} } {\mathbf x} \\
 \vdots & \ddots & \vdots \\
 \map {\dfrac {\map \partial {g_k \circ \mathbf f} } {\partial x_1} } {\mathbf x} & \cdots & \map {\dfrac {\map \partial {g_k \circ \mathbf f} } {\partial x_n} } {\mathbf x}
\end{pmatrix}$

The Jacobian matrix of $\mathbf g$ at $\map {\mathbf f} {\mathbf x}$ is defined to be the $k \times m$ matrix:

$\map {\mathbf J_{\mathbf g} } {\map {\mathbf f} {\mathbf x} } := \begin{pmatrix}
 \map {\dfrac {\partial g_1} {\partial x_1} } {\map {\mathbf f} {\mathbf x} } & \cdots & \map {\dfrac {\partial g_1} {\partial x_m} } {\map {\mathbf f} {\mathbf x} } \\
 \vdots & \ddots & \vdots \\
 \map {\dfrac {\partial g_k} {\partial x_1} } {\map {\mathbf f} {\mathbf x} } & \cdots & \map {\dfrac {\partial g_k} {\partial x_m} } {\map {\mathbf f} {\mathbf x} }
\end{pmatrix}$

The Jacobian matrix of $\mathbf f$ at $\mathbf x$ is defined to be the $m \times n$ matrix:

$\map {\mathbf J_{\mathbf f} } {\mathbf x} = \begin{pmatrix}
 \map {\dfrac {\partial f_1} {\partial x_1} } {\mathbf x} & \cdots & \map {\dfrac {\partial f_1} {\partial x_n} } {\mathbf x} \\
 \vdots & \ddots & \vdots \\
 \map {\dfrac {\partial f_m} {\partial x_1} } {\mathbf x} & \cdots & \map {\dfrac {\partial f_m} {\partial x_n} } {\mathbf x}
\end{pmatrix}$

The entry in row $r$, column $c$ of $\map {\mathbf J_{\mathbf g \circ \mathbf f} } {\mathbf x}$ is:

$\ds \map {\dfrac {\map \partial {g_r \circ \mathbf f} } {\partial x_c} } {\mathbf x}$

The entry in row $r$, column $c$ of the matrix product $\map {\mathbf J_{\mathbf g} } {\map {\mathbf f} {\mathbf x} } \map {\mathbf J_{\mathbf f} } {\mathbf x}$ is:

$\ds \sum_{i \mathop = 1}^m \map {\dfrac {\partial g_r} {\partial x_i} } {\map {\mathbf f} {\mathbf x} } \map {\dfrac {\partial f_i} {\partial x_c} } {\mathbf x}$
for each $r \in \set {1, 2, \ldots, k}, c \in \set{1, 2, \ldots, n}$.

By Derivative of Composite Function:

$\ds \map {\dfrac {\map \partial {g_r \circ \mathbf f} } {\partial x_c} } {\mathbf x} = \sum_{i \mathop = 1}^m \map {\dfrac {\partial g_r} {\partial x_i} } {\map {\mathbf f} {\mathbf x} } \map {\dfrac {\partial f_i} {\partial x_c} } {\mathbf x}$

Hence the result.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): chain rule (for differentiation)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): chain rule (for differentiation)




