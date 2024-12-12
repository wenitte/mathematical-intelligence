# 

Source: https://proofwiki.org/wiki/Generalized_Sum_over_Subset_of_Absolutely_Convergent_Generalized_Sum_is_Absolutely_Convergent


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $V$ be a Banach space.

Let $\family {v_i}_{i \mathop \in I}$ be an indexed family of elements of $V$.
Let the generalized sum $\ds \sum_{i \mathop \in I} v_i$ be absolutely net convergent.

Let $J \subseteq I$.

Then:

the generalized sum $\ds \sum_{j \mathop \in J} v_j$ is absolutely net convergent.


Proof
By definition  of absolute net convergence, let:

$\ds \sum_{i \mathop \in I} \norm{v_i} = M$
Let $F \subseteq J$ be finite.
From Subset Relation is Transitive:

$F \subseteq I$
From Absolutely Convergent Generalized Sum Converges to Supremum:

$\ds \sum_{j \mathop \in F} \norm{v_j} \le M$
Since $F \subseteq J$ was arbitrary, it follows that:

$\forall F \subseteq J : F$ is finite $: \ds \sum_{j \mathop \in F} \norm{v_j} \le M$
From Bounded Generalized Sum is Absolutely Convergent:

$\ds \sum_{j \mathop \in J} \norm{v_j}$ is absolutely net convergent
$\blacksquare$





