# 

Source: https://proofwiki.org/wiki/Lower_Bound_of_Natural_Logarithm



Theorem
$\forall x \in \R_{>0}: 1 - \dfrac 1 x \le \ln x$
where $\ln x$ denotes the natural logarithm of $x$.


Proof 1
Let $x > 0$.














\(\ds x - 1\)

\(\ge\)







\(\ds \ln x\)





Upper Bound of Natural Logarithm








\(\ds \leadsto \ \ \)





\(\ds \frac 1 x -1\)

\(\ge\)







\(\ds \ln \frac 1 x\)





putting $\frac 1 x$ into the above inequality














\(\ds \)

\(=\)







\(\ds -\ln x\)





Logarithm of Reciprocal








\(\ds \leadsto \ \ \)





\(\ds 1 - \frac 1 x\)

\(\le\)







\(\ds \ln x\)





multiplying throughout by $-1$



$\blacksquare$


Proof 2
Let $x > 0$.
Note that:

$1 - \dfrac 1 x \le \ln x$
is logically equivalent to:

$1 - \dfrac 1 x - \ln x \le 0$
Let $\map f x = 1 - \dfrac 1 x - \ln x$.
Then:














\(\ds \map f x\)

\(=\)







\(\ds 1 - \dfrac 1 x - \ln x\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} x\)

\(=\)







\(\ds \frac 1 {x^2} - \frac 1 x\)





Derivative of Constant, Power Rule for Derivatives, Derivative of Natural Logarithm Function














\(\ds \)

\(=\)







\(\ds \frac {1 - x} {x^2}\)














\(\ds \leadsto \ \ \)





\(\ds \map {f} x\)

\(=\)







\(\ds - \frac 2 {x^3} + \frac 1 {x^2}\)





Power Rule for Derivatives



Note that $\map {f'} 1 = 0$.
Also, $\map {f} 1 < 0$.
So by the Second Derivative Test, $x = 1$ is a local maximum.

On $\openint 0 1$:

$\map {f'} x > 0$
By Derivative of Monotone Function, $f$ is strictly increasing on that interval.

On $\openint 1 \to$:

$\map {f'} x < 0$
By Derivative of Monotone Function, $f$ is strictly decreasing on that interval.

So $x = 1$ yields a global maximum, at which by Logarithm of 1 is 0:

$\map f 1 = 1 - 1 - 0 = 0$
That is:

$\forall x > 0: \map f x \le 0$
and so by definition of $\map f x$:

$1 - \dfrac 1 x - \ln x \le 0$
$\blacksquare$


Proof 3
Let $\sequence {f_n}$ be the sequence of mappings $f_n: \R_{>0} \to \R$ defined as:

$\map {f_n} x = n \paren {\sqrt [n] x - 1 }$
Let $x \in \R_{>0}$ be fixed.
We first show that:

$\forall n \in \N : 1 - \dfrac 1 x \le n \paren {\sqrt [n] x - 1}$
Let $n \in \N$.
From Sum of Geometric Sequence:

$\sqrt [n] x - 1 = \dfrac {x - 1} {1 + \sqrt [n] x + \sqrt [n] x^2 + \cdots + \sqrt [n] x^{n - 1} }$


Case 1: $0 < x < 1$













\(\ds 0 < x < 1\)

\(\leadsto\)







\(\ds \forall k < n: \sqrt [n] x^{n - k} > x > 0\)





Power Function on Base between Zero and One is Strictly Decreasing/Rational Number














\(\ds \)

\(\leadsto\)







\(\ds 0 < n x < \sum_{k = 0}^{n - 1} \sqrt [n] x^{n - k}\)





Real Number Ordering is Compatible with Addition














\(\ds \)

\(\leadsto\)







\(\ds \dfrac 1 {1 + \sqrt [n] x + \sqrt [n] x^2 + \cdots + \sqrt [n] x^{n - 1} } > \dfrac 1 {n x}\)





Ordering of Reciprocals














\(\ds \)

\(\leadsto\)







\(\ds \dfrac {x - 1} {n x} < \dfrac {x - 1} {1 + \sqrt [n] x + \sqrt [n] x^2 + \cdots + \sqrt [n] x^{n - 1} }\)





Order of Real Numbers is Dual of Order of their Negatives














\(\ds \)

\(\leadsto\)







\(\ds \dfrac {x - 1} {n x} < \sqrt [n] x - 1\)





Sum of Geometric Sequence














\(\ds \)

\(\leadsto\)







\(\ds 1 - \dfrac 1 x < n \paren {\sqrt [n] x - 1}\)





Real Number Ordering is Compatible with Multiplication



$\Box$


Case 2: $x = 1$













\(\ds \dfrac {x - 1} x\)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \sqrt [n] 1 - 1\)









$\Box$


Case 3: $x > 1$













\(\ds x > 1\)

\(\leadsto\)







\(\ds \forall k < n: 1 < \sqrt [n] x^{n - k} < x\)





Power Function on Base Greater than One is Strictly Increasing/Rational Number














\(\ds \)

\(\leadsto\)







\(\ds 0 < \sum_{k \mathop = 0}^{n - 1} \sqrt [n] x^{n - k} < n x\)





Real Number Ordering is Compatible with Addition














\(\ds \)

\(\leadsto\)







\(\ds 0 < \dfrac 1 {n x} < \dfrac 1 {1 + \sqrt [n] x + \sqrt [n] x^2 + \cdots + \sqrt [n] x^{n - 1} }\)





Ordering of Reciprocals














\(\ds \)

\(\leadsto\)







\(\ds \dfrac {x - 1} {n x} < \dfrac {x - 1} {1 + \sqrt [n] x + \sqrt [n] x^2 + \cdots + \sqrt [n] x^{n - 1} }\)





Real Number Ordering is Compatible with Multiplication














\(\ds \)

\(\leadsto\)







\(\ds \dfrac {x - 1} {n x} < \sqrt [n] x - 1\)





Sum of Geometric Sequence














\(\ds \)

\(\leadsto\)







\(\ds 1 - \dfrac 1 x < n \paren {\sqrt [n] x - 1 }\)





Real Number Ordering is Compatible with Multiplication



$\Box$

Thus:

$\forall n \in \N : 1 - \dfrac 1 x \le n \paren {\sqrt [n] x - 1 }$
by Proof by Cases.
Thus:

$\ds 1 - \dfrac 1 x \le \lim_{n \mathop \to \infty} n \paren {\sqrt [n] x - 1 }$
from Limit of Bounded Convergent Sequence is Bounded.
Hence the result, from the definition of $\ln$.
$\blacksquare$


Illustration



Also see
Bounds of Natural Logarithm




