# 

Source: https://proofwiki.org/wiki/Inverse_Mapping_on_Group_of_Units_in_Unital_Banach_Algebra_is_Continuous

Theorem
Let $\struct {A, \norm {\, \cdot \,} }$ be a unital Banach algebra.
Let $\map G A$ be the group of units of $A$.
Define $\phi : \map G A \to \map G A$ by: 

$\map \phi x = x^{-1}$
for each $x \in \map G A$. 

Then $\phi$ is continuous. 


Proof
Let $x \in \map G A$ and $y \in A$ be such that: 

$\ds \norm {x - y} < \frac 1 {\norm {x^{-1} } }$
As shown in Group of Units in Unital Banach Algebra is Open, we have $y \in \map G A$ and: 

$\norm {1 - x^{-1} y} < 1$
Then, from Element of Unital Banach Algebra Close to Identity is Invertible, we have: 

$\ds \norm {\paren {x^{-1} y}^{-1} } = \norm {y^{-1} x} \le \frac 1 {1 - \norm {1 - x^{-1} y} }$
Using the algebra norm property, we have: 

$\ds \frac 1 {1 - \norm {1 - x^{-1} y} } = \frac 1 {1 - \norm {x^{-1} \paren {x - y} } } \le \frac 1 {1 - \norm {x^{-1} } \norm {x - y} }$
We now have: 














\(\ds \norm {y^{-1} }\)

\(=\)







\(\ds \norm {\paren {x \paren {x^{-1} y} }^{-1} }\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {x^{-1} y}^{-1} x^{-1} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {\paren {x^{-1} y}^{-1} } \norm {x^{-1} }\)





Definition of Algebra Norm














\(\ds \)

\(\le\)







\(\ds \frac {\norm {x^{-1} } } {1 - \norm {x^{-1} } \norm {x - y} }\)









Then we have: 














\(\ds \norm {y^{-1} - x^{-1} }\)

\(=\)







\(\ds \norm {y^{-1} \paren {x - y} x^{-1} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {y^{-1} } \norm {x - y} \norm {x^{-1} }\)





Definition of Algebra Norm














\(\ds \)

\(\le\)







\(\ds \frac {\norm {x^{-1} }^2 \norm {x - y} } {1 - \norm {x^{-1} } \norm {x - y} }\)









Taking $y \to x$, we have $\norm {x - y} \to 0$ and so: 

$\ds \frac {\norm {x^{-1} }^2 \norm {x - y} } {1 - \norm {x^{-1} } \norm {x - y} } \to 0$
so that: 

$\norm {y^{-1} - x^{-1} } \to 0$ as $y \to x$.
So $\phi$ is continuous.
$\blacksquare$





