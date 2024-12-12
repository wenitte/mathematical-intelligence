# 

Source: https://proofwiki.org/wiki/Dedekind%27s_Theorem/Proof_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\tuple {L, R}$ be a Dedekind cut of the set of real numbers $\R$.

Then there exists a unique real number which is a producer of $\tuple {L, R}$.


Proof
Suppose $P$ and $Q$ are two properties which are mutually exclusive.
Suppose that one of either of $P$ and $Q$ are possessed by every $x \in \R$.
Suppose that any number having $P$ is less than any which have $Q$.
Let us call the numbers with $P$ the left hand set $L$, and the ones with $Q$ the right hand set $R$.
There are two possibilities, as follows.

$L$ has a greatest element, or
$R$ has a least element.
It is not possible that both of the above can happen.
Because suppose $l$ is the greatest element of $L$ and $r$ is the least element of $R$.
Then the number $\dfrac {l + r} 2$ is greater than $l$ and less than $r$, so it could not be in either class.
However, one of the above must occur.
Because, suppose the following.
Let $L_1$ and $R_1$ be the subsets of $L$ and $R$ respectively consisting of only the rational numbers in $L$ and $R$.
Then $L_1$ and $R_1$ form a section of the set of rational numbers $\Q$.
There are two cases to think about:
Maybe $L_1$ has a greatest element $\alpha$.
In this case, $\alpha$ must also be the greatest element of $L$.
Because if not, then there's a greater one, which we can call $\beta$.
There are always rational numbers between $\alpha$ and $\beta$ from Rational Numbers are Densely Ordered.
These are less than $\beta$ and thus belong to $L$ and (because they're rational) also to $L_1$.
This is a contradiction, so if $\alpha$ is the greatest element of $L_1$, it's also the greatest element of $L$.
On the other hand, $L_1$ may not have a greatest element.
In this case, the section of the rational numbers formed by $L_1$ and $R_1$ is a real number $\alpha$.


This article, or a section of it, needs explaining.In particular: Justify the above assertion.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
It must belong to either $L$ or $R$.
If it belongs to $L$ we can show, like we did before, that it is the greatest element of $L$.
Similarly, if it belongs to $R$ we can show it is the least element of $R$.

So in any case, either $L$ has a greatest element or $R$ has a least element.

Thus, any section of the real numbers corresponds to a real number.
$\blacksquare$





