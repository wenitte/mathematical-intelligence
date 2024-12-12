# 

Source: https://proofwiki.org/wiki/Gaussian_Binomial_Theorem/Proof_1



Theorem
Let $n \in \Z_{>0}$ be a (strictly) positive integer.














\(\ds \sum_{k \mathop = 0}^n \dbinom n k_q q^{k \paren {k - 1} / 2} x^k\)

\(=\)







\(\ds \prod_{k \mathop = 1}^n \paren {1 + q^{k - 1} x}\)




















\(\ds \)

\(=\)







\(\ds \paren {1 + x} \paren {1 + q x} \paren {1 + q^2 x} \cdots \paren {1 + q^{n - 1} x}\)









where $\dbinom n k_q$ denotes a Gaussian binomial coefficient.


Proof
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





