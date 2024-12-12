# 

Source: https://proofwiki.org/wiki/Gaussian_Binomial_Theorem



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.














\(\ds \sum_{k \mathop = 0}^n \dbinom n k_q q^{k \paren {k - 1} / 2} x^k\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {1 + q^{k - 1} x}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + x} \paren {1 + q x} \paren {1 + q^2 x} \cdots \paren {1 + q^{n - 1} x}\)









where $\dbinom n k_q$ denotes a Gaussian binomial coefficient.


Real Numbers
Let $r \in \R$ be a real number.

$\ds \sum_{k \mathop \in \Z} \dbinom r k_q q^{k \paren {k - 1} / 2} x^k = \prod_{k \mathop \ge 0} \dfrac {1 + q^k x} {1 + q^{r + k} x}$
where:

$\dbinom r k_q$ denotes a Gaussian binomial coefficient
$x \in \R: \size x < 1$
$q \in \R: \size q < 1$.


Negation of Upper Index
Let $r \in \R$ be a real number.















\(\ds \prod_{k \mathop \ge 0} \dfrac {1 + q^{k + r + 1} x} {1 + q^k x}\)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \dbinom {-r - 1} k_q q^{k \left({k - 1}\right) / 2} \left({-q^{r + 1} x}\right)^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop \in \Z} \dbinom {k + r} x^k\)









where:

$\dbinom r k_q$ denotes a Gaussian binomial coefficient.
$x \in \R: \left\lvert{x}\right\rvert < 1$
$q \in \R: \left\lvert{q}\right\rvert < 1$.


Proof 1
The proof proceeds by induction.
For all $n \in \Z_{\ge 1}$, let $\map P n$ be the proposition:

$\ds \prod_{k \mathop = 1}^n \paren {1 + q^{k - 1} x} = \sum_{k \mathop = 0}^n \dbinom n k_q q^{k \paren {k - 1} / 2} x^k$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \prod_{k \mathop = 1}^1 \paren {1 + q^{k - 1} x}\)

\(=\)







\(\ds 1 + x\)




















\(\ds \sum_{k \mathop = 0}^1 \dbinom 1 k_q q^{k \paren {k - 1} / 2} x^k\)

\(=\)







\(\ds \dbinom 1 0_q q^{0 \paren {0 - 1} / 2} x^0 + \dbinom 1 1_q q^{1 \paren {1 - 1} / 2} x^1\)





Gaussian Binomial Coefficient of 1: for all other $k$, $\dbinom 1 k_q = 0$














\(\ds \)

\(=\)







\(\ds q^{0 \paren {-1} / 2} + q^{1 \times 0 / 2} x^1\)





Gaussian Binomial Coefficient of 1: $\dbinom 1 0_q = \dbinom 1 1_q = 0$














\(\ds \)

\(=\)







\(\ds q^0 + q^0 x\)




















\(\ds \)

\(=\)







\(\ds 1 + x\)










Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\ds \prod_{k \mathop = 1}^r \paren {1 + q^{k - 1} x} = \sum_{k \mathop = 0}^r \dbinom r k_q q^{k \paren {k - 1} / 2} x^k$

from which it is to be shown that:

$\ds \prod_{k \mathop = 1}^{r + 1} \paren {1 + q^{k - 1} x} = \sum_{k \mathop = 0}^{r + 1} \dbinom {r + 1} k_q q^{k \paren {k - 1} / 2} x^k$


Induction Step
This is the induction step:














\(\ds \prod_{k \mathop = 1}^{r + 1} \paren {1 + q^{k - 1} x}\)

\(=\)







