# 

Source: https://proofwiki.org/wiki/Cyclic_Group_of_Order_6


This page has been identified as a candidate for refactoring of basic complexity.In particular: Split into two, perhaps as subpages transcludedUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $C_n$ be the cyclic group of order $n$.
Then:

$C_2 \times C_3 \cong C_6$
$C_6$ is the internal group direct product of $C_2$ and $C_3$.


Proof
From Group Direct Product of Cyclic Groups noting that $2 \perp 3$:

$C_2 \times C_3 \cong C_6$


$C_6$ is the internal group direct product of $C_2$ and $C_3$:
Let $\left({C_6, \circ}\right) = \left \langle {x} \right \rangle$, let $\left({C_2, \circ}\right) = \left \langle {x^3} \right \rangle$, and let $\left({C_3, \circ}\right) = \left \langle {x^2} \right \rangle$.
From Subgroup of Abelian Group is Normal, $C_2 \lhd C_6$ and $C_3 \lhd C_6$.

We can factorise the elements of $C_6$ thus:

$e = e \circ e, x = x^3 \circ \left({x^2}\right)^2, x^2 = e \circ x^2, x^3 = x^3 \circ e, x^4 = e \circ \left({x^2}\right)^2, x^5 = x^2 \circ x^3$

Hence the result.
$\blacksquare$





