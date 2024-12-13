# 

Source: https://proofwiki.org/wiki/Implicit_Function_Theorem/Real_Functions


This article needs to be linked to other articles.In particular: Review existing linksYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $n$ and $k$ be natural numbers.
Let $\Omega \subset \R^n \times \R^k$ be open.
Let $f: \Omega \to \R^k$ be continuous.
Let the partial derivatives of $f$ with respect to $\R^k$ be continuous.
Let $\tuple {a, b} \in \Omega$, with $a\in \R^n$ and $b\in \R^k$.
Let $\map f {a, b} = 0$.
For $\tuple {x_0, y_0} \in \Omega$, let $D_2 \map f {x_0, y_0}$ denote the total derivative of the function $y \mapsto \map f {x_0, y}$ at $y_0$.
Let the linear map $D_2 \map f {a, b}$ be invertible.

Then there exist neighborhoods $U \subset \Omega$ of $a$ and $V \subset \R^k$ of $b$ such that there exists a unique function $g: U \to V$ such that $\map f {x, \map g x} = 0$ for all $x \in U$.
Moreover, $g$ is continuous.


Proof 1
Reduction to $\tuple {a, b} = \tuple {0, 0}$
We may assume $\tuple {a, b} = \tuple {0, 0}$.


This article, or a section of it, needs explaining.In particular: whyYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Define:

$F: \Omega \to \R^k: \map F {x, y} = y - \map {D_2 \map f {a, b}^{-1} } {\map f {x, y} }$
By Linear Function is Continuous, $D_2 \map f {a, b}^{-1}$ is continuous on $\R^k$.
Thus $F$ is continuous on $\Omega$.


$F$ is locally a uniform contraction
Let $r_1 > 0$ such that the open ball $\map B {0, r_1} \subseteq \Omega$.
We have, for $\tuple {x, y_1}, \tuple {x, y_2} \in \map B {0, r_1}$, by the Mean Value Inequality:

$\ds \norm {\map F {x, y_2} - \map F {x, y_1} } \le \sup_{y \mathop \in \closedint {y_1} {y_2} } \norm {D_2 \map F {x, y} } \cdot \norm {y_2 - y_1}$
We have, for $\tuple {x, y} \in \Omega$:

$D_2 \map F {x, y} = I - \paren {D_2 \map F {0, 0} }^{-1} \circ D_2 \map F {x, y}$
where $I$ is the identity mapping.
Thus $D_2 F$ is continuous in $\Omega$.
By definition, $D_2 \map F {0, 0} = 0$.
By continuity, there exists $r_2 > 0$ such that:

$\norm {D_2 \map F {x, y} } \le \dfrac 1 2$ for $\norm {\tuple {x, y} } \le r_2$
From the above inequality, $F$ is a uniform contraction mapping on the open ball $\map B {0, r_2}$ for the Lipschitz Constant $\dfrac 1 2$.


Constructing a stable neighborhood
We have, for $x, y \in \map {\overline B} {0, r_2}$:














\(\ds \norm {\map F {x, y} }\)

\(\le\)







\(\ds \norm {\map F {x, y} - \map F {x, 0} } + \norm {\map F {x, 0} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \frac 1 2 \norm y + \norm {\map F {x, 0} }\)





Definition of $r_2$



Because $\map F {0, 0} = 0$ and $F$ is continuous, there exists $r_3>0$ such that $\norm {\map F {x, 0} } \le \dfrac {r_2} 2$.
Then:

$\norm {\map F {x, y} } \le r_2$ for $\norm y \le r_2$
and:

$\norm x \le r_3$
Thus the restriction of $F$ to $\map B {0, r_3} \times \map {\overline B} {0, r_2}$ is a uniform contraction:

$F: \map B {0, r_3} \times \map {\overline B} {0, r_2} \to \map {\overline B} {0, r_2}$


Applying the Uniform Contraction Theorem
By Subspace of Complete Metric Space is Closed iff Complete, $\map {\overline B} {0, r_2}$ is complete.
By the Uniform Contraction Mapping Theorem, there exists a unique mapping $g: \map B {0, r_3} \to \map {\overline B} {0, r_2}$ such that $\map F {x, \map g x} = \map g x$.
Moreover, $g$ is continuous.
A mapping $h: \map B {0, r_3} \to \map {\overline B} {0, r_2}$ satisfies $\map F {x, \map h x} = \map h x$ if and only if it satisfies $\map {D_2 \map f {a, b}^{-1} } {\map f {x, \map h x} } = 0$ if and only if it satisfies $\map f {x, \map h x} = 0$, because $D_2 \map f {a, b}^{-1}$ is invertible.
Thus $g$ is the unique mapping $g: \map B {0, r_3} \to \map {\overline B} {0, r_2}$ such that $\map f {x, \map g x} = 0$.
$\blacksquare$


Proof Using the Inverse Function Theorem

This theorem requires a proof.In particular: see Lee's bookYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Examples
Unit Circle
Consider the Equation of Unit Circle for the unit circle:

$x^2 + y^2 = 1$
This is the graph of a function near all points where $y = 0$.


Sources
2003: John M. Lee: Introduction to Smooth Manifolds: Appendix $\text C$




