# 

Source: https://proofwiki.org/wiki/Complex_Roots_of_Unity_occur_in_Conjugate_Pairs

Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.
Let $U_n$ denote the complex $n$th roots of unity:

$U_n = \set {z \in \C: z^n = 1}$
Let $\alpha \in U_n$ be the first complex $n$th root of unity.

Then:

$\forall k \in \Z_{>0}, k < \dfrac n 2: \overline {\alpha^k} = \alpha^{n - k}$
That is, each of the complex $n$th roots of unity occur in conjugate pairs:

$\tuple {\alpha, \alpha^{n - 1} }; \tuple {\alpha^2, \alpha^{n - 2} }; \ldots; \tuple {\alpha^s, \alpha^{n - s} }$
where:

$s = \dfrac {n - 1} 2$ for odd $n$
$s = \dfrac {n - 2} 2$ for even $n$.


Proof
Consider the polynomial equation:

$(1): \quad z^n - 1 = 0$
The complex $n$th roots of unity are:

$1, \alpha, \alpha^2, \ldots, \alpha^{n - 1}$
From Complex Roots of Polynomial with Real Coefficients occur in Conjugate Pairs, the roots of $(1)$ occur in conjugate pairs.

Let $k \in \Z$ such that $1 \le k \le n$.
Then:














\(\ds \alpha^{n - k}\)

\(=\)







\(\ds \cos \frac {2 \paren {n - k} \pi} n + i \sin \frac {2 \paren {n - k} \pi} n\)





Definition of Complex Roots of Unity














\(\ds \)

\(=\)







\(\ds \cos \paren {\frac {2 n \pi} n  - \frac {2 k \pi} n} + i \sin \paren {\frac {2 n \pi} n  - \frac {2 k \pi} n}\)




















\(\ds \)

\(=\)







\(\ds \cos \paren {2 \pi  - \frac {2 k \pi} n} + i \sin \paren {2 \pi  - \frac {2 k \pi} n}\)




















\(\ds \)

\(=\)







\(\ds \cos \paren {-\frac {2 k \pi} n} + i \sin \paren {-\frac {2 k \pi} n}\)





Cosine of Angle plus Full Angle, Sine of Angle plus Full Angle














\(\ds \)

\(=\)







\(\ds \cos \paren {\frac {2 k \pi} n} - i \sin \paren {\frac {2 k \pi} n}\)





Cosine Function is Even, Sine Function is Odd














\(\ds \)

\(=\)







\(\ds \overline {\alpha^k}\)





Definition of Complex Conjugate



That is, the complex $n$th root of unity which is the other half of the conjugate pair with $\alpha^k$ is $\alpha^{n - k}$.

When $n$ is odd, these pair up as:

$\tuple {\alpha, \alpha^{n - 1} }; \tuple {\alpha^2, \alpha^{n - 2} }; \ldots; \tuple {\alpha^s, \alpha^{n - s} }$
where $s$ is the largest integer less than $\dfrac n 2$; that last pair can be expressed:

$\tuple {\alpha^s, \alpha^{s + 1} }$
When $n$ is even:

$\alpha^s = \alpha^{n - s}$
when $s = \dfrac n 2$.
Indeed:














\(\ds \alpha^{n / 2}\)

\(=\)







\(\ds \cos \frac {2 \paren {n / 2} \pi} n + i \sin \frac {2 \paren {n / 2} \pi} n\)





Definition of Complex Roots of Unity














\(\ds \)

\(=\)







\(\ds \cos \paren {\frac {n \pi} n} + i \sin \paren {\frac {n \pi} n}\)




















\(\ds \)

\(=\)







\(\ds \cos \pi + i \sin \pi\)




















\(\ds \)

\(=\)







\(\ds -1\)





Cosine of Straight Angle, Sine of Straight Angle



and so is wholly real.
Thus from Complex Number equals Conjugate iff Wholly Real:

$\alpha^{n / 2} = \alpha^{n - n / 2}$

Hence the complex $n$th roots of unity pair up as:

$\tuple {\alpha, \alpha^{n - 1} }; \tuple {\alpha^2, \alpha^{n - 2} }; \ldots; \tuple {\alpha^s, \alpha^{n - s} }$
where $s$ is the largest integer less than $\dfrac n 2$; that last pair can be expressed:

$\tuple {\alpha^s, \alpha^{s + 2} }$

The result follows.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 3$. Roots of Unity: $(3.12)$.




