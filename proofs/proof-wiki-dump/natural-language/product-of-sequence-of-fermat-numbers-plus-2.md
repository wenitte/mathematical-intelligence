# 

Source: https://proofwiki.org/wiki/Product_of_Sequence_of_Fermat_Numbers_plus_2



Theorem
Let $F_n$ denote the $n$th Fermat number.

Then:










\(\ds \forall n \in \Z_{>0}: \, \)



\(\ds F_n\)

\(=\)







\(\ds \prod_{j \mathop = 0}^{n - 1} F_j + 2\)




















\(\ds \)

\(=\)







\(\ds F_0 F_1 \dotsm F_{n - 1} + 2\)











Corollary
Let $F_n$ denote the $n$th Fermat number.
Let $m \in \Z_{>0}$ be a (strictly) positive integer.

Then:

$F_n \divides F_{n + m} - 2$
where $\divides$ denotes divisibility.


Proof
The proof proceeds by induction.
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$F_n = \ds \prod_{j \mathop = 0}^{n - 1} F_j + 2$


Basis for the Induction
$\map P 1$ is the case:














\(\ds F_1\)

\(=\)







\(\ds 2^{\paren {2^1} } + 1\)





Definition of Fermat Number














\(\ds \)

\(=\)







\(\ds 5\)




















\(\ds \)

\(=\)







\(\ds 3 + 2\)




















\(\ds \)

\(=\)







\(\ds \paren {2^{\paren {2^0} } + 1} + 2\)




















\(\ds \)

\(=\)







\(\ds F_0 + 2\)





Definition of Fermat Number














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^{1 - 1} F_j + 2\)









Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$F_k = \ds \prod_{j \mathop = 0}^{k - 1} F_j + 2$

from which it is to be shown that:

$F_{k + 1} = \ds \prod_{j \mathop = 0}^k F_j + 2$


Induction Step
This is the induction step:














\(\ds F_{k + 1}\)

\(=\)







\(\ds 2^{\paren {2^{k + 1} } } + 1\)





Definition of Fermat Number














\(\ds \)

\(=\)







\(\ds 2^{\paren {2 \times 2^k} } + 1\)




















\(\ds \)

\(=\)







\(\ds 2^{\paren {2^k} } \times 2^{\paren {2^k} } + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {F_k - 1} \times \paren {F_k - 1} + 1\)





Definition of Fermat Number














\(\ds \)

\(=\)







\(\ds \paren {\paren {\prod_{j \mathop = 0}^{k - 1} F_j + 2} - 1} \paren {F_k - 1} + 1\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\prod_{j \mathop = 0}^{k - 1} F_j} F_k + F_k - \prod_{j \mathop = 0}^{k - 1} F_j - 1 + 1\)





multiplying out














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^k F_j + F_k - \paren {F_k - 2}\)





Induction Hypothesis, and simplifying














\(\ds \)

\(=\)







\(\ds \prod_{j \mathop = 0}^k F_j + 2\)





simplifying



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>0}: F_n = \ds \prod_{j \mathop = 0}^{n - 1} F_j + 2$
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $257$




