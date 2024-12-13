# 

Source: https://proofwiki.org/wiki/Pi_is_Irrational/Proof_2

Theorem
Pi ($\pi$) is irrational.


Proof
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





