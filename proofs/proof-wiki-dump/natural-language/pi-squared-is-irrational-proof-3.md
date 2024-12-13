# 

Source: https://proofwiki.org/wiki/Pi_Squared_is_Irrational/Proof_3

Theorem
Pi squared ($\pi^2$) is irrational.


Proof
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





