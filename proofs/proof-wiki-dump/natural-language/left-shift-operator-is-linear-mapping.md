# 

Source: https://proofwiki.org/wiki/Left_Shift_Operator_is_Linear_Mapping



Theorem
Let $X = Y = \ell^2$ be 2-sequence spaces over real numbers.
Let $L : X \to Y$ be the left shift operator.

Then $L$ is a linear mapping.


Proof
Let $x = \tuple {x_1, x_2,x_3, \ldots}, y = \tuple {y_1, y_2, y_3, \ldots} \in \ell^2$
Let $\alpha \in \R$.


Distributivity













\(\ds \map L {x + y}\)

\(=\)







\(\ds \map L {\tuple {x_1, x_2,x_3, \ldots} + \tuple {y_1, y_2, y_3, \ldots} }\)




















\(\ds \)

\(=\)







\(\ds \map L {\tuple {x_1 + y_1, x_2 + y_2, x_3 + y_3, \ldots} }\)





P-Sequence Space with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space














\(\ds \)

\(=\)







\(\ds \tuple {x_2 + y_2, x_3 + y_3, \ldots}\)





Definition of Left Shift Operator














\(\ds \)

\(=\)







\(\ds \tuple {x_2, x_3, \ldots} + \tuple {y_2, y_3, \ldots}\)





P-Sequence Space with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space














\(\ds \)

\(=\)







\(\ds \map L {\tuple {x_1, x_2, x_3, \ldots} } + \map L {\tuple {y_1, y_2, y_3, \ldots} }\)





Definition of Left Shift Operator














\(\ds \)

\(=\)







\(\ds \map L x + \map L y\)









$\Box$


Positive homogenity













\(\ds \map L {\alpha x}\)

\(=\)







\(\ds \map L {\alpha \tuple {x_1, x_2, x_3, \ldots} }\)




















\(\ds \)

\(=\)







\(\ds \map L {\tuple {\alpha x_1, \alpha x_2, \alpha x_3, \ldots} }\)





P-Sequence Space with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space














\(\ds \)

\(=\)







\(\ds \tuple {\alpha x_2, \alpha x_3, \ldots}\)





Definition of Left Shift Operator














\(\ds \)

\(=\)







\(\ds \alpha \tuple {x_2, x_3, \ldots}\)





P-Sequence Space with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space














\(\ds \)

\(=\)







\(\ds \alpha \map L {\tuple {x_1, x_2, x_3, \ldots} }\)





Definition of Left Shift Operator














\(\ds \)

\(=\)







\(\ds \alpha \map L x\)









$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.1$: Continuous and linear maps. Linear transformations




