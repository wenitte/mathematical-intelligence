# 

Source: https://proofwiki.org/wiki/Differentiable_Function_of_Bounded_Variation_may_not_have_Bounded_Derivative

Theorem
Let $a, b$ be real numbers with $a < b$.
Let $f : \closedint a b \to \R$ be a continuous function of bounded variation.
Let $f$ be differentiable on $\openint a b$.

Then $f'$ is not necessarily bounded.


Proof
Proof by Counterexample:
Take $a = 0$, $b = 1$. 
Let $f : \closedint 0 1 \to \R$ have: 

$\map f x = \sqrt x$
for all $x \in \closedint 0 1$. 
Note that $f$ is increasing, so by Monotone Function is of Bounded Variation:

$f$ is of  bounded variation.
By Derivative of Power, $f$ is differentiable on $\openint 0 1$ with derivative:

$\map {f'} x = \dfrac 1 {2 \sqrt x}$
Note that this is unbounded as $x \to 0^+$.
So $f$ does not have a bounded derivative, despite being of bounded variation.
$\blacksquare$


Also see
Differentiable Function with Bounded Derivative is of Bounded Variation, of which this is the (false) converse.




