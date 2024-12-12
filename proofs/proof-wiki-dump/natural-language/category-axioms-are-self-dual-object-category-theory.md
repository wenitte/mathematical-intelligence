# 

Source: https://proofwiki.org/wiki/Category_Axioms_are_Self-Dual/Object_Category_Theory

Theorem
Let $\mathrm {CT}$ be the collection of seven axioms on Characterization of Metacategory via Equations.

Then:

$\mathrm {CT} = \mathrm {CT}^*$
where $\mathrm {CT}^*$ consists of the dual statements of those in $\mathrm{CT}$.


Proof
The seven axioms are:














\(\ds \operatorname {dom} \operatorname {id}_A = A\)

\(\qquad\)







\(\ds \operatorname {cod} \operatorname {id}_A = A\)




















\(\ds f \circ 1_{\operatorname {dom} f} = f\)

\(\)







\(\ds 1_{\operatorname {cod} f} \circ f = f\)




















\(\ds \map {\operatorname {dom} } {g \circ f} = \operatorname{dom} f\)

\(\)







\(\ds \map {\operatorname {cod} } {g \circ f} = \operatorname{cod} g\)




















\(\ds h \circ \paren {g \circ f}\)

\(=\)







\(\ds \paren {h \circ g} \circ f\)









Their duals are:














\(\ds \operatorname {cod} \operatorname {id}_A = A\)

\(\qquad\)







\(\ds \operatorname {dom} \operatorname {id}_A = A\)




















\(\ds 1_{\operatorname {cod} f} \circ f = f\)

\(\)







\(\ds f \circ 1_{\operatorname {dom} f} = f\)




















\(\ds \map {\operatorname {cod} } {f \circ g} = \operatorname {cod} f\)

\(\)







\(\ds \map {\operatorname {dom} } {f \circ g} = \operatorname {dom} g\)




















\(\ds \paren {f \circ g} \circ h\)

\(=\)







\(\ds f \circ \paren {g \circ h}\)









It is seen that only names of the bound variables $f, g$ and $h$ have been changed at some places.
Therefore, we conclude:

$\mathrm {CT}^* = \mathrm {CT}$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2010: Steve Awodey: Category Theory (2nd ed.) ... (previous) ... (next): $\S 3.1$




