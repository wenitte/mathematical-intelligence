# 

Source: https://proofwiki.org/wiki/Conditions_for_Integral_Functionals_to_have_same_Euler%27s_Equations


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\mathbf y$ be a real $n$-dimensional vector-valued function.
Let $\map F {x, \mathbf y, \mathbf y'}$, $\map \Phi {x, \mathbf y}$  be real functions.
Let $\Phi$ be twice differentiable.
Let:














\(\ds \Psi\)

\(=\)







\(\ds \frac {\d \Phi} {\d x}\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial \Phi} {\partial x} + \sum_{i \mathop = 1}^n \frac {\partial \Phi} {\partial y_i} y_i'\)









Let $J_1$, $J_2$ be functionals such that:

$\ds J_1 \sqbrk {\mathbf y} = \int_a^b \map F {x, \mathbf y, \mathbf y'} \rd x$
$\ds J_2 \sqbrk {\mathbf y} = \int_a^b \paren {\map F {x, \mathbf y, \mathbf y'} + \map \Psi {x, \mathbf y, \mathbf y'} } \rd x$

Then $J_1$ and $J_2$ have same Euler's Equations.


Proof
According to Necessary Condition for Integral Functional to have Extremum for given function/Dependent on N Functions:
Euler's Equations for functional $J_1$ are: 

$\ds F_{\mathbf y} - \frac \d {\d x} F_{\mathbf y'} = 0$
Equivalently, for $J_2$ we have














\(\ds \paren {F_{\mathbf y} + \Psi_{\mathbf y} } - \map {\frac \d {\d x} } {F_{\mathbf y'} + \Psi_{\mathbf y'} }\)

\(=\)







\(\ds \paren {F_{\mathbf y} - \frac \d {\d x} F_{\mathbf y'} } + \paren {\Psi_{\mathbf y} - \frac \d {\d x} \Psi_{\mathbf y'} }\)




















\(\ds \)

\(=\)







\(\ds 0\)





condition for the existence of extremum



Furthermore:














\(\ds \Psi_{\mathbf y}\)

\(=\)







\(\ds \frac {\partial^2 \Phi} {\partial \mathbf y \partial x} + \frac \partial {\partial \mathbf y} \sum_{j \mathop = 1}^n \frac {\partial \Phi} {\partial y_j} y_j'\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial^2 \Phi} {\partial \mathbf y \partial x} + \sum_{j \mathop = 1}^n \frac {\partial^2 \Phi} {\partial \mathbf y \partial y_j} y_j'\)






















\(\ds \Psi_{\mathbf y'}\)

\(=\)







\(\ds \frac {\partial^2 \Phi} {\partial \mathbf y' \partial x} + \frac \partial {\partial \mathbf y'} \sum_{j \mathop = 1}^n \frac {\partial \Phi} {\partial y_j} y_j'\)




















\(\ds \)

\(=\)







\(\ds 0 + \sum_{j \mathop = 1}^n \paren {\frac {\partial^2 \Phi} {\partial \mathbf y' \partial y_j} y_j' + \frac {\partial \Phi} {\partial y_j} \frac {\partial y_j'} {\partial \mathbf y'} }\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial \Phi} {\partial \mathbf y}\)





as $\frac {\partial y_i'} {\partial y_j'} = \delta_{i j} $, where $\delta_{i j}$ is the Kronecker Delta
















\(\ds \frac {\d \Psi_{\mathbf y'} } {\d x}\)

\(=\)







\(\ds \frac {\partial \Psi_{\mathbf y'} } {\partial x} + \sum_{j \mathop = 1}^n \frac {\partial \Psi_{\mathbf y'} } {\partial y_j} \frac {\d y_j} {\d x} + \sum_{j \mathop = 1}^n \frac {\partial \Psi_{\mathbf y'} } {\partial y_j'} \frac {\d y_j'} {\d x}\)




















\(\ds \)

\(=\)







\(\ds \frac {\partial^2 \Phi} {\partial x \partial \mathbf y} + \sum_{j \mathop = 1}^n \frac {\partial^2 \Phi} {\partial \mathbf y \partial y_j} y_j'\)









Since $\Phi$ is twice differentiable, by Schwarz-Clairaut Theorem partial derivatives commute and:

$\Psi_{\mathbf y} - \dfrac \d {\d x} \Psi_{\mathbf y'} = 0$
Therefore, $J_1$ and $J_2$ have same Euler's Equations.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 2.9$: The Fixed End Point Problem for n Unknown Functions




