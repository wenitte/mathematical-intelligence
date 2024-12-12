# 

Source: https://proofwiki.org/wiki/Chain_Rule_for_Real-Valued_Functions



Theorem
Let $f: \R^n \to \R, \mathbf x \mapsto z$ be a differentiable real-valued function.
Let $\mathbf x = \begin {bmatrix} x_1 \\ x_2 \\ \vdots \\ x_n \end {bmatrix} \in \R^n$.
Further, let every element $x_i: 1 \le i \le n$ represent an implicitly defined differentiable real function of $t$.
Then $z$ is itself differentiable with respect to $t$ and:














\(\ds \frac {\d z} {\d t}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \frac {\partial z} {\partial x_i} \frac {\d x_i} {\d t}\)









where $\dfrac {\partial z} {\partial x_i}$ is the partial derivative of $z$ with respect to $x_i$.


Corollary
Let $\Psi$ represent a differentiable function of $x$ and $y$.
Let $y$ represent a differentiable function of $x$.
Then:














\(\ds \frac {\d \Psi} {\d x}\)

\(=\)







\(\ds \frac {\partial \Psi} {\partial x} + \frac {\partial \Psi} {\partial y} \frac {\d y} {\d x}\)











Proof
$f$ is by hypothesis differentiable.
From Characterization of Differentiability:














\(\ds \Delta z\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \frac {\partial z} {\partial x_i} \Delta x_i + \sum_{i \mathop = 1}^n \epsilon_i \Delta x_i\)





$\forall i: 1 \le i \le n: \epsilon_i \to 0$ as $\Delta x_i \to 0$



Let $\Delta t \ne 0$ and divide both sides of the equation by $\Delta t$:














\(\ds \frac {\Delta z} {\Delta t}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \frac {\partial z} {\partial x_i} \frac {\Delta x_i} {\Delta t} + \sum_{i \mathop = 1}^n \epsilon_i \frac {\Delta x_i} {\Delta t}\)





$\forall i: 1 \le i \le n: \epsilon_i \to 0$ as $\Delta x_i \to 0$



Recall that each $x_i$ was defined to be differentiable with respect to $t$, that is, that each $\dfrac {\d x_i} {\d t}$ exists.
Then $\Delta x_i \to 0$ as $\Delta t \to 0$.
Therefore:














\(\ds \frac {\d z} {\d t}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \frac {\partial z} {\partial x_i} \frac {\d x_i} {\d t} + \sum_{i \mathop = 1}^n 0 \frac {\d x_i} {\d t}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \frac {\partial z} {\partial x_i} \frac {\d x_i} {\d t}\)





as $\Delta t \to 0$



$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Also see
Chain Rule for Derivatives
Definition:Total Derivative
Definition:Exact Differential Equation


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Check whether this corollary is given.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.): Appendix $A$: Theorem $13.6$




