# 

Source: https://proofwiki.org/wiki/User:Leigh.Samphier/Common/Induction_Example



Proof
Proof by induction:
For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$\ds n^2 = \sum_{j \mathop = 1}^n \paren {2 j - 1}$


Basis for the Induction
$\map P 1$ is true, as this just says $1^2 = 1$.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds k^2 = \sum_{j \mathop = 1}^k \paren {2 j - 1}$

Then we need to show:

$\ds \paren {k + 1}^2 = \sum_{j \mathop = 1}^{k + 1} \paren {2 j - 1}$


Induction Step
This is our induction step:














\(\ds \paren {k + 1}^2\)

\(=\)







\(\ds k^2 + 2 k + 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^k \paren {2 j - 1} + 2 k + 1\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^k \paren {2 j - 1} + 2 \paren {k + 1} - 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 1}^{k + 1} \paren {2 j - 1}\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N: n^2 = \sum_{j \mathop = 1}^n \paren {2 j - 1}$
$\blacksquare$





