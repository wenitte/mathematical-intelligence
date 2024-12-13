# 

Source: https://proofwiki.org/wiki/Recursive_Set_is_Turing_Computable



Theorem
Let $f: S \to \set {0, 1}$, where $S \subseteq \N$, be a recursive function.
Let $\sqbrk x$ denote the reverse of the base-$2$ representation of $x$, possibly with additional $0$ at the end.

That is, if the base-$2$ representation of $x$ is
$\sqbrk {r_m r_{m - 1} \dotsm r_1 r_0}_2$
then $\sqbrk x$ is:
$r_0 r_1 \dotsm r_{m - 1} r_m 0 \dotsm 0$
There exists a Turing machine such that:

The input symbols of the machine are $\set {0, 1}$
The machine accepts the language $\set {\sqbrk x : \map f x = 1}$
The machine halts on $\sqbrk x$ if and only if $x \in S$
Proof

This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
By Recursive Function is URM Computable, there is a URM program that computes $f$.
By Normalized URM Program, let $P$ be the normalization of it.
Let $k = \map \rho P$ be the highest register number used by $P$.
Construct the $k + 1$-tape Turing machine $T$ as follows, where $\map \rho P$ is the highest register number used by $P$.
For the purposes of this proof, the tapes will be labeled from $0$ to $k$.

Symbols
The symbols of $T$ will be $\set {B, 0, 1}$, where $B$ is the blank symbol.

States
Define the function:

$\map \ell i = \begin{cases}
 1 & \text {if line } i \text { is a } \texttt {Zero} \text { or a } \texttt{Succ} \text { command} \\
 3 & \text {if line } i \text { is a } \texttt {Copy} \text { command} \\
 4 & \text {if line } i \text { is a } \texttt {Jump} \text { command}

\end{cases}$
There will be $\ds 5 + \sum_{i = 1}^{\map \lambda P} \map \ell i$ states in $T$.
Specifically, there will be:

Five states $q_0, q_1, q_2, q_{\map \lambda P + 1, 1}, q_F$
For each $i$, states $q_{i,j}$ such that $1 \le j \le \map \ell i$
The start state is $q_0$, and the accepting state is $q_F$.

Transitions
We will encode the registers of the URM program $P$ as an instantaneous description where, for every $i$:

$T_i = 0 B B \dotsm B q B$
where there $r_i$ copies of $B$ (including the one to the right of $q$).
The lines of $P$ will be encoded as the states $q_{i,1}$.

Initialization
Before the emulations of $P$ can begin, we first decode the base-$2$ number on tape $0$ onto tape $1$, resulting in the first encoding.

$\map \delta {q_0, s, B, B, \dotsc, B} = \tuple {q_1, s, 0, 0, \dotsc, 0, S, S, S, \dotsc, S}$ for each $s \in \set {B, 0, 1}$
Write a $0$ on every tape $\ge 1$. This encodes all the registers being $0$.
$\map \delta {q_1, B, s, 0, \dotsc, 0} = \tuple {q_{1,1}, B, s, 0, \dotsc, 0, S, S, S, \dotsc, S}$ for $s \in \set {B, 0}$
If we have finished decoding tape $0$, start the emulation at line $1$.
$\map \delta {q_1, 0, s, 0, \dotsc, 0} = \tuple {q_1, 0, s, 0, \dotsc, 0, R, S, S, \dotsc, S}$ for $s \in \set {B, 0}$
Move right so long as we keep finding $0$. This process stops when we find a $1$, or a $B$.
$\map \delta {q_1, 1, s, 0, \dotsc, 0} = \tuple {q_2, 0, s, 0, \dotsc, 0, L, R, S, \dotsc, S}$ for $s \in \set {B, 0}$
Add one to tape $1$ and begin decrementing the binary number.
$\map \delta {q_2, B, s, 0, \dotsc, 0} = \tuple {q_1, B, s, 0, \dotsc, 0, R, S, S, \dotsc, S}$ for $s \in \set {B, 0}$
If we have finished decrementing, loop back to the decoding process.
$\map \delta {q_2, 0, s, 0, \dotsc, 0} = \tuple {q_2, 1, s, 0, \dotsc, 0, L, S, S, \dotsc, S}$ for $s \in \set {B, 0}$
In order to decrement, subtract $2^p$ and add back $2^1 + 2^2 + \dotso + 2^{p - 1}$, which means incrementing each $0$ below the $1$ we removed.
This effectively converts the binary number on tape $0$ to unary on tape $1$.
Note that after this process is complete, tape $0$ is scanning $B$. So long as it is not moved again (which it will not be), it will keep scanning $B$.

Emulation
For each $i \le \map \lambda P$, define the following transitions to maintain the encoding:
If line $i$ is $\map Z n$:

$\map \delta {q_{i,1}, B, s_1, \dotsc, s_i = B, \dotsc, s_k} = \tuple {q_{i,1}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_i = L, \dotsc, S}$
If the $n$-th tape reads $B$, move it $L$; repeat.
$\map \delta {q_{i,1}, B, s_1, \dotsc, s_i = 0, \dotsc, s_k} = \tuple {q_{i + 1,1}, B, s_1, \dotsc, s_k, S, S, \dotsc, S}$
If it reads $0$, we advance to the next line.
In this manner, the $n$-th tape is moved to description $q 0$, which is the encoding for $0$.

