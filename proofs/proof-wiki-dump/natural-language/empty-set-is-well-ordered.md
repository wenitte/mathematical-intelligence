# 

Source: https://proofwiki.org/wiki/Empty_Set_is_Well-Ordered


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: Q: What does $S$ have to do with anything?A: You can't have a relation without a set for it to be a relation on.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
Let $S$ be a set.
Let $\RR \subseteq S \times S$ be a relation on $S$.
Let $\O$ denote the empty set.
Let $\RR_\O$ denote the restriction of $\RR$ to $\O$.

Then $\struct {\O, \RR_\O}$ is a well-ordered set.


Proof 1
We have that $\O$ is well-ordered under $\RR$ if and only if every non-empty subset of $\O$ has a smallest element under $\RR$.
But $\O$ has no non-empty subset.
Hence this condition is satisfied vacuously.
The result follows.
$\blacksquare$


Proof 2
Let $V$ be a basic universe.
By definition of basic universe, $\O$ is an element of $V$.
By the Axiom of Transitivity, $\O$ is a class.
The result follows from Empty Class is Well-Ordered.
$\blacksquare$





