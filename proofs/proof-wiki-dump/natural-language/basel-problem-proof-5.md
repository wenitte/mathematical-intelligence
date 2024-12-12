# 

Source: https://proofwiki.org/wiki/Basel_Problem/Proof_5



Theorem
$\ds \map \zeta 2 = \sum_{n \mathop = 1}^\infty {\frac 1 {n^2} } = \frac {\pi^2} 6$
where $\zeta$ denotes the Riemann zeta function.


Proof
Let the function $f_n$ be defined as:

$(1): \quad \map {f_n} x := \dfrac 1 2 + \cos x + \cos 2 x + \cdots + \cos n x$
By Lagrange's Cosine Identity:

$(2): \quad \map {f_n} x = \dfrac {\map \sin {\paren {2 n + 1} x / 2} } {2 \map \sin {x / 2} }$
Let $E_n$ be defined as:














\(\ds E_n\)

\(=\)







\(\ds \int_0^\pi x \map {f_n} x \rd x\)










\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 4 + \sum_{k \mathop = 1}^n \paren {\frac {\paren {-1}^k - 1} {k^2} }\)





Primitive of $x \cos a x$ and algebra



The terms for even $k$ on the {right hand side are zero, so:

$\ds (4): \quad \dfrac 1 2 E_{2 n - 1} = \dfrac {\pi^2} 8 - \sum_{k \mathop = 1}^n \dfrac 1 {\paren {2 k - 1}^2}$
It remains to be shown that:

$\ds \lim_{n \mathop \to \infty} E_{2 n - 1} = 0$
which will establish:

$\ds (5): \quad \dfrac {\pi^2} 8 = \sum_{k \mathop = 1}^n \dfrac 1 {\paren {2 k - 1}^2}$

Using $(2)$, let $\map g x$ be the function defined as:

$\map g x := \map {\dfrac \d {\d x} } {\dfrac {x / 2} {\map \sin {x /2} } }$
Using Integration by Parts, we obtain:

$\ds (6): \quad E_{2 n - 1} = \dfrac 1 {4 n - 1} \paren {2 + 2 \int_0^\pi \map g x \cos \dfrac {\paren {4 n - 1} x} 2 \rd x}$
during which we use Limit of $\dfrac {\sin x} x$: Corollary:

$\ds \lim_{x \mathop \to 0} \dfrac {x / 2} {\map \sin {x / 2} } = 1$
We have that $\map g x$ is increasing on the interval of integration.
Therefore $\map g x$ is bounded on the interval $\closedint 0 \pi$ by $\map g \pi = \dfrac \pi 2$.
Hence $(5)$ has been established as being true.

Now we divide the (strictly) positive integers into even and odd, and use $(5)$ to obtain:














\(\ds \sum_{k \mathop = 1}^\infty \frac 1 {k^2}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^\infty \frac 1 {\paren {2 k}^2} + \sum_{k \mathop = 1}^\infty \frac 1 {\paren {2 k - 1}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \sum_{k \mathop = 1}^\infty \frac 1 {k^2} + \frac {\pi^2} 8\)














\(\ds \leadsto \ \ \)





\(\ds \frac 3 4 \sum_{k \mathop = 1}^\infty \frac 1 {k^2}\)

\(=\)







\(\ds \frac {\pi^2} 8\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^\infty \frac 1 {k^2}\)

\(=\)







\(\ds \frac 4 3 \frac {\pi^2} 8\)




















\(\ds \)

\(=\)







\(\ds \frac {\pi^2} 6\)









$\blacksquare$


Historical Note
The Basel Problem was first posed by Pietro Mengoli in $1644$.
Its solution is generally attributed to Leonhard Euler , who solved it in $1734$ and delivered a proof in $1735$.
However, it has also been suggested that it was in fact first solved by Nicolaus I Bernoulli.
Jacob Bernoulli had earlier established that the series was convergent, but had failed to work out what to.
The problem is named after Basel, the home town of Euler as well as of the Bernoulli family.


If only my brother were alive now.
-- Johann Bernoulli


Sources
1972: Daniel P. Giesy: Still Another Elementary Proof that $\sum 1/ k^2 = \pi^2 / 6$ (Math. Mag. Vol. 45: pp. 148 – 149)  www.jstor.org/stable/2687871
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.15$: A Rigorous Proof of Euler's Formula $\ds \sum_1^\infty \frac 1 {n^2} = \frac {\pi^2} 6$




