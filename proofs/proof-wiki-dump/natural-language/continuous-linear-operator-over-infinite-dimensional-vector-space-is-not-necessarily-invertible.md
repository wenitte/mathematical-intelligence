# 

Source: https://proofwiki.org/wiki/Continuous_Linear_Operator_over_Infinite_Dimensional_Vector_Space_is_not_necessarily_Invertible

Theorem
Let $\struct {X, \norm {\, \cdot\,}_X}$ be a normed vector space.
Let $\map {CL} X := \map {CL} {X, X}$ be a continuous linear transformation space.
Let $I \in \map {CL} X$ be the identity element.
Let $S, T \in \map {CL} X$.
Suppose the dimension of $X$ is finite:

$d = \dim X = \infty$
Suppose $T \circ S = I$ where $\circ$ denotes the composition of mappings.

Then $T$ and $S$ are not necessarily invertible.


Proof
Let $X, Y$ be $2$-sequence spaces.
Let $T = L : X \to Y$ be the left shift operator.
Let $S = R : X \to Y$ be the right shift operator.
Let $x := \tuple {a_1, a_2, \ldots} \in X$.
We have that:














\(\ds L \circ R \circ x\)

\(=\)







\(\ds \map L {\map R {\tuple{a_1, a_2, \ldots} } }\)




















\(\ds \)

\(=\)







\(\ds \map L {\tuple {0, a_1, a_2, \dots} }\)





Definition of Right Shift Operator














\(\ds \)

\(=\)







\(\ds \tuple {a_1, a_2, \ldots}\)





Definition of Left Shift Operator














\(\ds \)

\(=\)







\(\ds I \circ x\)





Definition of Identity Element



Hence:

$L \circ R = I$
However:














\(\ds R \circ L \circ x\)

\(=\)







\(\ds \map R {\map L {\tuple{a_1, a_2, \ldots} } }\)




















\(\ds \)

\(=\)







\(\ds \map L {\tuple {a_2, a_3, \dots} }\)





Definition of Left Shift Operator














\(\ds \)

\(=\)







\(\ds \tuple {0, a_2, a_3, \ldots}\)





Definition of Right Shift Operator














\(\ds \)

\(\ne\)







\(\ds I \circ x\)









Therefore, $T \circ S = I$ but $S \circ T \ne I$.
$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.4$: Composition of continuous linear transformations




