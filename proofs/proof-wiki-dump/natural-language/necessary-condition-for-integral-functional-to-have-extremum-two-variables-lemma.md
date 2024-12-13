# 

Source: https://proofwiki.org/wiki/Necessary_Condition_for_Integral_Functional_to_have_Extremum/Two_Variables/Lemma



Theorem
Let $D \subset \R^2$.
Let $\Gamma$ be the boundary of $D$.
Let $\alpha : D \to \R$ be a continuous mapping.
Let $h : D \to \R$ be a twice differentiable mapping such that $\map h \Gamma = 0$.
Suppose for every $h$ we have that:

$\ds \iint_D \map \alpha {x, y} \map h {x,y} \rd x \rd y = 0$.

Then:

$\ds \forall x, y \in D : \map \alpha {x, y} = 0$


Proof
Aiming for a contradiction, suppose that:

$\ds \exists x_0,y_0 \in D : \map \alpha {x_0,y_0} > 0$
$\alpha$ is continuous in $D$. 
Therefore, there exists a closed ball $B^-_{\epsilon}$ defined by:

$\map {B^-_{\epsilon}} {x_0, y_0} := \set {\tuple{x,y} \in D : \paren {x - x_0}^2 + \paren {y - y_0}^2 \le \epsilon^2}$
such that:

$\forall x,y \in B^-_{\epsilon} : \map \alpha {x,y} > 0$
Choose $\map h {x, y}$ in the following way:

$\map h {x,y} = \begin {cases} 0, \forall x, y \notin B^-_{\epsilon} \\ \sqbrk {\epsilon^2 - \paren {x - x_0}^2 - \paren {y - y_0}^2}^3, \forall x,y \in B^-_{\epsilon} \end{cases}$
Such a choice for $\map h {x,y}$ satisfies the conditions of the lemma.
But then both $\alpha$ and $h$ are positive inside this ball.
Hence, the integral is positive.
This contradicts assumptions of the lemma.
Hence:

$\ds \forall x, y \in D : \map \alpha {x,y} = 0$
$\blacksquare$


Mistake

This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
The author uses a slightly different form of the function $h$:

$\map h {x,y} = \begin{cases} 0, \forall x, y \notin B^-_{\epsilon} \\ \sqbrk {\paren {x - x_0}^2 + \paren {y - y_0}^2 - \epsilon^2}^3, \forall x,y \in B^-_{\epsilon} \end{cases}$
Then he concludes that for points inside the circle the integrand is positive.
$\alpha$ is positive by assumption.
However, $h$ is not positive inside since $\paren {x - x_0}^2 + \paren {y - y_0}^2 < \epsilon^2$.
The result is negative, and stays negative after being raised to the $3$rd power.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.5$: The Case of Several Variables




