# 

Source: https://proofwiki.org/wiki/Expectation_is_Linear



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be integrable random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $\expect X$ denote the expectation of $X$.

Then:

$\forall \alpha, \beta \in \R: \expect {\alpha X + \beta Y} = \alpha \, \expect X + \beta \, \expect Y$


Proof
Discrete Random Variable
Follows directly from Expectation of Function of Joint Probability Mass Distribution, thus:















\(\ds \expect {\alpha X + \beta Y}\)

\(=\)







\(\ds \sum_x \sum_y \paren {\alpha x + \beta y} \, \map \Pr {X = x, Y = y}\)





Expectation of Function of Joint Probability Mass Distribution














\(\ds \)

\(=\)







\(\ds \alpha \sum_x x \sum_y \map \Pr {X = x, Y = y}\)




















\(\ds \)

\(+\)







\(\ds \beta \sum_y y \sum_x \map \Pr {X = x, Y = y}\)




















\(\ds \)

\(=\)







\(\ds \alpha \sum_x x \, \map \Pr {X = x} + \beta \sum_y y \, \map \Pr {Y = y}\)





Definition of Marginal Probability Mass Function














\(\ds \)

\(=\)







\(\ds \alpha \, \expect X + \beta \, \expect Y\)





Definition of Expectation



$\blacksquare$


Continuous Random Variable
Let $\map \supp X$ and $\map \supp Y$ be the supports of $X$ and $Y$ respectively. 
Let $f_{X, Y} : \map \supp X \times \map \supp Y \to \R$ be the joint probability density function of $X$ and $Y$. 
Let $f_X$ and $f_Y$ be the marginal probability density functions of $X$ and $Y$. 

Then:














\(\ds \expect {\alpha X + \beta Y}\)

\(=\)







\(\ds \int_{y \mathop \in \map \supp Y} \int_{x \mathop \in \map \supp X} \paren {\alpha x + \beta y} \map {f_{X, Y} } {x, y} \rd x \rd y\)




















\(\ds \)

\(=\)







\(\ds \alpha \int_{y \mathop \in \map \supp Y} \int_{x \mathop \in \map \supp X} x \map {f_{X, Y} } {x, y} \rd x \rd y + \beta \int_{y \mathop \in \map \supp Y} \int_{x \mathop \in \map \supp X} y \map {f_{X, Y} } {x, y} \rd x \rd y\)





Linear Combination of Definite Integrals














\(\ds \)

\(=\)







\(\ds \alpha \int_{x \mathop \in \map \supp X} x \paren {\int_{y \mathop \in \map \supp Y} \map {f_{X , Y} } {x, y} \rd y} \rd x + \beta \int_{y \mathop \in \map \supp Y} y \paren {\int_{x \mathop \in \map \supp X} \map {f_{X, Y} } {x, y} \rd x} \rd y\)





rewriting














\(\ds \)

\(=\)







\(\ds \alpha \int_{x \mathop \in \map \supp X} x \map {f_X} x \rd x + \beta \int_{y \mathop \in \map \supp Y} y \map {f_Y} y \rd y\)





Definition of Marginal Probability Density Function














\(\ds \)

\(=\)







\(\ds \alpha \expect X + \beta \expect Y\)





Definition of Expectation of Continuous Random Variable



$\blacksquare$


General Case
From Integral of Integrable Function is Homogeneous, we have: 

$\alpha X$ and $\beta Y$ are $\Pr$-integrable.
From Integral of Integrable Function is Additive, we have: 

$\alpha X + \beta Y$ is $\Pr$-integrable.
From Linear Combination of Real-Valued Random Variables is Real-Valued Random Variable, we have: 

$\alpha X + \beta Y$ is a real-valued random variable.
Then: 














\(\ds \expect {\alpha X + \beta Y}\)

\(=\)







\(\ds \int \paren {\alpha X + \beta Y} \rd \Pr\)





Definition of Expectation














\(\ds \)

\(=\)







\(\ds \int \paren {\alpha X} \rd \Pr + \int \paren {\beta Y} \rd \Pr\)





Integral of Integrable Function is Additive














\(\ds \)

\(=\)







\(\ds \alpha \int X \rd \Pr + \beta \int Y \rd \Pr\)





Integral of Integrable Function is Homogeneous














\(\ds \)

\(=\)







\(\ds \alpha \expect X + \beta \expect Y\)





Definition of Expectation



$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 3.2$: Expectation in the multivariate case: $(7)$




