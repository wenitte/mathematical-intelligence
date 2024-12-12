# 

Source: https://proofwiki.org/wiki/Evaluation_Mapping_is_Injective_iff_Mappings_Separate_Points


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $X$ be a topological space.

Let $\family {Y_i}_{i \mathop \in I}$ be an indexed family of topological spaces for some indexing set $I$.
Let $\family {f_i : X \to Y_i}_{i \mathop \in I}$ be an indexed family of continuous mappings.

Let $\ds Y = \prod_{i \mathop \in I} Y_i$ be the product space of $\family {Y_i}_{i \mathop \in I}$. 

Let $f : X \to Y$ be the evaluation mapping induced by $\family{f_i}_{i \mathop \in I}$.

Then:

$f$ is an injection if and only if $\family {f_i : X \to Y_i}_{i \mathop \in I}$ separates points
Proof
We have:

$f$ is an injection





\(\ds \iff \ \ \)

\(\ds \forall x, y \in X : x \ne y : \ \ \)





\(\ds \map f x\)

\(\ne\)







\(\ds \map f y\)





Definition of Injection






\(\ds \iff \ \ \)

\(\ds \forall x, y \in X : x \ne y : \ \ \)





\(\ds \family{ \map {f_i} x }_{i \in I}\)

\(\ne\)







\(\ds \family{ \map {f_i} y }_{i \in I}\)





Definition of Evaluation Mapping






\(\ds \iff \ \ \)

\(\ds \forall x, y \in X : x \ne y : \exists i \in I : \ \ \)





\(\ds \map {f_i} x\)

\(\ne\)







\(\ds \map {f_i} y\)





Definition of Cartesian Product of Family






\(\ds \iff \ \ \)

\(\ds \family {f_i : X \to Y_i}_{i \mathop \in I} \text{ separates points} \ \ \)





\(\ds \)

\(\)







\(\ds \)





Definition of Mappings Separating Points



$\blacksquare$





