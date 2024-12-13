# 

Source: https://proofwiki.org/wiki/Pi_Squared_is_Irrational



Theorem
Pi squared ($\pi^2$) is irrational.


Decimal Expansion
The decimal expansion of Pi squared ($\pi^2$) begins:

$9 \cdotp 86960 \, 44010 \, 89358 \ldots$


Proof 1
Aiming for a contradiction, suppose $\pi^2$ is rational.

We establish a lemma:

Lemma
Let $n \in \Z_{\ge 0}$ be a positive integer.

Let it be supposed that $\pi^2$ is irrational, so that:

$\pi^2 = \dfrac p q$
where $p$ and $q$ are integers and $q \ne 0$.

Let $A_n$ be defined as:

$\ds A_n = \frac {q^n} {n!} \int_0^\pi \paren {x \paren {\pi - x} }^n \sin x \rd x$
Then:

$A_n = \paren {4 n - 2} q A_{n - 1} - p q A_{n - 2}$
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

$A_k = \paren {4 n - 2} q A_{k - 1} - p q A_{k - 2}$

As $n$, $p$ and $q$ are all integers by hypothesis, $A_k$ is also an integer.

So $A_n$ is an integer for all $n$ by Second Principle of Mathematical Induction.
$\Box$

Let $x \in \closedint 0 \pi$.
From Shape of Sine Function and Real Sine Function is Bounded, we have:

$0 \le \sin x \le 1$
From Derivative at Maximum or Minimum, we have:














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







\(\ds \frac \pi 2\)









Therefore, plugging $\dfrac \pi 2$ into $\map f x$, we obtain:

$0 \le x \paren {\pi - x} \le \dfrac {\pi^2} 4$
Since $A_n$ is clearly positive and the length of the interval is $\pi$ and the integrand is bounded at $\paren {\pi^2 / 4}^n$, from Darboux's Theorem, we have:

$0 < A_n < \pi \times \dfrac {q^n} {n!} \times \paren {\pi^2 / 4}^n$
From Power over Factorial:

$\ds \lim_{n \mathop \to \infty} \frac {\paren {q \pi^2 / 4}^n} {n!} = 0$
It follows from the Squeeze Theorem that:

$\ds \lim_{n \mathop \to \infty} A_n = 0$
Hence for sufficiently large $n$, $A_n$ is strictly between $0$ and $1$.
This contradicts the deduction that $A_n$ is an integer.
This depends on our supposition that $\pi^2$ is a rational number,
Hence by Proof by Contradiction it follows that $\pi^2$ is irrational.
$\blacksquare$


Proof 2
Aiming for a contradiction, suppose $\pi^2$ is rational.
Then $\pi^2 = \dfrac p q$ where $p$ and $q$ are integers and $q \ne 0$.
Let us define a polynomial:

$\ds \map f x = \frac {\paren {1 - x^2}^n} {n!} = \sum_{m \mathop = n}^{2 n} \frac {c_m} {n!} x^m$
for $c_m \in \Z$.
$\map f x = \map f {-x}$ and so we get:














\(\ds \map {f^{\paren k} } x = \paren {-1}^k \map {f^{\paren k} } {-x}\)

\(=\)







\(\ds \begin {cases} \ds \sum_{m \mathop = n}^{2 n} \frac{k!} {n!} \binom m k c_m x^{m - k} & : 0 \le k \le n - 1 \\ \ds \sum_{m \mathop = k}^{2 n} \frac {k!} {n!} \binom m k c_m x^{m - k} & :n \le k \le 2 n \end {cases}\)




















\(\ds \map {f^{\paren k} } 1 = \paren {-1}^k \map {f^{\paren k} } {-1}\)

\(=\)







\(\ds \begin {cases} 0 & : 0 \le k \le n - 1 \\ \dfrac {k!} {n!} c_k & : n \le k \le 2 n \end {cases}\)









hence they are all integers.


This article, or a section of it, needs explaining.In particular: Is this really the case? Can we prove the above? It's not immediately obvious how.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

Now let:

$\ds A_n = \int_{-1}^1 \map f x \map \cos {\dfrac {\pi x} 2} \rd x = 2 \int_0^1 \map f x \map \cos {\dfrac {\pi x} 2} \rd x$
Repeated integration by Parts gives:














\(\ds A_n\)

\(=\)







