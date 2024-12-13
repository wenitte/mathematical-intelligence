# 

Source: https://proofwiki.org/wiki/Set_Closure_is_Smallest_Closed_Set/Closure_Operator


This article needs to be linked to other articles.In particular: including "smallest"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $S$ be a set.
Let $\cl: \powerset S \to \powerset S$ be a closure operator.
Let $T \subseteq S$.
Then $\map \cl T$ is the smallest closed set (with respect to $\cl$) containing $T$ as a subset.


Proof
By definition, $\map \cl T$ is closed.
Let $C$ be closed.
Let $T \subseteq C$.
By the definition of closure operator, $\cl$ is $\subseteq$-increasing.
So:

$\map \cl T \subseteq \map \cl C$
Since $C$ is closed, $\map \cl C = C$.
So:

$\map \cl T \subseteq C$
Thus $\map \cl T$ is the smallest closed set containing $T$ as a subset.
$\blacksquare$





