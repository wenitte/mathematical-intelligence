# 

Source: https://proofwiki.org/wiki/Pairwise_Independence_does_not_imply_Independence

Theorem
Just because all the events in a family of events in a probability space are pairwise independent, it does not mean that the family is independent.


Proof
Consider throwing a fair four-sided die.
This gives us an event space $\Omega = \set {1, 2, 3, 4}$, with each $\omega \in \Omega$ equally likely to occur:

$\forall \omega \in \Omega: \map \Pr \omega = \dfrac 1 4$

Consider the set of events:

$\SS = \set {A, B, C}$
where:

$A = \set {1, 2}, B = \set {1, 3}, C = \set {1, 4}$
We have that:

$\map \Pr A = \map \Pr B = \map \Pr C = \dfrac 1 2$
We also have that:

$\map \Pr {A \cap B} = \map \Pr {A \cap C} = \map \Pr {B \cap C} = \map \Pr {\set 1} = \dfrac 1 4$
Thus:

$\map \Pr A \map \Pr B = \map \Pr {A \cap B}$
$\map \Pr A \map \Pr C = \map \Pr {A \cap C}$
$\map \Pr B \map \Pr C = \map \Pr {B \cap C}$
Thus the events $A, B, C$ are pairwise independent.

Now, consider:

$\map \Pr {A \cap B \cap C} = \map \Pr {\set 1} = \dfrac 1 4$
But:

$\map \Pr A \map \Pr B \map \Pr C = \dfrac 1 8 \ne \map \Pr {A \cap B \cap C}$
So, although $\SS$ is pairwise independent, it is not independent.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.7$: Independent Events: Example $23$




