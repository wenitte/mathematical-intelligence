# 

Source: https://proofwiki.org/wiki/Disjunction_of_Finite_State_Machines

Theorem
Let $\Sigma$ be a finite set.
Let $F_1 = \tuple {S_1, A_1, I_1, \Sigma, T_1}$ and $F_2 = \tuple {S_2, A_2, I_2, \Sigma, T_2}$ be finite state machines.
Then there exists a finite state machine $F$ such that $\map L F = \map L {F_1} \cup \map L {F_2}$.

Proof
Construct $F = \tuple {S_1 \times S_2, A_1 \times S_2 \cup S_1 \times A_2, \tuple {I_1, I_2}, \Sigma, T}$ where:

$\map T {s_1, s_2, \Sigma} = \tuple {\map {T_1} {s_1}, \map {T_2} {s_2} }$
The machines are simultaneously emulated in the first and second components of the state tuple.
When the input word is exhausted, $F$ accepts if and only if at least one of $F_1$ and $F_2$ is in an accepting state, as required.
$\blacksquare$





