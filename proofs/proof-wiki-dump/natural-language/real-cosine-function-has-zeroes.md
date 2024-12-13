# 

Source: https://proofwiki.org/wiki/Real_Cosine_Function_has_Zeroes

Theorem
The real cosine function has at least two zeroes that are additive inverses of each other.
That is:

$\exists \theta \in \R: \map \cos \theta = 0 \text { and } \map \cos {-\theta} = 0$


Proof
Aiming for a contradiction, suppose $\cos x$ is positive everywhere on $\R$.
From Derivative of Cosine Function and Derivative of Sine Function:

$\map {\dfrac {\d^2} {\d x^2} } {\cos x} = \map {\dfrac \d {\d x} } {-\sin x} = -\cos x$
Thus $\map {\dfrac {\d^2} {\d x^2} } {\cos x} = -\cos x$ would always be negative.
Thus from Second Derivative of Concave Real Function is Non-Positive, $\cos x$ would be concave everywhere on $\R$.
But from Real Cosine Function is Bounded, $\cos x$ is bounded on $\R$.
By Differentiable Bounded Concave Real Function is Constant, $\cos x$ would then be a constant function.
This contradicts the fact that $\cos x$ is not a constant function.
Thus, by Proof by Contradiction, $\cos x$ cannot be positive everywhere on $\R$.

Therefore:

$\exists \phi \in \R: \cos \phi < 0$
From Cosine of Zero is One:

$\cos 0 = 1 > 0$
Since the Cosine Function is Continuous, by the Intermediate Value Theorem:

$\exists \theta \in \R: \cos \theta = 0$
Hence from Cosine Function is Even:

$\map \cos {-\theta} = 0$
$\blacksquare$





