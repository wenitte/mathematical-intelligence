# 

Source: https://proofwiki.org/wiki/Secant_Method_can_be_derived_from_Newton-Raphson_Method

Theorem
Let $f: \R \to \R$ be a real function which has a root which is to be found.
The secant method can be derived from the Newton-Raphson method.


Proof
Recall the definition of Secant Method:
Let $f: \R \to \R$ be a real function which has a root which is to be found.
The secant method is an iterative technique for achieving this, by setting up the following iterative function:

$x_{n + 1} = x_n - \dfrac {\map f {x_n} \paren {x_n - x_{n - 1} } } {\map f {x_n} - \map f {x_{n - 1} } }$ for $n = 1, 2, 3, \ldots$
where $x_0$ and $x_1$ are first approximations to the root.




Convergence is not guaranteed.

Recall the definition of Newton-Raphson Method:
Let $f: \R \to \R$ be a real function which has a root which is to be found.
The Newton-Raphson method is an iterative technique for achieving this, by setting up the following iterative function:

$x_{n + 1} = x_n - \dfrac {\map f {x_n} } {\map {f'} {x_n} }$
where $x_0$ is a first approximation to the root.




Convergence is not guaranteed.

We note that:

$\map {f'} {x_n} \approx \dfrac {\map f x - \map f {x_{n - 1} } } {x_n - x_{n - 1} }$
The result follows by substituting for $\map {f'} {x_n}$ in the definition of the Newton-Raphson method.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): secant method
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): secant method




