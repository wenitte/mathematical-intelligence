# 

Source: https://proofwiki.org/wiki/Proper_Well-Ordering_determines_Smallest_Elements


This page has been identified as a candidate for refactoring of medium complexity.In particular: See ideas in discussion. More importantly, this uses a weak notion of well-ordering. We need to figure out how to incorporate the stronger notion. Basically, this theorem shows that weakly well-ordered and proper implies strongly well-ordered.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $S$ be a class.
Let $\preceq$ be a proper well-ordering on $S$.
Let $B$ be a nonempty subclass of $S$.

Then $B$ has a $\preceq$-smallest element.


Proof
Because $B \ne \O$ it follows that $B$ has an element $x$.
If $x$ is the smallest element of $B$ then the theorem holds.
Otherwise, there is an element $y \in B$ such that $x \npreceq y$.
By Well-Ordering is Total Ordering, $y \prec x$.
Thus $S_x$, the $\preceq$-initial segment of $x$, is not empty.
By the hypothesis, $S_x$ is a set.
By Intersection is Subset, $B \cap S_x \subseteq S_x$
Thus by the subset axiom, $B \cap S_x$ is a set.
Thus by the definition of proper well-ordering, $B \cap S_x$ has a smallest element $a$.
Let $z$ be any element of $B$.
Aiming for a contradiction, suppose $z \prec a$.
Then by Extended Transitivity, $z \prec x$, so $z \in B \cap S_x$.
But this contradicts the fact that $a$ is the smallest element of $B \cap S_x$.
Thus $z \nprec a$.
Since $\preceq$ is a total ordering, $a \preceq z$.
As this holds for all $z \in B$, $a$ is the smallest element of $B$.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 6.26$




