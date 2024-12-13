# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Contour_Integrals

Theorem
Let $C$ be a contour in $\C$.
Let $f, g: \Img C \to \C$ be continuous complex functions, where $\Img C$ denotes the image of $C$.
Let $\lambda, \mu \in \C$ be complex constants.

Then:

$\ds \int_C \paren {\lambda \map f z + \mu \map g z} \rd z = \lambda \int_C \map f z \rd z + \mu \int_C \map g z \rd z$


Proof
By definition of contour, $C$ is a finite sequence $C_1, \ldots, C_n$ of directed smooth curves.
Let $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k} {b_k} \to \C$ for all $k \in \set {1, \ldots, n}$.
Then:














\(\ds \int_C \paren {\lambda \map f z + \mu \map g z} \rd z\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \paren {\lambda \map f {\map {\gamma_k} t} + \mu \map g {\map {\gamma_k} t} } \map {\gamma_k'} t \rd t\)





Definition of Complex Contour Integral














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\lambda \int_{a_k}^{b_k} \map f {\map {\gamma_k} t} \map {\gamma_k'} t \rd t + \mu \int_{a_k}^{b_k} \map g {\map {\gamma_k} t} \map {\gamma_k'} t \rd t}\)





Linear Combination of Complex Integrals














\(\ds \)

\(=\)







\(\ds \lambda \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \map f {\map {\gamma_k} t} \map {\gamma_k'} t \rd t + \mu \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \map g {\map {\gamma_k} t} \map {\gamma_k'} t \rd t\)




















\(\ds \)

\(=\)







\(\ds \lambda \int_C \map f z \rd z + \mu \int_C \map g z \rd z\)









$\blacksquare$


Sources
2001: Christian Berg: Kompleks funktionsteori $\S 2.2$




