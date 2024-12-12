# 

Source: https://proofwiki.org/wiki/Euler%27s_Number_is_Transcendental/Proof_1



Theorem
Euler's Number $e$ is transcendental.


Proof

This article needs to be linked to other articles.In particular: and review existing onesYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

Aiming for a contradiction, suppose there exist integers $a_0, \ldots, a_n$ with $a_0 \ne 0$ such that:

$(1): \quad a_n e^n + a_{n - 1} e^{n - 1} + \cdots + a_0 = 0$

Define $M$, $M_1, \ldots, M_n$ and $\epsilon_1, \ldots, \epsilon_n$ as follows:














\(\ds M\)

\(=\)







\(\ds \int_0^\infty \frac {x^{p - 1} \sqbrk {\paren {x - 1} \cdots \paren {x - n} }^p e^{-x} } {\paren {p - 1}!} \rd x\)




















\(\ds M_k\)

\(=\)







\(\ds e^k \int_k^\infty \frac {x^{p - 1} \sqbrk {\paren {x - 1} \cdots \paren {x - n} }^p e^{-x} } {\paren {p - 1}!} \rd x\)




















\(\ds \epsilon_k\)

\(=\)







\(\ds e^k \int_0^k \frac {x^{p - 1} \sqbrk {\paren {x - 1} \cdots \paren {x - n} }^p e^{-x} } {\paren {p - 1}!} \rd x\)










where $p$ is a prime number with $p > n$ and $p > \size {a_0}$.

The expression $\sqbrk {\paren {x - 1} \cdots \paren {x - n} }^p$ is a polynomial of degree $n p$ with integer coefficients.
Hence:














\(\ds M\)

\(=\)







