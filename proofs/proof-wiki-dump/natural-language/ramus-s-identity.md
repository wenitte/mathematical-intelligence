# 

Source: https://proofwiki.org/wiki/Ramus%27s_Identity



Theorem
Let $k, m, n \in \Z_{\ge 0}$ be positive integers such that $0 \le k < m$.

Then:














\(\ds \sum_{j \mathop \ge 0} \binom n {j m + k}\)

\(=\)







\(\ds \dbinom n k + \dbinom n {m + k} +  \dbinom n {2 m + k} + \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac 1 m \sum_{0 \mathop \le j \mathop < m} \paren {2 \cos \dfrac {j \pi} m}^n \cos \dfrac {j \paren {n - 2 k} \pi} m\)











Proof
Let $\omega := e^{2 \pi i / m}$.
Then by the Binomial Theorem:

$(1): \quad \ds \sum_{0 \mathop \le j \mathop < m} \paren {1 + \omega^j}^n \omega^{-j k} = \sum_t \sum_{0 \mathop \le j \mathop < m} \binom n t \omega^{j \paren {t - k} }$

By Sum of Geometric Sequence:

$\ds \sum_{0 \mathop \ge j \mathop < m} \omega^{j \paren {t - k} } = \begin{cases} \dfrac {1 - \omega^{m \paren {t - k} } } {1 - \omega^{t - k} } & : t - k \not \equiv 0 \pmod m \\ m & : t \equiv k \pmod m \end{cases}$

We have that:

$\omega = \exp \dfrac {2 \pi i} m \implies \omega^m = 1$
and so:














\(\ds \sum_{0 \mathop \le j \mathop < m} \omega^{r j}\)

\(=\)







\(\ds \frac {1 - \omega^{r m} } {1 - \omega^r}\)





Sum of Geometric Sequence














\(\ds \)

\(=\)







\(\ds m \sqbrk {r \equiv 0 \pmod m}\)





where $\sqbrk {\, \cdots \,}$ is Iverson's convention




Thus the summation on the right hand side of $(1)$ is:

$m \ds \sum_{t \bmod m \mathop = k} \binom n t$

The summation on the left hand side of $(1)$ is:














\(\ds \sum_{0 \mathop \le j \mathop < m} \paren {1 + \omega^j}^n \omega^{-j k}\)

\(=\)







\(\ds \sum_{0 \mathop \le j \mathop < m} \paren {\omega^{-j / 2} + \omega^{j / 2} }^n \omega^{j \paren {n / 2} - k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{0 \mathop \le j \mathop < m} \paren {2 \cos \dfrac {j \pi} m}^n \omega^{j \paren {n / 2} - k}\)









Because the right hand side is wholly real, so must the left hand side be.
So, taking the real parts of the left hand side and equating it to the right hand side reveals the result.
$\blacksquare$


Examples
Example: $k = 1, m = 3$













\(\ds \sum_{j \mathop \ge 0} \binom n {3 j + 1}\)

\(=\)







\(\ds \binom n 1 + \binom n 4 + \binom n 7 + \cdots\)




















\(\ds \)

\(=\)







\(\ds \frac 1 3 \paren {2^n + 2 \cos \frac {\paren {n - 2} \pi} 3}\)











Source of Name
This entry was named for Christian Ramus.


Sources
1834: C. Ramus: Solution Générale d'un Problème d'Analyse Combinatoire (J. reine angew. Math. Vol. 11: pp. 353 – 355)
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $38$




