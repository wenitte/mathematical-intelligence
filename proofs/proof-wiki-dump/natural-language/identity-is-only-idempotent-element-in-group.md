# 

Source: https://proofwiki.org/wiki/Identity_is_only_Idempotent_Element_in_Group

Theorem
Every group has exactly one idempotent element: the identity.


Proof 1
The Identity Element is Idempotent.
From the Cancellation Laws, all group elements are cancellable.
The result follows from Identity is only Idempotent Cancellable Element.
$\blacksquare$


Proof 2
Let $\struct {G, \circ}$ be a group whose identity is $e$.
Let $x \in G$ such that $x \circ x = x$.














\(\ds e\)

\(=\)







\(\ds x \circ x^{-1}\)





Group Axiom $\text G 3$: Existence of Inverse Element














\(\ds \)

\(=\)







\(\ds \paren {x \circ x} \circ x^{-1}\)





by hypothesis: $x \circ x = x$














\(\ds \)

\(=\)







\(\ds x \circ \paren {x \circ x^{-1} }\)





Group Axiom $\text G 1$: Associativity














\(\ds \)

\(=\)







\(\ds x \circ e\)





Definition of Inverse Element














\(\ds \)

\(=\)







\(\ds x\)





Definition of Identity Element



$\blacksquare$





