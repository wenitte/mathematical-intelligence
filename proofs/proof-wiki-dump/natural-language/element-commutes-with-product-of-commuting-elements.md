# 

Source: https://proofwiki.org/wiki/Element_Commutes_with_Product_of_Commuting_Elements



Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $x, y, z \in S$.

Let $x$ commute with both $y$ and $z$.
Then $x$ commutes with $y \circ z$.


General Theorem
Let $\struct {S, \circ}$ be a semigroup.
Let $\sequence {a_k}_{1 \mathop \le k \mathop \le n}$ be a sequence of terms of $S$.

Let $b \in S$ such that $b$ commutes with $a_k$ for each $k \in \closedint 1 n$.
Then $b$ commutes with $a_1 \circ \cdots \circ a_n$.


Proof













\(\ds x \circ \paren {y \circ z}\)

\(=\)







\(\ds \paren {x \circ y} \circ z\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {y \circ x} \circ z\)





$x$ commutes with $y$














\(\ds \)

\(=\)







\(\ds y \circ \paren {x \circ z}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds y \circ \paren {z \circ x}\)





$x$ commutes with $z$














\(\ds \)

\(=\)







\(\ds \paren {y \circ z} \circ x\)





Semigroup Axiom $\text S 1$: Associativity



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.16$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 4$: Neutral Elements and Inverses: Theorem $4.5: \ 1^\circ$




