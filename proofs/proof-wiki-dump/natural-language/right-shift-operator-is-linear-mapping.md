# 

Source: https://proofwiki.org/wiki/Right_Shift_Operator_is_Linear_Mapping



Theorem
Let $X = Y = \ell^2$ be 2-sequence spaces over real numbers.
Let $R : X \to Y$ be the right shift operator.

Then $R$ is a linear mapping.


Proof
Let $x = \tuple {x_1, x_2,x_3, \ldots}, y = \tuple {y_1, y_2, y_3, \ldots} \in \ell^2$
Let $\alpha \in \R$.


Distributivity













\(\ds \map R {x + y}\)

\(=\)







\(\ds \map R {\tuple {x_1, x_2,x_3, \ldots} + \tuple {y_1, y_2, y_3, \ldots} }\)




















\(\ds \)

\(=\)







\(\ds \map R {\tuple {x_1 + y_1, x_2 + y_2, x_3 + y_3, \ldots} }\)





P-Sequence Space with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space














\(\ds \)

\(=\)







\(\ds \tuple {0, x_1 + y_1, x_2 + y_2, \ldots}\)





Definition of Right Shift Operator














\(\ds \)

\(=\)







\(\ds \tuple {0, x_1, x_2, \ldots} + \tuple {0, y_1, y_2, \ldots}\)





P-Sequence Space with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space














\(\ds \)

\(=\)







\(\ds \map R {\tuple {x_1, x_2, x_3, \ldots} } + \map R {\tuple {y_1, y_2, y_3, \ldots} }\)





Definition of Right Shift Operator














\(\ds \)

\(=\)







\(\ds \map R x + \map R y\)









$\Box$


Positive homogenity













\(\ds \map R {\alpha x}\)

\(=\)







\(\ds \map R {\alpha \tuple {x_1, x_2, x_3, \ldots} }\)




















\(\ds \)

\(=\)







\(\ds \map R {\tuple {\alpha x_1, \alpha x_2, \alpha x_3, \ldots} }\)





P-Sequence Space with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space














\(\ds \)

\(=\)







\(\ds \tuple {0, \alpha x_1, \alpha x_2, \ldots}\)





Definition of Right Shift Operator














\(\ds \)

\(=\)







\(\ds \alpha \tuple {0, x_1, x_2, \ldots}\)





P-Sequence Space with Pointwise Addition and Pointwise Scalar Multiplication on Ring of Sequences forms Vector Space














\(\ds \)

\(=\)







\(\ds \alpha \map R {\tuple {x_1, x_2, x_3, \ldots} }\)





Definition of Right Shift Operator














\(\ds \)

\(=\)







\(\ds \alpha \map R x\)









$\blacksquare$

Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): Chapter $\S 2.1$: Continuous and linear maps. Linear transformations




