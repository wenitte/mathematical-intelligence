# 

Source: https://proofwiki.org/wiki/Ordering_of_Inverses_in_Ordered_Monoid



Theorem
Let $\struct {S, \circ, \preceq}$ be an ordered monoid whose identity is $e$.
Let $x, y \in S$ be invertible.

Then:

$x \prec y \iff y^{-1} \prec x^{-1}$


Proof
Necessary Condition













\(\ds x\)

\(\prec\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds e\)

\(=\)







\(\ds x^{-1} \circ x \prec x^{-1} \circ y\)





Strict Ordering Preserved under Product with Cancellable Element








\(\ds \leadsto \ \ \)





\(\ds y^{-1}\)

\(=\)







\(\ds e \circ y^{-1} \prec x^{-1} \circ y \circ y^{-1} = x^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds y^{-1}\)

\(\prec\)







\(\ds x^{-1}\)









$\Box$


Sufficient Condition













\(\ds y^{-1}\)

\(\prec\)







\(\ds x^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \paren {x^{-1} }^{-1} \prec \paren {y^{-1} }^{-1} = y\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\prec\)







\(\ds y\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 15$: Ordered Semigroups: Theorem $15.2$




