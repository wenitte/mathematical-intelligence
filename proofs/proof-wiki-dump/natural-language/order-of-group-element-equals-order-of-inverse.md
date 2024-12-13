# 

Source: https://proofwiki.org/wiki/Order_of_Group_Element_equals_Order_of_Inverse

Theorem
Let $G$ be a group whose identity is $e$.

Then:

$\forall x \in G: \order x = \order {x^{-1} }$
where $\order x$ denotes the order of $x$.


Proof
By Powers of Group Elements: Negative Index:

$\paren {x^k}^{-1} = x^{-k} = \paren {x^{-1} }^k$

Hence:














\(\ds x^k\)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds \paren {x^{-1} }^k\)

\(=\)







\(\ds e^{-1}\)




















\(\ds \)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds \order {x^{-1} }\)

\(\le\)







\(\ds \order x\)





Definition of Order of Group Element




Similarly:














\(\ds \paren {x^{-1} }^k\)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\paren {x^{-1} }^{-1} }^k\)

\(=\)







\(\ds e^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds x^k\)

\(=\)







\(\ds e^{-1}\)




















\(\ds \)

\(=\)







\(\ds e\)














\(\ds \leadsto \ \ \)





\(\ds \order x\)

\(\le\)







\(\ds \order {x^{-1} }\)





Definition of Order of Group Element




A similar argument shows that if $x$ is of infinite order, then so must $x^{-1}$ be.
Hence the result.
$\blacksquare$


Sources
1964: Walter Ledermann: Introduction to the Theory of Finite Groups (5th ed.) ... (previous) ... (next): Chapter $\text {I}$: The Group Concept: $\S 8$: The Order (Period) of an Element: $\text{(ii)}$
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Exercise $5.6$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $10$




