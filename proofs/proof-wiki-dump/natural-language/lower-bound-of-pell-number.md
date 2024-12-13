# 

Source: https://proofwiki.org/wiki/Lower_Bound_of_Pell_Number



Theorem
For all $n \in \N$:

$P_n \ge 2 \paren {1 + \sqrt 2}^{n - 2}$
where:

$P_n$ is the $n$th Pell number


Proof
The proof proceeds by induction.
For all $n \in \N$, let $\map P n$ be the proposition:

$P_n \ge 2 \paren {1 + \sqrt 2}^{n - 2}$


Basis for the Induction
$\map P 1$ is true, as this just says:

$P_1 = 1 = 2 \paren 2^{-1} \ge 2 \paren {1 + \sqrt 2}^{-1}$
It is also necessary to demonstrate $\map P 2$ is true:

$P_2 = 2 \ge 2 \paren {1 + \sqrt 2}^0$
This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true for all $1 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$P_j \ge 2 \paren {1 + \sqrt 2}^{j - 2}$ for $1 \le j \le k$

from which it is to be shown that:

$P_{k + 1} \ge 2 \paren {1 + \sqrt 2}^{k - 1}$


Induction Step
This is the induction step:
As we have already shown $\map P 1$ and $\map P 2$, we just need to prove the result for $k \ge 2$.














\(\ds P_{k + 1}\)

\(=\)







\(\ds P_{k - 1} + 2 P_k\)





Definition of Pell Numbers














\(\ds \)

\(\ge\)







\(\ds 2 \paren {1 + \sqrt 2}^{k - 3} + 4 \paren {1 + \sqrt 2}^{k - 2}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds 2 \paren {1 + \sqrt 2}^{k - 3} \paren {1 + 2 \paren {1 + \sqrt 2} }\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {1 + \sqrt 2}^{k - 3} \paren {1 + 2 \sqrt 2 + \paren {\sqrt 2}^2}\)




















\(\ds \)

\(=\)







\(\ds 2 \paren {1 + \sqrt 2}^{k - 3} \paren {1 + \sqrt 2}^2\)





Square of Sum














\(\ds \)

\(=\)







\(\ds 2 \paren {1 + \sqrt 2}^{k - 1}\)









So $\map P 1 \land \map P 2 \land \dots \land \map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: P_n \ge 2 \paren {1 + \sqrt 2}^{n - 2}$
$\blacksquare$





