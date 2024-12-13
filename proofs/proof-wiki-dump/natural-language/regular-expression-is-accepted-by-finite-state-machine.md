# 

Source: https://proofwiki.org/wiki/Regular_Expression_is_Accepted_by_Finite_State_Machine


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $R$ be a regular expression.
Then there exists a finite state machine $F$ such that its accepted language $\map L F$ is exactly $\map L R$, the language defined by $R$.


Proof
This proof proceeds by structural induction.


Case $1$
Let $R$ be the empty-set regular expression, $\O$.
Then:

$\map L R = \O$
Consider the finite state machine $F_\O$ defined as:

$F_\O = \struct {S_\O, A_\O, I_\O, \Sigma, T_\O}$
where:

$S_\O = \set {\mathsf {Rej} }$
$A_\O = \O$
$I_\O = \mathsf {Rej}$
$T_\O \tuple {s, \sigma} = \mathsf {Rej}$ for all $s \in S_\O, \sigma \in \Sigma$
This machine is always in a rejecting state and never leaves it.
So no word is in $\map L {F_\O}$.
Therefore:

$\map L {F_\O} = \O = \map L R$
$\Box$


Case $2$
Let $R$ be the empty-word regular expression, $\epsilon$.
Then:

$\map L R = \set {\sqbrk {} }$
Consider the finite state machine $F_\epsilon$ defined as:

$F_\epsilon = \struct {S_\epsilon, A_\epsilon, I_\epsilon, \Sigma, T_\epsilon}$
where:

$S_\epsilon = \set {\mathsf {Acc}, \mathsf {Rej} }$
$A_\epsilon = \set {\mathsf{Acc} }$
$I_\epsilon = \mathsf {Acc}$
$\map {T_\epsilon} {s, \sigma} = \mathsf {Rej}$ for all $s \in S_\epsilon, \sigma \in \Sigma$
This machine starts out in an accepting state.
So $\sqbrk {}$ (the empty word) is in $\map L {F_\epsilon}$.
Furthermore, any symbol moves the machine to a rejecting state and never back.
So no other word is in $\map L {F_\epsilon}$.
Therefore:

$\map L {F_\epsilon} = \set {\sqbrk {} } = \map L R$
$\Box$


Case $3$
Let $R$ be a literal $\sigma$.
Then:

$\map L R = \set {\sqbrk \sigma}$
Consider the finite state machine $F_\sigma$ defined as:

$F_\sigma = \struct {S_\sigma, A_\sigma, I_\sigma, \Sigma, T_\sigma}$
where:

$S_\sigma = \set {\mathsf {Start}, \mathsf {Acc}, \mathsf {Rej} }$
$A_\sigma = \set {\mathsf {Acc} }$
$I_\sigma = \mathsf {Start}$
$\map {T_\sigma} {\mathsf {Start}, \sigma} = \mathsf {Acc}$
$\map {T_\sigma} {s', \sigma'} = \mathsf {Rej}$ for all other $s' \in S_\sigma, \sigma' \in \Sigma$
This machine starts out in a rejecting state.
So $\sqbrk {}$ (the empty word) is not in $\map L {F_\sigma}$.
After receiving the symbol $\sigma$ at the start, this machine moves to an accepting state.
So $\sqbrk \sigma$ is in $\map L {F_\sigma}$.
Any other initial symbol, and any symbol after the initial, moves the machine to a rejecting state and never back.
So no other word is in $\map L {F_\sigma}$.
Therefore:

$\map L {F_\sigma} = \set {\sqbrk \sigma} = \map L R$
$\Box$


Case $4$
Let $R$ be a concatenation:

$R = R_1 R_2$
By the induction hypothesis, there exist finite state machines:

$F_1 = \struct {S_1, A_1, I_1, \Sigma, T_1}: \map L {F_1} = \map L {R_1}$
$F_2 = \struct {S_2, A_2, I_2, \Sigma, T_2}: \map L {F_2} = \map L {R_2}$
Define a new finite state machine $F_c$ as:

$F_c = \struct {S_c, A_c, I_c, \Sigma, T_c}$
where:

