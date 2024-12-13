# 

Source: https://proofwiki.org/wiki/Polynomial_Long_Division

Technique
Let $\map {P_n} x$ be a polynomial in $x$ of degree $n$.
Let $\map {Q_m} x$ be a polynomial in $x$ of degree $m$ where $m \le n$.

Then $\map {P_n} x$ can be expressed in the form:

$\map {P_n} x \equiv \map {Q_m} x \map {D_{n - m} } x + \map {R_k} x$

This article, or a section of it, needs explaining.In particular: what is $\equiv$ being used for here?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
where:

$\map {D_{n - m} } x$ is a polynomial in $x$ of degree $n - m$
$\map {R_k} x$ is a polynomial in $x$ of degree $k$, where $k < m$, or may be null.

Hence we can define $\dfrac {\map {P_n} x} {\map {Q_m} x}$:

$\dfrac {\map {P_n} x} {\map {Q_m} x} = \map {D_{n - m} } x + \dfrac {\map {R_k} x} {\map {Q_m} x}$

The polynomial $\map {R_k} x$ is called the remainder.

The procedure for working out what $\map {D_{n - m} } x$ and $\map {R_k} x$ are is called (polynomial) long division.


This article, or a section of it, needs explaining.In particular: Establish the precise versions of polynomial that are invoked via the links on this page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Let $\ds \map {P_n} x = \sum_{j \mathop = 0}^n p_j x^j$.
Let $\ds \map {Q_m} x = \sum_{j \mathop = 0}^m q_j x^j$.
First calculate $\map {Q'_m} x = \map {Q_m} x \times \dfrac {p_n} {q_m} x^{n - m}$.

This gives:














\(\ds \map {Q'_m} x\)

\(=\)







\(\ds \sum_{j \mathop = 0}^m \frac {p_n q_j} {q_m} x^{n - m + j}\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = n - m}^n \frac {p_n q_{j - n + m} } {q_m} x^j\)




















\(\ds \)

\(=\)







\(\ds p_n x^n + \sum_{j \mathop = n - m}^{n - 1} \frac {p_n q_{j - n + m} } {q_m} x^j\)










Then evaluate:

$\map {P'_{n - 1} } x = \map {P_n} x - \map {Q'_m} x$
which (after some algebra) works out as:

$\ds \map {P_n} x - \map {Q'_m} x = \sum_{j \mathop = n - m}^{n - 1} \frac {p_n q_{j - n + m} } {q_m} x^j + \sum_{j \mathop = 0}^{n - m - 1} p_j x^j$
So we see that $\map {P_n} x - \map {Q'_m} x$ is a polynomial in $x$ of degree $n - 1$.

Let $\dfrac {p_n} {q_m} = d_{n - m}$.
Hence we have:

$\map {P_n} x = d_{n - m} x^{n - m} \map {Q_m} x + \map {P'_{n - 1} } x$

We can express $\map {P'_{n - 1} } x$ as:

$\ds \map {P'_{n - 1} } x = \sum_{j \mathop = 0}^{n - 1} p'_j x^j$

Repeat the above by subtracting $\ds \frac {p'_{n - 1} } {q_m} x^{n - m - 1} \map {Q_m} x$ from $\map {P'_{n - 1} } x$, and letting $\dfrac {p'_{n - 1} } {q_m} = d_{n - m - 1}$.
Hence:

$\map {P'_{n - 1} } x = d_{n - m - 1} x^{n - m - 1} \map {Q_m} x + \map {P_{n - 2} } x$

The process can be repeated $n - m$ times.

It can be seen that after the last stage, we have:

$\map {P_n} x = \map {D_{n - m} } x \map {Q_m} x + \map {R_k} x$
where:

$\ds \map {D_{n - m} } x = \sum_{j \mathop = 0}^{n - m} d_j x^j$
$\map {R_k} x$ is a polynomial of degree at most $m - 1$.
$\blacksquare$





