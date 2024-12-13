# 

Source: https://proofwiki.org/wiki/Inertia_Principle

Theorem
Let $\sequence {a_n}$ be a sequence in $\R$.
Let $a_n \to l$ as $n \to \infty$.
Let $c \in \R$: such that $c < l$.

Then $\exists N \in \N$ such that:

$\forall n \in \N: n \ge N \implies c < a_n$


Proof
Pick $\epsilon = l - c > 0$ (as $c < l$).
As $a_n \to l$ as $n \to \infty$, then $\exists N \in \N$ such that:

$\forall n \in \N: n \ge N \implies \size {a_n - l} < \epsilon$
Equivalently:

$\forall n \in \N: n \ge N \implies \size {l - a_n} < l - c$
For each $a_n$, either $a_n \ge l$ or $a_n < l$.

If $a_n < l$, then $0 < l - a_n$, so $\size {l - a_n} = l - a_n$.
Then:










\(\ds \forall n \in \N: \, \)



\(\ds n\)

\(\ge\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds \size {l - a_n}\)

\(\lt\)







\(\ds l - c\)














\(\ds \leadsto \ \ \)





\(\ds l - a_n\)

\(\lt\)







\(\ds l - c\)














\(\ds \leadsto \ \ \)





\(\ds a_n\)

\(\gt\)







\(\ds c\)









If $a_n \ge l$, and $l > c$, then $a_n > c$.
So:

$\forall n \in \N: n \ge N \implies a_n > c$
$\blacksquare$


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Note
Not to be confused with the Principle of Inertia.





