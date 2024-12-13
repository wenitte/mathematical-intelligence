# 

Source: https://proofwiki.org/wiki/Negation_of_Finite_State_Machine

Theorem
Let $F = \tuple {S, A, I, \Sigma, T}$ be a finite state machine.
Then there exists a finite state machine $F'$ such that $\map L {F'} = \map \complement {\map L F}$.

Proof
Construct $F' = \tuple {S, S \setminus A, I, \Sigma, T}$.
The state transitions are identical to those of $F$.
However, when the input word is exhausted, the final state is an accepting state if and only if it is not an accepting state in $F$, as required.
$\blacksquare$





