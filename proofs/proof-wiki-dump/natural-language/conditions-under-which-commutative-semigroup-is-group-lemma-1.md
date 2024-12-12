# 

Source: https://proofwiki.org/wiki/Conditions_under_which_Commutative_Semigroup_is_Group/Lemma_1

Lemma for Conditions under which Commutative Semigroup is Group
Suppose the following:
Let $\struct {S, \circ}$ be a commutative semigroup.

Let $\struct {S, \circ}$ have the following properties:




\((1)\)  

$:$  





  \(\ds \forall x \in S: \exists y \in S:\)

\(\ds y \circ x = x \)   







  


\((2)\)  

$:$  





  \(\ds \forall x, y \in S:\)

\(\ds y \circ x = x \implies \exists z \in S: z \circ x = y \)   







  


Then:

If $y \circ x = x = y' \circ x$, then $y = y'$.


Proof













\(\ds y \circ x\)

\(=\)

\(\, \ds x \, \)

\(\, \ds = \, \)



\(\ds y' \circ x\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \paren {y \circ x} \circ z\)

\(=\)

\(\, \ds x \circ z \, \)

\(\, \ds = \, \)



\(\ds \paren {y' \circ x} \circ z\)





where $z \circ x = y$ from $(2)$








\(\ds \leadsto \ \ \)





\(\ds y \circ \paren {x \circ z}\)

\(=\)

\(\, \ds x \circ z \, \)

\(\, \ds = \, \)



\(\ds y' \circ \paren {x \circ z}\)





Semigroup Axiom $\text S 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds y \circ \paren {z \circ x}\)

\(=\)

\(\, \ds z \circ x \, \)

\(\, \ds = \, \)



\(\ds y' \circ \paren {z \circ x}\)





Definition of Commutative Semigroup




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \)

\(\)

\(\, \ds y \, \)

\(\, \ds = \, \)



\(\ds y' \circ y\)





from $(2)$




Similarly:














\(\ds y' \circ x\)

\(=\)

\(\, \ds x \, \)

\(\, \ds = \, \)



\(\ds y \circ x\)





by hypothesis








\(\ds \leadsto \ \ \)





\(\ds \paren {y' \circ x} \circ z'\)

\(=\)

\(\, \ds x \circ z' \, \)

\(\, \ds = \, \)



\(\ds \paren {y \circ x} \circ z'\)





where $z' \circ x = y'$ from $(2)$








\(\ds \leadsto \ \ \)





\(\ds y \circ \paren {x \circ z'}\)

\(=\)

\(\, \ds x \circ z' \, \)

\(\, \ds = \, \)



\(\ds y' \circ \paren {x \circ z'}\)





Semigroup Axiom $\text S 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds y \circ \paren {z' \circ x}\)

\(=\)

\(\, \ds z' \circ x \, \)

\(\, \ds = \, \)



\(\ds y' \circ \paren {z' \circ x}\)





Definition of Commutative Semigroup




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \)

\(\)

\(\, \ds y' \, \)

\(\, \ds = \, \)



\(\ds y \circ y'\)





from $(2)$




Thus we have:














\(\ds y\)

\(=\)







\(\ds y' \circ y\)





from $(3)$














\(\ds \)

\(=\)







\(\ds y \circ y'\)





Definition of Commutative Semigroup














\(\ds \)

\(=\)







\(\ds y'\)





from $(4)$



$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.16 \ \text {(a)}$




