# 

Source: https://proofwiki.org/wiki/Division_Laws_for_Groups



Theorem
Let $G$ be a group.
Let $a, b, x \in G$.

Then:

$(1): \quad a x = b \iff x = a^{-1} b$
$(2): \quad x a = b \iff x = b a^{-1}$


Proof
All derivations can be achieved using applications of the group axioms:


Proof of $(1)$













\(\ds a x\)

\(=\)







\(\ds b\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds a^{-1} \paren{a x }\)

\(=\)







\(\ds a^{-1} b\)














\(\ds \leadsto \ \ \)





\(\ds \paren{a^{-1} a } x\)

\(=\)







\(\ds a^{-1} b\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds e x\)

\(=\)







\(\ds a^{-1} b\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds a^{-1} b\)





Definition of Identity Element




and the converse:














\(\ds x\)

\(=\)







\(\ds a^{-1} b\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds a x\)

\(=\)







\(\ds a \paren{a^{-1} b }\)














\(\ds \leadsto \ \ \)





\(\ds a x\)

\(=\)







\(\ds \paren{a a^{-1} } b\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds a x\)

\(=\)







\(\ds e b\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds a x\)

\(=\)







\(\ds b\)





Definition of Identity Element



$\blacksquare$


Proof of $(2)$













\(\ds x a\)

\(=\)







\(\ds b\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \paren{x a } a^{-1}\)

\(=\)







\(\ds b a^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds x \paren{a a^{-1} }\)

\(=\)







\(\ds b a^{-1}\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds x e\)

\(=\)







\(\ds b a^{-1} b\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds b a^{-1}\)





Definition of Identity Element




and the converse:














\(\ds x\)

\(=\)







\(\ds b a^{-1}\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds x a\)

\(=\)







\(\ds \paren{b a^{-1} } a\)














\(\ds \leadsto \ \ \)





\(\ds x a\)

\(=\)







\(\ds b \paren{a^{-1} a }\)





Group Axiom $\text G 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds x a\)

\(=\)







\(\ds b e\)





Definition of Inverse Element








\(\ds \leadsto \ \ \)





\(\ds x a\)

\(=\)







\(\ds b\)





Definition of Identity Element



$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): $\S 35.2$: Elementary consequences of the group axioms




