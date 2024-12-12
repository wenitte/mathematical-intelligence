# 

Source: https://proofwiki.org/wiki/Exponential_of_Sum/Real_Numbers



Theorem
Let $x, y \in \R$ be real numbers.
Let $\exp x$ be the exponential of $x$.

Then:

$\map \exp {x + y} = \paren {\exp x} \paren {\exp y}$


Corollary
Let $x, y \in \R$ be real numbers.
Let $\exp x$ be the exponential of $x$.

Then:

$\map \exp {x - y} = \dfrac {\exp x} {\exp y}$


Lemma
Let $x, y \in \R$.
Let $n \in \N_{> 0}$ such that $n > -\paren {x + y}$.

Then:

$1 + \dfrac {x + y} n + \dfrac {x y} {n^2} = \paren {1 + \dfrac {x + y} n} \paren {1 + \dfrac {\paren {\frac {x y} {n + x + y} } } n}$
$\Box$


Proof 1
This proof assumes the definition of $\exp$ as:

$\exp x = y \iff \ln y = x$
where:

$\ln y = \ds \int_1^y \dfrac 1 t \rd t$

Let $X = \exp x$ and $Y = \exp y$.
From Sum of Logarithms, we have:

$\ln X Y = \ln X + \ln Y = x + y$
From the Exponential of Natural Logarithm:

$\map \exp {\ln x} = x$
Thus:

$\map \exp {x + y} = \map \exp {\ln X Y} = X Y = \paren {\exp x} \paren {\exp y}$
$\blacksquare$

Alternatively, this may be proved directly by investigating:

$\map D {\map \exp {x + y} / \exp x}$


Proof 2
This proof assumes the definition of $\exp$ as defined by a limit of a sequence:

$\exp x = \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$

From Powers of Group Elements we can presuppose the Exponent Combination Laws for natural number indices.

First we introduce a lemma:

By definition:














\(\ds \paren {\exp x} \paren {\exp y}\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n \lim_{n \mathop \to +\infty} \paren {1 + \frac y n}^n\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {\paren {1 + \frac x n} \paren {1 + \frac y n} }^n\)





Combination Theorem for Sequences














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac {x + y} n + \frac {x y} {n^2} }^n\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {\paren {1 + \frac {x + y} n} \paren {1 + \frac {\paren {\frac {x y} {n + x + y} } } n} }^n\)





Lemma: Without loss of generality let $n > - x - y$: therefore $n + x + y > 0$














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac {x + y} n}^n \lim_{n \mathop \to +\infty} \paren {1 + \frac {\paren {\frac {x y} {n + x + y} } } n}^n\)





Combination Theorem for Sequences














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac {x + y} n}^n\)





Null Sequence in Exponential Sequence














\(\ds \)

\(=\)







\(\ds \map \exp {x + y}\)









$\blacksquare$


Proof 3
This proof assumes the definition of $\exp$ as defined by a limit of a sequence:

$\exp x = \ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n$

From Powers of Group Elements we can presuppose the Exponent Combination Laws for natural number indices.

By definition:














\(\ds \paren {\exp x} \paren {\exp y}\)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac x n}^n \lim_{n \mathop \to +\infty} \paren {1 + \frac y n}^n\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {\paren {1 + \frac x n} \paren {1 + \frac y n} }^n\)





Combination Theorem for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to +\infty} \paren {1 + \frac{x + y} n + \frac{x y} {n^2} }^n\)









Intuitively, the $\paren {1 + \dfrac {x + y} n}$ term is the most influential of the terms involved in the limit, and:

$\paren {1 + \dfrac {x + y} n + \dfrac {x y} {n^2} }^n \to \paren {1 + \dfrac {x + y} n}^n$ as $n \to +\infty$
To formalize this claim:

$\map \exp {x + y} = \exp x \cdot \exp y \iff \dfrac {\exp x \cdot \exp y} {\map \exp {x + y} } = 1$













\(\ds \frac {\paren {1 + \frac {x + y} n + \frac {x y} {n^2} }^n} {\paren {1 + \frac{x + y} n}^n}\)

\(=\)







\(\ds \paren {1 + \frac{x y} {n^2 + n x + n y} }^n\)





Lemma














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \binom n k \paren {\frac {x y} {n^2 + n x + n y} }^k\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds 1 + \sum_{k \mathop = 1}^n \binom n k n^{-k} \paren {\frac {x y} {n + x + y} }^k\)









Now, as $n \to +\infty$, we use the Combination Theorem for Limits of Real Functions to investigate the behavior of this sequence, term by term.
As $1$ trivially converges to $1$, consider now the other terms of the sequence.

We invoke the Squeeze Theorem for Absolutely Convergent Series.
Hence it will suffice to investigate the limit behaviour of:

$\ds \sum_{k \mathop = 1}^n \, \size {\binom n k n^{-k} \paren {\frac {x y} {n + x + y} }^k}$

From $\dbinom n k$ is not greater than $n^k$:














\(\ds \binom n k\)

\(\le\)







\(\ds n^k\)





for all $n, k$ here considered








\(\ds \leadsto \ \ \)





\(\ds \binom n k n^{-k}\)

\(\le\)







\(\ds 1\)





divide both sides by $n^k$



Therefore, we may conclude, using Absolute Value is Bounded Below by Zero:

