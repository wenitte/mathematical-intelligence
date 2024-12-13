# 

Source: https://proofwiki.org/wiki/Inequality_Rule_for_Absolutely_Convergent_Generalized_Sums


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $V$ be a Banach space.

Let $\family {v_i}_{i \mathop \in I}$ be an indexed family of elements of $V$.
Let the generalized sum $\ds \sum \set {v_i: i \in I}$ be absolutely net convergent.

Let $\family {w_i}_{i \mathop \in I}$ be an indexed family of elements of $V$:

$\forall i \in I : \norm{w_i} \le \norm{v_i}$

Then:

the generalized sum $\ds \sum_{i \mathop \in I} \norm{w_i}$ is absolutely net convergent
and:

$\ds \sum_{i \mathop \in I} \norm{w_i} \le \sum_{i \mathop \in I} \norm{v_i}$


Proof
By definition  of absolutely net convergence, let:

$\ds \sum_{i \mathop \in I} \norm{v_i} = M$

Let $F \subseteq I$ be finite.
From Absolutely Convergent Generalized Sum Converges to Supremum:

$\ds \sum_{i \mathop \in F} \norm{v_i} \le M$

So by hypothesis:

$\ds \sum_{i \mathop \in F} \norm{w_i}  \le \ds \sum_{i \mathop \in F} \norm{v_i} \le M$

Since $F \subseteq J$ was arbitrary, it follows that:

$\forall F \subseteq F : F$ is finite $: \ds \sum_{i \mathop \in F} \norm{w_i} \le M$
From Bounded Generalized Sum is Absolutely Convergent:

$\ds \sum_{i \mathop \in I} \norm{w_i}$ is absolutely net convergent

From Inequality Rule for Real Convergent Nets:

$\ds \sum_{i \mathop \in I} \norm{w_i} \le \sum_{i \mathop \in I} \norm{v_i}$
$\blacksquare$





