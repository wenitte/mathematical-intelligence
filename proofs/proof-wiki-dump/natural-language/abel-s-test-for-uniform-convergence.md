# 

Source: https://proofwiki.org/wiki/Abel%27s_Test_for_Uniform_Convergence


This page has been identified as a candidate for refactoring of basic complexity.In particular: usualUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\sequence {\map {a_n} z}$ and $\sequence {\map {b_n} z}$ be sequences of complex functions on a compact set $K$.
Let $\sequence {\map {a_n} z}$ be such that:

$\sequence {\map {a_n} z}$ is bounded in $K$
$\ds \sum \size {\map {a_n} z - \map {a_{n + 1} } z}$ is convergent with a sum which is bounded in $K$
$\ds \sum \map {b_n} z$ is uniformly convergent in $K$.

Then $\ds \sum \map {a_n} z \map {b_n} z$ is uniformly convergent on $K$.


Proof

This article needs to be tidied.In particular: Use $\mathsf{Pr} \infty \mathsf{fWiki}$ templates in order to make this page readablePlease fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This theorem requires a proof.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
First we modify the statement of Abel's Lemma

Lemma
Suppose $\sum b_k$ converges.
Let $B_k = b_k + b_{k + 1} + b_{k + 2} + \cdots$
Then:

$a_n b_n + \cdots + a_{n + k} b_{n + k} = B_n a_n + B_{n + 1} \paren {a_{n + 1} - a_n} + \cdots + B_{n + k} \paren {a_{n + k} - a_{n + k - 1} } - B_{n + k + 1} a_{n + k}$
Proof of lemma













\(\ds a_n b_n + \cdots + a_{n + k} b_{n + k}\)

\(=\)







\(\ds a_n \paren {B_n - B_{n + 1} } + \cdots + a_{n + k} \paren {B_{n + k} - B_{n + k + 1} }\)




















\(\ds \)

\(=\)







\(\ds B_n a_n + B_{n + 1} \paren {a_{n + 1} - a_n} + \cdots + B_{n + k} \paren {a_{n + k} - a_{n + k - 1} } - B_{n + k + 1} a_{n + k}\)









$\Box$


Proof of theorem
We show that $\ds \sum_{j\mathop = n}^{n + k} \map {a_j} z \map {b_j} z$ is uniformly small if $n$ is large enough.
Using the notation of the lemma, since $\map {B_n} z \to 0$ uniformly, let $n$ be so large that $\size {\map {B_N} z} \le \epsilon$ in $K$ for all $N \ge n$.
Since $\sequence {\map {a_n} z}$ is uniformly bounded in $K$, let $\size {\map {a_n} z} \le M$ for all $z \in K$.
Since $\ds \sum \size {\map {a_n} z - \map {a_{n + 1} } z}$ is convergent with a sum which is bounded in $K$, let $n$ be so large that:

$\forall k \in \N: \size {a_{n + 1} - a_n} + \cdots + \size {a_{n + k} - a_{n + k - 1} } \le \epsilon$ for all $z \in K$
then we have:

$\forall z \in K: \size {B_{n + 1} \paren {a_{n + 1} - a_n} } + \cdots + \size {B_{n + k} \paren {a_{n + k} - a_{n + k - 1} } } \le M \epsilon$
Therefore:














\(\ds \size {a_n b_n + \cdots + a_{n + k} b_{n + k} }\)

\(=\)







\(\ds \size {B_n a_n + B_{n + 1} \paren {a_{n + 1} - a_n} + \cdots + B_{n + k} \paren {a_{n + k} - a_{n + k - 1} } + B_{n + k + 1} a_{n + k} }\)





Lemma














\(\ds \)

\(\le\)







\(\ds \size {B_n a_n} + \size {B_{n + 1} \paren {a_{n + 1} - a_n} } + \cdots + \size {B_{n + k} \paren {a_{n + k} - a_{n + k - 1} } } + \size {B_{n + k + 1} a_{n + k} }\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(\le\)







\(\ds M \epsilon + M \epsilon + M \epsilon\)




















\(\ds \)

\(=\)







\(\ds 3 M \epsilon\)









Therefore, $\ds \sum \map {a_n} z \map {b_n} z$ is uniformly convergent on $K$.

$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This needs considerable tedious hard slog to complete it.In particular: by my understanding, we are only so far as having proved it for monotone sequences, but a question remains as to what that actually means in this context.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Source of Name
This entry was named for Niels Henrik Abel.


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Abel's test: 2. Abel's test for uniform convergence.




