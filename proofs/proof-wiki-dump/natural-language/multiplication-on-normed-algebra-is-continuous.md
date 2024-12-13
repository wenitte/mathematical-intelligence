# 

Source: https://proofwiki.org/wiki/Multiplication_on_Normed_Algebra_is_Continuous

Theorem
Let $\GF \in \set {\R, \C}$. 
Let $\struct {A, \norm {\, \cdot \,} }$ be a normed algebra over $\GF$.
Let $\struct {A^2, \norm {\, \cdot \,}_{A^2} }$ be the direct product of $A$ with itself equipped with the direct product norm.
Define $m : A^2 \to A$ by:

$\map m {a, b} = a b$
for each $\tuple {a, b} \in A^2$. 

Then $m$ is continuous.


Proof
Fix $\tuple {a, b} \in A^2$. 
Let $\tuple {a', b'} \in A^2$. 
Then we have:














\(\ds \norm {\map m {a, b} - \map m {a', b'} }\)

\(=\)







\(\ds \norm {a b - a' b'}\)




















\(\ds \)

\(=\)







\(\ds \norm {a b - a' b + a' b - a' b'}\)




















\(\ds \)

\(=\)







\(\ds \norm {b \paren {a - a'} + a' \paren {b - b'} }\)




















\(\ds \)

\(\le\)







\(\ds \norm {b \paren {a - a'} } + \norm {a' \paren {b - b'} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \norm b \norm {a - a'} + \norm {a'} \norm {b - b'}\)










Let $\epsilon > 0$.
Consider first the case of $b = {\mathbf 0}_A$. 
Take $\norm {a - a'} \le 1$. 
Then by the Reverse Triangle Inequality: Normed Vector Space, we have $\norm {a'} \le \norm a + 1$.
Hence, by taking: 

$\ds \norm {b - b'} < \frac \epsilon {\norm a + 1}$
we have:

$\norm b \norm {a - a'} + \norm {a'} \norm {b - b'} < \epsilon$
So by taking:

$\ds \norm {\tuple {a, b} - \tuple {a', b'} }_{A^2} < \min \set {1, \frac \epsilon {\norm a + 1} }$
we have:

$\norm {\map m {a, b} - \map m {a', b'} }_{A^2} < \epsilon$
So $m$ is continuous at $\tuple {a, {\mathbf 0}_A}$ for each $a \in A$.

Now consider $b \ne {\mathbf 0}_A$. 
If we take:

$\ds \norm {a - a'} < \frac \epsilon {2 \norm b}$
then by the Reverse Triangle Inequality: Normed Vector Space, we have:

$\ds \norm {a'} < \norm a + \frac \epsilon {2 \norm b}$
Then we can take:

$\ds \norm {b - b'} < \frac \epsilon 2 \paren {\norm a + \frac \epsilon {2 \norm b} }^{-1}$
to obtain:

$\ds \norm b \norm {a - a'} + \norm {a'} \norm {b - b'} < \norm b \paren {\frac \epsilon {2 \norm b} } + \frac \epsilon 2 \paren {\norm a + \frac \epsilon {2 \norm b} } \paren {\norm a + \frac \epsilon {2 \norm b} }^{-1} = \epsilon$
To conclude, by taking:

$\ds \norm {\tuple {a, b} - \tuple {a', b'} }_{A^2} < \min \set {\frac \epsilon {2 \norm b}, \frac \epsilon 2 \paren {\norm a + \frac \epsilon {2 \norm b} }^{-1} }$
we have:

$\norm {\map m {a, b} - \map m {a', b'} }_{A^2} < \epsilon$
So $m$ is continuous at $\tuple {a, b}$ for each $a \in A$, $b \ne {\mathbf 0}_A$.

Hence $m$ is continuous at $\tuple {a, b}$ for each $\tuple {a, b} \in A$.
Hence $m$ is continuous.
$\blacksquare$





