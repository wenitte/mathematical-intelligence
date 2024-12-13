# 

Source: https://proofwiki.org/wiki/Necessary_and_Sufficient_Condition_for_Quadratic_Functional_to_be_Positive_Definite/Lemma_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let the function $\map h x$ satisfy the equation:

$-\map {\dfrac \d {\d x} } {P h'} + Q h = 0$
Let $\map h x$ have the boundary conditions:

$\map h a = \map h b = 0$
Then:

$\ds \int_a^b \paren {P h'^2 + Q h^2} \rd x = 0$



This article, or a section of it, needs explaining.In particular: Define the domain and codomain of $h$. Presumably real function, but it needs to be made clear.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof













\(\ds 0\)

\(=\)







\(\ds \int_a^b \paren 0 h \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \paren {-\map {\frac \d {\d x} } {P h'} + Q h} h \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^b Q h^2 \rd x - \int_a^b \map {\frac \d {\d x} } {P h'} h \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^b Q h^2 \rd x - \bigintlimits {P h' h} a b + \int_a^b P h' \rd h\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \int_a^b Q h^2 \rd x + \int_a^b P h'^2 \rd x\)




















\(\ds \)

\(=\)







\(\ds \int_a^b \paren {P h'^2 + Q h^2} \rd x\)









$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 5.26$: Analysis of the Quadratic Functional $ \int_a^b \paren {P h'^2 + Q h^2} \rd x$





