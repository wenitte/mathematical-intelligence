# 

Source: https://proofwiki.org/wiki/Cover_of_Interval_By_Closed_Intervals_is_not_Pairwise_Disjoint


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\closedint a b$ be a closed interval in $\R$.


This article, or a section of it, needs explaining.In particular: Title mentions only "interval"; this does not affect truth of statement so may "closed" above line be removed as superfluous?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Let $\JJ$ be a set of two or more closed intervals contained in $\closedint a b$ such that $\ds \bigcup \JJ = \closedint a b$.
Then the intervals in $\JJ$ are not pairwise disjoint.


Proof
Aiming for a contradiction, suppose that the intervals of $\JJ$ are pairwise disjoint.
Let $I = \closedint p q$ be the unique interval of $\JJ$ such that $a \in I$.
Let $J = \closedint r s$ be the unique interval of $\JJ$ containing the least real number not in $I$.
These choices are possible since $\JJ$ has at least two elements, and they are supposed disjoint.
If $q = r$ then $I \cap J \ne \O$, a contradiction.
If $r < q$ then $I \cap J \ne \O$, a contradiction.
If $r > q$ then there is some real number with $q < \alpha < r$.
Therefore $\alpha \notin I$.
Since $J$ contains the least real number not in $I$ it follows that there is $\beta \in J$ with $\beta < \alpha$.
But we also have that $\alpha < r \le \beta$ for all $\beta \in J$, a contradiction.
This exhausts all the possibilities, and we conclude that the intervals of $\JJ$ are not pairwise disjoint.
$\blacksquare$





