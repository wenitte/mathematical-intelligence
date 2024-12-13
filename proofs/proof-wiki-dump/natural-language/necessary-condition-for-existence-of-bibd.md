# 

Source: https://proofwiki.org/wiki/Necessary_Condition_for_Existence_of_BIBD


This page has been identified as a candidate for refactoring of medium complexity.In particular: Each result in its own page (possibly transcluded)Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let there exist a BIBD with parameters $v, b, r, k, \lambda$.
Then the following are true:

$(1): \quad b k = r v$
$(2): \quad \lambda \paren {v - 1} = r \paren {k - 1}$
$(3): \quad b \dbinom k 2 = \lambda \dbinom v 2$
$(4): \quad k < v$
$(5): \quad r > \lambda$
All of $v, b, r, k, \lambda$ are integers.

Some sources prefer to report $(3)$ as:

$b = \dfrac {\dbinom v 2} {\dbinom k 2} \lambda$
which is less appealing visually, and typographically horrendous.


Proof
$(1)$: We have by definition of balanced incomplete block design that:
each treatment is in exactly $r$ blocks
each block is of size $k$.
We have that $b k$ is the number of blocks times the size of each block.
We also have that $r v$ is the number of treatments times the number of blocks each treatment is in.
The two must clearly be equal.


$(2)$: Comparing the left hand side and right hand side of the equation we can see that:
left hand side: An arbitrary treatment must be paired with $v - 1$ other treatments.
If $\lambda > 1$ then every treatment is paired $\lambda \paren {v - 1}$ times.

right hand side: An arbitrary treatment is paired with $k - 1$ other treatments for each of the $r$ blocks it is in.
Therefore it is paired $r \paren {k - 1}$ times.
Both values give the number of times an arbitrary treatment is paired, therefore the left hand side equals the right hand side.


$(3)$: From equation $(1)$, we have that $r = \dfrac {b k} v$
From $(2)$ we have that:

$r = \dfrac {v - 1} {k - 1} \lambda$
So:














\(\ds \frac {b k} v\)

\(=\)







\(\ds \frac {v - 1} {k - 1} \lambda\)





substituting for $r$








\(\ds \leadsto \ \ \)





\(\ds b k \paren {k - 1}\)

\(=\)







\(\ds \lambda v \paren {v - 1}\)














\(\ds \leadsto \ \ \)





\(\ds b \binom k 2\)

\(=\)







\(\ds \lambda \binom v 2\)





Binomial Coefficient with Two



$\blacksquare$


This theorem requires a proof.In particular: Yes I know the other ones are obvious but there's other things I'd rather do at the moment.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




