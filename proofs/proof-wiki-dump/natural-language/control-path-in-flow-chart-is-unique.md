# 

Source: https://proofwiki.org/wiki/Control_Path_in_Flow_Chart_is_Unique



Theorem
Let $C = \struct {F, P, V, E}$ be a flow chart.
Let $\struct {X, \set {f_g}, \set {p_q}}$ be an interpretation for $C$.
Let $b \in V$ and $x \in X$, and $N \in \N_{> 0}$.

Then, there is at most one length $N$ control path in $\struct {C, X}$, starting from $\tuple {b, x}$.


Proof
We will proceed by induction on $N$.

Basis for the Induction
Suppose $N = 1$.
Then, the control path consists of:

$\sequence {\tuple {b_1, x_1}}$
But the control path starts from $\tuple {b, x}$ by assumption.
Therefore:

$b_1 = b$
$x_1 = x$
and the control path is completely determined.
$\Box$


Induction Hypothesis
Now, suppose that there is at most one control path of length $N$, starting from $\tuple {b, x}$.
We need to show that there is at most one control path of length $N + 1$, starting from $\tuple {b, x}$.


Induction Step
If there is no length $N$ control path starting from $\tuple {b, x}$, then clearly there is no length $N + 1$ control path.
Otherwise, let $\sequence {\tuple {b_j, x_j}}_{1 \mathop \le j \mathop \le N}$ be the unique control path.

If $b_N \in V_F \cup V_J \cup V_I$, then it has out-degree $1$.
Thus:

$b_{N + 1}$ is uniquely incident from the only $e \in E$ which is itself incident from $b_N$.

If $b_N \in V_O$, then it has out-degree $0$.
Then, there is no $b_N b_{N + 1} \in E$, and thus there is no length $N + 1$ control path.

If $b_N \in V_P$, but $x_N \notin X_{b_N}$, then any extension to $\sequence {\tuple {b_j, x_j}}_j$ will violate the property:

$j < N \implies x_j \in X_{b_j}$
so there is no length $N + 1$ control path.

If $b_N \in V_P$ and $x_N \in X_{b_N}$, then $b_{N + 1}$ is completely determined by whether $x_N \in p_{b_N}$.

If $x_N \in p_{b_N}$, then $b_{N + 1}$ is unique such that $b_N b_{N + 1} \in E$ is labeled $\top$.
If $x_N \notin p_{b_N}$, then $b_{N + 1}$ is unique such that $b_N b_{N + 1} \in E$ is labeled $\bot$.
The above cover all cases for $b_{N + 1}$, so it is unique if it exists.

If $b_N \notin V_F$, then $x_{N + 1} = x_N$, completely determining it.
If $b_N \in V_F$, then $x_{N + 1} = \map {f_{b_N}} {x_N}$, if it exists.

Uniqueness follows from the definition of partial mapping.

Since both $b_{N + 1}$ and $x_{N + 1}$ are uniquely determined or do not exist, then $\tuple {b_{N + 1}, x_{N + 1}}$ is either unique, or fails to exist.
$\Box$

By Principle of Mathematical Induction, the result follows.
$\blacksquare$





