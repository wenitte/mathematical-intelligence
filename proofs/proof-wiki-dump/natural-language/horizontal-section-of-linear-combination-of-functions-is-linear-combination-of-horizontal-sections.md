# 

Source: https://proofwiki.org/wiki/Horizontal_Section_of_Linear_Combination_of_Functions_is_Linear_Combination_of_Horizontal_Sections

Theorem
Let $X$ and $Y$ be sets.
Let $f_1, f_2, \ldots, f_n : X \times Y \to \overline \R$ be functions. 
Let $\alpha_1, \alpha_2, \ldots, \alpha_n$ be real numbers.
Let $y \in Y$. 

Then: 

$\ds \paren {\sum_{k \mathop = 1}^n \alpha_k f_k}^y = \sum_{k \mathop = 1}^n \alpha_k \paren {f_k}^y$
where $f^y$ denotes the $y$-horizontal section of the function $f$. 


Proof
Let $x \in X$. 
We have:














\(\ds \map {\paren {\sum_{k \mathop = 1}^n \alpha_k f_k}^y} x\)

\(=\)







\(\ds \map {\paren {\sum_{k \mathop = 1}^n \alpha_k f_k} } {x, y}\)





Definition of Horizontal Section of Function














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \alpha_k \map {f_k} {x, y}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \alpha_k \map {\paren {f_k}^y} x\)





Definition of Horizontal Section of Function



so:

$\ds \paren {\sum_{k \mathop = 1}^n \alpha_k f_k}^y = \sum_{k \mathop = 1}^n \alpha_k \paren {f_k}^y$
$\blacksquare$