$\ds 0 \le \sum_{k \mathop = 1}^n \size { {n \choose k} n^{-k} \paren {\frac {x y} {n + x + y} }^k} \le \sum_{k \mathop = 1}^n \size {\frac {x y} {n + x + y} }^k$

From Sum of Infinite Geometric Sequence, the right hand term converges to:














\(\ds \frac {\dfrac {x y} {n + x + y} } {1 - \dfrac {x y} {n + x + y} }\)

\(=\)







\(\ds \frac {x y} {n + x + y - x y}\)




















\(\ds \)

\(\to\)







\(\ds 0\)





as $n \to +\infty$



$0 \to 0$ as $n \to +\infty$, trivially.

This means:

$\dfrac {\paren {1 + \dfrac {x + y} n + \dfrac {x y} {n^2} }^n} {\paren {1 + \dfrac {x + y} n}^n} \to 1$ as $n \to +\infty$

which is equivalent to our hypothesis:

$\paren {1 + \dfrac {x + y} n + \dfrac {x y} {n^2} }^n \to \paren {1 + \dfrac {x + y} n}^n$ as $n \to +\infty$
$\blacksquare$


Proof 4
This proof assumes the definition of $\exp$ as defined by an initial value problem.
That is, suppose $\exp$ satisfies:

$(1): \quad D_x \exp x = \exp x$
$(2): \quad \exp 0 = 1$
on $\R$.

Consider the real function $f: \R \to \R$ defined by:

$\map f x := \dfrac {\map \exp {x + y} } {\map \exp y}$
From Exponential of Real Number is Strictly Positive, $f$ is well-defined.

So:














\(\ds D_x \, \map f x\)

\(=\)







\(\ds D_x \frac {\map \exp {x + y} } {\map \exp y}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\map \exp y} D_x \, \map \exp {x + y}\)





Derivative of Constant Multiple














\(\ds \)

\(=\)







\(\ds \frac {\map \exp {x + y} } {\map \exp y}\)





Chain Rule for Derivatives














\(\ds \)

\(=\)







\(\ds \map f x\)










Thus $f$ satisfies $(1)$.

Further:














\(\ds \map f 0\)

\(=\)







\(\ds \frac {\map \exp {0 + y} } {\map \exp y}\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \exp y} {\map \exp y}\)




















\(\ds \)

\(=\)







\(\ds 1\)










So $f$ satisfies $(2)$.

From Exponential Function is Well-Defined:

$f = \exp$
That is:














\(\ds \frac {\map \exp {x + y} } {\map \exp y}\)

\(=\)







\(\ds \map \exp x\)














\(\ds \leadsto \ \ \)





\(\ds \map \exp {x + y}\)

\(=\)







\(\ds \map \exp x \, \map \exp y\)









$\blacksquare$


Proof 5
This proof assumes the definition of $\exp$ as a series.

Then:














\(\ds \map \exp {x + y}\)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} \paren {x + y}^n\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \frac 1 {n!} \sum_{k \mathop = 0}^n \frac {n!} {k! \paren {n - k}!} x^k y^{n - k}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^\infty \sum_{k \mathop = 0}^n \paren {\frac 1 {k!} x^k} \paren {\frac 1 {\paren {n - k}!} y^{n - k} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{n \mathop = 0}^\infty \frac {x^n} {n!} } \paren {\sum_{n \mathop = 0}^\infty \frac {y^n} {n!} }\)





Definition of Cauchy Product














\(\ds \)

\(=\)







\(\ds \map \exp x \, \map \exp y\)









$\blacksquare$


Proof 6
Fix $a \in \R$ and define the function $f_a : \R \to \R$ by: 

$\map {f_a} x = \map \exp {a - x} \exp x$
for all $x \in \R$.
We aim to establish that: 

$\map {f_a} x = \map \exp {a - x} \exp x = \exp a$
for all $a, x \in \R$. 
Then, we can fix $x, y \in \R$ and set $a = x + y$ to obtain: 

$\map {f_a} x = \exp y \exp x = \map \exp {x + y}$
which is the claim.
Note that $f_a$ is differentiable and we have: 














\(\ds \map {f_a'} x\)

\(=\)







\(\ds \map {\frac \d {\d x} } {\map \exp {a - x} } \exp x + \map {\frac \d {\d x} } {\exp x} \map \exp {a - x}\)





Product Rule for Derivatives














\(\ds \)

\(=\)







\(\ds -\map \exp {a - x} \exp x + \exp x \map \exp {a - x}\)





Chain Rule for Derivatives, Derivative of Exponential Function














\(\ds \)

\(=\)







\(\ds 0\)









From Zero Derivative implies Constant Function, $f_a$ is constant.
That is, there exists $C \in \R$ such that: 

$\map {f_a} x = C$
for all $x \in \R$.
We have: 














\(\ds \map {f_a} a\)

\(=\)







\(\ds \map \exp {a - a} \exp a\)




















\(\ds \)

\(=\)







\(\ds \exp 0 \exp a\)




















\(\ds \)

\(=\)







\(\ds \exp a\)





Exponential of Zero



So: 

$\map {f_a} x = \exp a$
for all $a, x \in \R$. 
That is: 

$\map \exp {a - x} \map \exp x = \exp a$
for all $a, x \in \R$. 
Hence the result.
$\blacksquare$





