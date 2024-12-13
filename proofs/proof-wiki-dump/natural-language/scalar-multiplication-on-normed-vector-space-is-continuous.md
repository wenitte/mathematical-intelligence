# 

Source: https://proofwiki.org/wiki/Scalar_Multiplication_on_Normed_Vector_Space_is_Continuous

Theorem
Let $\struct { K, +, \circ_K }$ be a normed division ring with norm $\norm {\, \cdot \,}_K$.
Let $\struct {X, \norm {\, \cdot \,}_X }$ be a normed vector space over $K$.
Let $\struct {K \times X, \norm {\, \cdot \,}_P }$ be the direct product of $K$ and $X$ with the direct product norm $\norm {\, \cdot \,}_P$. 
Let $\circ : K \times X \to X$ be the scalar multiplication defined on $X$.

Then $\circ: K \times X \to X$ is a continuous mapping.


Proof
Let $\tuple { \lambda_0 , x_0 } \in K \times X$.
Let $\epsilon' \in \R_{>0}$.
Set $\epsilon = \map \min { \epsilon', 1 }$
To show that $\circ$ is continuous, let $\tuple { \lambda , x } \in K \times X$ such that $\norm { \lambda_0 - \lambda }_K < \dfrac \epsilon { 1 + \norm { \lambda_0 }_K + \norm { x_0 }_X }$, and $\norm { x_0 - x }_X < \dfrac \epsilon { 1 + \norm { \lambda_0 }_K + \norm { x_0 }_X }$.
By definition of direct product norm, it follows that:

$\norm { \tuple {\lambda_0, x_0} - \tuple {\lambda, x} }_P = \map \max {\norm {\lambda_0 - \lambda}_K, \norm {x_0 - x}_X } < \dfrac \epsilon { 1 + \norm { \lambda_0 }_K + \norm { x_0 }_X }$.

To show that $\circ$ is continuous at $\tuple {\lambda_0, x_0}$, we calculate:














\(\ds \norm { \lambda_0 \circ x_0 - \lambda \circ x }_X\)

\(=\)







\(\ds \norm { \lambda_0 \circ x - \lambda_0 \circ x_0 - \lambda \circ x + \lambda \circ x_0 + \lambda_0 \circ x_0 - \lambda \circ x_0 + \lambda_0 \circ x_0 - \lambda_0 \circ x}_X\)





adding and subtracting the same quantities














\(\ds \)

\(=\)







\(\ds \norm { \paren{ \lambda_0 - \lambda } \circ \paren  { x - x_0 } + \paren{ \lambda_0 - \lambda } \circ x_0 + \lambda_0 \circ \paren { x_0 - x } }_X\)





Vector Space Axiom $(\text V 5)$: Distributivity over Scalar Addition and Vector Space Axiom $(\text V 6)$: Distributivity over Vector Addition














\(\ds \)

\(\le\)







\(\ds \norm { \paren{ \lambda_0 - \lambda } \circ \paren  { x - x_0 } }_X + \norm { \paren{ \lambda_0 - \lambda } \circ x_0 }_X + \norm { \lambda_0 \circ \paren  { x_0 - x } }_X\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \norm { \lambda_0 - \lambda }_K \norm { x - x_0 }_X + \norm { \lambda_0 - \lambda }_K \norm { x_0 }_X + \norm { \lambda_0 }_K \norm { x_0 - x }_X\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(<\)







\(\ds \paren { \dfrac { \epsilon }{ 1 + \norm { \lambda_0 }_K + \norm { x_0 }_X } }^2+ \dfrac{ \epsilon \norm { x_0 }_X }{ 1 + \norm { \lambda_0 }_K + \norm { x_0 }_X } + \dfrac { \epsilon \norm { \lambda_0 }_K }{ 1 + \norm { \lambda_0 }_K + \norm { x_0 }_X }\)





by choice of $\lambda$ and $x$














\(\ds \)

\(\leq\)







\(\ds \dfrac { \epsilon }{ 1 + \norm { \lambda_0 }_K + \norm { x_0 }_X } + \dfrac{ \epsilon \norm { x_0 }_X }{ 1 + \norm { \lambda_0 }_K + \norm { x_0 }_X } + \dfrac { \epsilon \norm { \lambda_0 }_K }{ 1 + \norm { \lambda_0 }_K + \norm { x_0 }_X }\)





as $\epsilon \le 1$. and $1 + \norm { \lambda_0 }_K + \norm { x_0 }_X \ge 1$














\(\ds \)

\(=\)







\(\ds \dfrac { \epsilon \paren{1 + \norm { \lambda_0 }_K + \norm { x_0 }_X} }{ 1 + \norm { \lambda_0 }_K + \norm { x_0 }_X }\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)




















\(\ds \)

\(\le\)







\(\ds \epsilon'\)










It follows that $\circ$ is continuous from $K \times X$ to $X$.
$\blacksquare$


Sources
1997: Reinhold Meise and Dietmar Vogt: Introduction to Functional Analysis: $\S 5$: Normed Spaces




