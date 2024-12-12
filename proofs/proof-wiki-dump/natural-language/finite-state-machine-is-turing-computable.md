# 

Source: https://proofwiki.org/wiki/Finite_State_Machine_is_Turing_Computable


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $F = \tuple {S, A, I, \Sigma, T}$ be a finite state machine.
Then there exists a Turing machine $T$ that:

Has input language $\Sigma$.
Accepts exactly the same language as $F$.
Halts on every input.
Proof
Define the Turing machine:

$T = \tuple {S \cup \set {H}, \Sigma, \Sigma \cup \set B, \delta, I, B, \set H}$
where:

$\map \delta {s, \sigma} = \tuple {\map T {s, \sigma}, \sigma, R}$ if $q \in S$ and $\sigma \ne B$
$\map \delta {s, B} = \tuple {H, B, R}$ if $s \in A$
The machine behaves identically to $F$ while the input is being read.
When there is no more input, if $\sigma \in A$, then $T$ transitions to the $H$ state, which is the accepting state.
If $\sigma \notin A$, then there is no transition defined, so $T$ halts without accepting.
As $T$ only moves $R$, it will eventually reach the end of the input word, and one of these two conditions must hold.
$\blacksquare$





