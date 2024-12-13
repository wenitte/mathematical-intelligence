# 

Source: https://proofwiki.org/wiki/Internal_and_External_Group_Direct_Products_are_Isomorphic



Theorem
Let $G$ be a group whose identity is $e$.

Then $G$ is the (external) group direct product of $G_1, G_2, \ldots, G_n$ if and only if $G$ is the internal group direct product of $N_1, N_2, \ldots, N_n$ such that:

$\forall i \in \N_n: N_i \cong G_i$
where:

$\cong$ denotes (group) isomorphism
$\N_n$ denotes $\set {1, 2, \ldots, n}$


Proof
Necessary Condition
Let $G$ be the external direct product of groups $G_1, G_2, \ldots, G_n$.
For all $i \in \N_n$, let $N_i$ be defined as the set:

$N_i = \set e \times \cdots \times \set e \times G_i \times \set e \times \cdots \times \set e$
of elements which have entry $e$ everywhere except possibly in the $i$th co-ordinate.
It remains to be checked that:

$(1): \quad N_i$ is isomorphic to $G_i$
$(2): \quad N_i$ is a normal subgroup of $G$
$(3): \quad$ Every element of $G$ has a unique expression:
$\tuple {g_1, \ldots, g_n} = \tuple {g_1, e, \ldots, e} \tuple {e, g_2, e \ldots e} \ldots \tuple {e, \ldots, g_n}$
as a product of elements of $N_1, \ldots, N_n$.


$N_i$ is isomorphic to $G_i$

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$N_i$ is a normal subgroup of $G$

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Every element of $G$ has a unique expression

This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sufficient Condition
Now let $G$ be the internal group direct product of $N_1, N_2, \ldots, N_n$.
We define a mapping $\theta: G \to N_1 \times N_2 \times \cdots \times N_n$ by:

$\map \theta {g_1 g_2 \ldots g_n} = \tuple {g_1, g_2, \ldots, g_n}$

The fact that $\theta$ is a bijection follows from the definitions.

It remains to be shown that $\theta$ is a homomorphism.

The proof proceeds by induction.
For all $n \in \Z_{\ge 2}$, let $\map P n$ be the proposition:

$\map \theta {g_1 g_2 \ldots g_n} \map \theta {h_1 h_2 \ldots h_n} = \map \theta {g_1 g_2 \ldots g_n h_1 h_2 \ldots h_n}$


Basis for the Induction
$\map P 2$ is the case:














\(\ds \map \theta {g_1 g_2} \map \theta {h_1 h_2}\)

\(=\)







\(\ds \tuple {g_1, g_2} \tuple {h_1, h_2}\)





Definition of $\theta$














\(\ds \)

\(=\)







\(\ds \tuple {g_1 h_1, g_2 h_2}\)




















\(\ds \)

\(=\)







\(\ds \map \theta {g_1 h_1 g_2 h_2}\)





Definition of $\theta$














\(\ds \)

\(=\)







\(\ds \map \theta {g_1 g_2 h_1 h_2}\)





Internal Group Direct Product Commutativity: $h_1 g_2 = g_2 h_1$



Thus $\map P 2$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\map \theta {g_1 g_2 \ldots g_k} \map \theta {h_1 h_2 \ldots h_k} = \map \theta {g_1 g_2 \ldots g_k h_1 h_2 \ldots h_k}$

from which it is to be shown that:

$\map \theta {g_1 g_2 \ldots g_{k + 1} } \map \theta {h_1 h_2 \ldots h_{k + 1} } = \map \theta {g_1 g_2 \ldots g_{k + 1} h_1 h_2 \ldots h_{k + 1} }$


Induction Step
This is the induction step:














\(\ds \)

\(\)







\(\ds \map \theta {g_1 g_2 \ldots g_{k + 1} } \map \theta {h_1 h_2 \ldots h_{k + 1} }\)




















\(\ds \)

\(=\)







\(\ds \map \theta {\paren {g_1 g_2 \ldots g_k} g_{k + 1} } \map \theta {\paren {h_1 h_2 \ldots h_k} h_{k + 1} }\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds \map \theta {\paren {g_1 g_2 \ldots g_k} g_{k + 1} \paren {h_1 h_2 \ldots h_k} h_{k + 1} }\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \map \theta {g_1 g_2 \ldots g_k g_{k + 1} h_1 h_2 \ldots h_k h_{k + 1} }\)





Group Axiom $\text G 1$: Associativity



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \Z_{>1}: \map \theta {g_1 g_2 \ldots g_n} \map \theta {h_1 h_2 \ldots h_n} = \map \theta {g_1 g_2 \ldots g_n h_1 h_2 \ldots h_n}$
So $\theta$ is a homomorphism.
$\blacksquare$


Sources
1967: John D. Dixon: Problems in Group Theory ... (previous) ... (next): Introduction: Notation
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $13$: Direct products: Proposition $13.7$




