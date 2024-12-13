# 

Source: https://proofwiki.org/wiki/Isomorphism_between_Ring_of_Integers_Modulo_2_and_Parity_Ring



Theorem
The ring of integers modulo $2$ and the parity ring are isomorphic.


Proof
To simplify the notation, let the elements of $\Z_2$ be identified as $0$ for $\eqclass 0 2$ and $1$ for $\eqclass 1 2$.

Let $f$ be the mapping from the parity ring $R := \struct {\set {\text{even}, \text{odd} }, +, \times}$ and the ring of integers modulo $2$ $\struct {\Z_2, +_2, \times_2}$:

$f: \struct {\set {\text{even}, \text{odd} }, +, \times} \to \struct {\Z_2, +_2, \times_2}$:
$\forall x \in R: \map f x = \begin{cases}
0 & : x = \text{even} \\
1 & : x = \text{odd}  \end{cases}$

The bijective nature of $f$ is apparent:

$f^{-1}: \struct {\Z_2, +_2, \times_2} \to \struct {\set {\text{even}, \text{odd} }, +, \times}$:
$\forall x \in \Z_2: \map {f^{-1} } x = \begin{cases}
\text{even} & : x = 0 \\
\text{odd}  & : x = 1 \end{cases}$

Thus the following equations can be checked:








\(\ds 0 +_2 0 = \ \ \)





\(\ds \map f {\text{even} } +_2 \map f {\text{even} }\)

\(=\)







\(\ds \map f {\text{even} + \text{even} }\)

\(\ds = 0\)












\(\ds 0 +_2 1 = \ \ \)





\(\ds \map f {\text{even} } +_2 \map f {\text{odd} }\)

\(=\)







\(\ds \map f {\text{even} + \text{odd} }\)

\(\ds = 1\)












\(\ds 1 +_2 0 = \ \ \)





\(\ds \map f {\text{odd} } +_2 \map f {\text{even} }\)

\(=\)







\(\ds \map f {\text{odd} + \text{even} }\)

\(\ds = 1\)












\(\ds 1 +_2 1 = \ \ \)





\(\ds \map f {\text{odd} } +_2 \map f {\text{odd} }\)

\(=\)







\(\ds \map f {\text{odd} + \text{odd} }\)

\(\ds = 0\)








and:








\(\ds 0 \times_2 0 = \ \ \)





\(\ds \map f {\text{even} } \times_2 \map f {\text{even} }\)

\(=\)







\(\ds \map f {\text{even} \times \text{even} }\)

\(\ds = 0\)












\(\ds 0 \times_2 1 = \ \ \)





\(\ds \map f {\text{even} } \times_2 \map f {\text{odd} }\)

\(=\)







\(\ds \map f {\text{even} \times \text{odd} }\)

\(\ds = 0\)












\(\ds 1 \times_2 0 = \ \ \)





\(\ds \map f {\text{odd} } \times_2 \map f {\text{even} }\)

\(=\)







\(\ds \map f {\text{odd} \times \text{even} }\)

\(\ds = 0\)












\(\ds 1 \times_2 1 = \ \ \)





\(\ds \map f {\text{odd} } \times_2 \map f {\text{odd} }\)

\(=\)







\(\ds \map f {\text{odd} \times \text{odd} }\)

\(\ds = 1\)







$\blacksquare$

These results can be determined from their Cayley tables:

Cayley Tables for Parity Ring
$\begin{array}{r|rr}
+ & \text{even} &  \text{odd} \\
\hline
\text{even} & \text{even} & \text{odd} \\
\text{odd} & \text{odd} & \text{even} \\
\end{array}
\qquad
\begin{array}{r|rr}
\times & \text{even} &  \text{odd} \\
\hline
\text{even} & \text{even} & \text{even} \\
\text{odd} & \text{even} & \text{odd} \\
\end{array}$


Cayley Tables for $\Z_2$
$\begin{array} {r|rr}
\struct {\Z_2, +_2} & \eqclass 0 2 & \eqclass 1 2 \\
\hline
\eqclass 0 2 & \eqclass 0 2 & \eqclass 1 2 \\
\eqclass 1 2 & \eqclass 1 2 & \eqclass 0 2 \\
\end{array}
\qquad
\begin{array}{r|rr}
\struct {\Z_2, \times_2} & \eqclass 0 2 & \eqclass 1 2 \\
\hline
\eqclass 0 2 & \eqclass 0 2 & \eqclass 0 2 \\
\eqclass 1 2 & \eqclass 0 2 & \eqclass 1 2 \\
\end{array}$

They can be presented more simply as:

$\begin{array}{r|rr}
+ & 0 & 1 \\
\hline
0 & 0 & 1 \\
1 & 1 & 0 \\
\end{array}
\qquad
\begin{array}{r|rr}
\times & 0 & 1 \\
\hline
0 & 0 & 0 \\
1 & 0 & 1 \\
\end{array}$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 2$: Compositions: Exercise $2.1$
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Example $6.1$




