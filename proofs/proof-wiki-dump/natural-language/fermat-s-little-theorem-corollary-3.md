# 

Source: https://proofwiki.org/wiki/Fermat%27s_Little_Theorem/Corollary_3



Corollary to Fermat's Little Theorem
Let $p^k$ be a prime power for some prime number $p$ and $k \in \Z_{>0}$.
Then:

$\forall n \in \Z_{>0}: n^{p^k} \equiv n \pmod p$


Proof
The proof proceeds by induction.
For all $k \in \Z_{\ge 1}$, let $\map P k$ be the proposition:

$\forall n \in \Z_{>0}: n^{p^k} \equiv n \pmod p$


Basis for the Induction
$\map P 1$ is the case:

$\forall n \in \Z_{>0}: n^p \equiv n \pmod p$
which follows from Fermat's Little Theorem: Corollary $1$.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P {k - 1}$ is true, where $k \ge 2$, then it logically follows that $\map P k$ is true.
So this is the induction hypothesis:

$\forall n \in \Z_{>0}: n^{p^{k - 1} } \equiv n \pmod p$
from which it is to be shown that:

$\forall n \in \Z_{>0}: n^{p^k} \equiv n \pmod p$


Induction Step
This is the induction step:
For any $n \in \Z_{>0}$ then:














\(\ds n^{p^k}\)

\(=\)







\(\ds \paren {n^{p^{k - 1} } }^p\)




















\(\ds \)

\(\equiv\)







\(\ds n^{p^{k - 1} } \pmod p\)





Fermat's Little Theorem: Corollary $1$














\(\ds \)

\(\equiv\)







\(\ds n \pmod p\)





Induction Hypothesis



$\blacksquare$





