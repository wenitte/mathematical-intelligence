# 

Source: https://proofwiki.org/wiki/Exponential_Function_is_Well-Defined/Real



Theorem
Let $x \in \R$ be a real number.
Let $\exp x$ be the exponential of $x$.

Then $\exp x$ is well-defined.


Proof 1
This proof assumes the power series definition of $\exp$.
From Series of Power over Factorial Converges:

$\ds \sum_{n \mathop = 0}^\infty \frac {x^n} {n!}$ converges
Hence the result, from Convergent Real Sequence has Unique Limit.
$\blacksquare$


Proof 2
This proof assumes the sequence definition of $\exp$.
Let $\sequence {f_n}$ be the sequence of mappings $f_n : \R \to \R$ defined as:

$\map {f_n} x = \paren {1 + \dfrac x n}^n$
Fix $x \in \R$.
Then:














\(\ds \map {f_n} x\)

\(=\)







\(\ds \paren {1 + \dfrac x n}^n\)





Definition of $\map {f_n} x$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \frac {x^k} {n^k}\)





Binomial Theorem: Integral Index














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \frac {x^k} {k!} \frac {\paren n \times \paren {n - 1} \times \paren {n - 2} \times \cdots \paren {n - k + 1} }{n \times n \times n \times \cdots n}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \frac {x^k} {k!} \paren 1 \paren {1 - \frac 1 n} \paren {1 - \frac 2 n} \cdots \paren {1 - \frac {k - 1} n}\)




















\(\ds \)

\(\le\)







\(\ds \size {\sum_{k \mathop = 0}^n \frac {x^k} {k!} \paren 1 \paren {1 - \frac 1 n} \paren {1 - \frac 2 n} \cdots \paren {1 - \frac {k - 1} n} }\)





Negative of Absolute Value














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \frac {\size x^k} {k!} \paren 1 \paren {1 - \frac 1 n} \paren {1 - \frac 2 n} \cdots \paren {1 - \frac {k - 1} n}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 0}^n \frac {\size x^k} {k!}\)





Multiplication of Positive Number by Real Number Greater than One














\(\ds \)

\(<\)







\(\ds \sum_{k \mathop = 0}^\infty \frac {\size x^k} {k!}\)





Sum of positive terms is increasing














\(\ds \)

\(<\)







\(\ds \infty\)





Series of Power over Factorial Converges




This article needs to be linked to other articles.In particular: Result about increasing series seems not to be up yetYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Thus, $\sequence {\map {f_n} x}$ is bounded above.
From Exponential Sequence is Eventually Increasing:

$\exists N \in \N: \sequence {\map {f_{N + n} } x}$ is increasing
From Monotone Convergence Theorem (Real Analysis), $\sequence {\map {f_{N + n} } x}$ converges to some $z \in \R$.
From Tail of Convergent Sequence, $\sequence {\map {f_n} x}$ converges to $z$.
Hence the result, from Limit of Real Function is Unique.
$\blacksquare$


Proof 3
This proof assumes the continuous extension definition of $\exp$.
Let $e$ denote Euler's number.
Let $f: \Q \to \R$ be the real-valued function defined as:

$f \left({r}\right) = e^r$
From Euler's Number to Rational Power permits Unique Continuous Extension, there exists a unique continuous extension of $f$ to $\R$.
Hence the result.
$\blacksquare$


Proof 4
This proof assumes the definition of the exponential as the inverse of the logarithm.

From Logarithm is Strictly Increasing, $\ln$ is strictly monotone on $\R_{>0}$.
From Inverse of Strictly Monotone Function, $f$ permits an inverse mapping.

Hence the result, from Inverse Mapping is Unique.
$\blacksquare$


Proof 5
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





