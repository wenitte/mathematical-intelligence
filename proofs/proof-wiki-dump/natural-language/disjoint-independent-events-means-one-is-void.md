# 

Source: https://proofwiki.org/wiki/Disjoint_Independent_Events_means_One_is_Void



Theorem
Let $A$ and $B$ be events in a probability space.
Suppose $A$ and $B$ are:

disjoint
independent.
Then either $\map \Pr A = 0$ or $\map \Pr B = 0$.

That is, if two events are disjoint and independent, at least one of them can't happen.


Proof
For $A$ and $B$ to be independent:

$\map \Pr {A \cap B} = \map \Pr A \, \map \Pr B$

For $A$ and $B$ to be disjoint:

$\map \Pr {A \cap B} = 0$

So:

$\map \Pr A \, \map \Pr B = 0$
Hence the result.
$\blacksquare$


Comment
If this makes you scratch your head in bewilderment, consider what it means.
For $A$ and $B$ to be independent, then whether one event occurs has no bearing on whether the other one occurs or not.

But suppose we know that they are disjoint.
That is, when one of them happens, the other can't happen.
Then they can't be independent, because the occurrence of one has a direct relation to the happening (or in this case, non-happening) of the other.


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.7$: Independent Events: Exercise $21$




