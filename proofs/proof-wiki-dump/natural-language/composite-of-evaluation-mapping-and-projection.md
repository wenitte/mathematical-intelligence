# 

Source: https://proofwiki.org/wiki/Composite_of_Evaluation_Mapping_and_Projection


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $X$ be a topological space.

Let $\family {Y_i}_{i \mathop \in I}$ be an indexed family of topological spaces for some indexing set $I$.
Let $\family {f_i : X \to Y_i}_{i \mathop \in I}$ be an indexed family of continuous mappings.

Let $\ds Y = \prod_{i \mathop \in I} Y_i$ be the product space of $\family {Y_i}_{i \mathop \in I}$. 
Let $f : X \to Y$ be the evaluation mapping induced by $\family{f_i}_{i \mathop \in I}$.

Let:

$pr_i : Y \to Y_i$ denote the $i$th projection on $Y$

Then:

$\forall i \in I: pr_i \circ f = f_i$


Proof
By definition of projection:










\(\ds \forall x \in X, i \in I: \, \)



\(\ds \map {\paren{pr_i \circ f} } x\)

\(=\)







\(\ds \map {pr_i} {\map f x}\)





Definition of Composite Mapping














\(\ds \)

\(=\)







\(\ds \map {pr_i} {\family{\map {f_i} x} }\)





Definition of Evaluation Mapping














\(\ds \)

\(=\)







\(\ds \map {f_i} x\)





Definition of Projection



From Equality of Mappings:

$\forall i \in I : pr_i \circ f = f_i$
$\blacksquare$





