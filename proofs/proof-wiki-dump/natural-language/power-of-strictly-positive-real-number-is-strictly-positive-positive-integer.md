# 

Source: https://proofwiki.org/wiki/Power_of_Strictly_Positive_Real_Number_is_Strictly_Positive/Positive_Integer



Theorem
Let $x \in \R_{>0}$ be a (strictly) positive real number.
Let $n \in \Z_{\ge 0}$ be a positive integer.

Then:

$x^n > 0$
where $x^n$ denotes the $n$th power of $x$.


Proof
Proof by Mathematical Induction:
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$\forall x \in \R_{>0}: x^n > 0$

$\map P 0$ is true, as this just says:














\(\ds x^0\)

\(=\)







\(\ds 1\)





Definition of Integer Power














\(\ds \)

\(>\)







\(\ds 0\)











Basis for the Induction
$\map P 1$ true, as this just says:














\(\ds x^1\)

\(=\)







\(\ds x\)





Definition of Integer Power














\(\ds \)

\(>\)







\(\ds 0\)









This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0 $, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall x \in \R_{>0}: x^k > 0$

Then we need to show:

$\forall x \in \R_{>0}: x^{k + 1} > 0$


Inductive Step
This is our induction step:















\(\ds x^k\)

\(>\)







\(\ds 0\)





Induction Hypothesis








\(\ds \leadsto \ \ \)





\(\ds x^{k + 1}\)

\(>\)







\(\ds 0\)





Multiply both sides by $x > 0$




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{\ge 0}: \forall x \in \R_{>0}: x^n > 0$
$\blacksquare$





