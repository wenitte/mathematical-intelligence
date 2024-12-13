# 

Source: https://proofwiki.org/wiki/Integration_by_Substitution/Riemann-Stieltjes_Integral



Theorem
Let $g$ be a real function that is continuous and strictly monotone on $\closedint a b$.
Let $\Bbb I = g \closedint a b$ be the image of $g$ under $\closedint a b$.
Let $f, \alpha$ be real functions that are bounded on $\Bbb I$.
Further suppose that $f$ is Riemann-Stieltjes integrable with respect to $\alpha$ on $\Bbb I$.

Let $h, \beta : \Bbb I \to \R$ be defined as:

$\map h x = \map f {\map g x}$
$\map \beta x = \map \alpha {\map g x}$
Then, $h$ is Riemann-Stieltjes integrable with respect to $\beta$ on $\Bbb I$ and:

$\ds \int_a^b h \rd \beta = \int_{\map g a}^{\map g b} f \rd \alpha$


Proof
We have the following special cases:

Increasing
Let $g$ be a real function that is continuous and strictly increasing on $\closedint a b$.
Let $f, \alpha$ be real functions that are bounded on $\closedint {\map g a} {\map g b}$.
Further suppose that $f$ is Riemann-Stieltjes integrable with respect to $\alpha$ on $\closedint {\map g a} {\map g b}$.

Let $h, \beta : \closedint a b \to \R$ be defined as:

$\map h x = \map f {\map g x}$
$\map \beta x = \map \alpha {\map g x}$
Then, $h$ is Riemann-Stieltjes integrable with respect to $\beta$ on $\closedint a b$ and:

$\ds \int_a^b h \rd \beta = \int_{\map g a}^{\map g b} f \rd \alpha$
$\Box$


Decreasing
Let $g$ be a real function that is continuous and strictly decreasing on $\closedint a b$.
Let $f, \alpha$ be real functions that are bounded on $\closedint {\map g b} {\map g a}$.
Further suppose that $f$ is Riemann-Stieltjes integrable with respect to $\alpha$ on $\closedint {\map g b} {\map g a}$.

Let $h, \beta : \closedint a b \to \R$ be defined as:

$\map h x = \map f {\map g x}$
$\map \beta x = \map \alpha {\map g x}$
Then, $h$ is Riemann-Stieltjes integrable with respect to $\beta$ on $\closedint a b$ and:

$\ds \int_a^b h \rd \beta = - \int_{\map g b}^{\map g a} f \rd \alpha$
$\Box$

By definition of strictly monotone, $g$ is either strictly increasing or strictly decreasing.
First, suppose $g$ is strictly increasing.
By the Intermediate Value Theorem, it is clear that:

$\Bbb I = \closedint {\map g a} {\map g b}$
Then, the result follows from the special case Increasing above.
$\Box$

Now, suppose $g$ is strictly decreasing.
Once again, by the Intermediate Value Theorem, it is clear that:

$\Bbb I = \closedint {\map g b} {\map g a}$
Then:














\(\ds \int_a^b h \rd \beta\)

\(=\)







\(\ds - \int_{\map g b}^{\map g a} f \rd \alpha\)





Special case Decreasing above














\(\ds \)

\(=\)







\(\ds \int_{\map g a}^{\map g b} f \rd \alpha\)





Convention for General Limits of Integration



$\Box$

In each case, the result holds, so the theorem follows from Proof by Cases.
$\blacksquare$


Sources
1974: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $7$ The Riemann-Stieltjes Integral: $\S 7.6$: Theorem $7.7$




