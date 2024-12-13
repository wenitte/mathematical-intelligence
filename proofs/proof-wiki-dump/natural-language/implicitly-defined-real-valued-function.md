# 

Source: https://proofwiki.org/wiki/Implicitly_Defined_Real-Valued_Function

Theorem
Let $F: \struct {\mathbf X' \subseteq \R^{n + 1} } \to \struct {\mathbb I' \subseteq \R}$ have continuous partial derivatives. 


This article, or a section of it, needs explaining.In particular: Can the language of this be brought into line with existing definitions of implicit functions?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\tuple {\mathbf x, z}$ denote an element of $\R^{n + 1}$, where $\mathbf x \in \R^n$ and $z \in \R$.
Suppose $\exists \tuple {\mathbf x_0, z_0} \in \mathbf X'$ such that:

$\map F {\mathbf x_0, z_0} = 0$
$\dfrac \partial {\partial z} \map F {\mathbf x_0, z_0} \ne 0$

Then there exists a unique mapping of the form:

$g: \mathbf X \to \mathbb I$
where $\mathbf X \subseteq \R^n$ contains $\mathbf x_0$ and $\mathbb I$ is an open real interval containing $z_0$, such that:

$\forall \mathbf x \in \mathbf X, z \in \mathbb I: \map F {\mathbf x, z} = 0 \iff z = \map g {\mathbf x}$
and $g$ itself has continuous partial derivatives.


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Proof
This is a special case of the Implicit Function Theorem.
$\blacksquare$


Sources
http://www.math.dartmouth.edu/archive/m14f04/public_html/math_14_lagrange.pdf, Theorem $2$