If line $i$ is $\map S n$:

$\map \delta {q_{i,1}, B, s_1, \dotsc, s_k} = \tuple {q_{i + 1,1}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_n = R, \dotsc, S}$
Move the $n$-th tape $R$ and advance to the next line.
This simply updates $0 B B \dotsm B q B$ to $0 B B \dotsm B B q B$, which encodes $r_n + 1$.

If line $i$ is $\map C {m,n}$ and $m = n$:

$\map \delta {q_{i,1}, B, s_1, \dotsc, s_k} = \tuple {q_{i + 1,1}, B, s_1, \dotsc, s_k, S, S, \dotsc, S}$
Advance to the next line.
As a copy from a register to itself has no effect on the state, so we simply do nothing.
If line $i$ is $\map C {m,n}$ and $m \ne n$:

$\map \delta {q_{i,1}, B, s_1, \dotsc, s_n = B, \dotsc, s_k} = \tuple {q_{i,1}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_n = L, \dotsc, S}$
If the $n$-th tape reads $B$, move it $L$; repeat.
$\map \delta {q_{i,1}, B, s_1, \dotsc, s_m = 0, \dotsc, s_n = 0, \dotsc, s_k} = \tuple {q_{i + 1,1}, B, s_1, \dotsc, s_k, S, S, \dotsc, S}$
If both tapes $m$ and $n$ read $0$, advance to the next line.
$\map \delta {q_{i,1}, B, s_1, \dotsc, s_m = B, \dotsc, s_n = 0, \dotsc, s_k} = \tuple {q_{i,2}, B, s_1, \dotsc, s'_m = 0, \dotsc, s'_n = 0, \dotsc, s_k, S, S, \dotsc, d_m = L, \dotsc, d_n = R, \dotsc, S}$
If neither of the above hold, write a $0$ on tape $m$, move it left, and move tape $n$ right. Enter the next part of the procedure.
$\map \delta {q_{i,2}, B, s_1, \dotsc, s_m = B, \dotsc, s_k} = \tuple {q_{i,2}, B, s_1, \dotsc, s_k, S, \dotsc, d_m = L, \dotsc, d_n = R, \dotsc, S}$
So long as $s_m \ne 0$, move it $L$, and move tape $n$ $R$.
$\map \delta {q_{i,2}, B, s_1, \dotsc, s_m = 0, \dotsc, s_k} = \tuple {q_{i,3}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_m = R, \dotsc, S}$
When $s_m = 0$, move tape $m$ to the right and enter the final part of the procedure.
$\map \delta {q_{i,3}, B, s_1, \dotsc, s_m = B, \dotsc, s_k} = \tuple {q_{i,3}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_m = R, \dotsc, S}$
While $s_m \ne 0$, move it $R$.
$\map \delta {q_{i,3}, B, s_1, \dotsc, s_m = 0, \dotsc, s_k} = \tuple {q_{i + 1,1}, B, s_1, \dotsc, s'_m = B, \dotsc, s_k, S, S, \dotsc, S}$
When $s_m = 0$ is found, write $B$ and advance to the next line.
$C$ is performed by first setting tape $n$ to zero, then adding $m$ to $n$. $q_{i,1}$ is exactly the same as for $Z$, producing the first effect. If $m$ is zero itself, we have nothing else to do, so we move on. If not:

Mark the current position on $m$ with a second $0$, in addition to the pre-set one.
Move $m$ to the left until we reach the pre-set $0$, moving $n$ at the same time. This adds the value of $m$ to $n$, as intended.
Restore the value of $m$ by moving it back to the marked position on the right.
Since we already checked for $r_m = 0$, the two positions are guaranteed to be distinct, and so we will always encounter a mark when we expect one.

If line $i$ is $\map J {m, n, j}$ and $m = n$:

$\map \delta {q_{i,1}, B, s_1, \dotsc, s_k} = \tuple {q_{j,1}, B, s_1, \dotsc, s_k, S, S, \dotsc, S}$
Jump to the coded line.
If line $i$ is $\map J {m, n, j}$ and $m \ne n$:

$\map \delta {q_{i,1}, B, s_1, \dotsc, s_m = 0, \dotsc, s_n = 0, \dotsc, s_k} = \tuple {q_{j,1}, B, s_1, \dotsc, s_k, S, S, \dotsc, S}$
If $s_m$ and $s_n$ are both scan $0$, jump to the coded line.
$\map \delta {q_{i,1}, B, s_1, \dotsc, s_m = 0, \dotsc, s_n = B, \dotsc, s_k} = \tuple {q_{i + 1, 1}, B, s_1, \dotsc, s_k, S, S, \dotsc, S}$
$\map \delta {q_{i,1}, B, s_1, \dotsc, s_m = B, \dotsc, s_n = 0, \dotsc, s_k} = \tuple {q_{i + 1, 1}, B, s_1, \dotsc, s_k, S, S, \dotsc, S}$
If one of $s_m$ and $s_n$ is $0$, and the other does not, advance to the next line.
$\map \delta {q_{i,1}, B, s_1, \dotsc, s_m = B, \dotsc, s_n = B, \dotsc, s_k} = \tuple {q_{i,2}, B, s_1, \dotsc, s'_m = 0, \dotsc, s'_n = 0, \dotsc, s_k, S, S, \dotsc, d_m = L, \dotsc, d_n = L, \dotsc, S}$
If both scan $B$, write $0$ to their current positions and move $L$, entering the next part.
$\map \delta {q_{i,2}, B, s_1, \dotsc, s_m = B, \dotsc, s_n = B, \dotsc, s_k} = \tuple {q_{i,2}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_m = L, \dotsc, d_n = L, \dotsc, S}$
If both tapes $m$ and $n$ continue to scan $B$, move them both $L$.
$\map \delta {q_{i,2}, B, s_1, \dotsc, s_m = 0, \dotsc, s_n = B, \dotsc, s_k} = \tuple {q_{i,4}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_m = R, \dotsc, d_n = R, \dotsc, S}$
$\map \delta {q_{i,2}, B, s_1, \dotsc, s_m = B, \dotsc, s_n = 0, \dotsc, s_k} = \tuple {q_{i,4}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_m = R, \dotsc, d_n = R, \dotsc, S}$
If the tapes $m$ and $n$ are scanning $B$ and $0$; that is, different symbols, then switch to part $4$ and move them right.
$\map \delta {q_{i,2}, B, s_1, \dotsc, s_m = 0, \dotsc, s_n = 0, \dotsc, s_k} = \tuple {q_{i,3}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_m = R, \dotsc, d_n = R, \dotsc, S}$
If tapes $m$ and $n$ scan $0$ at the same time, switch to part $3$ and move them right.
$\map \delta {q_{i,3}, B, s_1, \dotsc, s_m = B, \dotsc, s_n = B, \dotsc, s_k} = \tuple {q_{i,3}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_m = R, \dotsc, d_n = R, \dotsc, S}$
$\map \delta {q_{i,4}, B, s_1, \dotsc, s_m = B, \dotsc, s_n = B, \dotsc, s_k} = \tuple {q_{i,4}, B, s_1, \dotsc, s_k, S, S, \dotsc, d_m = R, \dotsc, d_n = R, \dotsc, S}$
In either of the final parts, while the tapes are scanning $B$, move them right.
$\map \delta {q_{i,3}, B, s_1, \dotsc, s_m = 0, \dotsc, s_n = 0, \dotsc, s_k} = \tuple {q_{j,1}, B, s_1, \dotsc, s_m = B, \dotsc, s_n = B, \dotsc, s_k, S, S, \dotsc, S}$
$\map \delta {q_{i,4}, B, s_1, \dotsc, s_m = 0, \dotsc, s_n = 0, \dotsc, s_k} = \tuple {q_{i + 1,1}, B, s_1, \dotsc, s_m = B, \dotsc, s_n = B, \dotsc, s_k, S, S, \dotsc, S}$
If both tapes scan $0$, erase those symbols. If in part $3$, jump to the coded line. In part $4$, advance to the next line.
Before comparing the values of the two tapes, a few special cases are checked:

If we are comparing a register to itself, we will always need to jump. Do that immediately.
If both registers are zero, immediately jump. If one but not the other is, move to the next line.
At this point, both registers are nonzero, so we can safely leave a mark at their current position to restore the values later.
We do just that, and then move both tapes left until one of them hits their pre-set end marker.
If both hit the end, the registers were equal, so we transition to state $q_{i,3}$. Otherwise, they were unequal, so we transition to state $q_{i,4}$.
Both states restore the original values of the registers, based on the marks we left earlier. They only differ in that we jump to a different line of $P$ once complete.
Note that since both tapes are moved the same amount, they must encounter the current-position marks on the same step.

Termination
As $P$ was normalized, termination can only occur by attempting to transition to line $\map \lambda P + 1$.
In $T$, that is encoded by the state $q_{\map \lambda P, 1}$.
As the outputs for $P$ are $\set {0, 1}$, these are the possible values for $r_1$.
All that is left to do is test if $r_1$ is $1$, and accept if it is.
If so, $T_1 = 0 q_{\map \lambda P, 1} B$, so the scanned symbol is $B$.

$\map \delta {q_{\map \lambda P, 1}, B, s_1 = B, s_2, \dotsc, s_k} = \tuple {q_F, B, s_1, \dotsc, s_k, S, S, \dotsc, S}$

If $r_1 = 0$, $T_1 = q_{\map \lambda P, 1} 0$, and no transition is possible.
In that case, $T$ halts without accepting.
Therefore, $T$ halts whenever $P$ halts, and accepts whenever it outputs $1$.
$\Box$
By Multitape Turing Machine Reduces to Turing Machine, there is a Turing machine $T'$ with these same properties.
$\blacksquare$





