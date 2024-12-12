# 

Source: https://proofwiki.org/wiki/Conditions_under_which_Commutative_Semigroup_is_Group/Lemma_3

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

If $y \circ x = x$ and $z \circ w = w$, then $y = z$.


Proof













\(\ds \paren {y \circ x} \circ w\)

\(=\)







\(\ds x \circ w\)





by hypothesis: $y \circ x = x$








\(\ds \leadsto \ \ \)





\(\ds y \circ \paren {x \circ w}\)

\(=\)







\(\ds x \circ w\)





Semigroup Axiom $\text S 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds y \circ \paren {w \circ x}\)

\(=\)







\(\ds w \circ x\)





as $\struct {S, \circ}$ is a commutative semigroup: $x \circ w = w \circ x$




Then:














\(\ds \paren {z \circ w} \circ x\)

\(=\)







\(\ds w \circ x\)





by hypothesis: $z \circ w = w$








\(\ds \leadsto \ \ \)





\(\ds z \circ \paren {w \circ x}\)

\(=\)







\(\ds w \circ x\)





Semigroup Axiom $\text S 1$: Associativity




Thus:

$y \circ \paren {w \circ x} = w \circ x = z \circ \paren {w \circ x}$
and $y = z$ follows from Lemma 1.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 7$: Semigroups and Groups: Exercise $7.16 \ \text {(c)}$




