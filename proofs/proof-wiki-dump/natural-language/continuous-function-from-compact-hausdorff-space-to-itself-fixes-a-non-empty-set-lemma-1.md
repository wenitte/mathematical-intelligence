# 

Source: https://proofwiki.org/wiki/Continuous_Function_from_Compact_Hausdorff_Space_to_Itself_Fixes_a_Non-Empty_Set/Lemma_1



Lemma
Let $\struct {X, \tau}$ be a compact Hausdorff space. 
Let $f : X \to X$ be a continuous function.
Define a sequence of sets $\sequence {X_i}_{i \mathop \in \N}$ by:

$X_i = \begin{cases} X & : i = 1 \\ \map f {X_{i - 1} } & : i \ge 2 \end{cases}$

Then, for each $i \in \N$:

$X_i$ is closed
$X_i$ is non-empty
$X_{i + 1} \subseteq X_i$.


Proof
For all $n \in \N$, let $\map P n$ be the proposition:

the set $X_n$ is non-empty and closed with $X_{n + 1} \subseteq X_n$.


Base Case
From Underlying Set of Topological Space is Clopen:

$X$ is closed.
We have that $X \ne \O$.
We also have that: 

$X_2 = \map f {X_1} \subseteq X = X_1$
So $\map P 1$ is true.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.
So, suppose that: 

$X_k$ is closed and non-empty,
and:

$X_{k + 1} \subseteq X_k$
This is our induction hypothesis.


Induction Step
Now we need to show that: 

$X_{k + 1}$ is closed and non-empty,
and:

$X_{k + 2} \subseteq X_{k + 1}$

We have: 

$X_{k + 1} = \map f {X_k}$
Note that: 

$X_k \subseteq X$
Since $X_k$ is non-empty, we have: 

$X_{k + 1} \ne \O$
From Closed Subspace of Compact Space is Compact, we have: 

$X_k$ is compact.
From Continuous Image of Compact Space is Compact, we therefore have: 

$X_{k + 1} = \map f {X_k}$ is compact.
From Compact Subspace of Hausdorff Space is Closed, we have: 

$X_{k + 1}$ is closed.
So:

$X_{k + 1}$ is non-empty and closed.
From: 

$X_{k + 1} \subseteq X_k$
We obtain: 

$\map f {X_{k + 1} } \subseteq \map f {X_k}$
and so:

$X_{k + 2} \subseteq X_{k + 1}$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$





