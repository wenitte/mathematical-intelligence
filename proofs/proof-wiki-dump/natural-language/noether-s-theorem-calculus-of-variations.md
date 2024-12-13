# 

Source: https://proofwiki.org/wiki/Noether%27s_Theorem_(Calculus_of_Variations)


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $y_i$, $F$, $\Psi_i$, $\Phi$ be real functions.
Let $x, \epsilon \in \R$.
Let $\mathbf y = \sequence {y_i}_{1 \mathop \le i \mathop \le n}$ and $\mathbf \Psi = \sequence{\Psi_i}_{1 \mathop \le i \mathop \le n}$ be vectors.
Let 

$\Phi = \map \Phi {x, \mathbf y, \mathbf y'; \epsilon}, \quad \Psi_i = \map {\Psi_i} {x, \mathbf y, \mathbf y'; \epsilon}$
such that:

$\map \Phi {x, \mathbf y, \mathbf y'; 0} = x, \quad \map {\Psi_i} {x, \mathbf y, \mathbf y'; 0} = y_i$
where $x, \mathbf y, \mathbf y', \epsilon$ are variables.
Let:

$\ds J \sqbrk {\mathbf y} = \int_{x_0}^{x_1} \map F {x, \mathbf y, \mathbf y'} \rd x$
be a functional.
Let:

$X = \map \Phi {x, \mathbf y, \mathbf y'; \epsilon}, \quad \mathbf Y = \map {\mathbf \Psi} {x, \mathbf y, \mathbf y'; \epsilon}$
Suppose, $J \sqbrk {\mathbf y}$ is invariant under transformations $x \rightarrow X$ and $\mathbf y \rightarrow \mathbf Y$ for arbitrary $x_0$ and $x_1$.

Then:

$\nabla_{\mathbf y'} F \cdot \boldsymbol \psi + \paren {F - \mathbf y' \cdot \nabla_{\mathbf y'} F} \phi = C$
where $C$ is a constant and:

$\map {\boldsymbol \psi} {x, \mathbf y, \mathbf y'} = \valueat {\dfrac {\partial \map {\mathbf \Psi} {x, \mathbf y, \mathbf y'; \epsilon} } {\partial \epsilon} } {\epsilon \mathop = 0}$
$\map \phi {x, \mathbf y, \mathbf y'} = \valueat {\dfrac {\partial \map \Phi {x, \mathbf y, \mathbf y'; \epsilon} } {\partial \epsilon} } {\epsilon \mathop = 0}$


Proof
Apply Taylor's Theorem to the transformations $X$, $\mathbf Y$ at the point $\epsilon = 0$:














\(\ds X\)

\(=\)







\(\ds \map \Phi {x, \mathbf y, \mathbf y'; \epsilon}\)




















\(\ds \)

\(=\)







\(\ds \map \Phi {x, \mathbf y, \mathbf y'; 0} + \valueat {\epsilon \frac {\partial \map \Phi {x, \mathbf y, \mathbf y'; \epsilon} } {\partial \epsilon} } {\epsilon \mathop = 0} + \map \OO \epsilon\)




















\(\ds \)

\(=\)







\(\ds x + \epsilon \phi + \map \OO \epsilon\)






















\(\ds \mathbf Y\)

\(=\)







\(\ds \map {\mathbf \Psi} {x, \mathbf y, \mathbf y'; \epsilon}\)




















\(\ds \)

\(=\)







\(\ds \map {\mathbf \Psi} {x, \mathbf y, \mathbf y'; 0} + \valueat {\epsilon \frac {\partial \map {\mathbf \Psi} {x, \mathbf y, \mathbf y'; \epsilon} } {\partial \epsilon} } {\epsilon \mathop = 0} + \map \OO \epsilon\)




















\(\ds \)

\(=\)







\(\ds y + \epsilon \boldsymbol \psi + \map \OO \epsilon\)









Use the general variation formula, and suppose that the curve $\mathbf y = \map {\mathbf y} x$ is an extremal of $J \sqbrk {\mathbf y}$:

$\delta x = \epsilon \phi$
$\delta y = \epsilon \psi$
$\delta J = \epsilon \bigintlimits {\nabla_{\mathbf y'} F \cdot \boldsymbol \psi + \paren {F - \mathbf y' \cdot \nabla_{\mathbf y'} F }\phi} {x \mathop = x_0} {x \mathop = x_1}$
Since $J \sqbrk {\mathbf y}$ is invariant under the transformation, the variation vanishes.
Then for any $\epsilon \ne 0$ we have:

$\bigvalueat {\nabla_{\mathbf y'} F \cdot \boldsymbol \psi + \paren {F - \mathbf y'\cdot \nabla_{\mathbf y'} F} \phi} {x \mathop = x_0} = \bigvalueat {\nabla_{\mathbf y'} F \cdot \boldsymbol \psi + \paren {F - \mathbf y' \cdot \nabla_{\mathbf y'} F}\phi} {x \mathop = x_1}$
This has to hold for arbitrary $x_0$ and $x_1$.
Since only a constant mapping produces the same result for any input, the term in brackets has to be a constant.
$\blacksquare$


Source of Name
This entry was named for Emmy Noether.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.20$: Noether's Theorem




