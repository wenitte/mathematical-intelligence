# 

Source: https://proofwiki.org/wiki/Internal_Group_Direct_Product_is_Injective/General_Result



Theorem
Let $G$ be a group whose identity is $e$.
Let $\sequence {H_n}$ be a sequence of subgroups of $G$.
Let $\ds \phi_n: \prod_{j \mathop = 1}^n H_j \to G$ be a mapping defined by:

$\ds \map {\phi_n} {h_1, h_2, \ldots, h_n} = \prod_{j \mathop = 1}^n h_j$

Then $\phi_n$ is injective if and only if:

$\forall i, j \in \set {1, 2, \ldots, n}: i \ne j \implies H_i \cap H_j = \set e$
That is, if and only if $\sequence {H_n}$ is a sequence of independent subgroups.


Proof
Necessary Condition
Let $\ds \phi_n: \prod_{j \mathop = 1}^n H_j \to G$ be a mapping defined by:

$\ds \map {\phi_n} {h_1, h_2, \ldots, h_n} = \prod_{j \mathop = 1}^n h_j$

Let $\phi_n$ be an injection.
Let $\map {\phi_n} {h_1, h_2, \ldots, h_n} = \map {\phi_n} {g_1, g_2, \ldots, g_n}$.
As $\phi_n$ is injective:

$\tuple {h_1, h_2, \ldots, h_n} = \tuple {g_1, g_2, \ldots, g_n}$
and thus

$\forall i \in \set {1, 2, \ldots, n}: h_i = g_i$

From the definition of $\phi_n$:

$\ds \prod_{j \mathop = 1}^n h_j = \prod_{j \mathop = 1}^n g_j$
Thus, each element of $G$ that can be expressed as a product of the form $\ds \prod_{j \mathop = 1}^n h_j$ can be thus expressed uniquely.

Let $i, j \in \set {1, 2, \ldots, n}: i \ne j$.
Suppose $h \in H_i \cap H_j$.















\(\ds h = h e\)

\(:\)







\(\ds h \in H_i, e \in H_j\)




















\(\ds h = e h\)

\(:\)







\(\ds e \in H_i, h \in H_j\)










Thus we see that:














\(\ds \map {\phi_n} {e, e, \ldots, h, \ldots, e, \ldots, e, e}\)

\(=\)







\(\ds \map {\phi_n} {e, e, \ldots, e, \ldots, h, \ldots, e, e}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {e, e, \ldots, h, \ldots, e, \ldots, e, e}\)

\(=\)







\(\ds \tuple {e, e, \ldots, e, \ldots, h, \ldots, e, e}\)














\(\ds \leadsto \ \ \)





\(\ds h\)

\(=\)







\(\ds e\)










Thus $H_i \cap H_j = \set e$.
This holds for all pairs of integers $i, j \in \set {1, 2, \ldots, n}$ where $i \ne j$.
Thus:

$\forall i, j \in \set {1, 2, \ldots, n}: i \ne j \implies H_i \cap H_j = \set e$
$\Box$


Sufficient Condition
Let:

$\forall i, j \in \set {1, 2, \ldots, n}: i \ne j \implies H_i \cap H_j = \set e$

Let:

$\map {\phi_n} {h_1, h_2, \ldots, h_n} = \map {\phi_n} {g_1, g_2, \ldots, g_n}$
Then:

$\ds \prod_{j \mathop = 1}^n h_j = \prod_{j \mathop = 1}^n g_j: h_j, g_j \in H_j$

For all $n \in \set {1, 2, \ldots, n}$, let $\map P n$ be the proposition:

If $\paren {\forall i, j \in \set {1, 2, \ldots, n}: i \ne j \implies H_i \cap H_j = \set e}$ then $\phi_n$ is injective.


Basis for the Induction
$\map P 1$ is trivially true.

$\map P 2$ is the case:

If $H_1 \cap H_2 = \set e$, then $\phi$ is injective
which has been proved above.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 2$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

If $\paren {\forall i, j \in \set {1, 2, \ldots, k}: i \ne j \implies H_i \cap H_j = \set e}$ then $\phi_k$ is injective.

Then we need to show:

If $\paren {\forall i, j \in \set {1, 2, \ldots, k + 1}: i \ne j \implies H_i \cap H_j = \set e}$ then $\phi_{k + 1}$ is injective.


Induction Step
This is our induction step:
Suppose:

$\map {\phi_{k + 1} } {h_1, h_2, \ldots, h_{k + 1} } = \map {\phi_{k + 1} } {g_1, g_2, \ldots, g_{k + 1} }$
Then:

$\ds \prod_{j \mathop = 1}^{k + 1} h_j = \prod_{j \mathop = 1}^{k + 1} g_j$
or:

$\ds \paren {\prod_{j \mathop = 1}^k h_j} h_{k + 1} = \paren {\prod_{j \mathop = 1}^k g_j} g_{k + 1}$
Thus:

$\ds g_{k + 1}^{-1} h_{k + 1} = \paren {\prod_{j \mathop = 1}^k g_j} \paren {\prod_{j \mathop = 1}^k h_j}^{-1}$
Then:

$g_{k + 1}^{-1} h_{k + 1} \in H_{k + 1}$
and hence:

$\ds \paren {\prod_{j \mathop = 1}^k g_j} \paren {\prod_{j \mathop = 1}^k h_j}^{-1} \in \bigcup_{i \mathop = 1}^k H_i$

But:

$\ds \paren {\prod_{j \mathop = 1}^k g_j} \paren {\prod_{j \mathop = 1}^k h_j}^{-1} \in \bigcup_{i \mathop = 1}^k H_i$
Thus:

$\ds g_{k + 1}^{-1} h_{k + 1} = \paren {\prod_{j \mathop = 1}^k g_j} \paren {\prod_{j \mathop = 1}^k h_j}^{-1} \in H_{k + 1} \cap \bigcup_{i \mathop = 1}^k H_i$
But from the induction hypothesis:

$\ds \bigcup_{i \mathop = 1}^k H_i = e$
So:

$\ds \bigcup_{i \mathop = 1}^k H_i \cap H_{k + 1} = \bigcup_{i \mathop = 1}^{k + 1} H_i = e$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Hence the result.
$\blacksquare$





