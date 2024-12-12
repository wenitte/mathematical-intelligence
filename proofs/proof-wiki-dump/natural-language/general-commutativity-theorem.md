# 

Source: https://proofwiki.org/wiki/General_Commutativity_Theorem



Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $\family {a_k}_{1 \mathop \le k \mathop \le n}$ be a sequence of elements of $S$.
Suppose that:

$\forall i, j \in \closedint 1 n: a_i \circ a_j = a_j \circ a_i$

Then for every permutation $\sigma: \N_n \to \N_n$:

$a_{\map \sigma 1} \circ \cdots \circ a_{\map \sigma n} = a_1 \circ \cdots \circ a_n$
where $\N_n$ is used here to denote the initial segment of $\N_{>0}$:

$\N_n = \set {1, 2, \ldots, n}$


Proof
The proof will proceed by the Principle of Mathematical Induction on $\N_{>0}$.
Let $T$ be the set of all $n \in \N_{>0}$ such that:

$a_{\map \sigma 1} \circ \cdots \circ a_{\map \sigma n} = a_1 \circ \cdots \circ a_n$
holds for all sequences $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ of $n$ elements of $S$ which satisfy:

$\forall i, j \in \closedint 1 n: a_i \circ a_j = a_j \circ a_i$
for every permutation $\sigma: \N_n \to \N_n$.


Basis for the Induction
We have that when $n = 1$:

$\map \sigma 1 = 1$
and so:

$a_{\map \sigma 1} = a_1$
for all $\sigma: \set 1 \to \set 1$.

Thus $1 \in T$.
This is our basis for the induction.


Induction Hypothesis
It is to be shown that, if $m \in T$ where $m \ge 1$, then it follows that $m + 1 \in T$.

This is the induction hypothesis:

$a_{\map \sigma 1} \circ \cdots \circ a_{\map \sigma m} = a_1 \circ \cdots \circ a_m$
holds for all sequences $\sequence {a_k}_{1 \mathop \le k \mathop \le m}$ of $m$ elements of $S$ which satisfy:

$\forall i, j \in \closedint 1 m: a_i \circ a_j = a_j \circ a_i$
for every permutation $\sigma: \N^*_m \to \N^*_m$.

It is to be demonstrated that it follows that:

$a_{\map \sigma 1} \circ \cdots \circ a_{\map \sigma {m + 1} } = a_1 \circ \cdots \circ a_{m + 1}$
holds for all sequences $\sequence {a_k}_{1 \mathop \le k \mathop \le m + 1}$ of $m + 1$ elements of $S$ which satisfy:

$\forall i, j \in \closedint 1 {m + 1}: a_i \circ a_j = a_j \circ a_i$
for every permutation $\sigma: \N_{m + 1} \to \N_{m + 1}$.


Induction Step
This is our induction step:
Suppose $m \in T$.
Let $\sequence {a_k}_{1 \le k \le m + 1}$ be a sequence of $m+1$ elements of $S$ which satisfy:

