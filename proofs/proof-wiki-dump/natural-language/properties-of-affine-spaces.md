# 

Source: https://proofwiki.org/wiki/Properties_of_Affine_Spaces


This page has been identified as a candidate for refactoring of basic complexity.In particular: Split up into 4 separate pages.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $\EE$ be an affine space with difference space $V$.
Let $0$ denote the zero element of $V$.
Then the following hold for all $p,q,r \in \EE$ and all $u, v \in V$:

$(1): \quad p - p = 0$
$(2): \quad p + 0 = p$
$(3): \quad p + u = p + v \iff u = v$
$(4): \quad q - p = r - p \iff q = r$


Proof
$(1): \quad p - p = 0$
We have:














\(\ds \paren {p - p} + \paren {q - p}\)

\(=\)







\(\ds \paren {p + \paren {q - p} } - p\)




















\(\ds \)

\(=\)







\(\ds q - p\)









From Zero Element is Unique:

$p - p = 0$
$\Box$


$(2): \quad p + 0 = p$
Using $(1)$ we see that:














\(\ds p + 0\)

\(=\)







\(\ds p + \paren {p - p}\)




















\(\ds \)

\(=\)







\(\ds p\)









$\Box$


$(3): \quad p + u = p + v \iff u = v$
Let $u = v$.
By definition a mapping has a unique image point on a given element.
It follows that:

$p + u = p + v$
Let $p + u = p + v$.
We have:














\(\ds p + u\)

\(=\)







\(\ds p + v\)














\(\ds \leadsto \ \ \)





\(\ds \paren {p + u} - p\)

\(=\)







\(\ds \paren {p + v} - p\)














\(\ds \leadsto \ \ \)





\(\ds \paren {p - p} + u\)

\(=\)







\(\ds \paren {p - p} + v\)














\(\ds \leadsto \ \ \)





\(\ds u\)

\(=\)







\(\ds v\)





by $(1)$



$\Box$


$(4): \quad q - p = r - p \iff q = r$
Let $q = r$.
By definition a mapping has a unique image point on a given element.
It follows that:

$q - p = r - p$
Let $q - p = r - p \in V$.
Then:














\(\ds q - p\)

\(=\)







\(\ds r - p\)














\(\ds \leadsto \ \ \)





\(\ds p + \paren {q - p}\)

\(=\)







\(\ds p + \paren {r - p}\)














\(\ds \leadsto \ \ \)





\(\ds q\)

\(=\)







\(\ds r\)





by hypothesis $q - p = r - p$



$\blacksquare$





