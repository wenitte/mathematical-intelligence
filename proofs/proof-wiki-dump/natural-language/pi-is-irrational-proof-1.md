# 

Source: https://proofwiki.org/wiki/Pi_is_Irrational/Proof_1

  This article was Featured Proof between 30-Jan-2023 and 28-Dec-2023.




Theorem
Pi ($\pi$) is irrational.


Proof
Aiming for a contradiction, suppose $\pi$ is rational.
Then from Existence of Canonical Form of Rational Number:

$\exists a \in \Z, b \in \Z_{>0}: \pi = \dfrac a b$
Let $n \in \Z_{>0}$.
We define the polynomial function:

$\forall x \in \R: \map f x = \dfrac {x^n \paren {a - b x}^n} {n!}$
We differentiate this $2 n$ times, and then we build:

$\ds \map F x = \sum_{j \mathop = 0}^n \paren {-1}^j \map {f^{\paren {2 j} } } x = \map f x + \cdots + \paren {-1}^j \map {f^{\paren {2 j} } } x + \cdots + \paren {-1}^n \map {f^{\paren {2 n} } } x$
That is, $\map F x$ is the alternating sum of $f$ and its first $n$ even derivatives.

First we show that:

$(1): \quad \map F 0 = \map F \pi$
From the definition of $\map f x$, and our supposition that $\pi = \dfrac a b$, we have that:

$\forall x \in \R: \map f x = b^n \dfrac {x^n \paren {\pi - x}^n} {n!} = \map f {\pi - x}$

Using the Chain Rule for Derivatives, we can apply the Principle of Mathematical Induction to show that, for all the above derivatives:

$\forall x \in \R: \map {f^{\paren j} } x = \paren {-1}^j \map {f^{\paren j} } {\pi - x}$
In particular, we have:

$\forall j \in \set {1, 2, \ldots, n}: \map {f^{\paren {2 j} } } 0 = \map {f^{\paren {2 j} } } \pi$
From the definition of $F$, it follows that:

$\map F 0 = \map F \pi$

Next we show that:

$(2): \quad \map F 0$ is an integer.
We use the Binomial Theorem to expand $\paren {a - b x}^n$:

$\ds \paren {a - b x}^n = \sum_{k \mathop = 0}^n \binom n k a^{n - k} \paren {-b}^k x^k$
By substituting $j = k + n$, we obtain the following expression for $f$:

$\ds \map f x = \frac 1 {n!} \sum_{j \mathop = n}^{2 n} \binom n {j - n} a^{2 n - j} \paren {-b}^{j - n} x^j$
Note the following:

The coefficients of $x^0, x^1, \ldots, x^{n - 1}$ are all zero
The degree of the polynomial $f$ is at most $2 n$.
So we have:

$\forall j < n: \map {f^{\paren j} } 0 = 0$
$\forall j > 2 n: \map {f^{\paren j} } 0 = 0$
But for $n \le j \le 2 n$, we have:

$\map {f^{\paren j} } 0 = \dfrac {j!} {n!} \dbinom n {j - n} a^{2 n - j} \paren {-b}^{j - n}$
Because $j \ge n$, it follows that $\dfrac {j!} {n!}$ is an integer.
So is the binomial coefficient $\dbinom n {j - n}$ by its very nature.
As $a$ and $b$ are both integers, then so are $a^{2 n - j}$ and $\paren {-b}^{j - n}$.
So $\map {f^{\paren j} } 0$ is an integer for all $j$, and hence so is $\map F 0$.

Next we show that:

$(3): \quad \ds \dfrac 1 2 \int_0^\pi \map f x \sin x \rd x = \map F 0$
As $\map f x$ is a polynomial function of degree $n$, it follows that $f^{\paren {2 n + 2} }$ is the null polynomial.
This means:

$F' ' + F = f$
Using the Product Rule for Derivatives and the derivatives of sine and cosine, we get:

$\paren {\map {F'} x \sin x - \map F x \cos x}' = \map f x \sin x$
By the Fundamental Theorem of Calculus, this leads us to:

$\ds \frac 1 2 \int_0^\pi \map f x \sin x \rd x = \frac 1 2 \bigintlimits {\paren {\map {F'} x \sin x - \map F x \cos x} } {x \mathop = 0} {x \mathop = \pi}$
From Sine and Cosine are Periodic on Reals, we have that $\sin 0 = \sin \pi = 0$ and $\cos 0 = - \cos \pi = 1$.
So, from $\map F 0 = \map F \pi$ (see $(1)$ above), we have:

$\ds \frac 1 2 \int_0^\pi \map f x \sin x \rd x = \map F 0$

The final step:
On the interval $\openint 0 \pi$, we have from Sine and Cosine are Periodic on Reals that $\sin x > 0$.
So from $(2)$ and $(3)$ above, we have that $\map F 0$ is a positive integer.
Now, we have that:

$\paren {x - \dfrac \pi 2}^2 = x^2 - \pi x + \paren {\dfrac \pi 2}^2$
and so:

$x \paren {\pi - x} = \paren {\dfrac \pi 2}^2 - \paren {x - \dfrac \pi 2}^2$
Hence:

$\forall x \in \R: x \paren {\pi - x} \le \paren {\dfrac \pi 2}^2$
Also, from Real Sine Function is Bounded, $0 \le \sin x \le 1$ on the interval $\openint 0 \pi$.
So, by the definition of $f$:

$\ds \frac 1 2 \int_0^\pi \map f x \sin x \rd x \le \frac {b^n} {n!} \paren {\frac \pi 2}^{2 n + 1}$
But this is smaller than $1$ for large $n$, from Radius of Convergence of Power Series over Factorial.
Hence, for these large $n$, we have $\map F 0 < 1$, by $(3)$.
This is impossible for the (strictly) positive integer $\map F 0$.
So our assumption that $\pi$ is rational must have been false.
$\blacksquare$


Historical Note
This proof was first published by Ivan Morton Niven in $1947$, and is considered a classic.
The underlying method was developed by Charles Hermite in $1873$, but it was Niven who provided the final details.


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.17$: More About Irrational Numbers. $\pi$ is Irrational




