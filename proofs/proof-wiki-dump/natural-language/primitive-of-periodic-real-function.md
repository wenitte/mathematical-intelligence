# 

Source: https://proofwiki.org/wiki/Primitive_of_Periodic_Real_Function

Theorem
Let $f: \R \to \R$ be a real function.
Let $F$ be a primitive of $f$ that is bounded on all of $\R$.
Let $f$ be periodic with period $L$.

Then $F$ is also periodic with period $L$.


Proof

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Let $f$ be periodic with period $L$.
Let $f$ have a primitive $F$ that is bounded on all of $\R$.
By definition of a periodic function, it is seen that:

$\map f x = \map f {x + L}$.
Then:

$\ds \int \map f x \rd x$
and:

$\ds \int \map f {x + L} \rd x$
are both primitives of the same function.

So by Primitives which Differ by Constant:














\(\ds \int \map f x \rd x + C\)

\(=\)







\(\ds \int \map f {x + L} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int \map f {x + L} \frac {\map \d {x + L} } {\d x} \rd x\)





as $\dfrac {\map \d {x + L} } {\d x} = 1$














\(\ds \)

\(=\)







\(\ds \int \map f {x + L} \map \d {x + L}\)





Integration by Substitution








\(\ds \leadsto \ \ \)





\(\ds \map F x + C\)

\(=\)







\(\ds \map F {x + L}\)










Aiming for a contradiction, suppose $C \ne 0$.
Then it is to be shown that for all $k \in \N_{> 0}$:

$\map F x + k C = \map F {x + k L}$

The case for $k = 1$ has already been proven, so this will be proven by induction.
Suppose that for some $n \in \N_{> 0}$ we have:

$\map F x + n C = \map F {x + n L}$

Then














\(\ds \map F {x + \paren {n + 1} L}\)

\(=\)







\(\ds \map F {x + L + n L}\)




















\(\ds \)

\(=\)







\(\ds \map F {x + L} + n C\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds \map F x + \paren {n + 1} C\)





by the base case



$\Box$

Holding $x$ fixed yields:

$\ds \lim_{k \mathop \to \infty} \size {\map F {x + k L} } = \lim_{k \mathop \to \infty} \size {\map F x + k C} = \infty$
and so $\map F x$ is unbounded.

But we had previously established that $\map F x$ was bounded.
This is a contradiction.
Therefore our assumption that $C \ne 0$ was false.
Hence $C = 0$ and so:

$\map F x = \map F {x + L}$

It has been shown that $F$ is periodic.
$\Box$

Let $L'$ be the period of $F$.
Then:














\(\ds \map F x\)

\(=\)







\(\ds \map F {x + L'}\)














\(\ds \leadsto \ \ \)





\(\ds \map {F'} x\)

\(=\)







\(\ds \map {F'} {x + L'}\)





Chain Rule for Derivatives








\(\ds \leadsto \ \ \)





\(\ds \map f x\)

\(=\)







\(\ds \map f {x + L'}\)





Definition of Primitive of Real Function




But it was previously established that $L$ was the period of $f$.
Hence it follows that $L' = L$.
Hence the result.
$\blacksquare$


Also see
Derivative of Periodic Real Function




