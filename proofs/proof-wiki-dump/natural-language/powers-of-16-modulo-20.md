# 

Source: https://proofwiki.org/wiki/Powers_of_16_Modulo_20



Theorem
Let $n \in \Z_{> 0}$ be a strictly positive integer.
Then:

$16^n \equiv 16 \pmod {20}$


Proof 1
Proof by induction:
For all $n \in \Z_{> 0}$, let $\map P n$ be the proposition:

$16^n \equiv 16 \pmod {20}$


Basis for the Induction
$\map P 1$ is the case:

$16^1 \equiv 16 \pmod {20}$
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$16^k \equiv 16 \pmod {20}$

from which it is to be shown that:

$16^{k + 1} \equiv 16 \pmod {20}$


Induction Step
This is the induction step:
We have:














\(\ds 16^{k + 1}\)

\(=\)







\(\ds 16^k \times 16\)




















\(\ds \)

\(\equiv\)







\(\ds 16 \times 16\)

\(\ds \pmod {20}\)



Induction Hypothesis














\(\ds \)

\(\equiv\)







\(\ds 256\)

\(\ds \pmod {20}\)


















\(\ds \)

\(\equiv\)







\(\ds 16\)

\(\ds \pmod {20}\)







So $\map P k \implies \map P {k + 1}$ and thus it follows by the Principle of Mathematical Induction that:

$\forall n \in \Z_{> 0}: 16^n \equiv 16 \pmod {20}$
$\blacksquare$


Proof 2













\(\ds 16\)

\(\equiv\)







\(\ds 16\)

\(\ds \pmod {20}\)












\(\ds \leadsto \ \ \)





\(\ds 16\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 4\)
















\(\, \ds \text {and} \, \)

\(\ds 16\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds 16^n\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 4\)
















\(\, \ds \text {and} \, \)

\(\ds 16^n\)

\(\equiv\)







\(\ds 1\)

\(\ds \pmod 5\)












\(\ds \leadsto \ \ \)





\(\ds 16^n\)

\(\equiv\)







\(\ds 16\)

\(\ds \pmod {20}\)



Chinese Remainder Theorem



$\blacksquare$





