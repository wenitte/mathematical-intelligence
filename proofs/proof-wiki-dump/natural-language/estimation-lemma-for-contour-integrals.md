# 

Source: https://proofwiki.org/wiki/Estimation_Lemma_for_Contour_Integrals



Theorem
Let $C$ be a contour.
Let $f: \Img C \to \C$ be a continuous complex function, where $\Img C$ denotes the image of $C$.

Then:

$\ds \size {\int_C \map f z \rd z} \le \max_{z \mathop \in \Img C} \size {\map f z} \map L C$
where $\map L C$ denotes the length of $C$.


Proof
By definition of contour, $C$ is a concatenation of a finite sequence $C_1, \ldots, C_n$ of directed smooth curves.
Let $C_k$ be parameterized by the smooth path $\gamma_k: \closedint {a_k} {b_k} \to \C$ for all $k \in \set {1, \ldots, n}$.
Then:














\(\ds \size {\int_C \map f z \rd z}\)

\(=\)







\(\ds \size {\sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \map f {\map {\gamma_k} t} \map {\gamma_k'} t \rd t}\)





Definition of Complex Contour Integral














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^n \size {\int_{a_k}^{b_k} \map f {\map {\gamma_k} t} \map {\gamma_k'} t \rd t}\)





Triangle Inequality for Complex Numbers














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^n \int_{a_k}^{b_k} \size {\map f {\map {\gamma_k} t} } \size {\map {\gamma_k'} t} \rd t\)





Modulus of Complex Integral














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^n \max_{t \mathop \in \closedint {a_k} {b_k} } \size {\map f {\map {\gamma_k} t} } \int_{a_k}^{b_k} \size {\map {\gamma_k'} t} \rd t\)





Linear Combination of Definite Integrals














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^n \max_{z \mathop \in \Img C} \size {\map f z} \int_{a_k}^{b_k} \size {\map {\gamma_k'} t} \rd t\)





as $\map {\gamma_k} t \in \Img C$














\(\ds \)

\(=\)







\(\ds \max_{z \mathop \in \Img C} \size {\map f z} \map L C\)





Definition of Length of Contour (Complex Plane)



$\blacksquare$


Also known as
Some sources give this as Triangle Inequality for Contour Integrals.
Both names are used on $\mathsf{Pr} \infty \mathsf{fWiki}$ in order to enhance accessibility.


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 2.2$




