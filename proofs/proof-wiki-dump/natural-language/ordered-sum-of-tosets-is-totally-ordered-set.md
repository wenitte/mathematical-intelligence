# 

Source: https://proofwiki.org/wiki/Ordered_Sum_of_Tosets_is_Totally_Ordered_Set


This page is deprecated.In particular: Ordered Sum as defined in 1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis incompatible with definition of Definition:Order SumTo discuss this page in more detail, feel free to use the talk page.


Theorem
Let $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ be tosets.
Let $S + T = \struct {S \cup T, \preceq}$ be the ordered sum of $S$ and $T$.

Then $\struct {S \cup T, \preceq}$ is itself a toset.


General Result
Let $S_1, S_2, \ldots, S_n$ all be tosets.
Let $T_n$ be the ordered sum of $S_1, S_2, \ldots, S_n$:

$\forall n \in \N_{>0}: T_n = \begin{cases}
S_1 & : n = 1 \\
T_{n - 1} + S_n & : n > 1
\end{cases}$
Then $T_n$ is a toset.


Proof
By definition of ordered sum, we have that:

If $a, b \in S$, then $a \preceq b \iff a \preceq_1 b$.
Otherwise, if $a, b \in T$, then $a \preceq b \iff a \preceq_2 b$.
If neither of these is the case, then $a \in S, b \in T \iff a \preceq b$.

First we show that $\preceq$ is connected.
We note that as $\struct {S, \preceq_1}$ and $\struct {T, \preceq_2}$ are both tosets, then $\preceq_1$ and $\preceq_2$ are both connected.
Let $a, b \in S \cup T$.
There are three cases:

$(1): \quad a, b \in S$, in which case $a \preceq_1 b$ or $b \preceq_1 a$
$(2): \quad a, b \notin S$, in which case $a \preceq_2 b$ or $b \preceq_2 a$
$(3): \quad$ Otherwise, in which case either $a \in S, b \notin S$ or $a \notin S, b \in S$.
By definition of $\preceq$ it follows that $a \preceq b$ or $b \preceq a$, but clearly not both.
So in all cases $a \preceq b$ or $b \preceq a$, and $\preceq$ is connected.

Now we check in turn each of the criteria for an ordering:


Reflexivity
We have by definition of set union:

$\forall a \in S \cup T: a \in S \lor a \in T$
and so either $a \preceq_1 a$ or $a \preceq_2 a$, showing $a \preceq a$.
So $\preceq$ is reflexive.
$\Box$


Transitivity
Suppose $a \preceq b$ and $b \preceq c$.
We proceed on a case-by-case basis.
There are eight of these, (indirectly) from Cardinality of Power Set of Finite Set.

Suppose $a, b, c \in S$. Then $a \preceq c$ by transitivity of $\preceq_1$.
Suppose $a, b \in S, c \notin S$. Then $a \preceq c$ by definition of $\preceq$.
Suppose $a \in S, b, c \notin S$. Then $a \preceq c$ by definition of $\preceq$.
Suppose $a, b, c \notin S$. Then $a \preceq c$ by transitivity of $\preceq_2$.

There are four other cases to consider:

$a, c \in S, b \notin S$
$b, c \in S, a \notin S$
$c \in S, a, b \notin S$
$b \in S, a, c \notin S$.
None of these can happen as otherwise one of $a \npreceq b$ or $b \npreceq c$ would be the case.
So we have shown that $\preceq$ is transitive.
$\Box$


Antisymmetry
Suppose $a \preceq b$ and $b \preceq a$.

It can not be the case that $a \in S$ and $b \notin S$ because then $b \npreceq a$.
It can not be the case that $a \notin S$ and $b \in S$ because then $a \npreceq b$.
So either $a, b \in S$ or $a, b \notin S$.

If $a, b \in S$ then $a = b$ by antisymmetry of $\preceq_1$.
If $a, b \notin S$ then $a = b$ by antisymmetry of $\preceq_2$.
Thus in all cases it can be seen that $a \preceq b \preceq a \implies a = b$.
So $\preceq$ is antisymmetric.
$\Box$

So we have shown that:

$\preceq$ is connected
$\preceq$ is reflexive, transitive and antisymmetric.
Thus by definition, $\preceq$ is a total ordering and so $\struct {S \cup T, \preceq}$ is a toset.
$\blacksquare$


Sources
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 3.4$: Ordered sums and products of ordered sets




