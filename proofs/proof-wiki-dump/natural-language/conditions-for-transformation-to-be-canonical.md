# 

Source: https://proofwiki.org/wiki/Conditions_for_Transformation_to_be_Canonical


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let:

$\ds J_1 \sqbrk {\sequence {y_i}_{1 \mathop \le i \mathop \le n}, \sequence {p_i}_{1 \mathop \le i \mathop \le n} } = \int_a^b \paren {\sum_{i \mathop = 1}^n p_i y_i'-H} \rd x$
$\ds J_2 \sqbrk {\sequence {Y_i}_{1 \mathop \le i \mathop \le n}, \sequence {P_i}_{1 \mathop \le i \mathop \le n} } = \int_a^b \paren {\sum_{i \mathop = 1}^n P_i Y_i'-H^*} \rd x$
be functionals.

Then $\paren {\sequence {y_i}_{1 \mathop \le i \mathop \le n}, \sequence{p_i}_{1 \mathop \le i \mathop \le n}, H} \to \paren {\sequence{Y_i}_{1 \mathop \le i \mathop \le n}, \sequence {P_i}_{1 \mathop \le i \mathop \le n}, H^*}$ is a canonical transformation if:

$\ds \sum_{i \mathop = 1}^n p_i y_i' - H = \sum_{i \mathop = 1}^n P_i Y_i' - H^* \pm \dfrac {\d \Phi} {\d x}$
and:

$\ds p_i = \mp \frac {\partial \Phi} {\d y_i}, \quad P_i = \pm \frac {\partial \Phi} {\d Y_i}, \quad H = H^* \mp \frac {\partial \Phi} {\partial x}$


Proof
By Conditions for Integral Functionals to have same Euler's Equations, functionals:

$\ds \int_a^b F_1 \rd x$
and:

$\ds \int_a^b F_2 \rd x = \int_a^b \paren {F_1 \pm \frac {\d \Phi} {\d x} } \rd x$
have same Euler's equations.
Express the first one in canonical variables $\paren {x, \sequence{y_i}_{1 \mathop \le i \mathop \le n}, \sequence{p_i}_{1 \mathop \le i \mathop \le n}, H}$ and the second one in $\paren {x, \sequence{Y_i}_{1 \mathop \le i \mathop \le n}, \sequence {P_i}_{1 \mathop \le i \mathop \le n}, H^*}$:

$\ds \int_a^b F_1 \rd x = \int_a^b \paren {\sum_{i \mathop = 1}^n p_i y_i' - H} \rd x$
$\ds \int_a^b F_2 \rd x = \int_a^b \paren {\sum_{i \mathop = 1}^n P_i Y_i' - H^*} \rd x$
However:

$\ds \int_a^b \paren {F_2 - F_1} \rd x = \int_a^b \pm \frac {\d \Phi} {\d x} \rd x$
Inserting new expressions for $F_1$ and $F_2$ yields:

$\ds \int_a^b \paren {\sum_{i \mathop = 1}^n P_i Y_i'-H^* - \sum_{i \mathop = 1}^n p_i y_i' + H} \rd x = \int_a^b \pm \frac {\d \Phi} {\d x}\rd x$
This is satisfied, if integrands are equal.
Transform the coordinates to $\tuple {x, \sequence {y_i}_{1 \mathop \le i \mathop \le n}, \sequence {Y_i}_{1 \mathop \le i \mathop \le n} }$ and write out the full derivative of $\Phi$:


This definition needs to be completed.In particular: Rather than link to a result, we need a definition for "full derivative"You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding or completing the definition.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{DefinitionWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\ds \sum_{i \mathop = 1}^n P_i Y_i' - H^* - \sum_{i \mathop = 1}^n p_i y_i' + H = \pm \frac {\partial \Phi} {\partial x} \pm \sum_{i \mathop = 1}^n \frac {\partial \Phi} {\partial y_i} y_i' \pm \sum_{i \mathop = 1}^n \frac {\partial \Phi} {\partial Y_i} Y_i'$
Collect terms multiplied by the same the coordinates together:

$\ds \sum_{i \mathop = 1}^n Y_i' \paren {\pm \frac {\partial \Phi} {\partial Y_i} - P_i} + \sum_{i \mathop = 1}^n y_i' \paren {\pm \frac {\partial \Phi} {\partial y_i} + p_i} + \paren {\pm \frac {\partial \Phi} {\partial x} - H + H^*} = 0$
This has to hold for arbitrary values of independent coordinates $\tuple {x, \sequence {y_i}_{1 \mathop \le i \mathop \le n}, \sequence {Y_i}_{1 \mathop \le i \mathop \le n} }$.
Hence:

$p_i = \mp \dfrac {\partial \Phi} {\d y_i}, \quad P_i = \pm \dfrac {\partial \Phi} {\d Y_i}, \quad H^* = H \mp \dfrac {\partial \Phi} {\partial x}$
$\blacksquare$


This needs considerable tedious hard slog to complete it.In particular: Eventually cover all four generating functions, most probably in different pagesTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 4.19$: Canonical Transformations




