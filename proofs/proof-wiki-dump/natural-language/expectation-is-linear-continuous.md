# 

Source: https://proofwiki.org/wiki/Expectation_is_Linear/Continuous

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $E$ denote the expectation function.

Then:

$\forall \alpha, \beta \in \R: \expect {\alpha X + \beta Y} = \alpha \expect X + \beta \expect Y$


Proof
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





