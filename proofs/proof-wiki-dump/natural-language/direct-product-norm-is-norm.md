# 

Source: https://proofwiki.org/wiki/Direct_Product_Norm_is_Norm



Theorem
Let $\struct {X, \norm {\, \cdot \,}}$ and $\struct {Y, \norm {\, \cdot \,}}$ be normed vector spaces.
Let $V = X \times Y$ be a direct product of vector spaces $X$ and $Y$ together with induced component-wise operations.
Let $\norm {\tuple {x, y} }$ be the direct product norm.

Then $\norm {\tuple {x, y} }$ is a norm on $V$.


Proof
Positive Definiteness
Let $\tuple {x , y} \in V$.
Then:














\(\ds \norm {\tuple {x, y} }\)

\(=\)







\(\ds \map \max {\norm x, \norm y}\)





Definition of Direct Product Norm














\(\ds \)

\(\ge\)







\(\ds 0\)





Norm Axiom $N1$: Positive Definiteness




Suppose $\norm {\tuple {x, y} } = 0$.
Then:














\(\ds 0\)

\(\le\)







\(\ds \norm x\)





Norm Axiom $N1$: Positive Definiteness














\(\ds \)

\(\le\)







\(\ds \map \max {\norm x, \norm y}\)




















\(\ds \)

\(=\)







\(\ds \norm {\tuple {x, y} }\)





Definition of Direct Product Norm














\(\ds \)

\(=\)







\(\ds 0\)









Hence, $\norm x = 0$
$\Box$


Positive Homogeneity













\(\ds \norm {\alpha \tuple {x, y} }\)

\(=\)







\(\ds \norm {\tuple {\alpha x, \alpha y} }\)





Induced component-wise operations














\(\ds \)

\(=\)







\(\ds \map \max {\norm {\alpha x}, \norm {\alpha y} }\)





Definition of Direct Product Norm














\(\ds \)

\(=\)







\(\ds \map \max {\size \alpha \norm x, \size \alpha \norm y}\)





Norm Axiom $N2$ : Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \size \alpha \max \set {\norm x, \norm y}\)




















\(\ds \)

\(=\)







\(\ds \size \alpha \norm {\tuple {x ,y} }\)





Definition of Direct Product Norm



$\Box$


Triangle Inequality













\(\ds \norm {x_1 + x_2}\)

\(\le\)







\(\ds \norm {x_1} + \norm {x_2}\)




















\(\ds \)

\(\le\)







\(\ds \map \max {\norm {x_1}, \norm {y_1} } + \map \max {\norm {x_2}, \norm {y_2} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\tuple {x_1, y_1} }+ \norm {\tuple {x_2, y_2} }\)





Definition of Direct Product Norm
















\(\ds \norm {y_1 + y_2}\)

\(\le\)







\(\ds \norm {y_1} + \norm {y_2}\)




















\(\ds \)

\(\le\)







\(\ds \map \max {\norm {x_1}, \norm {y_1} } + \map \max {\norm {x_2}, \norm {y_2} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\tuple {x_1, y_1} } + \norm {\tuple {x_2, y_2} }\)





Definition of Direct Product Norm



Together:

$\map \max {\norm {x_1 + x_2}, \norm {y_1 + y_2}} \le \norm {\tuple {x_1, y_1} } + \norm {\tuple {x_2, y_2} }$
Then:














\(\ds \norm {\tuple {x_1, y_1} + \tuple {x_2, y_2} }\)

\(=\)







\(\ds \norm {\tuple {x_1 + x_2, y_1 + y_2} }\)





Induced component-wise operations














\(\ds \)

\(=\)







\(\ds \map \max {\norm {x_1 + x_2}, \norm {y_1 + y_2} }\)





Definition of Direct Product Norm














\(\ds \)

\(\le\)







\(\ds \norm {\tuple {x_1, y_1} } + \norm {\tuple {x_2, y_2} }\)









$\blacksquare$


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




