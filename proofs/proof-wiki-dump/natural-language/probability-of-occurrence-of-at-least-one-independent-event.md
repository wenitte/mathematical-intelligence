# 

Source: https://proofwiki.org/wiki/Probability_of_Occurrence_of_At_Least_One_Independent_Event


This page has been identified as a candidate for refactoring of basic complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\EE = \struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $A_1, A_2, \ldots, A_m \in \Sigma$ be independent events in the event space of $\EE$.

Then the probability of at least one of $A_1$ to $A_m$ occurring is:

$\ds 1 - \prod_{i \mathop = 1}^m \paren {1 - \map \Pr {A_i} }$


Corollary
Let $A$ be an event in an event space of an experiment $\EE$ whose probability space is $\struct {\Omega, \Sigma, \Pr}$.
Let $\map \Pr A = p$.
Suppose that the nature of $\EE$ is that its outcome is independent of previous trials of $\EE$.

Then the probability that $A$ occurs at least once during the course of $m$ trials of $\EE$ is $1 - \paren {1 - p}^m$.


Proof
Follows as a direct result of Probability of Independent Events Not Happening.
Let $B$ be the event "None of $A_1$ to $A_m$ happen".
From Probability of Independent Events Not Happening:

$\ds \map \Pr B = \prod_{i \mathop = 1}^m \paren {1 - \map \Pr {A_i} }$

Then $\Omega \setminus B$ is the event "Not none of $A_1$ to $A_m$ happen", or "At least one of $A_1$ to $A_m$ happens".

From Elementary Properties of Probability Measure:

$\forall A \in \Omega: \map \Pr {\Omega \setminus A} = 1 - \map \Pr A$
Hence the probability that at least one of $A_1$ to $A_m$ happen is:

$\ds 1 - \map \Pr B = 1 - \prod_{i \mathop = 1}^m \paren {1 - \map \Pr {A_i} }$


Proof of Corollary
It can immediately be seen that this is an instance of the main result with all of $A_1, A_2, \ldots, A_m$ being instances of $A$.
The result follows directly.
$\blacksquare$


Example
This is a classic result which contradicts the following equally classic fallacy:

"There is a one in six chance of throwing a six with a single throw of a die.
Therefore, there is a two in six chance of throwing a six on two throws of a die."
In fact this is an example of "occurrence of at least one independent event".
The probability of throwing at least one six on two throws of a die is in fact:

$1 - \paren {1 - \dfrac 1 6}^2 = \dfrac {11} {36} < \dfrac 2 6$
Not a lot in it, but definitely significantly less.

See De Méré's Paradox for a real-world application of this result as it occurred in history.





