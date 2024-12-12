# 

Source: https://proofwiki.org/wiki/Derivative_of_Periodic_Real_Function

Theorem
Let $f: \R \to \R$ be a real function.
Let $f$ be differentiable on all of $\R$.
Let $f$ be periodic with period $L$.

Then its derivative is also periodic with period $L$.


Proof
Let $f$ be differentiable on all of $\R$.
Let $f$ be periodic with period $L$.

Then taking the derivative of both sides using the Chain Rule for Derivatives yields:

$\map f x = \map f {x + L} \implies \map {f'} x = \map {f'} {x + L}$

Let $L'$ be the period of $f'$.
$f$ is differentiable and therefore continuous, by Differentiable Function is Continuous.
From Image of Closed Real Interval is Bounded, it follows that $f$ is bounded on $\closedint 0 {\size L}$.
But from the General Periodicity Property, it follows that $f$ is bounded on all of $\R$.
Then from Primitive of Periodic Real Function, it follows that $L'$ is the period of $f$.

But we had previously established that $L$ was the period of $f$.
Hence it follows that $L' = L$.
Hence the result.
$\blacksquare$


Also see
Primitive of Periodic Real Function




