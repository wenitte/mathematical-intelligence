# 

Source: https://proofwiki.org/wiki/Power_Rule_for_Derivatives/Natural_Number_Index/Proof_by_Difference_of_Two_Powers



Theorem
Let $n \in \N$.
Let $f: \R \to \R$ be the real function defined as $\map f x = x^n$.

Then:

$\map {f'} x = n x^{n-1}$
everywhere that $\map f x = x^n$ is defined.

When $x = 0$ and $n = 0$, $\map {f'} x$ is undefined.


Proof
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





