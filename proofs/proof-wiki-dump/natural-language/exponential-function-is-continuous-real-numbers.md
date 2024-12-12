# 

Source: https://proofwiki.org/wiki/Exponential_Function_is_Continuous/Real_Numbers



Theorem
The real exponential function is continuous.
That is:

$\forall x_0 \in \R: \ds \lim_{x \mathop \to x_0} \exp x = \exp x_0$


Proof 1
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


Proof 2
This proof depends on the definition of the exponential function as the function inverse of the natural logarithm.

From Logarithm is Strictly Increasing, $\ln$ is strictly monotone on $\R_{>0}$.
From Real Natural Logarithm Function is Continuous, $\ln$ is continuous on $\R_{>0}$

Thus, from the Continuous Inverse Theorem, $\exp := \ln^{-1}$ is continuous.
$\blacksquare$


Proof 3
This proof depends on the differential equation definition of the exponential function.
The result follows from Differentiable Function is Continuous.
$\blacksquare$


Proof 4
This proof depends on the continuous extension definition of the exponential function.
Let $\exp$ be the unique continuous extension of $e^x$ from $\Q$ to $\R$.
By definition, $\exp$ is continuous.
Hence the result.
$\blacksquare$


Proof 5
This proof depends on the series definition of $\exp$.
That is, let:

$\ds \exp x = \sum_{k \mathop = 0}^ \infty \frac {x^k} {k!}$

From Series of Power over Factorial Converges, the radius of convergence of $\exp$ is $\infty$.

Thus, from Power Series Converges to Continuous Function, $\exp$ is continuous on $\R$.
$\blacksquare$





