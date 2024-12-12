# 

Source: https://proofwiki.org/wiki/Coherent_Sequence_is_Partial_Sum_of_P-adic_Expansion/Lemma



Theorem
Let $p$ be a prime number.
Let $\sequence {\alpha_n}$ be a coherent sequence.
For all $n \in \N$, let $\sequence {b_{j, n} }_{0 \le j \le n}$ be a sequence such that:

$(1) \quad \ds \alpha_n = \sum_{j \mathop = 0}^n b_{j,n} p^j$
$(2) \quad \forall j: 0 \le j \le n: 0 \le b_{j, n} < p$

Then:

$\forall n \in \N: \alpha_n = \ds \sum_{i \mathop = 0}^n b_{i, i} p^i$


Proof
The theorem is proved by induction:


Basis for the Induction
$n = 0$ 
By definition:
$\alpha_0 = b_{0, 0}$
This is the basis for the induction.


Induction Hypothesis
This is our induction hypothesis:

$\alpha_k = \ds \sum_{i \mathop = 0}^k b_{i, i} p^i$
Now we need to show true for $n = k + 1$:

$\alpha_{k + 1} = \ds \sum_{i \mathop = 0}^{k + 1} b_{i, i} p^i$


Induction Step
This is our induction step.
From Difference of Consecutive terms of Coherent Sequence there exists $c_{k + 1} \in \Z$:

$(a) \quad 0 \le c_{k + 1} < p$
$(b) \quad \alpha_{k + 1} = c_{k + 1} p^{k + 1} + \alpha_k$
From the induction hypothesis:

$\alpha_{k + 1} = c_{k + 1} p^{k + 1} + \sum_{j \mathop = 0}^k b_{j, j} p^j$
From the Zero Padded Basis Representation it follows that the two sequences:

$\sequence {b_{j, k + 1} }_{0 \le j \le k + 1}$
and

$\sequence {b_{0, 0}, b_{1, 1}, \dots, b_{k - 1, k - 1}, b_{k, k}, c_{k + 1} }$
are equal.
Then:

$\forall j \in \closedint 0 {k + 1} : b_{j, k + 1} = b_{j, j}$
It follows that:

$\alpha_{k + 1} = \ds \sum_{i \mathop = 0}^{k + 1} b_{i, i} p^i$

By induction:

$\forall n \in \N: \alpha_n = \ds \sum_{i \mathop = 0}^n b_{i, i} p^i$
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.3$ Exploring $\Q_p$, Lemma $3.3.8$