$\forall i, j \in \closedint 1 {n + 1}: a_i \circ a_j = a_j \circ a_i$
Let $\sigma: \N_{m + 1} \to \N_{m + 1}$ be a permutation of $\closedint {1 {m + 1}$.
There are three cases to consider:

$(1): \quad \map \sigma {m + 1} = m + 1$
$(2): \quad \map \sigma 1 = m + 1$
$(3): \quad \map \sigma r = m + 1$ for some $r \in \closedint 2 m$

$(1): \quad$ Suppose $\map \sigma {m + 1} = m + 1$.
Then the restriction of $\sigma$ to $\N_m$ is then a permutation of $\N_m$.
From the induction hypothesis:

$m \in T$:
Thus:

$a_{\map \sigma 1} \circ \cdots \circ a_{\map \sigma m} = a_1 \circ \cdots \circ a_m$
from which:














\(\ds a_{\map \sigma 1} \circ \cdots \circ a_{\map \sigma {m + 1} }\)

\(=\)







\(\ds \paren {a_{\map \sigma 1} \circ \cdots \circ a_{\map \sigma m} } \circ a_{\map \sigma {m + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {a_1 \circ \cdots \circ a_m} \circ a_{m + 1}\)




















\(\ds \)

\(=\)







\(\ds a_1 \circ \cdots \circ a_{m + 1}\)










$(2): \quad$ Suppose $\map \sigma 1 = m + 1$.

Let $\tau: \N^*_m \to \N^*_m$ be the mapping defined as:

$\forall k \in \closedint 1 m: \map \tau k = \map \sigma {k + 1}$

From Closed Interval of Naturally Ordered Semigroup with Successor equals Union with Successor:

$\closedint 1 {m + 1} = \closedint 1 m \cup \set {m + 1}$
Thus $\tau$ is clearly a permutation on $\closedint 1 m$.

Thus, as $m \in T$:

$a_{\map \tau 1} \circ \cdots \circ a_{\map \tau m} = a_1 \circ \cdots \circ a_m$

So:














\(\ds a_{\map \sigma 1} \circ \cdots \circ a_{\map \sigma {m + 1} }\)

\(=\)







\(\ds a_{\map \sigma 1} \circ \paren {a_{\map \sigma 2} \circ \cdots \circ a_{\map \sigma {m + 1} } }\)




















\(\ds \)

\(=\)







\(\ds a_{m + 1} \circ \paren {a_{\map \tau 1} \circ \cdots \circ a_{\map \tau m} }\)




















\(\ds \)

\(=\)







\(\ds a_{m + 1} \circ \paren {a_1 \circ \cdots \circ a_m}\)




















\(\ds \)

\(=\)







\(\ds \paren {a_1 \circ \cdots \circ a_m} \circ a_{m + 1}\)





Element Commutes with Product of Commuting Elements














\(\ds \)

\(=\)







\(\ds a_1 \circ \cdots \circ a_{m + 1}\)










$(3): \quad$ Suppose $\map \sigma r = m + 1$ for some $r \in \closedint 2 m$.

Let $\tau: \N_{m + 1} \to \N_{m + 1}$ be a mapping defined by:

$\forall k \in \N_{m + 1}: \map \tau k = \begin{cases}
\map \sigma k & : k \in \closedint 1 {r - 1} \\
\map \sigma {k + 1} & : k \in \closedint r m \\
m + 1 & : k = m + 1 \end{cases}$
It is seen that $\tau$ is a permutation of $\N_{m + 1}$.
So, by the first case:

$a_{\map \tau 1} \circ \cdots \circ a_{\map \tau {m + 1} } = a_1 \circ \cdots \circ a_{m + 1}$

Thus:














\(\ds a_{\map \sigma 1} \circ \cdots \circ a_{\map \sigma {m + 1} }\)

\(=\)







\(\ds \paren {a_{\map \sigma 1} \circ \cdots \circ a_{\map \sigma {r - 1} } } \circ \paren {a_{\map \sigma r} \circ \paren {a_{\map \sigma {r + 1} } \circ \cdots \circ a_{\map \sigma {m + 1} } } }\)




















\(\ds \)

\(=\)







\(\ds \paren {a_{\map \tau 1} \circ \cdots \circ a_{\map \tau {r - 1} } } \circ \paren {a_{\map \tau {m + 1} } \circ \paren {a_{\map \tau r} \circ \cdots \circ a_{\map \tau m} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {a_{\map \tau 1} \circ \cdots \circ a_{\map \tau {r - 1} } } \circ \paren {\paren {a_{\map \tau r} \circ \cdots \circ a_{\map \tau m} } \circ a_{\map \tau {m + 1} } }\)




















\(\ds \)

\(=\)







\(\ds a_{\map \tau 1} \circ \cdots \circ a_{\map \tau {m + 1} }\)




















\(\ds \)

\(=\)







\(\ds a_1 \circ \cdots \circ a_{m + 1}\)










So in all cases, $m + 1 \in T$.

Thus by the Principle of Mathematical Induction:

$T = \N_{>0}$
The result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.7$
1974: Thomas W. Hungerford: Algebra ... (previous) ... (next): $\text{I}$: Groups: $\S 1$: Semigroups, Monoids and Groups: Corollary $1.7$




