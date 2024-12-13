# 

Source: https://proofwiki.org/wiki/Probability_of_no_2_People_out_of_53_Sharing_the_Same_Birthday

Theorem
Let there be $53$ people in a room.
The probability that no $2$ of them have the same birthday is approximately $\dfrac 1 {53}$.


Proof

This page has been identified as a candidate for refactoring of medium complexity.In particular: The analyis has already been performed in Birthday Paradox. Extract that general case and make it a theorem, and then introduce Birthday Paradox and this page as examples.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Let there be $n$ people in the room.
Let $\map p n$ be the probability that no two people in the room have the same birthday.
For simplicity, let us ignore leap years and assume there are $365$ days in the year.

Let the birthday of person $1$ be established.
The probability that person $2$ shares person $1$'s birthday is $\dfrac 1 {365}$.
Thus, the probability that person $2$ does not share person $1$'s birthday is $\dfrac {364} {365}$.
Similarly, the probability that person $3$ does not share the birthday of either person $1$ or person $2$ is $\dfrac {363} {365}$.
And further, the probability that person $n$ does not share the birthday of any of the people indexed $1$ to $n - 1$ is $\dfrac {365 - \paren {n - 1} } {365}$.
Hence the total probability that none of the $n$ people share a birthday is given by:

$\map p n = \dfrac {364} {365} \dfrac {363} {365} \dfrac {362} {365} \cdots \dfrac {365 - n + 1} {365}$













\(\ds \map p n\)

\(=\)







\(\ds \dfrac {364} {365} \dfrac {363} {365} \dfrac {362} {365} \cdots \dfrac {365 - n + 1} {365}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {365!} {365^n} \binom {365} n\)









Setting $n = 53$ and evaluating the above gives:

$\map p {53} \approx 0.01887$
or:

$\map p {53} \approx \dfrac 1 {53.01697}$
$\blacksquare$


Sources
1990: Hugh ApSimon: More Mathematical Byways
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $53$