$S_c = S_1 \times \powerset {S_2}$
$A_c = \set {\tuple {s_1, s_2}: s_1 \in S_1 \land s_2 \cap A_2 \ne \O}$
$I_c = \begin {cases} \tuple {I_1, \O} & : I_1 \notin A_1 \\ \tuple {I_1, \set {I_2} } & : I_1 \in A_1 \end {cases}$
$\map {T_c} {\tuple {s_1, s_2}, \sigma} = \begin {cases}
\ds \tuple {\map {T_1} {s_1, \sigma}, \bigcup_{s \mathop \in s_2} \set {\map {T_2} {s, \sigma} } } & : \map {T_1} {s_1, \sigma} \notin A_1 \\
\ds \tuple {\map {T_1} {s_1, \sigma}, \bigcup_{s \mathop \in s_2} \set {\map {T_2} {s, \sigma} } \cup \set {I_2} } & : \map {T_1} {s_1, \sigma} \in A_1 \end {cases}$
where:

$\times$ denotes the Cartesian Product
$\PP$ the Power Set.
This machine $F_c$ effectively simulates one copy of $F_1$ and any number of copies of $F_2$.
Every time the simulated $F_1$ encounters an accepting state, a new copy of $F_2$ is run.
The combined $F_c$ reaches an accepting state if any one of the simulated $F_2$s do.
Therefore, the language accepted by this state machine is the concatenation of the accepted languages of $F_1$ and $F_2$.
$\Box$


Case $5$
Let $R$ be an alternation:

$R = R_1 \mid R_2$
By the induction hypothesis, there exist finite state machines:

$F_1 = \struct {S_1, A_1, I_1, \Sigma, T_1}: \map L {F_1} = \map L {R_1}$
$F_2 = \struct {S_2, A_2, I_2, \Sigma, T_2}: \map L {F_2} = \map L {R_2}$
Define a new finite state machine $F_a$ as:

$F_a = \struct {S_a, A_a, I_a, \Sigma, T_a}$
where:

$S_a = S_1 \times S_2$
$A_a = \set {\tuple {s_1, s_2}: s_1 \in A_1 \lor s_2 \in A_2 }$
$I_a = \tuple {I_1, I_2}$
$\map {T_a} {\tuple {s_1, s_2}, \sigma} = \tuple {\map {T_1} {s_1, \sigma}, \map {T_2} {s_2, \sigma} }$
where $\times$ denotes the Cartesian Product.

This machine $F_a$ effectively simulates $F_1$ and $F_2$ in parallel.
$F_a$ reaches an accepting state if any one of the simulated machines do.
Therefore, the language accepted by this state machine is the union of the accepted languages of $F_1$ and $F_2$.
$\Box$


Case $6$
Let $R$ be a Kleene star:

$R = R_1^*$
By the induction hypothesis, there exists a finite state machine:

$F_1 = \struct {S_1, A_1, I_1, \Sigma, T_1}: \map L {F_1} = \map L {R_1}$
Define a new finite state machine $F_k$ as:

$F_k = \struct {S_k, A_k, I_k, \Sigma, T_k}$
where:

$S_k = \powerset {S_1}$
$A_k = \set {S \subseteq S_k : I_1 \in S}$
$I_k = \set {I_1}$
$\map {T_k} {s, \sigma} = \begin {cases}
\map {U_k} {S, \sigma} & : \map {U_k} {S, \sigma} \cap A_1 = \O \\
\map {U_k} {S, \sigma} \cup \set {I_1} & : \map {U_k} {S, \sigma} \cap A_1 \ne \O \end {cases}$

$\ds \map {U_k} {S, \sigma} = \bigcup_{s \mathop \in S} \set {\map {T_1} {s, \sigma} }$
where $\PP$ denotes the Power Set.
This machine $F_k$ effectively simulates any number of copies of $F_1$ simultaneously.
Every time any of the simulated machines reaches an accepting state, a new copy is run.
$F_k$ reaches an accepting state whenever $I_1$ is in its state.
This occurs in two situations:

at the beginning
and:

when any of the simulated machines reaches an accepting state.
Therefore, the language accepted by $F_k$ consists of arbitrary numbers of concatenations of strings accepted by $F_1$.

By structural induction, the result follows.
$\blacksquare$





