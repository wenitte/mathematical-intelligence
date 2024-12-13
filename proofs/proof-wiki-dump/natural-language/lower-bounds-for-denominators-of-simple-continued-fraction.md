# 

Source: https://proofwiki.org/wiki/Lower_Bounds_for_Denominators_of_Simple_Continued_Fraction


This page has been identified as a candidate for refactoring of basic complexity.In particular: proof is for the first statement onlyUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $n \in \N \cup \{\infty\}$ be an extended natural number.
Let $\left[{a_0, a_1, a_2, \ldots}\right]$ be a simple continued fraction in $\R$ of length $N$.
Let $q_0, q_1, q_2, \ldots$ be its denominators.


Denominator is larger than index
For all $k > 4 : q_k > k$.


Denominator is at least Fibonacci number
Let $F_k$ denote the $k$th Fibonacci number.

For all $k \geq 0$, $q_k \geq F_{k+1}$.


Proof
By Denominators of Simple Continued Fraction are Strictly Increasing, with the possible exception of $1 = q_0 = q_1$, the sequence $\left \langle {q_n}\right \rangle$ is strictly increasing.
Now, since $q_2 > q_1 \ge q_0 = 1$, we have $q_2 \geq 2$.
Then $q_{k+1} \ge q_k + q_{k-1}$ shows that from $q_3$ onwards, the $q_k$s increase in steps of at least $2$.
As $q_3 \ge 3$, it follows that $q_4 \ge 5$.
The result follows.
$\blacksquare$





