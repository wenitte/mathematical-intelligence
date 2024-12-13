# 

Source: https://proofwiki.org/wiki/Image_under_Left-Total_Relation_is_Empty_iff_Subset_is_Empty


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\RR \subseteq S \times T$ be a left-total relation.
Let $A \subseteq S$.

Then:

$\RR \sqbrk A = \O$ if and only if $A = \O$
Proof
Necessary Condition
We prove the contrapositive statement:

$A \ne \O \implies \RR \sqbrk A \ne \O$

Let $s \in A$.

By definition of left-total relation:

$\exists t \in T : \tuple{s, t} \in R$
By definition of image:

$\exists t \in T : t \in \RR \sqbrk A$

Hence:

$\RR \sqbrk A \ne \O$

The result follows from Rule of Transposition.
$\Box$

Sufficient Condition
Follows immediately from Image of Empty Set is Empty Set.
$\blacksquare$





