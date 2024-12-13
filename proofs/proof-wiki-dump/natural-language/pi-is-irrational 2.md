# 

Source: https://proofwiki.org/wiki/Pi_is_Irrational



Theorem
Pi ($\pi$) is irrational.


Proof 1
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


Proof 2
Aiming for a contradiction, suppose $\pi$ is rational.

We establish a lemma:

Lemma
Let $n \in \Z_{> 0}$ be a positive integer.

Let it be supposed that $\pi$ is irrational, so that:

$\pi = \dfrac p q$
where $p$ and $q$ are integers and $q \ne 0$.

Let $A_n$ be defined as:

$\ds A_n = \frac {q^n} {n!} \int_0^\pi \paren {x \paren {\pi - x} }^n \sin x \rd x$
Then:

$A_n = \paren {4 n - 2} q A_{n - 1} - p^2 A_{n - 2}$
is a reduction formula for $A_n$.
$\Box$

We will use the definition of $A_n$ from the lemma.
Then we will deduce that $A_n$ is an integer for all $n$.

First we confirm by direct integration that $A_0$ and $A_1$ are integers:














\(\ds A_0\)

\(=\)







\(\ds \int_0^\pi \sin x \rd x\)




















\(\ds \)

\(=\)







\(\ds 2\)





Area under Arc of Sine Function



and 














\(\ds A_1\)

\(=\)







\(\ds q \int_0^\pi x \paren {\pi - x} \sin x \rd x\)




















\(\ds \)

\(=\)







\(\ds q \paren {\pi \int_0^\pi x \sin x \rd x - \int_0^\pi x^2 \sin x \rd x }\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds q \paren {\pi \bigintlimits {- x \cos x + \sin x} 0 \pi - \bigintlimits {- x^2 \cos x + 2 x \sin x + 2 \cos x} 0 \pi }\)





Primitive of $x^n \sin a x$














\(\ds \)

\(=\)







\(\ds q \paren {\pi^2 - \pi^2 + 2 + 2}\)





Cosine of $\pi$, Cosine of $0 \degrees$, Sine of $\pi$, Sine of $0 \degrees$














\(\ds \)

\(=\)







\(\ds 4 q\)










Suppose $A_{k - 2}$ and $A_{k - 1}$ are integers. 
By our lemma:

$A_k = \paren {4 n - 2} q A_{k - 1} - p^2 A_{k - 2}$

As $n$, $p$ and $q$ are all integers by hypothesis, $A_k$ is also an integer.

So $A_n$ is an integer for all $n$ by Second Principle of Mathematical Induction.
$\Box$

Let $x \in \closedint 0 \pi$.
From Shape of Sine Function and Real Sine Function is Bounded, we have:

$0 \le \sin x \le 1$
$\Box$

Let:














\(\ds \map f x\)

\(=\)







\(\ds x \paren {\pi - x}\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} x\)

\(=\)







\(\ds \pi - 2 x\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds \pi - 2 x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac \pi 2\)









From Derivative at Maximum or Minimum, $\map f x$ is a maximum or minimum at $x = \dfrac \pi 2$.

Then also:

$\map f 0 = \map f \pi = 0$
and:

$\map f {\dfrac \pi 2} = \dfrac {\pi^2} 4$

So on $\closedint 0 \pi$, $x = \dfrac \pi 2$ is in fact a maximum for $x \paren {\pi - x}$.
So we have:
Hence it follows that:

$0 \le x \paren {\pi - x} \le \dfrac {\pi^2} 4$
$\Box$

Since $A_n$ is clearly positive and the length of the interval is $\pi$ and the integrand is bounded at $\paren {\pi^2 / 4}^n$, from Darboux's Theorem, we have:


$0 < A_n < \pi \times \dfrac {q^n} {n!} \times \paren {\pi^2 / 4}^n$
From Power over Factorial:

$\ds \lim_{n \mathop \to \infty} \frac {\paren {q \pi^2 / 4}^n} {n!} = 0$
It follows from the Squeeze Theorem that:

$\ds \lim_{n \mathop \to \infty} A_n = 0$
Hence for sufficiently large $n$, $A_n$ is strictly between $0$ and $1$.
This contradicts the deduction that $A_n$ is an integer.
This depends on our supposition that $\pi$ is a rational number,
Hence by Proof by Contradiction it follows that $\pi$ is irrational.
$\blacksquare$


Proof 3
From Rational Points on Graph of Sine Function, the only rational point on the graph of the sine function in the real Cartesian plane $\R^2$:

$f := \left\{ {\left({x, y}\right) \in \R^2: y = \sin x}\right\}$
is the point $\left({0, 0}\right)$.
But $\left({\pi, 0}\right)$ is also on $f$.
Hence $\pi$ cannot be rational.
$\blacksquare$


Also see
Pi Squared is Irrational


Historical Note
The fact that $\pi$ (pi) is irrational was first proven in $1761$ by Johann Heinrich Lambert.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 1$: The Language of Set Theory
1971: Wilfred Kaplan and Donald J. Lewis: Calculus and Linear Algebra ... (previous) ... (next): Introduction: Review of Algebra, Geometry, and Trigonometry: $\text{0-1}$: The Real Numbers
1973: C.R.J. Clapham: Introduction to Mathematical Analysis ... (previous) ... (next): Chapter $1$: Axioms for the Real Numbers: $2$. Fields: Example $2$
1973: G. Stephenson: Mathematical Methods for Science Students (2nd ed.) ... (previous) ... (next): Chapter $1$: Real Numbers and Functions of a Real Variable: $1.1$ Real Numbers
1974: Murray R. Spiegel: Theory and Problems of Advanced Calculus (SI ed.) ... (previous) ... (next): Chapter $1$: Numbers: Real Numbers: $4$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 1$: Real Numbers: $\S 1.2$: The set of real numbers
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): Chapter $1$: Complex Numbers: The Real Number System: $4$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41972 \ldots$
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.2$: Numbers, Powers, and Logarithms
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $3 \cdotp 14159 \, 26535 \, 89793 \, 23846 \, 26433 \, 83279 \, 50288 \, 41971 \ldots$
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): irrational number




