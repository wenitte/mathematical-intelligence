# 

Source: https://proofwiki.org/wiki/Properties_of_Ordered_Field


This article, or a section of it, is suspected of being a duplicate of an existing article.In particular: This duplicates, at least in part with Properties of Ordered Ring. We don't want to merge the pages as such, but it would be useful to include the appropriate properties that apply to both by means of transclusion of the relevant pages containing those common properties.You can help ProofWiki by finding that page, and either merging this one with it or marking either for deletion.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Duplicate}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

This page has been identified as a candidate for refactoring of basic complexity.In particular: separate proofs, separate pagesUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\struct {F, +, \cdot}$ be an ordered field with unity $1$, zero $0$.
Denote the strict order by $<$ and the weak order by $\le$.
Let $\Char F$ denote the characteristic of $F$.
Then the following hold for all $x, y, z \in F$:

$(1): \quad x < 0 \iff -x > 0$
$(2): \quad x > y \iff x - y > 0$
$(3): \quad x < y \iff -x > -y$
$(4): \quad \paren {z < 0} \land \paren {x < y} \implies x z > y z$
$(5): \quad x \ne 0 \implies x^2 > 0$
$(6): \quad 1 > 0$
$(7): \quad \Char F = 0$
$(8): \quad x > y > 0 \iff y^{-1} > x^{-1} > 0$


Proof
By definition of ordering, the relation $\le$ is:

reflexive
transitive
antisymmetric
and furthermore, every pair of elements is comparable.
The order is compatible with $F$ in the sense that, for all $x, y, z, c \in F$:

$x < y \implies x + z < y + z$
$c > 0,\ x < y \implies c x < c y$
The proof is by repeated deduction from these properties.


$(1): \quad x < 0 \iff -x > 0$:













\(\ds x\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x - x\)

\(<\)







\(\ds 0 - x\)














\(\ds \leadsto \ \ \)





\(\ds -x\)

\(>\)







\(\ds 0\)









Conversely:














\(\ds x\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x - x\)

\(>\)







\(\ds 0 - x\)














\(\ds \leadsto \ \ \)





\(\ds -x\)

\(<\)







\(\ds 0\)











$(2): \quad x > y \iff x - y > 0$:













\(\ds x\)

\(>\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x - y\)

\(>\)







\(\ds y - y = 0\)









Conversely:














\(\ds x - y > 0\)

\(>\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x - y + y\)

\(>\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(>\)







\(\ds y\)











$(3): \quad x < y \iff -x > -y$:













\(\ds x\)

\(<\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds x - x - y\)

\(<\)







\(\ds y - x - y\)














\(\ds \leadsto \ \ \)





\(\ds -y\)

\(<\)







\(\ds -x\)









Conversely:














\(\ds -y\)

\(<\)







\(\ds -x\)














\(\ds \leadsto \ \ \)





\(\ds -y + y + x\)

\(<\)







\(\ds -x + y + x\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(<\)







\(\ds y\)











$(4): \quad (z < 0) \land (x < y) \implies x z > y z$:
By parts 1 and 3 above, if $z < 0$, $x < y$ then $-z > 0$ and $-x > -y$.
Then:

$x z = \paren {-x} \paren {-z} > \paren {-y} \paren {-z} = y z$


$(5): \quad x \ne 0 \implies x^2 > 0$:
If $x > 0$, then:

$x^2 = x \cdot x > x \cdot 0 = 0$
If $x < 0$, then by 1, $-x > 0$, so:

$x^2 = \paren {-x} \cdot \paren {-x} > \paren {-x} \cdot 0 = 0$


$(6): \quad 1 > 0$:
This is immediate from $(5)$, noting that $1 = 1^2$ is a square.


$(7): \quad \Char F = 0$:
By $(6)$, we have:

$0 < 1 < 1 + 1 < 1 + 1 + 1 < \cdots$
so $n \cdot 1 \ne 0$ for all $n \in \N$.


$(8): \quad x > y > 0 \iff y^{-1} > x^{-1} > 0$:
First let $x > 0$.
Aiming for a contradiction, suppose $x^{-1} < 0$.
Then by $(4)$:

$0 = 0 \cdot x^{-1} > x \cdot x^{-1} = 1$
which contradicts $(6)$, so $x^{-1} > 0$.
Now let $x > y > 0$.
Then:














\(\ds x^{-1} y^{-1} x\)

\(>\)







\(\ds x^{-1} y^{-1} y > 0\)














\(\ds \leadsto \ \ \)





\(\ds y^{-1}\)

\(>\)







\(\ds x^{-1} > 0\)









The converse follows upon interchanging $x^{-1} \leftrightarrow x$ and $y^{-1} \leftrightarrow y$.
$\blacksquare$