\(\ds \sum_{\alpha \mathop = 0}^{n p} \frac {C_\alpha} {\paren {p - 1}!} \int_0^\infty x^{p - 1 + \alpha} e^{-x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{\alpha \mathop = 0}^{n p} C_\alpha \dfrac {\paren {p - 1 + \alpha}!} {\paren {p - 1}!}\)





Gamma Function Extends Factorial



where $C_\alpha$ are integers and $C_0 = \pm \paren {n!}^p$.
For $\alpha = 0$ we have:

$C_0 \dfrac {\paren {p - 1}!} {\paren {p - 1}!} = \pm \paren {n!}^p$
Since $p > n$, it follows from Prime iff Coprime to all Smaller Positive Integers and Euclid's Lemma that this term is not divisible by $p$.
For $\alpha \ge 1$ we have:

$C_\alpha \dfrac {\paren {p - 1 + \alpha}!} {\paren {p - 1}!} = C_\alpha \paren {p - 1 + \alpha} \paren {p - 2 + \alpha} \cdots p$
which is clearly divisible by $p$.
It follows from Common Divisor Divides Difference that $M$ is an integer not divisible by $p$.

We also have:














\(\ds M_k\)

\(=\)







\(\ds \int_k^\infty \frac {x^{p - 1} \sqbrk {\paren {x - 1} \cdots \paren {x - n} }^p e^{-\paren {x - k} } } {\paren {p - 1}!} \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_0^\infty \frac {\paren {x + k}^{p - 1} \sqbrk {\paren {x + k - 1} \cdots \paren {x + k - n} }^p e^{- x} } {\paren {p - 1}!} \rd x\)





substituting $x - k \mapsto x$



The expression $\sqbrk {\paren {x + k - 1} \cdots \paren {x + k - n} }$ is divisible by $x$.
So $\paren {x + k}^{p - 1} \sqbrk {\paren {x + k - 1} \cdots \paren {x + k - n} }^p$ is a polynomial of degree at least $p$ with integer coefficients.
Hence:














\(\ds M_k\)

\(=\)







\(\ds \sum_{\alpha \mathop = 1}^{n p} \frac {D_{\alpha} } {\paren {p - 1}!} \int_0^\infty x^{p - 1 + \alpha} e^{-x} \rd x\)




















\(\ds \)

\(=\)







\(\ds \sum_{\alpha \mathop = 1}^{n p} D_{\alpha} \frac {\paren {p - 1 + \alpha}!} {\paren {p - 1}!}\)





Gamma Function Extends Factorial



where $D_\alpha$ are integers.
Since this sum begins with $\alpha = 1$, each term is divisible by $p$. 
Thus each $M_k$ is an integer divisible by $p$.

By the above definitions we have:

$e^k = \dfrac {M_k + \epsilon_k} M$
Substituting this into $(1)$ and multiplying by $M$ we obtain:

$\paren {a_0 M + a_1 M_1 + \cdots + a_n M_n} + \paren {a_1 \epsilon_1 + \cdots + a_n \epsilon_n} = 0$
Since $p > \size {a_0}$, it follows from Prime iff Coprime to all Smaller Positive Integers that $p$ does not divide $a_0$.
So by Euclid's Lemma, $a_0 M$ is not divisible by $p$.
Since each $M_k$ is divisible by $p$, it follows from Common Divisor Divides Difference that $a_0 M + a_1 M_1 + \cdots + a_n M_n$ is not divisible by $p$.
Therefore $a_0 M + a_1 M_1 + \cdots + a_n M_n$ is a non-zero integer.

We also have:














\(\ds \size {\epsilon_k}\)

\(=\)







\(\ds e^k \size {\int_0^k \frac {x^{p - 1} \sqbrk {\paren {x - 1} \cdots \paren {x - n} }^p e^{-x} } {\paren {p - 1}!} \rd x}\)




















\(\ds \)

\(\le\)







\(\ds e^k \int_0^k \frac {\size {x^{p - 1} \sqbrk {\paren {x - 1} \cdots \paren {x - n} }^p} e^{-x} } {\paren {p - 1}!} \rd x\)





Absolute Value of Definite Integral














\(\ds \)

\(\le\)







\(\ds e^n \int_0^n \frac {n^{p - 1} \size {\sqbrk {\paren {x - 1} \cdots \paren {x - n} }^p} e^{-x} } {\paren {p - 1}!} \rd x\)





Relative Sizes of Definite Integrals



Let $A$ be the maximum value of $\size {\paren {x - 1} \cdots \paren {x - n} }$ for $x$ in the interval $\closedint 0 n$.
Then:














\(\ds \size {\epsilon_k}\)

\(\le\)







\(\ds \frac {e^n n^{p - 1} A^p} {\paren {p - 1}!} \int_0^n e^{-x} \rd x\)




















\(\ds \)

\(\le\)







\(\ds \frac {e^n n^{p - 1} A^p} {\paren {p - 1}!} n\)





as $e^{- x} \le 1$ for $x \ge 0$














\(\ds \)

\(\le\)







\(\ds \frac {e^n \paren {n A}^p} {p!}\)









By Power over Factorial:

$\ds \lim_{p \mathop \to \infty} \frac {e^n \paren {n A}^p} {p!} = 0$
So $\size {\epsilon_k}$, and therefore $\size {a_1 \epsilon_1 + \cdots + a_n \epsilon_n}$, can be made arbitrarily small by choosing $p$ sufficiently large. 
It follows that $\paren {a_0 M + a_1 M_1 + \cdots + a_n M_n} + \paren {a_1 \epsilon_1 + \cdots + a_n \epsilon_n}$ is non-zero.
This is a contradiction, so $e$ must be transcendental.
$\blacksquare$


Historical Note
The transcendental nature of Euler's number $e$ was conjectured by Joseph Liouville in $1844$, after he had proved that it was not the root of a quadratic equation with integer coefficients.

The proof that $e$ is transcendental was first achieved by Charles Hermite in $1873$.

The proof given here is a simplified version of Hermite's original proof, given by Hilbert.


Sources
1873: Charles Hermite: Sur la fonction exponentielle (C.R. Acad. Sci. Vol. 77: pp. 18 – 24)
1893: David Hilbert: Über die Transcendenz der Zahlen e und pi (Math. Ann. Vol. 43: pp. 216 – 219)
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.18$: Algebraic and Transcendental Numbers. $e$ is Transcendental




