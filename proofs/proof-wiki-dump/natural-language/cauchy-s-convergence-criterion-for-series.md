# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Convergence_Criterion_for_Series


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
A series $\ds \sum_{i \mathop = 0}^\infty a_i$ is convergent if and only if for every $\epsilon > 0$ there is a number $N \in \N$ such that:

$\size {a_{n + 1} + a_{n + 2} + \cdots + a_m} < \epsilon$
holds for all $n \ge N$ and $m > n$.


This article, or a section of it, needs explaining.In particular: What domain is $\sequence {a_n}$ in?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
Let:

$\ds s_n = \sum_{i \mathop = 0}^n a_i$
Then $\sequence {s_n}$ is a sequence in $\R$. 
From Cauchy's Convergence Criterion on Real Numbers, $\sequence {s_n}$ is convergent if and only if it is a Cauchy sequence.
For $m > n$ we have:

$\size {s_m - s_n} = \size {a_{n + 1} + a_{n + 2} + \cdots + a_m}$
$\blacksquare$





