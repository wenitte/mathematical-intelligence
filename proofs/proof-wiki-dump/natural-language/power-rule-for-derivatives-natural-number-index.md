# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Natural_Number_Index



Theorem
Let $n \in \N$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^n$.

Then:

$\map {f'} x = n x^{n-1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Proof by Binomial Theorem
Let $\map f x = x^n$ for $x \in \R, n \in \N$.
By the definition of the derivative:

$\ds \dfrac \d {\d x} \map f x = \lim_{h \mathop \to 0} \dfrac {\map f {x + h} - \map f x} h = \lim_{h \mathop \to 0} \dfrac {\paren {x + h}^n - x^n} h$

Using the binomial theorem this simplifies to:














\(\ds \)

\(\)







\(\ds \lim_{h \mathop \to 0} \paren {\frac {\dbinom n 0 x^n + \dbinom n 1 x^{n - 1} h + \dbinom n 2 x^{n - 2} h^2 + \cdots + \dbinom n {n - 1} x h^{n - 1} + \dbinom n n h^n - x^n} h}\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\frac {\dbinom n 1 x^{n - 1} h + \dbinom n 2 x^{n - 2} h^2 + \cdots + \dbinom n {n - 1} x h^{n - 1} + \dbinom n n h^n} h}\)




















\(\ds \)

\(=\)







\(\ds \lim_{h \mathop \to 0} \paren {\dbinom n 1 x^{n - 1} + \dbinom n 2 x^{n - 2} h^1 + \cdots + \dbinom n {n - 1} x h^{n - 2} + \dbinom n n h^{n - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dbinom n 1 x^{n - 1}\)





evaluating the limit














\(\ds \)

\(=\)







\(\ds n x^{n - 1}\)





Binomial Coefficient with One: $\dbinom r 1 = r$



$\blacksquare$


Proof by Induction
We will use the notation $D \map f x = \map {f'} x$ as it is convenient.

Let $n = 0$.
Then:

$\forall x \in \R: x^n = 1$
Thus $\map f x$ is the constant function $\map {f_1} x$ on $\R$.

Thus from Derivative of Constant, $D \map f x = \map D {x^0} = 0 x^{-1}$, except where $x = 0$.
So the result holds for $n = 0$.

Let $n = 1$.
Then:

$\forall x \in \R: \map f x = x^n = x$
Then from Derivative of Identity Function:

$\map D x = 1 = 1 \cdot x^{1 - 1}$
So the result holds for $n = 1$.

Now assume $\map D {x^k} = k x^{k - 1}$.
Then by the Product Rule for Derivatives:

$\map D {x^{k + 1} } = \map D {x^k x} = x^k \map D x + \map D {x^k} x = x^k \cdot 1 + k x^{k - 1} x = \paren {k + 1} x^k$
The result follows by induction.
$\blacksquare$


Proof by Difference of Two Powers
Let $\map f x = x^n$ for $x \in \R, n \in \N$.
Let $a \in \R$.
By definition of the derivative:

$\ds \map {f'} a = \lim_{x \mathop \to a} \frac {\map f x - \map f a} {x - a} = \lim_{x \mathop \to a} \frac {x^n - a^n} {x - a}$


Case $\text I$
For $n = 0$ it is possible to do:














\(\ds \map {f'} a\)

\(=\)







\(\ds \lim_{x \mathop \to a} \frac {x^0 - a^0} {x - a}\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to a} \frac 0 {x - a}\)




















\(\ds \)

\(=\)







\(\ds 0\)









We have that:

$0 \cdot x^{0 - 1} = 0$
for all $x \ne 0$.
So in this case:

$\map {f'} x = n x^{n - 1}$
$\Box$


Case $\text {II}$
For $n = 1$ we have:

$\map f x = x$
From Derivative of Identity Function:

$\map {f'} x = 1$
Then we note that:

$1 \cdot x^{1 - 1} = 1$
So for the case $n = 1$:

$\map {f'} x = n x^{n - 1}$
$\Box$


Case $\text {III}$
$\R$ is a commutative ring, so for $n \ge 2$ it is possible to do:














\(\ds \map {f'} a\)

\(=\)







\(\ds \lim_{x \mathop \to a} \frac {x^n - a^n} {x - a}\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to a} \frac {\paren {x - a} \sum_{j \mathop = 0}^{n - 1} x^{n - j - 1} a^j} {x - a}\)





Difference of Two Powers














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to a} \sum_{j \mathop = 0}^{n - 1} x^{n - j - 1} a^j\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} a^{n - j - 1} a^j\)





Real Polynomial Function is Continuous














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{n - 1} a^{n - 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^n a^{n - 1}\)





shifting the index from $0$ to $1$














\(\ds \)

\(=\)







\(\ds n a^{n - 1}\)









This holds for all $a \in \R$, so:

$\map {f'} x = n x^{n - 1}$
$\blacksquare$





