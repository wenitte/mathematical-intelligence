# 

Source: https://proofwiki.org/wiki/Bertrand-Chebyshev_Theorem/Lemma_2



Lemma for Bertrand-Chebyshev Theorem
For all $m \in \N$:

$\ds \prod_{p \mathop \le m} p \le 2^{2 m}$
where the continued product is taken over all prime numbers $p \le m$.


Proof
The proof proceeds by strong induction.
For all $m \in \Z_{\ge 0}$, let $\map P m$ be the proposition:

$\ds \prod_{p \mathop \le m} p \le 2^{2 m}$

$\map P 0$ and $\map P 1$ are the vacuous cases:














\(\ds \prod_{p \mathop \le 0} p\)

\(=\)







\(\ds 1\)





Definition of Vacuous Product














\(\ds \)

\(\le\)







\(\ds 2^{2 \times 0}\)
























\(\ds \prod_{p \mathop \le 1} p\)

\(=\)







\(\ds 1\)





Definition of Vacuous Product














\(\ds \)

\(\le\)







\(\ds 2^{2 \times 1}\)




















\(\ds \)

\(=\)







\(\ds 4\)











Basis for the Induction
$\map P 2$ is the case:














\(\ds \prod_{p \mathop \le 2} p\)

\(=\)







\(\ds 2\)




















\(\ds \)

\(\le\)







\(\ds 2^{2 \times 2}\)




















\(\ds \)

\(=\)







\(\ds 16\)









Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P j$ is true, for all $j$ such that $0 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

This is the induction hypothesis:

$\ds \prod_{p \mathop \le k} p \le 2^{2 k}$

from which it is to be shown that:

$\ds \prod_{p \mathop \le k + 1} p \le 2^{2 \paren {k + 1} }$


Induction Step
This is the induction step:

Let $m > 2$ be even.
Then:














\(\ds \prod_{p \mathop \le m} p\)

\(=\)







\(\ds \prod_{p \mathop \le m - 1} p\)




















\(\ds \)

\(\le\)







\(\ds 2^{2 \paren {m - 1} }\)





by the induction hypothesis














\(\ds \)

\(<\)







\(\ds 2^{2 m}\)









and $\map P k$ seen to hold.
$\Box$

Let $m = 2 k + 1$ be odd.
By Sum of Binomial Coefficients over Lower Index:

$\ds \sum_{r \mathop = 0}^{2 k + 1} \binom {2 k + 1} r = 2^{2 k + 1}$
Therefore:














\(\ds \binom {2 k + 1} k + \binom {2 k + 1} {k + 1}\)

\(\le\)







\(\ds 2^{2 k + 1}\)














\(\ds \leadsto \ \ \)





\(\ds \binom {2 k + 1} k + \binom {2 k + 1} k\)

\(\le\)







\(\ds 2^{2 k + 1}\)





Symmetry Rule for Binomial Coefficients: $\dbinom {2 k + 1} k = \dbinom {2 k + 1} {k + 1}$




\(\text {(1)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \binom {2 k + 1} k\)

\(\le\)







\(\ds 2^{2 k}\)










Let $p$ be a prime number such that:

$k + 2 \le p \le 2 k + 1$
Consider:

$q = \dbinom {2 k + 1} k = \dfrac {\paren {2 k + 1}!} {k! \paren {k + 1}!}$
by definition of binomial coefficient.
We note that $p$ is greater than all of the divisors of the denominator of $q$.
Hence $p$ is a divisor of the numerator.
Hence:

$p \divides q$

Thus:














\(\ds \prod_{p \mathop \le m} p\)

\(=\)







\(\ds \paren {\prod_{p \mathop \le k + 1} p} \paren {\prod_{k + 2 \mathop \le p \mathop \le 2 k + 1} p}\)




















\(\ds \)

\(\le\)







\(\ds \binom {2 k + 1} k \prod_{p \mathop \le k + 1} p\)




















\(\ds \)

\(\le\)







\(\ds 2^{2 k} \prod_{p \mathop \le k + 1} p\)





by $(1)$














\(\ds \)

\(\le\)







\(\ds 2^{2 k} 2^{2 \paren {k + 1} }\)





by the induction hypothesis














\(\ds \)

\(=\)







\(\ds 2^{2 \paren {2 k + 1} }\)




















\(\ds \)

\(=\)







\(\ds 2^{2 m}\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall m \in \N: \ds \prod_{p \mathop \le m} p \le 2^{2 m}$
$\blacksquare$





