# 

Source: https://proofwiki.org/wiki/Harmonic_Number_is_not_Integer/Proof_1

Theorem
Let $H_n$ be the $n$th harmonic number.

Then $H_n$ is not an integer for $n \ge 2$.
That is, the only harmonic numbers that are integers are $H_0$ and $H_1$.


Proof
As $H_0 = 0$ and $H_1 = 1$, they are integers.
The claim is that $H_n$ is not an integer for all $n \ge 2$.

Aiming for a contradiction, suppose otherwise:

$(\text P): \quad \exists m \in \N: H_m \in \Z$
By the definition of the harmonic numbers:

$H_m = 1 + \dfrac 1 2 + \dfrac 1 3 + \cdots + \dfrac 1 m$

Let $2^t$ denote the highest power of two in the denominators of the summands.
Then:














\(\ds H_m\)

\(=\)







\(\ds 1 + \frac 1 2 + \frac 1 3 + \cdots + \frac 1 m\)










\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds H_m - \frac 1 {2^t}\)

\(=\)







\(\ds 1 + \frac 1 2 + \frac 1 3 + \cdots + \frac 1 {2^t - 1} + \frac 1 {2^t + 1} + \cdots + \frac 1 m\)














\(\ds \leadsto \ \ \)





\(\ds 2^{t - 1} H_m - \frac 1 2\)

\(=\)







\(\ds 2^{t - 1} + \frac {2^{t - 1} } 2 + \frac {2^{t - 1} } 3 + \frac {2^{t - 1} } 4 + \frac {2^{t - 1} } 5 + \frac {2^{t - 1} } 6 + \cdots + \frac {2^{t - 1} } m\)





multiplying by $2^{t-1}$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds 2^{t - 1} + 2^{t - 2} + \frac {2^{t - 1} } 3 + 2^{t - 3} + \frac {2^{t - 1} } 5 + \frac {2^{t - 2} } 3 + \cdots + \frac {2^{t - 1} } m\)





cancelling powers of $2$




Let $S$ be the set of denominators on the right hand side of $(2)$.
Then no element of $S$ can have $2$ as a factor, as follows.
Consider an arbitrary summand:

$\dfrac {2^{t - 1} } {2^j \times k}$
for some $k \in \Z$, where $j \ge 0$ is the highest power of $2$ that divides the denominator.
For any $2$ to remain after simplification, we would need $j > t - 1$.
Were this to be so, then $2^j \times k$ would have $2^t$ as a factor, and some denominator would be a multiple of $2^t$.
By Greatest Power of Two not Divisor, the set of denominators of the right hand side of $(1)$:

$\set {1, 2, 3, \ldots, 2^t - 1, 2^t + 1, \ldots, m}$
contains no multiple of $2^t$.
Therefore there can be no multiple of $2$ in the denominators of the right hand side of $(2)$.
Let:

$\ell = \map \lcm S$
be the lowest common multiple of the elements of $S$.
Because $2$ is not a divisor of any of the elements of $S$, it will not be a divisor of $\ell$.
Hence $\ell$ is likewise odd.

We have:














\(\ds 2^{t - 1} H_m - \frac 1 2\)

\(=\)







\(\ds 2^{t - 1} + 2^{t - 2} + \frac {2^{t - 1} } 3 + 2^{t - 3} + \frac {2^{t - 1} } 5 + \frac {2^{t - 2} } 3 + \ldots + \frac {2^{t - 1} } m\)





from $(2)$








\(\ds \leadsto \ \ \)





\(\ds \frac {2^t H_m - 1} 2\)

\(=\)







\(\ds \frac {2^{t - 1} \ell + 2^{t - 2} \ell + 2^{t - 1} \paren {\ell / 3} + 2^{t - 3} \ell + 2^{t - 1} \paren {\ell / 5} + \ldots + 2^{t - 1} \paren {\ell / m} } \ell\)





multiplying top and bottom by $\ell$








\(\ds \leadsto \ \ \)





\(\ds \ell \paren {2^t H_m - 1}\)

\(=\)







\(\ds 2 \paren {2^{t - 1} \ell + 2^{t - 2} \ell + 2^{t - 1} \paren {\ell / 3} + 2^{t - 3} \ell + 2^{t - 1} \paren {\ell / 5} + \ldots + 2^{t - 1} \paren {\ell / m} }\)





multiplying both sides by $2 \ell$




But the left hand side of that last equation is odd, while its right hand side is even.
As this is a contradiction, it follows that our assumption $(\text P)$ that such an $m$ exists is false.
That is, there are no harmonic numbers apart from $0$ and $1$ which are integers.
$\blacksquare$





