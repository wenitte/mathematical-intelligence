# 

Source: https://proofwiki.org/wiki/Multitape_Turing_Machine_Reduces_to_Turing_Machine



Theorem
Let $T$ be a multitape Turing machine.
Then, there exists a Turing machine $T'$ that accepts precisely the same language as $T$, and halts on exactly the inputs that $T$ does.


Proof

This article needs proofreading.In particular: In particular, make sure the construction is correct. I keep spotting mistakes in it and fixing them; who knows how many more are left. The correctness proof is more or less secondary in this case, although if you want to make that more rigorous, go ahead.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Let $k$ be the number of tapes in $T$.
Let:

$\Gamma_T$ be the symbols of $T$, with $B$ the blank symbol.
$\Sigma \subset \Gamma_T \setminus \set B$ be the input symbols of $T$.
$Q_T = \set {q_0, q_1, \dotsc, q_\beta}$ be the states of $T$, with $q_0$ the start state.
$\delta_T$ be the transition function of $T$.


Symbols
The symbols of $T'$ will be:

$\Gamma_{T'} = \set B \cup \Sigma \cup \paren {\Gamma_T \times 2}^k$
where the unions are assumed to be disjoint.
That is, a symbol is either:

$s \in \Sigma$, one of the input symbols from $T$, which are preserved so that the language remains identical
$B$, the blank symbol from $T$
A tuple $\tuple {s_1, h_1, s_2, h_2, \dotsc, s_k, h_k}$, where each $s_i$ is a tape symbol from $T$, and $h_i$ is either $0$ or $1$
The blank symbol of $T'$ is also $B$, and the input symbols are again $\Sigma$.


States
The states of $T'$ will be:

$Q_{T'} = 3 \cup Q_T \times \set R_R \times \Gamma_T^k \cup Q_T \times \set {W_L} \times \paren {\Gamma_T \times \set {L, R, S, M, N} } \cup Q_T \times \set {W_R} \times \paren {\Gamma_T \times \set {L, R, S, M, N} }$
where the unions are again assumed to be disjoint.
In other words, a state is either:

One of $\set {q'_0, q'_1, q'_2}$
A tuple $\tuple {q, R_R, s_1, s_2, \dotsc, s_k}$ where each $s_i \in \Gamma_T$
A tuple $\tuple {q, W_L, s_1, m_1, s_2, m_2, \dotsc, s_k, m_k}$, where each $s_i \in \Gamma_T$ and each $m_i \in \set {L, R, S, M, N}$
A tuple $\tuple {q, W_R, s_1, m_1, s_2, m_2, \dotsc, s_k, m_k}$, where each $s_i \in \Gamma_T$ and each $m_i \in \set {L, R, S, M, N}$
Note that the constants $\set {R_R, W_L, W_R}$ are arbitrary, and are just used to differentiate between distinct but similar-looking states.
The start state is $q'_0$, and the accepting states $F'$ are:

$\tuple {q_f, R_R, B, B, \dotsc, B}$
for each $q_f \in F$


Transitions
Initialization
$\map {\delta'} {q'_0, s} = \tuple {q'_1, \tuple {s, 1, B, 1, \dotsc, B, 1}, R}$ for every $s \in \set B \cup \Sigma$
$\map {\delta'} {q'_1, s} = \tuple {q'_1, \tuple {s, 0, B, 0, \dotsc, B, 0}, R}$ for every $s \in \Sigma$
$\map {\delta'} {q'_1, B} = \tuple {q'_2, B, L}$
$\map {\delta'} {q'_2, s} = \tuple {q'_2, s, L}$ for every $s \in \Gamma_{T'} \setminus \set B$
$\map {\delta'} {q'_2, B} = \tuple {\tuple {q_0, R, B, B, \dotsc, B}, B, R}$


Reading
$\map {\delta'} {\tuple {q, R_R, r_1, r_2, \dotsc, r_k}, s} = \tuple {\tuple {q, R_R, r'_1, \dotsc, r'_k}, s, R}$

where:
$s = \tuple {s_1, h_1, \dotsc, s_k, h_k}$ for any $s_i \in \Gamma_T$ and $h_i \in \set {0, 1}$
$r'_i = \begin{cases} r_i & \text {if } h_i = 0 \\ s_i & \text {if } h_i = 1 \end{cases}$

$\map {\delta'} {\tuple {q, R_R, r_1, \dotsc, r_k}, B} = \tuple {\tuple {q', W_L, w_1, m_1, w_2, m_2, \dotsc, w_k, m_k}, B, L}$

where:
$\tuple {q', w_1, w_2, \dotsc, w_k, m_1, m_2, \dotsc, m_k} = \map \delta {q, r_1, r_2, \dotsc, r_k}$


Writing
$\map {\delta'} {\tuple {q, W_L, w_1, m_1, \dotsc, w_k, m_k}, \tuple {s_1, h_1, \dotsc, s_k, h_k} } = \tuple {\tuple {q, W_d, w_1, m'_1, \dotsc, w_k, m'_k}, \tuple {s'_1, h'_1, \dotsc, s'_k, h'_k}, d}$

where:
$d = \begin{cases} R & \text {if } \exists i : h_i = 1 \text { and } m_i = R \\ L & \text {otherwise} \end{cases}$
$s'_i = \begin{cases} w_i & \text {if } h_i = 1 \text { and } m_i \in \set {S, d} \\ s_i & \text {otherwise} \end{cases}$
$h'_i = \begin{cases} 1 & \text {if } m_i = M \\ 0 & \text {if } h_i = 1 \text { and } m_i = d \\ h_i & \text {otherwise} \end{cases}$
$m'_i = \begin{cases} M & \text {if } h_i = 1 \text { and } m_i = d \\ N & \text {if } m_i = M \\ N & \text {if } m_i = S \text { and } h_i = 1 \\ m_i & \text {otherwise} \end{cases}$
$\map {\delta'} {\tuple {q, W_L, w_1, m_1, \dotsc, w_k, m_k}, B} = \tuple {q', s', d}$

where:
$d = \begin{cases} L & \text {if } \exists i : m_i = M \\ R & \text {otherwise} \end{cases}$
$q' = \begin{cases} \tuple {q, W_L, w_1, N, \dotsc, w_k, N} & \text {if } d = L \\ \tuple {q, R_R, B, \dotsc, B} & \text {if } d = R \end{cases}$
$s' = \begin{cases} \tuple {B, h'_1, \dotsc, B, h'_k} & \text {if } d = L \\ B & \text {if } d = R \end{cases}$
$h'_i = \begin{cases} 1 & \text {if } m_i = M \\ 0 & \text {otherwise} \end{cases}$

$\map {\delta'} {\tuple {q, W_R, w_1, m_1, \dotsc, w_k, m_k}, \tuple {s_1, h_1, \dotsc, s_k, h_k} } = \tuple {\tuple {q, W_L, w_1, m'_1, \dotsc, w_k, m'_k}, \tuple {s_1, h'_1, \dotsc, s_k, h'_k}, L}$

where:
$h'_i = \begin{cases} 1 & \text {if } m_i = M \\ h_i & \text {otherwise} \end{cases}$
$m'_i = \begin{cases} N & \text {if } m_i = M \\ m_i & \text {otherwise} \end{cases}$
$\map {\delta'} {\tuple {q, W_R, w_1, m_1, \dotsc, w_k, m_k}, B} = \tuple {\tuple {q, W_L, w_1, m'_1, \dotsc, w_k, m'_k}, \tuple {B, h'_1, \dotsc, B, h'_1}, L}$

where:
$h'_i = \begin{cases} 1 & \text {if } m_i = M \\ 0 & \text {otherwise} \end{cases}$
$m'_i = \begin{cases} N & \text {if } m_i = M \\ m_i & \text {otherwise} \end{cases}$


Proof of Correctness
Let $A$ be an instananeous description of $T$ with state $q$, and let $A_i$ be the $i$-th term of $A$.
Let $A_i$ be written as:

$X_{i,m_i} \dotsm X_{i,1} q Y_i Z_{i,1} \dotsm Z_{i,n_i}$
Define the minimal tape encoding $\map {E_t} {A_i}$ of $A_i$ to be:

$\tuple {X_{i,m_i}, 0} \dotsm \tuple {X_{i,1}, 0} \tuple {Y_i, 1} \tuple {Z_{i,1}, 0} \dotsm \tuple {Z_{i,n_i}, 0}$
Define a tape encoding $\map {E_t^*} {A_i}$ of $A_i$ to be any finite string of the form:

$\tuple {B, 0} \dotsm \tuple {B, 0} \map {E_t} {A_i} \tuple {B, 0} \dotsm \tuple {B, 0}$
Define a multitape encoding $\map {E_m} A$ of $A$ to be:

$\tuple {\map {E_t^*} {A_1}_1, \dotsc, \map {E_t^*} {A_k}_1} \dotsm \tuple {\map {E_t^*} {A_1}_p, \dotsc, \map {E_t^*} {A_k}_p}$
where for some tape encodings of the $A_i$, all of the same length $p$.
Define the state encoding $\map {E_q} q$ of $q$ to be:

$\tuple {q, R_R, B, \dotsc, B}$
Finally, define a description encoding $\map E A$ of $A$ to be:

$\map {E_q} q \map {E_m} A$


Initialization Lemma
Let $T$ have instantaneous description $D$ when started on input $I$.
Let $T'$ have instantaneous description $D'$ under the same conditions.
Then, $D' \vdash^* \map E D$ under $T'$.

Proof
If $I$ is a finite string of length $1$, then $D_1 = q_0 Z$, $D_{i \mathop > 1} = q_0 B$, and $T'$ starts with description $q'_0 Z$.
If $I$ is the null string, it is equivalent to the above case, where $Z = B$.
By the transition function:














\(\ds q'_0 Z\)

\(\vdash\)







\(\ds \tuple {Z, 1, \dotsc, B, 1} q'_1 B\)




















\(\ds \)

\(\vdash\)







\(\ds q'_2 \tuple {Z, 1, \dotsc, B, 1}\)




















\(\ds \)

\(\vdash\)







\(\ds q'_2 B \tuple {Z, 1, \dotsc, B, 1}\)




















\(\ds \)

\(\vdash\)







\(\ds \tuple {q_0, R_R, B, \dotsc, B} \tuple {Z, 1, \dotsc, B, 1}\)









which is a description encoding of $D$.

If $I$ has length at least $2$, then $D_1 = q_0 Z_1 Z_2 \dotsm Z_n$, each other $D_i = q_0 B$, and $T'$ starts with description $q'_0 Z_1 Z_2 \dotsm Z_n$.
By the transition function:

$q'_0 Z_1 Z_2 \dotsm Z_n \vdash \tuple {Z_1, 1, B, 1, \dotsc, B, 1} q'_1 Z_2 \dotsm Z_n$
After applying the transition function $n - 1$ additional times, each time with the same transition rule since $Z_i \in \Sigma$, the description is:

$\tuple {Z_1, 1, B, 1, \dotsc, B, 1} \tuple {Z_2, 0, B, 0, \dotsc, B, 0} \dotsm \tuple {Z_n, 0, B, 0, \dotsc, B, 0} q'_1 B$
The next description is:

$\tuple {Z_1, 1, B, 1, \dotsc, B, 1} \tuple {Z_2, 0, B, 0, \dotsc, B, 0} \dotsm \tuple {Z_{n - 1}, 0, B, 0, \dotsc, B, 0} q'_2 \tuple {Z_n, 0, B, 0, \dotsc, B, 0}$
And, after applying the transition function another $n$ times:

$q'_2 B \tuple {Z_1, 1, B, 1, \dotsc, B, 1} \tuple {Z_2, 0, B, 0, \dotsc, B, 0} \dotsm \tuple {Z_n, 0, B, 0, \dotsc, B, 0}$
One more transition results in:

$\tuple {q_0, R_R, B, \dotsc, B} \tuple {Z_1, 1, B, 1, \dotsc, B, 1} \tuple {Z_2, 0, B, 0, \dotsc, B, 0} \dotsm \tuple {Z_n, 0, B, 0, \dotsc, B, 0}$
which is a description encoding of $D$, where each $\map {E_t^*} {D_{i \mathop > 1} }$ is postfixed with $n - 1$ copies of $\tuple {B, 0}$.

Therefore, in either case, the lemma holds.
$\Box$


Transition Lemma
Let $A$ be an instantaneous description of $T$, and suppose $A \vdash B$.
Then, for every $\map E A$, there is a $\map E B$ such that:

$\map E A \vdash^* \map E B$.
Proof
Let $\map E A = \tuple {q, R_R, B, \dotsc, B} \tuple {Z_{1,1}, h_{1,1}, \dotsc, Z_{k,1}, h_{1,1} } \dotsm {Z_{1,n}, h_{1,n}, \dotsc, Z_{k,n}, h_{k,n} }$

After $n$ steps, each of which uses the same formula above, the state will be:

$\tuple {Z_{1,1}, h_{1,1}, \dotsc, Z_{k,1}, h_{1,1} } \dotsm \tuple {Z_{1,n}, h_{1,n}, \dotsc, Z_{k,n}, h_{k,n} } \tuple {q, R_R, R_1, \dotsc, R_k} B$
But for each $1 \le i \le k$, there is a unique $j$ such that $h_{i,j} = 1$, by the definition of instantaneous description.
As $R_i$ is left unchanged in the transition, except for in that case:

$R_i = Z_{i,j}$
But from the definition of description encoding, it follows that $Z_{i,j}$ is the symbol $Y_i$ immediately to the right of $q$ in $A_i$.
Then, the state of $T'$ at the end of those transitions is:

$\tuple {q, R_R, Y_1, \dotsc, Y_k}$
Thus, the next step results in:

$\tuple {Z_{1,1}, h_{1,1}, \dotsc, Z_{k,1}, h_{k,1} } \dotsm \tuple {Z_{1,n - 1}, h_{1,n - 1}, \dotsc, Z_{k,n - 1}, h_{k,n - 1} } \tuple {q', W_L, Y'_1, \dotsc, Y'_n} \tuple {Z_{1,n}, h_{1,n}, \dotsc, Z_{k,n}, h_{k,n} }$

Suppose that with some description $A$ of $T'$, $d = R$.
Then, every $m_i = R$ such that $h_i = 1$, is replaced by $m'_i = M$.
Therefore, the $d = L$ move one step later returns to a symbol in which no $m_i = R$ has $h_i = 1$.
Thus, the step after is also $d = L$.
From this, it follows that every $d = R$ move is followed by at least two $d = L$ moves.
Therefore, there are at most $3n$ steps until $q \in Q$ is at the left end of the description string, scanning $B$, while in a $W_L$ state.

Fix an $i$ such that $1 \le i \le k$, and consider the tape $A_i$.
As before, there is exactly one $j_0$ such that $h_{i,j_0} = 1$.
Relabel the sequence $\sequence {Z_j }_{1 \le j \le n}$ as follows:

$X_m \dotsm X_1 Y Z_1 \dotsm Z_n$
where $Y$ corresponds with $Z_{j_0}$
This sequence corresponds exactly with the format of the instantaneous description.

By the definition of the transition function, $m_i$ will only change from $S$, $R$, or $L$ when $h_i = 1$.
Additionally, unless $m_i = S$, it will only do so when $d = m_i$.
We will analyze the move for tape $i$ case by case:

If $m_i = S$, then the first time $Y$ is scanned, regardless of $d$, $h'_i = 1$ and $s'_i = w_i$.
That corresponds to the step:
$X_m \dotsm X_1 q Y Z_1 \dotsm Z_n \vdash X_m \dotsm X_1 q' Y' Z_1 \dotsm Z_n$, which is correct.
$m'_i = N$, which ensures that the transition will not be activated again, even if $Y'$ is scanned a second time.


If $m_i$ is $R$ or $L$, the symbol $Y$ will eventually scanned such that $d = m_i$.
For, if $m_i = R$, $d = R$ by the transition function.
If $m_i = L$ and $d = R$, the next step has $d = L$, re-scanning $Y$, and $d = L$ again, as proven earlier.
If there is a symbol in the appropriate direction on $A_i$, its $h_{i,j'}$ will be updated to $1$ as $h_{i,j}$ is updated to $0$.
This corresponds with the appropriate transition, using $d = R$ as an example:
$X_m \dotsm X_1 q Y Z_1 \dotsm Z_n \vdash X_m \dotsm X_1 Y' q' Z_1 Z_2 \dotsm Z_n$
If there is no symbol in the direction, but there are additional $\tuple {B, 0}$ appended in that direction by $\map {E_t^*} {A_i}$, the same transition process introduces a new $B$, as it should.
If there is no extension already present either, that is when $Y = B$, the transition extends every tape by one instance of $\tuple {B, 0}$ in that direction, and performs the same steps.
If we are writing $B$ at the end of the tape, and moving away from the end, the $\tuple {B, 0}$ is considered as a part of the extensions introduced by $\map {E_t^*} {A_i}$, rather than a part of $A_i$ itself.

When $Y = B$ in a $W_L$ state, every update has been performed, except possibly an extension on the left, indicated by some $m_i = M$.
After performing this extension, if necessary, every tape move has been completed, so every $m_i = N$, and $Y = B$ again, as $T'$ moved left from the left end of the tape.
At this point, the description of $T'$ is:

$\tuple {q', W_L, w_1, N, \dotsc, w_k, N} B \tuple {s'_{1,1}, h'_{1,1}, \dotsc, s'_{k,1}, h'_{k,1} } \dotsm \tuple {s'_{1,n}, h'_{1,n}, \dotsc, s'_{k,n}, h'_{k,n} }$
One last step results in:

$\tuple {q', R_R, B, \dotsc, B} \tuple {s'_{1,1}, h'_{1,1}, \dotsc, s'_{k,1}, h'_{k,1} } \dotsm \tuple {s'_{1,n}, h'_{1,n}, \dotsc, s'_{k,n}, h'_{k,n} }$
which is a description encoding of the next description of $T$.
$\Box$
The only point in this process in which $\delta'$ could fail to exist is in finding $q'$ from the read symbols and previous state.
But this only happens when those symbols and state would cause $\delta$ to not exist in $T$.
Therefore, $T'$ halts exactly when an undefined $\delta$ appears in the sequence of steps from the input description of $T$, which is when it halts itself.

The accepting states of $T'$ are exactly those in any description encoding of an accepting state of $T$.
Therefore, $T'$ accepts when one of those states appears in the sequence of steps from the input description of $T$, or when it accepts itself.

Thus, $T'$ halts and/or accepts exactly when $T$ does.
$\blacksquare$