\(\ds \frac {2^2} \pi \intlimits {\map {f^{\paren 0} } x \map \sin {\dfrac {\pi x} 2} } 0 1 + \frac {2^3} {\pi^2} \intlimits {\map {f^{\paren 1} } x \map \cos {\dfrac {\pi x} 2} } 0 1 - \cdots \pm \frac {2^{2 n + 2} } {\pi^{2 n + 1} } \intlimits {\map {f^{\paren {2 n} } } x \map \sin {\dfrac {\pi x} 2} } 0 1 \pm \frac {2^{2 n + 2} } {\pi^{2 n + 1} } \int_0^1 \map {f^{\paren {2 n + 1} } } x \map \sin {\dfrac {\pi x} 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac {2^2} \pi \intlimits {\map {f^{\paren 0} } x \map \sin {\dfrac {\pi x} 2} } 0 1 - \frac {2^4} {\pi^3} \intlimits {\map {f^{\paren 2} } x \map \sin {\dfrac {\pi x} 2} } 0 1 + \frac {2^6} {\pi^5} \intlimits {\map {f^{\paren 4} } x \map \sin {\dfrac {\pi x} 2} } 0 1 - \cdots + \paren {-1}^n \frac {2^{2 n + 2} } {\pi^{2 n + 1} } \intlimits {\map {f^{\paren {2 n} } } x \map \sin {\dfrac {\pi x} 2} } 0 1\)




















\(\ds \)

\(=\)







\(\ds \frac {4} \pi \map {f^{\paren 0} } 1 - \frac {4^2} {\pi^3} \map {f^{\paren 2} } 1 + \frac {4^3} {\pi^5} \map {f^{\paren 4} } 1 - \cdots + \paren {-1}^n \frac {4^{n + 1} } {\pi^{2 n + 1} } \map {f^{\paren {2 n} } } 1\)














\(\ds \leadsto \ \ \)





\(\ds \frac \pi 4 A_n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {-\frac 4 {\pi^2} }^k \map {f^{\paren {2 k} } } 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n \paren {-\frac {4 q} p}^k \map {f^{\paren {2 k} } } 1\)









Now let:

$\ds N_n = \frac \pi 4 p^n A_n = \sum_{k \mathop = 0}^n p^{n - k} \paren {-4 q}^k \map {f^{\paren {2 k} } } 1$
Since $\map f x >0$ and $\map \cos {\dfrac {\pi x} 2} > 0$ on the open interval $\openint {-1} 1$:

$A_n > 0$
Hence $N_n$ is a positive integer.

Nevertheless, for $x \in \closedint {-1} 1$:

$0 \le \map f x \le \dfrac 1 {n!}$
and:

$0 \le \map \cos {\dfrac {\pi x} 2} \le 1$
Hence:

$0 < A_n < \dfrac 2 {n!}$
Therefore:

$0 < N_n < \dfrac \pi 2 \dfrac {p^n} {n!}$
From Power over Factorial:

$\ds \lim_{n \mathop \to \infty} \dfrac {p^n} {n!} = 0$
It follows from the Squeeze Theorem that:

$\ds \lim_{n \mathop \to \infty} N_n = 0$
Hence for sufficiently large $n$, $N_n$ is strictly between $0$ and $1$.
This contradicts the supposition that $N_n$ is an integer.
It follows that $\pi^2$ is irrational.
$\blacksquare$


Proof 3
Aiming for a contradiction, suppose $\pi^2$ is rational.

We establish a lemma:

Lemma
Let $n \in \Z_{\ge 0}$ be a positive integer.

Let it be supposed that $\pi^2$ is irrational, so that:

$\pi^2 = \dfrac p q$
where $p$ and $q$ are integers and $q \ne 0$.

Let $A_n$ be defined as:

$\ds A_n = \frac \pi 2 \frac {p^n} {n!}  \int_0^1 \paren {1 - x^2 }^n \map \cos {\dfrac {\pi x} 2} \rd x$
Then:

$A_n = \paren {16 n - 8} q A_{n - 1} - 16 p q A_{n - 2}$
is a reduction formula for $A_n$.
$\Box$

We will use the definition of $A_n$ from the lemma.
Then we will deduce that $A_n$ is an integer for all $n$.

First we confirm by direct integration that $A_0$ and $A_1$ are integers:














\(\ds A_0\)

\(=\)







\(\ds \frac \pi 2 \frac {p^0} {0!}  \int_0^1 \paren {1 - x^2 }^0 \map \cos {\dfrac {\pi x} 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds \frac \pi 2 \int_0^1 \map \cos {\dfrac {\pi x} 2} \rd x\)





Zeroth Power of Real Number equals One, Factorial of Zero














\(\ds \)

\(=\)







\(\ds \frac \pi 2 \times \frac 2 \pi \times \bigintlimits {\map \sin {\dfrac {\pi x} 2} } 0 1\)





Primitive of Cosine Function: Corollary














\(\ds \)

\(=\)







\(\ds 1\)





Sine of $0 \degrees$, Sine of $90 \degrees$



and 














\(\ds A_1\)

\(=\)







\(\ds \frac \pi 2 \frac {p^1} {1!}  \int_0^1 \paren {1 - x^2 }^1 \map \cos {\dfrac {\pi x} 2} \rd x\)




















\(\ds \)

\(=\)







\(\ds p \paren {\frac \pi 2 \int_0^1 \map \cos {\dfrac {\pi x} 2} \rd x - \frac \pi 2 \int_0^1 x^2 \map \cos {\dfrac {\pi x} 2} \rd x }\)





Linear Combination of Integrals














\(\ds \)

\(=\)







\(\ds p \paren {\frac \pi 2 \times \frac 2 \pi \times \bigintlimits {\map \sin {\dfrac {\pi x} 2} } 0 1 - \frac \pi 2 \bigintlimits {\frac 2 \pi x^2 \map \sin {\dfrac {\pi x} 2} + \paren {\frac 4 {\pi^2} } 2 x \map \cos {\dfrac {\pi x} 2} - 2 \paren {\frac 2 \pi }^3 \map \sin {\dfrac {\pi x} 2} } 0 1 }\)





Primitive of Cosine Function: Corollary, Primitive of $x^n \cos a x$














\(\ds \)

\(=\)







\(\ds p \paren {1 - \paren {1 - \frac 8 {\pi^2} } }\)





Sine of $0 \degrees$, Sine of $90 \degrees$, Cosine of $0 \degrees$, Cosine of $90 \degrees$














\(\ds \)

\(=\)







\(\ds p \paren {\frac 8 {p / q} }\)





assuming $\pi^2 = \dfrac p q$














\(\ds \)

\(=\)







\(\ds 8 q\)










Suppose $A_{k - 2}$ and $A_{k - 1}$ are integers. 
By our lemma:

$A_k = \paren {16 n - 8} q A_{k - 1} - 16 p q A_{k - 2}$

As $n$, $p$ and $q$ are all integers by hypothesis, $A_k$ is also an integer.

So $A_n$ is an integer for all $n$ by Second Principle of Mathematical Induction.
$\Box$

Let $x \in \closedint 0 1$.
From Shape of Cosine Function and Real Cosine Function is Bounded, we have:

$0 \le \map \cos {\dfrac {\pi x} 2} \le 1$
From Derivative at Maximum or Minimum, we have:














\(\ds \map f x\)

\(=\)







\(\ds \paren {1 - x^2}^n\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} x\)

\(=\)







\(\ds n \paren {1 - x^2}^{n - 1} \paren {-2 x}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(=\)







\(\ds n \paren {1 - x^2}^{n - 1} \paren {-2 x}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds 0\)





$0$ is the maximum $\map f 0 = 1$ and $\pm 1$ is the minimum $\map f {\pm 1} = 0$



Therefore, plugging $0$ into $\map f x$, we obtain:

$0 \le \paren {1 - x^2}^n \le 1$
Since $A_n$ is clearly positive and the length of the interval is $1$ and the integrand is bounded at $\paren {1}^n$, from Darboux's Theorem, we have:

$0 < A_n < 1 \times \dfrac \pi 2 \times \dfrac {p^n} {n!} \times \paren {1}^n$
From Power over Factorial:

$\ds \lim_{n \mathop \to \infty} \dfrac {p^n} {n!} = 0$
It follows from the Squeeze Theorem that:

$\ds \lim_{n \mathop \to \infty} A_n = 0$
Hence for sufficiently large $n$, $A_n$ is strictly between $0$ and $1$.
This contradicts the deduction that $A_n$ is an integer.
This depends on our supposition that $\pi^2$ is a rational number,
Hence by Proof by Contradiction it follows that $\pi^2$ is irrational.
$\blacksquare$


Also see
Pi is Irrational


Historical Note
$\pi^2$ was demonstrated to be irrational in $1794$ by Joseph Louis Lagrange.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $9 \cdotp 869 \, 604 \ldots$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $9 \cdotp 86960 \, 44010 \, 89358 \ldots$




