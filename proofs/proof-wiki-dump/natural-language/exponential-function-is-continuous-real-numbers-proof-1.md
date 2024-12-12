# 

Source: https://proofwiki.org/wiki/Exponential_Function_is_Continuous/Real_Numbers/Proof_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
The real exponential function is continuous.
That is:

$\forall x_0 \in \R: \ds \lim_{x \mathop \to x_0} \exp x = \exp x_0$


Proof
This proof depends on the limit definition of the exponential function.
Let:

$\ds \exp x = \lim_{n \mathop \to \infty} \paren {1 + \dfrac x n}^n$
Fix $x_0 \in \R$.
Consider $I := \closedint {x_0 - 1} {x_0 + 1}$.
From Closed Bounded Subset of Real Numbers is Compact, $I$ is compact.
From Exponential Sequence is Uniformly Convergent on Compact Sets:

$\paren {1 + \dfrac x n}^n$ is uniformly convergent on $I$.
By the Uniform Limit Theorem:

$\ds \lim_{n \mathop \to \infty} \paren {1 + \dfrac x n}^n = \exp x$
is continuous on $I$.
In particular, $\exp x$ is continuous at $x_0$.
$\blacksquare$





