# 

Source: https://proofwiki.org/wiki/Pi_Squared_is_Irrational/Proof_2

Theorem
Pi squared ($\pi^2$) is irrational.


Proof

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
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





