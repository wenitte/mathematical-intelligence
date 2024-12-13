# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Real_Number_Index/Proof_2

Theorem
Let $n \in \R$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^n$.

Then:

$\map {f'} x = n x^{n-1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Proof
Note this proof does not hold for $x = 0$.
Let $y$ = $\map f x$.
Then $y = x^n$.
Then:














\(\ds y\)

\(=\)







\(\ds x^n\)














\(\ds \leadsto \ \ \)





\(\ds \size y\)

\(=\)







\(\ds \size {x^n}\)





taking the absolute value of both sides














\(\ds \)

\(=\)







\(\ds \size x^n\)





Absolute Value of Power








\(\ds \leadsto \ \ \)





\(\ds \ln \size y\)

\(=\)







\(\ds \map \ln {\size x^n}\)





taking the natural logarithm of both sides














\(\ds \)

\(=\)







\(\ds n \ln \size x\)





Logarithm of Power




Using:

Derivative of Composite Function
Derivative of Constant Multiple
Corollary to Primitive of Reciprocal
and taking the derivative of both sides with respect to $x$ gives:

$\dfrac 1 y \dfrac {\d y} {\d x} = n \dfrac 1 x$
Multiplying both sides of the equation by $y$ yields:

$\dfrac {\d y} {\d x} = n \dfrac y x$
Substituting $x^n$ for $y$:

$\dfrac {\d y} {\d x} = n \dfrac {x^n} x$
From Quotient of Powers:

$\dfrac {\d y} {\d x} = n x^{n - 1}$
$\blacksquare$





