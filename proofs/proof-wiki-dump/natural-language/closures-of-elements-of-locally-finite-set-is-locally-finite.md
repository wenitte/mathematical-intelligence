# 

Source: https://proofwiki.org/wiki/Closures_of_Elements_of_Locally_Finite_Set_is_Locally_Finite


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $T = \struct{S, \tau}$ be a topological space.

Let $\AA$ be a locally finite set of subsets of $T$.

Then:

$\set{A^- : A \in \AA}$ is locally finite in $T$
where $A^-$ denotes the closure of $A$ in $T$.

Proof
Let $\BB = \set{A^- : A \in \AA}$.

Let $x \in S$.
By definition of locally finite set of subsets:

$\exists U_x \in \tau : x \in U_x :$ the set $\AA_x = \set{A \in \AA : A \cap U_x \ne \O}$ is finite

Let $\BB_x = \set{A^- \in \BB : A^- \cap U_x \ne \O}$
Let $A^- \in \BB_x$.
From Open Set Disjoint from Set is Disjoint from Closure:

$U_x \cap A \ne \O$
Hence:

$A \in \AA_x$
It follows that $\BB_x$ is finite.

Since $x$ was arbitrary, we have shown that:

$\forall x \in S : \exists U_x \in \tau : x \in U_x :$ the set $\BB_x = \set{A^- \in \BB : A^- \cap U_x \ne \O}$ is finite
Hence $\BB$ is locally finite set of subsets by definition.
$\blacksquare$





