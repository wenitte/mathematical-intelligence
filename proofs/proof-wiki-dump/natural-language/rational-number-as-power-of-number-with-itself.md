# 

Source: https://proofwiki.org/wiki/Rational_Number_as_Power_of_Number_with_Itself

Theorem
Every rational number in the interval $\openint {\paren {\dfrac 1 e}^{\frac 1 e} }{+\infty}$ can be written either as:

$a^a$ for some irrational number $a$
or as:

$n^n$ for some natural number $n$.


Proof
$\dfrac \d {\d x} x^x = \dfrac \d {\d x} e^{x \ln x} = e^{x \ln x} \paren {\ln x + 1}$
So we have $\dfrac \d {\d x} x^x > 0$ for every $x > \dfrac 1 e$.
Thus $x^x: \openint {\dfrac 1 e} {+\infty} \to \openint {\paren {\dfrac 1 e}^{\frac 1 e} } {+\infty}$ is bijective.

For each $y \in \openint {\paren {\dfrac 1 e}^{\frac 1 e} } {+\infty}$, we can find some $x \in \openint {\dfrac 1 e} {+\infty}$ such that $y = x^x$.
The result above is therefore equivalent to:

$a^a$ is irrational if $a$ is rational and not a natural number.

Suppose $a^a$ is rational for some rational number $a > \dfrac 1 e$.
We express $a^a$ and $a$ in canonical form: 

$\paren {\dfrac m n}^{\frac m n} = \dfrac b c$
where $m, n, b, c \in \N_{> 0}$ and $\map \gcd {b, c} = \map \gcd {m, n} = 1$.
This gives $\dfrac {m^m} {n^m} = \dfrac {b^n} {c^n}$.
By Canonical Form of Rational Number is Unique:

$n^m = c^n$
If $n = 1$ then $a = \dfrac m n$ is a natural number, and $a^a$ is rational.

Aiming for a contradiction, suppose $n \ge 1$.
Then there is a prime such that $p \divides n$.
This prime must also divide $c$.
Write $n = p^i k$, $c = p^j l$, where $i, j, k, l \in \N_{> 0}$ and $\map \gcd {p, k} = \map \gcd {p, l} = 1$.
Then $n^m = p^{i m} k^m = p^{j n} l^n = c^n$.

Since $\map \gcd {p, k^m} = \map \gcd {p, l^n} = 1$, we must have $p^{i m} = p^{j n}$.
Thus $i m = j n = j k p^i$.

Since $\map \gcd {m, n} = 1$, $p \nmid m$.
So we have $p^i \divides i$.
By Absolute Value of Integer is not less than Divisors, $p^i \le i$.
However by Bernoulli's Inequality:

$p^i \ge 2^i \ge 1 + i > i$
This is a contradiction.

Therefore if $a$ is not a natural number, $a^a$ is irrational.
This proves the result.
$\blacksquare$


Sources
March 2012: J. Marshall Ash and Yiren Tan: A rational number of the form $a^a$ with $a$ irrational (The Mathematical Gazette Vol. 96: pp. 106 – 109)




