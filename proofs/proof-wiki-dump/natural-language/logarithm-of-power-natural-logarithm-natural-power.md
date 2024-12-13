# 

Source: https://proofwiki.org/wiki/Logarithm_of_Power/Natural_Logarithm/Natural_Power



Theorem
Let $x \in \R$ be a strictly positive real number.
Let $n \in \Z_{\ge 0}$ be any natural number.
Let $\ln x$ be the natural logarithm of $x$.

Then:

$\map \ln {x^n} = n \ln x$


Proof
Proof by Mathematical Induction:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\forall x \in \R_{>0}: \map \ln {x^n} = n \ln x$


Basis for the Induction
$\map P 0$ is the case:

$\forall x \in \R_{>0}: \map \ln 1 = 0$
from Logarithm of 1 is 0.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall x \in \R_{>0}: \map \ln {x^k} = k \ln x$

Then we need to show:

$\forall x \in \R_{>0}: \map \ln {x^{k + 1} } = \paren {k + 1} \ln x$


Induction Step
This is our induction step:
Fix $x \in \R_{>0}$.
Then:














\(\ds \map \ln {x^{k + 1} }\)

\(=\)







\(\ds \map \ln {x^k x}\)




















\(\ds \)

\(=\)







\(\ds \map \ln {x^k} + \ln x\)





Sum of Logarithms/Natural Logarithm














\(\ds \)

\(=\)







\(\ds k \ln x + \ln x\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {k + 1} \ln x\)









So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
Therefore:

$\forall n \in \Z_{\ge 0}: \forall x \in \R_{>0}: \map \ln {x^n} = n \ln x$
$\blacksquare$





