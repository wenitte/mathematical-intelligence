# 

Source: https://proofwiki.org/wiki/Divisibility_of_Numerator_of_Sum_of_Sequence_of_Reciprocals/Lemma



Lemma for Divisibility of Numerator of Sum of Sequence of Reciprocals
Let $n \in \Z_{>0}$ be a (strictly) positive integer.

Then:

$\ds \sum_{k \mathop = 1}^n \dfrac {\paren {-1}^{k - 1} } k \dbinom n k = \sum_{k \mathop = 1}^n \dfrac 1 k$
where $\dbinom n k$ denotes a binomial coefficient.


Proof
The proof proceeds by induction.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\ds \sum_{k \mathop = 1}^n \dfrac {\paren {-1}^{k - 1} } k \dbinom n k = \sum_{k \mathop = 1}^n \dfrac 1 k$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \sum_{k \mathop = 1}^1 \dfrac {\paren {-1}^{k - 1} } k \dbinom 1 k\)

\(=\)







\(\ds \dfrac {\paren {-1}^0} 1 \dbinom 1 1\)




















\(\ds \)

\(=\)







\(\ds 1\)





Binomial Coefficient with One or Binomial Coefficient with Self














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^1 \dfrac 1 k\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P r$ is true, where $r \ge 1$, then it logically follows that $\map P {r + 1}$ is true.

So this is the induction hypothesis:

$\ds \sum_{k \mathop = 1}^r \dfrac {\paren {-1}^{k - 1} } k \dbinom r k = \sum_{k \mathop = 1}^r \dfrac 1 k$

from which it is to be shown that:

$\ds \sum_{k \mathop = 1}^{r + 1} \dfrac {\paren {-1}^{k - 1} } k \dbinom {r + 1} k = \sum_{k \mathop = 1}^{r + 1} \dfrac 1 k$


Induction Step
This is the induction step:














\(\ds \sum_{k \mathop = 1}^{r + 1} \dfrac {\paren {-1}^{k - 1} } k \dbinom {r + 1} k\)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac {\paren {-1}^{k - 1} } k \dbinom {r + 1} k + \dfrac {\paren {-1}^r} {r + 1} \dbinom {r + 1} {r + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac {\paren {-1}^{k - 1} } k \dbinom {r + 1} k + \dfrac {\paren {-1}^r} {r + 1}\)





Binomial Coefficient with Self














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac {\paren {-1}^{k - 1} } k \paren {\dbinom r k + \dbinom r {k - 1} } + \dfrac {\paren {-1}^r} {r + 1}\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac {\paren {-1}^{k - 1} } k \dbinom r k + \sum_{k \mathop = 1}^r \dfrac {\paren {-1}^{k - 1} } k \dbinom r {k - 1} + \dfrac {\paren {-1}^r} {r + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac 1 k + \sum_{k \mathop = 1}^r \dfrac {\paren {-1}^{k - 1} } k \dbinom r {k - 1} + \dfrac {\paren {-1}^r} {r + 1}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac 1 k + \sum_{k \mathop = 0}^{r - 1} \dfrac {\paren {-1}^k} {k + 1} \dbinom r k + \dfrac {\paren {-1}^r} {r + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac 1 k + \sum_{k \mathop = 0}^r \dfrac {\paren {-1}^k} {k + 1} \dbinom r k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac 1 k + \sum_{k \mathop = 0}^r \dfrac {\paren {-1}^k} {k + 1} \paren {\dfrac {k + 1} {r + 1} \dbinom {r + 1} {k + 1} }\)





Factors of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac 1 k + \dfrac 1 {r + 1} \sum_{k \mathop = 0}^r \paren {-1}^k \dbinom {r + 1} {k + 1}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac 1 k + \dfrac 1 {r + 1} \sum_{k \mathop = 1}^{r + 1} \paren {-1}^{k - 1} \dbinom {r + 1} k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac 1 k + \dfrac 1 {r + 1} \paren {-\sum_{k \mathop = 0}^{r + 1} \paren {-1}^k \dbinom {r + 1} k + \dbinom {r + 1} 0}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^r \dfrac 1 k + \dfrac 1 {r + 1}\)





Alternating Sum and Difference of Binomial Coefficients for Given n, Binomial Coefficient with Zero














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^{r + 1} \dfrac 1 k\)










So $\map P r \implies \map P {r + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \Z_{>0}: \sum_{k \mathop = 1}^n \dfrac {\paren {-1}^{k - 1} } k \dbinom n k = \sum_{k \mathop = 1}^n \dfrac 1 k$
$\blacksquare$


Sources
1862: Joseph Wolstenholme: On certain properties of prime numbers (Quart. J. Pure Appl. Math. Vol. 5: pp. 35 – 39)




