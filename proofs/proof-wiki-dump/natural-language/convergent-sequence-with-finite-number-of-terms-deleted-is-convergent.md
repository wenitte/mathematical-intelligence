# 

Source: https://proofwiki.org/wiki/Convergent_Sequence_with_Finite_Number_of_Terms_Deleted_is_Convergent


This page has been identified as a candidate for refactoring.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\struct {X, d}$ be a metric space.
Let $\sequence {x_k}$ be a sequence in $X$.
Let $\sequence {x_k}$ be convergent.

Let a finite number of terms be deleted from $\sequence {x_k}$.

Then the resulting subsequence is convergent.


Proof
Suppose the sequence $\sequence {x_k}$ converges to $x \in X$.
That is for every $\epsilon > 0$ there is some index $N$ such that $\map d {x_n, x} < \epsilon$ for all $n \ge N$.
The same $N$ will work for the new sequence with finitely many terms removed, so the new sequence converges to the same point $x$ as the original sequence.
For the second part note that also adding finitely many terms to a convergent sequence will still result in a convergent sequence.
This implies that removing finitely many terms from a divergent sequence will still result in a divergent sequence (if it were convergent then the original sequence must already have been convergent).


This article contains statements that are justified by handwavery.In particular: Very little more is being done here than repeat the exposition.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This page has been identified as a candidate for refactoring of basic complexity.In particular: First fix the exposition, then determine if the structure needs amendingUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma 1
Let $\struct {X, d}$ be a metric space.
Let $\sequence {x_k}$ be a sequence in $X$.
Let $\sequence {x_{n_k} }$ be a subsequence of $\sequence {x_k}$.

Then:

$\forall k \in \N: k \le n_k$


Proof of Lemma 1
Note that $1 \le n_1 < n_2 < \ldots < n_k < \ldots$ by definition of a subsequence.
We will proceed with induction on $k$ to prove our claim.
By definition of a subsequence:

$1 \le n_1$
This is the basis for the induction.

Suppose $k \le n_k$.  
Then:

$k + 1 \le n_k + 1$
By definition of a subsequence:

$n_k < n_{k + 1}$
Therefore:

$n_k + 1 \le n_{k + 1}$
Thus:

$k + 1 \le n_{k + 1}$
$\Box$


Lemma 2
Let $\struct {X, d}$ be a metric space.
Let $\sequence {x_k}$ be a convergent sequence in $X$.

Then every subsequence of $\sequence {x_k}$ is convergent.


Proof of Lemma 2
Let $\sequence {x_k}$ be a convergent sequence in $X$.  
Then $\exists L \in X$ such that $x_k \to L$ as $k \to \infty$.
Let $\sequence {x_{n_k} }$ be a subsequence of $\sequence {x_k}$.
We will show that $x_{n_k} \to L$ as $n_k \to \infty$.
Let $\epsilon >0$.
Then $\exists N \in \N$ such that:

$\forall k \ge N: \map d {x_k, L} < \epsilon$
From Lemma 1:

$n_k \ge k$
Therefore:

$\forall n_k \ge k \ge N: \map d {x_{n_k}, L} < \epsilon$
Hence $x_{n_k} \to L$ as $n_k \to \infty$.
$\blacksquare$


Also see
Tail of Convergent Series tends to Zero




