# 

Source: https://proofwiki.org/wiki/Meet-Continuous_and_Distributive_implies_Shift_Mapping_Preserves_Finite_Suprema



Theorem
Let $\struct {S, \vee, \wedge, \preceq}$ be a meet-continuous distributive complete lattice.
Let $x \in S$.
Let $f: S \to S$ be a mapping such that

$\forall y \in S: \map f y = x \wedge y$

Then

$f$ preserves finite suprema


Proof
Let $X$ be finite subset of $S$ such that:

$X$ admits a supremum
By definition of complete lattice:

$f \sqbrk X$ admits a supremum

We will prove the result by induction on the cardinality of $X$.


Basis Case
$\forall X \subseteq S: \card X = 0 \implies \map \sup {f \sqbrk X} = \map f {\sup X}$
where:

$\card X$ denotes the cardinality of $X$

Let $X \subseteq S$ such that:

$\card X = 0$
By Cardinality of Empty Set:

$X = \O$
By definition of image of set:

$f \sqbrk X = \O$
By definitions of bottom and smallest element:

$\bot \preceq x$
Thus:














\(\ds \map \sup {f \sqbrk X}\)

\(=\)







\(\ds \bot\)





Supremum of Empty Set is Smallest Element














\(\ds \)

\(=\)







\(\ds x \wedge \bot\)





Preceding iff Meet equals Less Operand














\(\ds \)

\(=\)







\(\ds x \wedge \sup X\)





Supremum of Empty Set is Smallest Element














\(\ds \)

\(=\)







\(\ds \map f {\sup X}\)





Definition of $f$



$\Box$


Induction Hypothesis
$\forall X \subseteq S: \card X = n \implies \map \sup {f \sqbrk X} = \map f {\sup X}$


Induction Step
$\forall X \subseteq S: \card X = n + 1 \implies \map \sup {f \sqbrk X} = \map f {\sup X}$
Let $X \subseteq S$ such that:

$\card X = n + 1$
Then $X = \set {x_1, \dots, x_n, x_{n + 1} }$.
Thus:














\(\ds \map \sup {f \sqbrk X}\)

\(=\)







\(\ds \map \sup {f \sqbrk {\set {x_1, \dots, x_n} \cup \set {x_{n + 1} } } }\)





Union of Unordered Tuples














\(\ds \)

\(=\)







\(\ds \map \sup {f \sqbrk {\set {x_1, \dots, x_n} } \cup f \sqbrk {\set {x_{n + 1} } } }\)





Image of Union under Mapping














\(\ds \)

\(=\)







\(\ds \map \sup {f \sqbrk {\set {x_1, \dots, x_n} } } \vee \map \sup {f \sqbrk {\set {x_{n + 1} } } }\)





Supremum of Suprema














\(\ds \)

\(=\)







\(\ds \map f {\sup \set {x_1, \dots, x_n} } \vee \map \sup {f \sqbrk {\set {x_{n + 1} } } }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \map f {\sup \set {x_1, \dots, x_n} } \vee \sup \set {\map f {x_{n + 1} } }\)





Image of Singleton under Mapping














\(\ds \)

\(=\)







\(\ds \map f {\sup \set {x_1, \dots, x_n} } \vee \map f {x_{n + 1} }\)





Supremum of Singleton














\(\ds \)

\(=\)







\(\ds \paren {x \wedge \sup \set {x_1, \dots, x_n} } \vee \paren {x \wedge x_{n + 1} }\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds x \wedge \paren {\sup \set {x_1, \dots, x_n} \vee x_{n + 1} }\)





Definition of Distributive Lattice














\(\ds \)

\(=\)







\(\ds x \wedge \paren {\sup \set {x_1, \dots, x_n} \vee \sup \set {x_{n + 1} } }\)





Supremum of Singleton














\(\ds \)

\(=\)







\(\ds x \wedge \sup X\)





Supremum of Suprema














\(\ds \)

\(=\)







\(\ds \map f {\sup X}\)





Definition of $f$



$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:17




