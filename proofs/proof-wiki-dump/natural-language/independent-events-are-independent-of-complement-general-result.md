# 

Source: https://proofwiki.org/wiki/Independent_Events_are_Independent_of_Complement/General_Result



Theorem
Let $A_1, A_2, \ldots, A_m$ be events in a probability space $\struct {\Omega, \Sigma, \Pr}$.
Then $A_1, A_2, \ldots, A_m$ are independent if and only if $\Omega \setminus A_1, \Omega \setminus A_2, \ldots, \Omega \setminus A_m$ are also independent.


Proof
Proof by induction:
For all $n \in \N: n \ge 2$, let $\map P n$ be the proposition:

$A_1, A_2, \ldots, A_n$ are independent if and only if $\Omega \setminus A_1, \Omega \setminus A_2, \ldots, \Omega \setminus A_n$ are independent.


Basis for the Induction
$\map P 2$ is the case:

$A_1$ and $A_2$ are independent if and only if $\Omega \setminus A_1$ and $\Omega \setminus A_2$ are independent.
This is proved in Independent Events are Independent of Complement: Corollary.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$A_1, A_2, \ldots, A_k$ are independent if and only if $\Omega \setminus A_1, \Omega \setminus A_2, \ldots, \Omega \setminus A_k$ are independent.

Then we need to show:

$A_1, A_2, \ldots, A_{k + 1}$ are independent if and only if $\Omega \setminus A_1, \Omega \setminus A_2, \ldots, \Omega \setminus A_{k + 1}$ are independent.


Induction Step
This is our induction step.
Suppose $A_1, A_2, \ldots, A_{k + 1}$ are independent.
Then:














\(\ds \map \Pr {\bigcap_{i \mathop = 1}^{k + 1} A_i}\)

\(=\)







\(\ds \map \Pr {\bigcap_{i \mathop = 1}^k A_i \cap A_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \prod_{i \mathop = 1}^k \map \Pr {A_i} \times \map \Pr {A_{k + 1} }\)





as all of the $A_1, A_2, \ldots, A_k, A_{k + 1}$ are independent














\(\ds \)

\(=\)







\(\ds \map \Pr {\bigcap_{i \mathop = 1}^k A_i} \times \map \Pr {A_{k + 1} }\)









So we see that $\ds \bigcap_{i \mathop = 1}^k A_i$ and $A_{k + 1}$ are independent.
So $\ds \bigcap_{i \mathop = 1}^k A_i$ and $\Omega \setminus A_{k + 1}$ are independent.

So, from the above results, we can see that $\Omega \setminus A_1, \Omega \setminus A_2, \ldots, \Omega \setminus A_{k + 1}$ are independent.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

The reverse implication follows directly.
Therefore:

$A_1, A_2, \ldots, A_n$ are independent if and only if $\Omega \setminus A_1, \Omega \setminus A_2, \ldots, \Omega \setminus A_n$ are independent.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.7$: Independent Events: Exercise $23$




