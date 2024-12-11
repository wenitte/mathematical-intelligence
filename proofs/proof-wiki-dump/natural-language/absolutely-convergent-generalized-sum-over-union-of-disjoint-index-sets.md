# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Generalized_Sum_over_Union_of_Disjoint_Index_Sets


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $V$ be a Banach space.

Let $I$ and $J$ be disjoint indexing sets.

Let $K = I \cup J$.
Let $\family{v_k}_{k \mathop \in K}$ be an indexed family of elements of $V$.

Then:

the generalized sum $\ds \sum_{k \mathop \in K} v_k$ converges absolutely
if and only if

the generalized sums $\ds \paren{\sum_{i \mathop \in I} v_i}$ and $\ds \paren{\sum_{j \mathop \in J} v_j}$ converge absolutely

In which case:

$\ds \sum_{k \mathop \in K} \norm{v_k} = \paren{\sum_{i \mathop \in I} \norm{v_i}} + \paren{\sum_{j \mathop \in J} \norm{v_j}}$


Proof
Necessary Condition
Let $\ds \sum_{k \mathop \in K} v_k$ converge absolutely.
By definition of absolute net convergence:

$\ds \sum_{k \mathop \in K} \norm{v_k}$ converges.
From Generalized Sum over Subset of Absolutely Convergent Generalized Sum is Absolutely Convergent:

$\ds \paren{\sum_{i \mathop \in I} \norm{v_i}}$ and $\ds \paren{\sum_{j \mathop \in J} \norm{v_j}}$ converge
By definition of absolute net convergence:

$\ds \paren{\sum_{i \mathop \in I} v_i}$ and $\ds \paren{\sum_{j \mathop \in J} v_j}$ converge absolutely.
From Generalized Sum over Union of Disjoint Index Sets:

$\ds \sum_{k \mathop \in K} \norm{v_k} = \paren{\sum_{i \mathop \in I} \norm{v_i}} + \paren{\sum_{j \mathop \in J} \norm{v_j}}$
$\Box$

Sufficient Condition
Let $\ds \paren{\sum_{i \mathop \in I} v_i}$ and $\ds \paren{\sum_{j \mathop \in J} v_j}$ converge absolutely.
By definition of absolute net convergence:

$\ds \paren{\sum_{i \mathop \in I} \norm{v_i}}$ and $\ds \paren{\sum_{j \mathop \in J} \norm{v_j}}$ converge
From Generalized Sum over Union of Disjoint Index Sets:

$\ds \sum_{k \mathop \in K} \norm{v_k} = \paren{\sum_{i \mathop \in I} \norm{v_i}} + \paren{\sum_{j \mathop \in J} \norm{v_j}}$
By definition of absolute net convergence:

$\ds \sum_{k \mathop \in K} v_k$ converges absolutely.
$\blacksquare$





