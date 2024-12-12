# 

Source: https://proofwiki.org/wiki/Conditional_Expectation_Conditioned_on_Trivial_Sigma-Algebra

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ be an integrable random variable.
Let $\expect {X \mid \set {\O, \Omega} }$ be a version of the conditional expectation of $X$ given $\set {\O, \Omega}$.

Then:

$\expect {X \mid \set {\O, \Omega} } = \expect X$ almost everywhere.


Proof
We check that $\expect X$ is a version of the conditional expectation of $X$ given $\set {\O, \Omega}$, so that we get:

$\expect {X \mid \set {\O, \Omega} } = \expect X$ almost everywhere.
from Existence and Essential Uniqueness of Conditional Expectation Conditioned on Sigma-Algebra.
Note that $\expect X$ is $\GG$-measurable from Constant Function is Measurable.
We certainly have:

$\ds \int_\O \expect X \rd \Pr = \int_\O X \rd \Pr = 0$
from Integral of Integrable Function over Null Set.
We also have:

$\ds \int_\Omega \expect X \rd \Pr = \expect X = \int_\Omega X \rd \Pr$
from Integral of Characteristic Function.
So $\expect X$ is a version of the conditional expectation of $X$ given $\set {\O, \Omega}$, and we have the result.
$\blacksquare$





