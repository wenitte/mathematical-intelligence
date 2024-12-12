# 

Source: https://proofwiki.org/wiki/Event_Independence_is_Symmetric

Theorem
Let $A$ and $B$ be events in a probability space.
Let $A$ be independent of $B$.
Then $B$ is independent of $A$.
That is, is independent of is a symmetric relation.


Proof
We assume throughout that $\map \Pr A > 0$ and $\map \Pr B > 0$.
Let $A$ be independent of $B$.
Then by definition:

$\condprob A B = \map \Pr A$
From the definition of conditional probabilities, we have:

$\condprob A B = \dfrac {\map \Pr {A \cap B} } {\map \Pr B}$
and also:

$\condprob B A = \dfrac {\map \Pr {A \cap B} } {\map \Pr A}$
So if $\condprob A B = \map \Pr A$ we have:















\(\ds \map \Pr A\)

\(=\)







\(\ds \frac {\map \Pr {A \cap B} } {\map \Pr B}\)














\(\ds \leadsto \ \ \)





\(\ds \map \Pr B\)

\(=\)







\(\ds \frac {\map \Pr {A \cap B} } {\map \Pr A}\)














\(\ds \leadsto \ \ \)





\(\ds \map \Pr B\)

\(=\)







\(\ds \condprob B A\)









So by definition, $B$ is independent of $A$.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.7$: Independent Events: Exercise $20$




