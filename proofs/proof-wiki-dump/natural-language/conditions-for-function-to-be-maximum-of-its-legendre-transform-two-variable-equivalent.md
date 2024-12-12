# 

Source: https://proofwiki.org/wiki/Conditions_for_Function_to_be_Maximum_of_its_Legendre_Transform_Two-variable_Equivalent


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $x, p \in \R$.
Let $\map f x$ be a strictly convex real function.
Let $f^*$ be a Legendre transformed $f$.
Let $\map g {x, p} = - \map {f^*} p + x p$

Then:

$\ds \map f x = \max_p \paren {-\map {f^*} p + x p}$
where $\ds \max_p$ maximises the function with respect to a variable $p$.


Proof
Function $g$ acquires an extremum along $p$, when its first derivative along $p$ vanishes:














\(\ds \frac {\partial g} {\partial p}\)

\(=\)







\(\ds -\frac {\partial f^*} {\partial p} + x\)




















\(\ds \)

\(=\)







\(\ds 0\)





Extremum condition








\(\ds \leadsto \ \ \)





\(\ds \map { {f^*}'} p\)

\(=\)







\(\ds x\)









To check if the extremum is a global maximum, consider the second derivative:

$\dfrac {\partial^2 g} {\partial p^2} = - \dfrac {\partial^2 f^*} {\partial p^2}$
By Legendre Transform of Strictly Convex Real Function is Strictly Convex and Real Function is Strictly Convex iff Derivative is Strictly Increasing, it holds that:














\(\ds \frac {\partial^2 f^*} {\partial p^2}\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\partial^2 g} {\partial p^2}\)

\(<\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \valueat {\frac {\partial^2 g} {\partial p^2} } {\frac {\partial g} {\partial p} \mathop = 0}\)

\(<\)







\(\ds 0\)









Negative second derivative at the extremum implies extremum being a global maximum.
Therefore:

$\ds \max_p \paren{-\map {f^*} p + x p} = \bigvalueat {\paren {-\map {f^*} p + x p} } {x \mathop = \map { {f^*}'} p}$
The right hand side is the Legendre Transform of $f^*$.
However, $f^*$ is a Legendre transformed $f$.
By Legendre Transform is Involution, this equals $f$.
$\blacksquare$


This needs considerable tedious hard slog to complete it.In particular: clean up local/global extrema ambiguityTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.18$: The Legendre Tranformation




