# 

Source: https://proofwiki.org/wiki/Integer_whose_Digits_when_Grouped_in_3s_add_to_Multiple_of_999_is_Divisible_by_999



Theorem
Let $n$ be an integer which has at least $3$ digits when expressed in decimal notation.
Let the digits of $n$ be divided into groups of $3$, counting from the right, and those groups added.

Then the result is equal to a multiple of $999$ if and only if $n$ is divisible by $999$.


Proof

This page has been identified as a candidate for refactoring of medium complexity.In particular: The below sentence should be on the mistake page. Need to go back to the source work to clarify what we have.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
The mistake is either and conversely or equal to $999$, since $999 \, 999$ is an easy counterexample.
Here we will show that the result is equal to a multiple of $999$ if and only if $n$ is divisible by $999$.

Write $n = \ds \sum_{i \mathop = 0}^k a_i 10^{3 i}$, where $0 \le a_i < 1000$.
This divides the digits of $n$ into groups of $3$.
Then the statement is equivalent to:

$999 \divides n \iff 999 \divides \ds \sum_{i \mathop = 0}^k a_i$
This statement is true since:














\(\ds n\)

\(=\)







\(\ds \sum_{i \mathop = 0}^k a_i 10^{3 i}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^k a_i 1000^i\)




















\(\ds \)

\(\equiv\)







\(\ds \sum_{i \mathop = 0}^k a_i 1^i\)

\(\ds \pmod {999}\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds \sum_{i \mathop = 0}^k a_i\)

\(\ds \pmod {999}\)







$\blacksquare$


Examples













\(\ds 4 \times 999\)

\(=\)







\(\ds 3996\)














\(\ds \leadsto \ \ \)





\(\ds 3 + 996\)

\(=\)







\(\ds 999\)






















\(\ds 15 \times 999\)

\(=\)







\(\ds 14 \, 985\)














\(\ds \leadsto \ \ \)





\(\ds 14 + 985\)

\(=\)







\(\ds 999\)






















\(\ds 47 \times 999\)

\(=\)







\(\ds 46 \, 953\)














\(\ds \leadsto \ \ \)





\(\ds 46 + 953\)

\(=\)







\(\ds 999\)






















\(\ds 57 \times 999\)

\(=\)







\(\ds 56 \, 943\)














\(\ds \leadsto \ \ \)





\(\ds 56 + 943\)

\(=\)







\(\ds 999\)











Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $999$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $142,857$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $999$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $142,857$




