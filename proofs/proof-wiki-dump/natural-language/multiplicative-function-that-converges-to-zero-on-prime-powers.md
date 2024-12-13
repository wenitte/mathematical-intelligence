# 

Source: https://proofwiki.org/wiki/Multiplicative_Function_that_Converges_to_Zero_on_Prime_Powers

Theorem
Let $f$ be a multiplicative function such that:

$\ds \lim_{p^k \mathop \to \infty} \map f {p^k} = 0$
where $p^k$ runs though all prime powers.
Then:

$\ds \lim_{n \mathop \to \infty} \map f n = 0$
where $n$ runs through the integers.


Proof
By hypothesis, there exist only finitely many prime powers $p^k$ such that $\size {\map f {p^k} } > 1$.
Let $\ds A = \prod_{\size {\map f {p^k} } \mathop > 1} \size {\map f {p^k} }$.
Thus $A \ge 1$.
Let $0 < \dfrac \epsilon A$. 
There exist only finitely many prime powers $p^k$ such that $\size {\map f {p^k} } > \dfrac \epsilon A$.
Therefore there are only finitely many integers $n$ such that:

$\size {\map f {p^k} } > \dfrac \epsilon A$
for every prime power $p^k$ that divides $n$.
Therefore if $n$ is sufficiently large there exists a prime power $p^k$ that divides $n$ such that:

$\size {\map f {p^k} } < \dfrac \epsilon A$
Therefore $n$ can be written as:

$\ds n = \prod_{i \mathop = 1}^ r p_i^{k_i} \prod_{i \mathop = r + 1}^{r + s} p_i^{k_i} \prod_{i \mathop = r + s + 1}^{r + s + t} p_i^{k_i}$
where $t \ge 1$ and:














\(\ds 1\)

\(\le\)

\(\, \ds \size {\map f {p_i^{k_i} } } \, \)





\(\ds \)





for $i = 1, \ldots, r$














\(\ds \frac \epsilon A\)

\(\le\)

\(\, \ds \size {\map f {p_i^{k_i} } } \, \)

\(\, \ds < \, \)



\(\ds 1\)





for $i = r + 1, \ldots, r + s$














\(\ds \)

\(\)

\(\, \ds \size {\map f {p_i^{k_i} } } \, \)

\(\, \ds < \, \)



\(\ds \frac \epsilon A\)





for $i = r + s + 1, \ldots, r + s + t$




Therefore:














\(\ds \size {\map f n}\)

\(=\)







\(\ds \prod_{i \mathop = 1}^r \map f {p_i^{k_i} } \prod_{i \mathop = r + 1}^{r + s} \map f {p_i^{k_i} } \prod_{i \mathop = r + s + 1}^{r + s + t} \map f {p_i^{k_i} }\)





because $f$ is multiplicative














\(\ds \)

\(<\)







\(\ds A \paren {\frac \epsilon A}^t\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)





because $t \ge 1$



This shows that $\map f n$ can be made arbitrarily small for sufficiently large $n$.
$\blacksquare$





