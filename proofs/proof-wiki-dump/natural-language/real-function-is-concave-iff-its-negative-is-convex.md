# 

Source: https://proofwiki.org/wiki/Real_Function_is_Concave_iff_its_Negative_is_Convex



Theorem
Let $f$ be a real function.
Let $I \subseteq \R$ be an interval of $\R$.

Then $f$ is concave on $I$ if and only if $-f$ is convex on $\R$.


Proof
Necessary Condition
Let $f$ be concave on $I$.
Let $\alpha, \beta \in \R_{>0}$ such that $\alpha + \beta = 1$.
Then:














\(\ds \map f {\alpha x + \beta y}\)

\(\ge\)







\(\ds \alpha \map f x + \beta \map f y\)





Definition of Concave Real Function








\(\ds \leadsto \ \ \)





\(\ds -\map f {\alpha x + \beta y}\)

\(\le\)







\(\ds -\paren {\alpha \map f x + \beta \map f y}\)




















\(\ds \)

\(=\)







\(\ds \alpha \paren {-\map f x} + \beta \paren {-\map f y}\)









and so $-f$ is convex by definition.
$\Box$


Sufficient Condition
Let $-f$ be convex on $I$.
Let $\alpha, \beta \in \R_{>0}$ such that $\alpha + \beta = 1$.
Then:














\(\ds -\map f {\alpha x + \beta y}\)

\(\le\)







\(\ds \alpha \paren {-\map f x} + \beta \paren {-\map f y}\)





Definition of Convex Real Function








\(\ds \leadsto \ \ \)





\(\ds \map f {\alpha x + \beta y}\)

\(\ge\)







\(\ds - \paren {\alpha \paren {-\map f x} + \beta \paren {-\map f y} }\)




















\(\ds \)

\(=\)







\(\ds \alpha \map f x + \beta \map f y\)









and so $f$ is concave by definition.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 12.13$
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): convex function




