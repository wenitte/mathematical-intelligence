# 

Source: https://proofwiki.org/wiki/Exponential_of_Rational_Number_is_Irrational

Theorem
Let $r$ be a rational number such that $r \ne 0$.

Then:

$e^r$ is irrational
where $e$ is Euler's number.


Proof
Let $r = \dfrac p q$ be rational such that $r \ne 0$.
Aiming for a contradiction, suppose $e^r$ is rational.
Then $\paren {e^r}^q = e^p$ is also rational.
Then if $e^{-p}$ is rational, it follows that $e^p$ is rational.
It is therefore sufficient to derive a contradiction from the supposition that $e^p$ is rational for every $p \in \Z_{>0}$.

Let $e^p = \dfrac a b$ for $a, b \in \Z_{>0}$.
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $\map f x$ be the function defined as:




\(\text {(1)}: \quad\)









\(\ds \map f x\)

\(:=\)







\(\ds \frac {x^n \paren {1 - x}^n} {n!}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {n!} \sum_{k \mathop = n}^{2 n} c_k x^k\)





where the $c_k$'s are some integers




Note that:

$(2): \quad 0 < x < 1 \implies 0 < \map f x < \dfrac 1 {n!}$
We also have:

$\map f 0 = 0$
$\map {f^{\paren m} } 0 = 0$ if $m < n$ or $m > 2 n$
and:

$n \le m \le 2 n \implies \map {f^{\paren m} } 0 = \dfrac {m!} {n!} c_m$
and this number is an integer.
Thus at $x = 0$, $\map f x$ and all its derivatives are integers.
Since $\map f {1 - x} = \map f x$, the same is true for $x = 1$.

Let $\map F x$ be the function defined as:




\(\text {(3)}: \quad\)









\(\ds \map F x\)

\(:=\)







\(\ds \sum_{k \mathop = 0}^{2 n} \paren {-1}^k p^{2 n - k} \map {f^{\paren k} } x\)




















\(\ds \)

\(=\)







\(\ds p^{2 n} \map f x - p^{2 n - 1} \map {f'} x + p^{2 n - 2} \map {f} x - \cdots - p \map {f^{\paren {2 n - 1} } } x + \map {f^{\paren {2 n} } } x\)










Because of the properties of $\map f x$ and its derivatives above, $\map F 0$ and $\map F 1$ are integers.

Next we have:




\(\text {(4)}: \quad\)









\(\ds \map {\frac {\d} {\d x} } {e^{p x} \map F x}\)

\(=\)







\(\ds e^{p x} \paren {\map {F'} x + p \, \map F x}\)




















\(\ds \)

\(=\)







\(\ds p^{2 n + 1} e^{p x} \map f x\)





from $\map {F'} x + p \, \map F x$ based on $(3)$




$(4)$ leads to:














\(\ds b \int_0^1 p^{2 n + 1} e^{p x} \map f x \d x\)

\(=\)







\(\ds b \bigintlimits {e^{p x} \map F x} 0 1\)




















\(\ds \)

\(=\)







\(\ds a \, \map F 1 - b \, \map F 0\)









which is an integer.

But from $(2)$:














\(\ds 0\)

\(<\)







\(\ds b \int_0^1 p^{2 n + 1} e^{p x} \map f x \rd x\)




















\(\ds \)

\(<\)







\(\ds \frac {b p^{2 n + 1} e^p} {n!}\)




















\(\ds \)

\(=\)







\(\ds b p e^p \frac {\paren {p^2}^n e^p} {n!}\)









The expression on the right hand side tends to $0$ as $n$ tends to $\infty$.
Hence:

$0 < a \, \map F 1 - b \, \map F 0 < 1$
for sufficiently large $n$.
But there exists no integer strictly between $0$ and $1$.

From this contradiction it follows that our original assumption, that is, that $e^r$ is rational, must have been false.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.17$: More About Irrational Numbers. $\pi$ is Irrational




