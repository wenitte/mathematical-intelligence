# 

Source: https://proofwiki.org/wiki/Exponential_Function_is_Well-Defined/Real/Proof_5

Theorem
Let $x \in \R$ be a real number.
Let $\exp x$ be the exponential of $x$.

Then $\exp x$ is well-defined.


Proof
This proof assumes the definition of $\exp$ as the solution to an initial value problem.
That is, suppose $\exp$ solves:

$(1): \quad \dfrac \d {\d x} y = \map f {x, y}$
$(2): \quad \map \exp 0 = 1$
on $\R$, where $\map f {x, y} = y$.

From Derivative of Exponential Function: Proof 4, the function $\phi : \R \to \R$ defined as:

$\ds \map \phi x = \sum_{k \mathop = 0}^\infty \frac {x^k} {k!}$
satisfies $\map {\phi'} x = \map \phi x$.
So $\phi$ satisfies $(1)$.

From Exponential of Zero: Proof 3:

$\map \phi 0 = 1$
So $\phi$ satisfies $(2)$.

Thus, $\phi$ is a solution to the initial value problem given.

From Exponential Function is Continuous: Proof 5 and $(1)$:

$\phi$ is continuously differentiable on $\R$.
Because $\map f {x, \phi} = \phi$:

$f$ is continuously differentiable on $\R^2$.

Thus, from Uniqueness of Continuously Differentiable Solution to Initial Value Problem, this solution is unique.
$\blacksquare$





