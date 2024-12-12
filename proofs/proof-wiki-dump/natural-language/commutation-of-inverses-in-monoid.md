# 

Source: https://proofwiki.org/wiki/Commutation_of_Inverses_in_Monoid



Theorem
Let $\struct {S, \circ}$ be a monoid whose identity is $e_S$.
Let $x, y \in S$ such that $x$ and $y$ are both invertible.

Then $x$ commutes with $y$ if and only if $x^{-1}$ commutes with $y^{-1}$.


Proof
Necessary Condition
Let $x$ commute with $y$.
Then:














\(\ds x^{-1} \circ y^{-1}\)

\(=\)







\(\ds \paren {y \circ x}^{-1}\)





Inverse of Product














\(\ds \)

\(=\)







\(\ds \paren {x \circ y}^{-1}\)





$x$ commutes with $y$














\(\ds \)

\(=\)







\(\ds y^{-1} \circ x^{-1}\)





Inverse of Product




So $x^{-1}$ commutes with $y^{-1}$.
$\Box$


Sufficient Condition
Now let $x^{-1}$ commute with $y^{-1}$.
From the above, $\paren {x^{-1} }^{-1}$ commutes with $\paren {y^{-1} }^{-1}$.
From Inverse of Inverse in Monoid, $\paren {x^{-1} }^{-1} = x$ and $\paren {y^{-1} }^{-1} = y$.
Thus $x$ commutes with $y$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Theorem $4.5: \ 3^\circ$




