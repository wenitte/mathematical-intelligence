# 

Source: https://proofwiki.org/wiki/Intersection_of_Turing_Machines

Theorem
Let $T_1, T_2$ be Turing machines.
Let $\Sigma_1, \Sigma_2$ be the input symbols of $T_1, T_2$, respectively.
Let $L_1, L_2$ be the languages accepted by $T_1, T_2$, respectively.
There exists a Turing machine $T$ such that:

The input symbols of $T$ are $\Sigma_1 \cap \Sigma_2$.
The language accepted by $T$ is $L_1 \cap L_2$.
$T$ halts on some input if and only if it is in the accepted language, or either $T_1$ or $T_2$ halt on it without accepting.
Proof
Let:

$T_1 = \tuple {Q_1, \Sigma_1, \Gamma_1, \delta_1, q_1, B, F_1}$
$T_2 = \tuple {Q_2, \Sigma_2, \Gamma_2, \delta_2, q_2, B, F_2}$
As implied by the notation, the blank symbols of the two machines will be identified with each other, and denoted as $B$.
Construct the $2$-tape Turing machine $T' = \tuple{Q, \Sigma, \Gamma, \delta, q_0, B, F}$ as follows:

$Q = \set {q_0, q_L} \cup Q_1 \times Q_2$
$\Sigma = \Sigma_1 \cap \Sigma_2$
$\Gamma = \Gamma_1 \cup \Gamma_2$
$F = F_1 \times F_2$
$\map \delta {q, s, t} = \begin{cases}
\tuple {q_0, s, s, R, R} & : q = q_0 \land s \ne B \\
\tuple {q_L, B, B, L, L} & : q = q_0 \land s = B \\
\tuple {q_L, s, t, L, L} & : q = q_L \land s \ne B \\
\tuple {\tuple {q_1, q_2}, B, B, R, R} & : q = q_L \land s = B \\
\tuple {\tuple {a', b'}, s', t', d_1, d_2} & : q = \tuple {a, b}
\end{cases}$

where:
$\tuple {a', s', d_1} = \map {\delta_1} {a, s}$ if $\map {\delta_1} {a, s}$ is defined and $a \notin F_1$
$\tuple {a', s', S} = \tuple {a, s, S}$ if $a \in F_1$
and likewise for $\delta_2$
The following special case also applies to $\delta$:

$\map \delta {q, s, t}$ is undefined if $q \in F$
That is, if $q = \tuple {a, b}$ such that $a \in F_1$ and $b \in F_2$

The states $q_0$ and $q_L$ effectively copy the input string onto tape $2$ without altering tape $1$.
The two machines are represented on the separate tapes in the natural way.
Once $T_1$ or $T_2$ enters an accepting state, emulation stops and it is saved in that state indefinitely.
Once the second machine enters an accepting state as well, the machine $T$ accepts and halts, by the special case.
If either machine halts without accepting, the transition function $\delta$ is undefined for that state, and $T$ halts.
$\blacksquare$





