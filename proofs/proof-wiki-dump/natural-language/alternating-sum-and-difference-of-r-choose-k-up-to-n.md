# 

Source: https://proofwiki.org/wiki/Alternating_Sum_and_Difference_of_r_Choose_k_up_to_n



Theorem
Let $r \in \R, n \in \Z$.
Then:

$\ds \sum_{k \mathop \le n} \paren {-1}^k \binom r k = \paren {-1}^n \binom {r - 1} n$


Proof 1













\(\ds \sum_{k \mathop \le n} \paren {-1}^k \binom r k\)

\(=\)







\(\ds \sum_{k \mathop \le n} \binom {k - r - 1} k\)





Negated Upper Index of Binomial Coefficient














\(\ds \)

\(=\)







\(\ds \binom {-r + n} n\)





Sum of r+k Choose k up to n














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \binom {r - 1} n\)





Negated Upper Index of Binomial Coefficient



$\blacksquare$


Proof 2
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \sum_{k \mathop \le n} \paren {-1}^k \binom r k = \paren {-1}^n \binom {r - 1} n$

$\map P 0$ is the case:














\(\ds \sum_{k \mathop \le 0} \paren {-1}^k \binom r k\)

\(=\)







\(\ds \paren {-1}^0 \binom r 0\)




















\(\ds \)

\(=\)







\(\ds 1\)





Binomial Coefficient with Zero














\(\ds \)

\(=\)







\(\ds \paren {-1}^n \binom {r - 1} 0\)





Binomial Coefficient with Zero



Thus $\map P 0$ is seen to hold.


Basis for the Induction
$\map P 1$ is the case:














\(\ds \sum_{k \mathop \le 1} \paren {-1}^k \binom r k\)

\(=\)







\(\ds \paren {-1}^0 \binom r 0 + \paren {-1}^1 \binom r 1\)




















\(\ds \)

\(=\)







\(\ds 1 - r\)





Binomial Coefficient with Zero, Binomial Coefficient with One














\(\ds \)

\(=\)







\(\ds \paren {-1}^1 \binom {r - 1} 1\)





Binomial Coefficient with One



Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P m$ is true, where $m \ge 1$, then it logically follows that $\map P {m + 1}$ is true.

So this is the induction hypothesis:

$\ds \sum_{k \mathop \le m} \paren {-1}^k \binom r k = \paren {-1}^m \binom {r - 1} m$

from which it is to be shown that:

$\ds \sum_{k \mathop \le m + 1} \paren {-1}^k \binom r k = \paren {-1}^{m + 1} \binom {r - 1} {m + 1}$


Induction Step
This is the induction step:














\(\ds \sum_{k \mathop \le m + 1} \paren {-1}^k \binom r k\)

\(=\)







\(\ds \sum_{k \mathop \le m} \paren {-1}^k \binom r k + \paren {-1}^{m + 1} \binom r {m + 1}\)





Definition of Summation














\(\ds \)

\(=\)







\(\ds \paren {-1}^m \binom {r - 1} m + \paren {-1}^{m + 1} \binom r {m + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{m + 1} \paren {\binom r {m + 1} - \binom {r - 1} m }\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{m + 1} \binom {r - 1} {m + 1}\)





Pascal's Rule



So $\map P m \implies \map P {m + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: \ds \sum_{k \mathop \le n} \paren {-1}^k \binom r k = \paren {-1}^n \binom {r - 1} n$




