# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Real_Number_Index

Theorem
Let $n \in \R$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^n$.

Then:

$\map {f'} x = n x^{n-1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


This article, or a section of it, needs explaining.In particular: Nowhere in either proof is it explained why $\map {f'} x$ is undefined.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof 1
We are going to prove that $\map {f'} x = n x^{n - 1}$ holds for all real $n$.
To do this, we compute the limit $\ds \lim_{h \mathop \to 0} \frac {\paren {x + h}^n - x^n} h$:















\(\ds \frac {\paren {x + h}^n - x^n} h\)

\(=\)







\(\ds \frac {x^n} h \paren {\paren {1 + \frac h x}^n - 1}\)




















\(\ds \)

\(=\)







\(\ds \frac{x^n} h \paren {e^{n \map \ln {1 + \frac h x} } - 1}\)




















\(\ds \)

\(=\)







\(\ds x^n \cdot \frac {e^{n \map \ln {1 + \frac h x} } - 1} {n \map \ln {1 + \frac h x} } \cdot \frac {n \map \ln {1 + \frac h x} } {\frac h x} \cdot \frac 1 x\)










Now we use the following results:

$\ds \lim_{x \mathop \to 0} \frac {\exp x - 1} x = 1$ from Derivative of Exponential at Zero
$\ds \lim_{x \mathop \to 0} \frac {\map \ln {1 + x} } x = 1$ from Derivative of Logarithm at One
to obtain:

$x^n \cdot \dfrac {e^{n \map \ln {1 + \frac h x} } - 1} {n \map \ln {1 + \dfrac h x} } \cdot \dfrac {n \map \ln {1 + \dfrac h x}} {\dfrac h x} \cdot \dfrac 1 x \to n x^{n - 1}$ as $h \to 0$
Hence the result.
$\blacksquare$


Proof 2
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





