# 

Source: https://proofwiki.org/wiki/Bound_on_Norm_of_Power_of_Element_in_Normed_Algebra



Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {A, \norm {\, \cdot \,} }$ be a normed algebra over $\GF$. 
Let $x \in A$ and $n \in \N$. 

Then: 

$\norm {x^n} \le \norm x^n$


Proof
The proof proceeds by induction.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$\norm {x^n} \le \norm x^n$


Basis for the Induction
We have: 

$\norm {x^1} = \norm x = \norm x^1$
Thus $\map P 1$ is seen to hold.
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.
So this is the induction hypothesis:

$\norm {x^k} \le \norm x^k$
from which it is to be shown that:

$\norm {x^{k + 1} } \le \norm x^{k + 1}$


Induction Step
This is the induction step.
We have:














\(\ds \norm {x^{k + 1} }\)

\(=\)







\(\ds \norm {x^k x}\)




















\(\ds \)

\(\le\)







\(\ds \norm {x^k} \norm x\)





Definition of Algebra Norm














\(\ds \)

\(\le\)







\(\ds \norm x^k \norm x\)





using the induction hypothesis














\(\ds \)

\(=\)







\(\ds \norm x^{k + 1}\)









$\blacksquare$





