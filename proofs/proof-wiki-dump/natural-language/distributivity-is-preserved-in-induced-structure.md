# 

Source: https://proofwiki.org/wiki/Distributivity_is_Preserved_in_Induced_Structure

Theorem
Let $\struct {T, \oplus, \otimes}$ be an algebraic structure, and let $S$ be a set.
Let $T^S$ denote the set of all mappings from $S$ to $T$.
Let $\struct {T^S, \oplus}$ be the structure on $T^S$ induced by $\oplus$.
Let $\struct {T^S, \otimes}$ be the structure on $T^S$ induced by $\otimes$.

If $\otimes$ is distributive over $\oplus$, then the pointwise operation induced on $T^S$ by $\otimes$ is distributive over the operation induced by $\oplus$.


Proof
Let $\struct {T, \oplus, \otimes}$ be an algebraic structure in which $\otimes$ distributes over $\oplus$.
Let $f, g, h \in T^S$. 

Then:














\(\ds \map {\paren {f \otimes \paren {g \oplus h} } } x\)

\(=\)







\(\ds \map f x \otimes \paren {\map g x \oplus \map h x}\)





Definition of Pointwise Operation














\(\ds \)

\(=\)







\(\ds \paren {\map f x \otimes \map g x} \oplus \paren {\map f x \otimes \map h x}\)





because $\otimes$ distributes over $\oplus$ in $T$














\(\ds \)

\(=\)







\(\ds \map {\paren {\paren {f \otimes g} \oplus \paren {f \otimes h} } } x\)





Definition of Pointwise Operation



This shows left distributivity.
The proof for right distributivity is identical.
$\blacksquare$





