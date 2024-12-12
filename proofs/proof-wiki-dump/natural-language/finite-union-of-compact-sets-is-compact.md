# 

Source: https://proofwiki.org/wiki/Finite_Union_of_Compact_Sets_is_Compact



Theorem
Let $T = \struct {S, \tau}$ be a topological space.
Let $n \in \N$ be a natural number.
Let $\sequence {U_i}_{1 \mathop \le i \mathop \le n}$ be a finite sequence of compact subsets of $T$.
Let $\UU_n := \ds \bigcup_{i \mathop = 1}^n U_i$ be the union of $\sequence {U_i}$.

Then $\UU_n$ is compact in $T$.


Proof
Proof by induction:
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\UU_n := \ds \bigcup_{i \mathop = 1}^n U_i$ is compact in $T$.

$\map P 0$ is the case:

$\UU_0 := \ds \bigcup_{i \mathop = 1}^0 U_i$
From Union of Empty Set:

$\ds \bigcup_{i \mathop = 1}^0 U_i = \O$
From Empty Set is Compact Space it follows that:

$\UU_0$ is compact in $T$.

$\map P 1$ is true, as this just says:

$U_1$ is compact in $T$.


Basis for the Induction
$\map P 2$ is the case:

$U_1 \cup U_2$ is compact in $T$.
This is proved in Union of Two Compact Sets is Compact.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\UU_k := \ds \bigcup_{i \mathop = 1}^k U_i$ is compact in $T$.

Then we need to show:

$\UU_{k+1} := \ds \bigcup_{i \mathop = 1}^{k + 1} U_i$ is compact in $T$.


Induction Step
This is our induction step:
We have that:

$\ds \bigcup_{i \mathop = 1}^{k + 1} U_i = \paren {\bigcup_{i \mathop = 1}^k U_i} \cup U_{k + 1}$
By the induction hypothesis:

$\UU_k$ is compact in $T$.
By the basis for the induction:

$\UU_k \cup U_{k + 1}$ is compact in $T$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N: \bigcup_{i \mathop = 1}^n U_i$ is compact in $T$.
$\blacksquare$





