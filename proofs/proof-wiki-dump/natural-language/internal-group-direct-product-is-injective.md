# 

Source: https://proofwiki.org/wiki/Internal_Group_Direct_Product_is_Injective



Theorem
Let $G$ be a group whose identity is $e$.
Let $H_1, H_2$ be subgroups of $G$.
Let $\phi: H_1 \times H_2 \to G$ be a mapping defined by:

$\map \phi {h_1, h_2} = h_1 h_2$

Then $\phi$ is injective if and only if:

$H_1 \cap H_2 = \set e$


General Result
Let $G$ be a group whose identity is $e$.
Let $\sequence {H_n}$ be a sequence of subgroups of $G$.
Let $\ds \phi_n: \prod_{j \mathop = 1}^n H_j \to G$ be a mapping defined by:

$\ds \map {\phi_n} {h_1, h_2, \ldots, h_n} = \prod_{j \mathop = 1}^n h_j$

Then $\phi_n$ is injective if and only if:

$\forall i, j \in \set {1, 2, \ldots, n}: i \ne j \implies H_i \cap H_j = \set e$
That is, if and only if $\sequence {H_n}$ is a sequence of independent subgroups.


Proof
Necessary Condition
Let $\phi$ be an injection.
Let $\map \phi {h_1, h_2} = \map \phi {k_1, k_2}$.
As $\phi$ is injective, this means that:

$\tuple {h_1, h_2} = \tuple {k_1, k_2}$
and thus:

$h_1 = k_1, h_2 = k_2$
From the definition of $\phi$, this means:

$h_1 h_2 = k_1 k_2$
Thus, each element of $G$ that can be expressed as a product of the form $h_1 h_2$ can be thus expressed uniquely.

Now, suppose $h \in H_1 \cap H_2$.
We have:














\(\ds h = h e\)

\(:\)







\(\ds h \in H_1, e \in H_2\)




















\(\ds h = e h\)

\(:\)







\(\ds e \in H_1, h \in H_2\)










Thus we see that:














\(\ds \map \phi {h, e}\)

\(=\)







\(\ds \map \phi {e, h}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {h, e}\)

\(=\)







\(\ds \tuple {e, h}\)














\(\ds \leadsto \ \ \)





\(\ds h\)

\(=\)







\(\ds e\)










Thus:

$H_1 \cap H_2 = \set e$
$\Box$


Sufficient Condition
Let $H_1 \cap H_2 = \set e$.
Let:

$\map \phi {h_1, h_2} = \map \phi {k_1, k_2}$
Then:

$h_1 h_2 = k_1 k_2: h_1, k_1 \in H_1, h_2, k_2 \in H_2$
Thus:

$k_1^{-1} h_1 = k_2 h_2^{-1}$
But:

$k_1^{-1} h_1 \in H_1$ and $k_2 h_2^{-1} \in H_2$
As they are equal, we have:

$k_1^{-1} h_1 = k_2 h_2^{-1} \in H_1 \cap H_2 = \set e$
It follows that:

$h_1 = k_1, h_2 = k_2$
and thus:

$\tuple {h_1, h_2} = \tuple {k_1, k_2}$
Thus $\phi$ is injective and the result follows.
$\blacksquare$





