# 

Source: https://proofwiki.org/wiki/Cartesian_Product_of_Equivalence_Relations



Theorem
Let $A$ and $B$ be sets.
Let $\RR$ and $\SS$ be equivalence relations on $A$ and $B$ respectively.

Let $\TT$ be the relation on $A \times B$ defined as:

$\forall \tuple {u, v}, \tuple {x, y} \in A \times B: \tuple {u, v} \mathrel \TT \tuple {x, y} \iff u \mathrel \RR x \land v \mathrel \SS y$

Then $\TT$ is an equivalence relation on $A \times B$.

The equivalence class $\eqclass {\tuple {a, b} } \TT$ of an element $\tuple {a, b}$ of $\TT$ is:

$\eqclass {\tuple {a, b} } \TT = \set {\tuple {x, y}: x \in \eqclass a \RR, y \in \eqclass b \SS}$


Proof
We have that $\RR$ and $\SS$ are equivalence relations on $A$ and $B$ respectively.
Thus they are both reflexive, symmetric and transitive.

Checking in turn each of the criteria for equivalence:


Reflexivity









\(\ds \forall \tuple {x, y} \in A \times B: \, \)



\(\ds x\)

\(\RR\)







\(\ds x\)





as $\RR$ is reflexive












\(\, \ds \land \, \)

\(\ds y\)

\(\SS\)







\(\ds y\)





as $\SS$ is reflexive








\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(\TT\)







\(\ds \tuple {x, y}\)





Definition of $\TT$



Thus $\TT$ is seen to be reflexive.
$\Box$


Symmetry
Let $\tuple {x_1, y_1}, \tuple {x_2, y_2} \in A \times B$ such that:

$\tuple {x_1, y_1} \mathrel \TT \tuple {x_2, y_2}$
Then:














\(\ds x_1\)

\(\RR\)







\(\ds x_2\)





Definition of $\TT$












\(\, \ds \land \, \)

\(\ds y_1\)

\(\SS\)







\(\ds y_2\)





Definition of $\TT$








\(\ds \leadsto \ \ \)





\(\ds x_2\)

\(\RR\)







\(\ds x_1\)





as $\RR$ is symmetric












\(\, \ds \land \, \)

\(\ds y_2\)

\(\SS\)







\(\ds y_1\)





as $\SS$ is symmetric








\(\ds \leadsto \ \ \)





\(\ds \tuple {x_2, y_2}\)

\(\TT\)







\(\ds \tuple {x_1, y_1}\)





Definition of $\TT$



Thus $\TT$ is seen to be symmetric.
$\Box$


Transitivity
Let $\tuple {x_1, y_1}, \tuple {x_2, y_2}, \tuple {x_3, y_3} \in A \times B$ such that:














\(\ds \tuple {x_1, y_1}\)

\(\TT\)







\(\ds \tuple {x_2, y_2}\)














\(\ds \land \ \ \)





\(\ds \tuple {x_2, y_2}\)

\(\TT\)







\(\ds \tuple {x_3, y_3}\)









Then:














\(\ds x_1\)

\(\RR\)







\(\ds x_2\)





Definition of $\TT$












\(\, \ds \land \, \)

\(\ds x_2\)

\(\RR\)







\(\ds x_3\)





Definition of $\TT$












\(\, \ds \land \, \)

\(\ds y_1\)

\(\SS\)







\(\ds y_2\)





Definition of $\TT$












\(\, \ds \land \, \)

\(\ds y_2\)

\(\SS\)







\(\ds y_3\)





Definition of $\TT$








\(\ds \leadsto \ \ \)





\(\ds x_1\)

\(\RR\)







\(\ds x_3\)





as $\RR$ is transitive












\(\, \ds \land \, \)

\(\ds y_1\)

\(\SS\)







\(\ds y_3\)





as $\SS$ is transitive








\(\ds \leadsto \ \ \)





\(\ds \tuple {x_1, y_1}\)

\(\TT\)







\(\ds \tuple {x_3, y_3}\)





Definition of $\TT$




Thus $\TT$ is seen to be transitive.
$\Box$

$\TT$ has been shown to be reflexive, symmetric and transitive.
Hence by definition $\TT$ is an equivalence relation.

The equivalence class $\eqclass {\tuple {a, b} } \TT$ follows directly:

$\eqclass {\tuple {a, b} } \TT = \set {\tuple {x, y}: x \in \eqclass a \RR, y \in \eqclass b \SS}$
$\blacksquare$





