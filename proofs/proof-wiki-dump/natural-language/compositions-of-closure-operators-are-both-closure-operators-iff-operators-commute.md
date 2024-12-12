# 

Source: https://proofwiki.org/wiki/Compositions_of_Closure_Operators_are_both_Closure_Operators_iff_Operators_Commute


This page has been identified as a candidate for refactoring of basic complexity.In particular: Move the 3rd result into a separate pageUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Theorem
Let $\left({S, \preceq}\right)$ be an ordered set.
Let $f$ and $g$ be closure operators on $S$.

Then the following are equivalent:

$(1): \quad f \circ g$ and $g \circ f$ are both closure operators.
$(2): \quad f$ and $g$ commute (that is, $f \circ g = g \circ f$).
$(3): \quad \Img {f \circ g} = \Img {g \circ f}$
where $\Img \cdot$ denotes the image of a mapping. 


Proof
By Composition of Inflationary Mappings is Inflationary:

$f \circ g$ and $g \circ f$ are inflationary.
By Composite of Increasing Mappings is Increasing:

$f \circ g$ and $g \circ f$ are increasing.
Thus each of the two composite mappings will be a closure operator if and only if it is idempotent.
Therefore the equivalences follow from Composition of Inflationary and Idempotent Mappings.
$\blacksquare$