\(\ds \prod_{k \mathop = 1}^r \paren {1 + q^{k - 1} x} \times \paren {1 + q^r x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^r \dbinom r k_q q^{k \paren {k - 1} / 2} x^k \times \paren {1 + q^r x}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^r \dbinom r k_q q^{k \paren {k - 1} / 2} x^k + q^r x \sum_{k \mathop = 0}^r \dbinom r k_q q^{k \paren {k - 1} / 2} x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^r \dbinom r k_q q^{k \paren {k - 1} / 2} x^k + \sum_{k \mathop = 0}^r \dbinom r k_q q^r q^{k \paren {k - 1} / 2} x^{k + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^r \dbinom r k_q q^{k \paren {k - 1} / 2} x^k + \sum_{k \mathop = 1}^{r + 1} \dbinom r {k - 1}_q q^r q^{\paren {k - 1} \paren {k - 2} / 2} x^k\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{r + 1} \paren {\dbinom r k_q q^{k \paren {k - 1} / 2} + \dbinom r {k - 1}_q q^r q^{- k + 1 + k \paren {k - 1} / 2} } x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{r + 1} \paren {\dbinom r k_q q^{k \paren {k - 1} / 2} + \dbinom r {k - 1}_q q^r q^{-\paren {k - 1} } q^{k \paren {k - 1} / 2} } x^k\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{r + 1} \paren {\dbinom r k_q + q^{r + 1 - k} \dbinom r {k - 1}_q} q^{k \paren {k - 1} / 2} x^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^{r + 1} \dbinom {r + 1} k_q q^{k \paren {k - 1} / 2} x^k\)





Addition Rule for Gaussian Binomial Coefficients



So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 1}: \ds \prod_{k \mathop = 1}^n \paren {1 + q^{k - 1} x} = \sum_{k \mathop = 0}^n \dbinom n k_q q^{k \paren {k - 1} / 2} x^k$
$\blacksquare$


Proof 2
Let:














\(\ds \map f x\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {1 + q^{k - 1} x}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + x} \paren {1 + q x} \paren {1 + q^2 x} \cdots \paren {1 + q^{n - 1} x}\)









Then:

$\map f {q x} = \paren {1 + q x} \paren {1 + q^2 x} \cdots \paren {1 + q^n x}$
Therefore:

$\paren {1 + x} \map f {q x} = \map f x \paren {1 + q^n x}$
If we write:

$\ds \map f x = \sum_{k \mathop = 0}^n Q_k x^k$
Then:

$\ds \paren {1 + x} \sum_{k \mathop = 0}^n Q_k \paren {q x}^k = \paren {1 + q^n x}\sum_{k \mathop = 0}^n Q_k x^k$
Equating coefficients gives us:














\(\ds Q_k q^k + Q_{k - 1} q^{k - 1}\)

\(=\)







\(\ds Q_k + q^n Q_{k - 1}\)














\(\ds \leadsto \ \ \)





\(\ds Q_k \paren {q^k - 1}\)

\(=\)







\(\ds Q_{k - 1} \paren {q^n - q^{k - 1} }\)














\(\ds \leadsto \ \ \)





\(\ds Q_k\)

\(=\)







\(\ds Q_{k - 1} \frac {\paren {q^n - q^{k - 1} } } {\paren {q^k - 1} }\)




















\(\ds \)

\(=\)







\(\ds Q_{k - 1} \frac {\paren {q^{n - k + 1} - 1 } } {\paren {q^k - 1} } q^{k - 1}\)









Therefore:














\(\ds Q_k\)

\(=\)







\(\ds \frac {\paren {q^{n - k + 1} - 1 } } {\paren {q^k - 1} } q^{k - 1} Q_{k - 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\paren {q^{n - k + 1} - 1 } } {\paren {q^k - 1} } q^{k - 1} } \paren {\frac {\paren {q^{n - \paren {k - 1} + 1} - 1 } } {\paren {q^{k - 1} - 1} } q^{\paren {k - 1} - 1} } Q_{k - 2}\)




















\(\ds \)

\(=\)







\(\ds \paren {\frac {\paren {q^{n - k + 1} - 1 } } {\paren {q^k - 1} } q^{k - 1} } \paren {\frac {\paren {q^{n - k + 2} - 1 } } {\paren {q^{k - 1} - 1} } q^{k - 2} } \cdots \paren {\frac {\paren {q^{n - 1 + 1} - 1 } } {\paren {q^{k - \paren {k - 1} } - 1} } q^{k - \paren {k - 1} } } Q_0\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {1 - q^n} \paren {1 - q^{n - 1} } \cdots \paren {1 - q^{n - k + 1} } } {\paren {1 - q^k} \paren {1 - q^{k - 1} } \cdots \paren {1 - q^1} } q^{\paren { 1 + 2 + \cdots + \paren {k - 1} } }\)





Product of Powers, $Q_0 = 1$














\(\ds \)

\(=\)







\(\ds \dbinom n k_q q^{k \paren {k - 1} / 2}\)





Definition of Gaussian Binomial Coefficient and Closed Form for Triangular Numbers




Therefore:

$\forall n \in \Z_{\ge 1}: \ds \prod_{k \mathop = 1}^n \paren {1 + q^{k - 1} x} = \sum_{k \mathop = 0}^n \dbinom n k_q q^{k \paren {k - 1} / 2} x^k$
$\blacksquare$


Also known as
The Gaussian Binomial Theorem is also known as:

the $q$-nomial theorem
the $q$-binomial theorem.


Source of Name
This entry was named for Carl Friedrich Gauss.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): $q$-binomial
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.6$: Binomial Coefficients: Exercise $58$




