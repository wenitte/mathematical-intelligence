# 

Source: https://proofwiki.org/wiki/Properties_of_Product_of_Identity_plus_Operator_Raised_to_Powers_of_2



Theorem
Let $X$ be a Banach space.
Let $\map \LL X$ be the set of all linear transformations.
Let $\map {CL} X$ be a continuous linear transformation sapce.
Let $\norm {\, \cdot \,}$ be the supremum operator norm.
Let $A \in \map {CL} X$ be such that $\norm A < 1$.
Let $I$ be the identity mapping.
Let $\circ$ be the composition of mappings.
For all $n \in \N$ let $A^n := \underbrace {A \circ A \circ \ldots \circ A}_{n \text{ times}}$, with $A^0 := I$.
For all $n \in \N$ let $P_n = \underbrace{\paren {I + A} \circ \paren {I + A^2} \circ \ldots \circ \paren {I + A^{2^n} } }_{n + 1 \text{ terms} }$

Then:

$\forall n \in \N : \paren {I - A} \circ P_n = I - A^{2^{n + 1} }$
the sequence $\sequence {P_n}_{n \mathop \in \N}$ converges in $\map {CL} X$ to $\paren {I - A}^{-1}$


Proof
$\paren {I - A} \circ P_n = I - A^{2^{n + 1} }$
This will be a proof by induction.


Basis for the induction
Let $n = 0$.
Then:














\(\ds \paren {I - A} \circ P_0\)

\(=\)







\(\ds \paren {I - A} \circ \paren {I + A}\)




















\(\ds \)

\(=\)







\(\ds I + A - A - A^2\)




















\(\ds \)

\(=\)







\(\ds I - A^2\)




















\(\ds \)

\(=\)







\(\ds I - A^{2^\paren{0 + 1} }\)











Induction hypothesis
The induction hypothesis is the following statement:

$\paren {I - A} \circ P_n = I - A^{2^{n + 1} }$
from which it is to be shown that:

$\paren {I - A} \circ P_{n + 1} = I - A^{2^{\paren {n + 1} + 1} }$


Induction Step













\(\ds \paren {I - A} \circ P_{n + 1}\)

\(=\)







\(\ds \paren {I - A} \circ P_n \circ \paren {I + A^{2^{n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \paren {I - A^{2^{n + 1} } } \circ \paren {I + A^{2^{n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds I + A^{2^{n + 1} } - A^{2^{n + 1} } + \paren {A^{2^{n + 1} } }^2\)




















\(\ds \)

\(=\)







\(\ds I - A^{2 \cdot 2^{n + 1} }\)




















\(\ds \)

\(=\)







\(\ds I - A^{2^{n + 2} }\)




















\(\ds \)

\(=\)







\(\ds I - A^{2^{\paren {n + 1} + 1} }\)









$\Box$


$\sequence {P_n}_{n \mathop \in \N}$ converges to $\paren {I - A}^{-1}$
We have that $\norm A < 1$.
Furthermore:














\(\ds \norm {I - A^{2^{n + 1} } - I}\)

\(=\)







\(\ds \norm { - A^{2^{n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds \norm {A^{2^{n + 1} } }\)




















\(\ds \)

\(\le\)







\(\ds \norm A^{2^{n + 1} }\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \norm {I - A^{2^{n + 1} } - I}\)

\(=\)







\(\ds 0\)









We have that Set of Linear Transformations with Supremum Operator Norm is Normed Vector Space.
Hence, $\sequence {I - A^{2^{n + 1} } }_{n \mathop \in \N}$ converges in $\struct {\map \LL X, \norm {\, \cdot \,}}$ to $I$.
By Neumann Series Theorem, $I - A$ is invertible in $\map {CL} X$.
Moreover:














\(\ds \norm {\paren {I - A}^{-1} \circ \paren {I - A^{2^{n + 1} } } - \paren {I - A}^{-1} }\)

\(=\)







\(\ds \norm {\paren {I - A}^{-1} \circ \paren {I - A^{2^{n + 1} } - I } }\)




















\(\ds \)

\(\le\)







\(\ds \norm {\paren {I - A}^{-1} } \norm {I - A^{2^{n + 1} } - I}\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{n \mathop \to \infty} \norm {\paren {I - A}^{-1} \circ \paren {I - A^{2^{n + 1} } } - \paren {I - A}^{-1} }\)

\(\le\)







\(\ds \lim_{n \mathop \to \infty} \paren {\norm {\paren {I - A}^{-1} } \norm {I - A^{2^{n + 1} } - I} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {I - A}^{-1} } \lim_{n \mathop \to \infty} \norm {I - A^{2^{n + 1} } - I}\)




















\(\ds \)

\(=\)







\(\ds 0\)









Since:














\(\ds \sequence {\paren {I - A}^{-1} \circ \paren {I - A^{2^{n + 1} } } }_{n \mathop \in \N}\)

\(=\)







\(\ds \sequence {\paren {I - A}^{-1} \circ \paren {I - A} \circ P_n}_{n \mathop \in \N}\)




















\(\ds \)

\(=\)







\(\ds \sequence {P_n}_{n \mathop \in \N}\)









Thus, $\sequence {P_n}_{n \mathop \in \N}$ converges to $\paren {I - A}^{-1}$ in $\struct {\map {CL} X, \norm {\, \cdot \,} }$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




