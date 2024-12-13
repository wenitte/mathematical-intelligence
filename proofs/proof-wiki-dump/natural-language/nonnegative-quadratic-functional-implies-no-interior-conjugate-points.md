# 

Source: https://proofwiki.org/wiki/Nonnegative_Quadratic_Functional_implies_no_Interior_Conjugate_Points


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This needs considerable tedious hard slog to complete it.In particular: fix details by which nonnegative differs from positive definiteTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Theorem
If the quadratic functional 

$\ds \int_a^b \paren {P h'^2 + Q h^2} \rd x$
where:

$\forall x \in \closedint a b: \map P x > 0$
is nonnegative for all $\map h x$:

$\map h a = \map h b = 0$
then the closed interval $\closedint a b$ contains no inside points conjugate to $a$.
In other words, the open interval $\openint a b$ contains no points conjugate to $a$.


This article, or a section of it, needs explaining.In particular: Rewrite the above so it makes better sense. For example, should the "nonnegative" comment be above the condition on $\map P x$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


Proof
Consider the functional:

$\forall t \in \closedint 0 1: \ds \int_a^b \paren {t \paren {P h^2 + Q h'^2} + \paren {1 - t} h'^2} \rd x$
By assumption:

$\ds \int_a^b \paren {P h'^2 + Q h^2} \rd x \ge 0$
For $t = 1$, Euler's Equation reads:

$\map {h} x = 0$
which, along with condition $\map h a = 0$, is solved by:

$\map h x = x - a$
for which there are no conjugate points in $\closedint a b$.
In other words:

$\forall x \in \openint a b: \map h x > 0$
Hence:

$\forall t \in \closedint 0 1: \ds \int_a^b \paren {t \paren {P h'^2 + Q h^2} + \paren {1 - t} h'^2} \rd x \ge 0$
The corresponding Euler's Equation is:

$2 Q h t - \map {\dfrac \d {\d x} } {2 t P h' + 2 h' \paren {1 - t} } = 0$

which is equivalent to:

$-\map {\dfrac \d {\d x} } {\paren {t P + \paren {1 - t} } h'} + t Q h = 0$
Let $\map h {x, t}$ be a solution to this such that:

$\forall t \in \closedint 0 1: \map h {a, t} = 0$
$\map {h_x} {a, t} = 1$

This article, or a section of it, needs explaining.In particular: What is $h_x$?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Suppose that for $\map h {x, t}$ there exists a conjugate point $\tilde a$ to $a$ in $\closedint a b$.
In other words:

$\exists \tilde a \in \closedint a b: \map h {\tilde a, 1} = 0$
By definition, $a \ne \tilde a$.
Suppose $\tilde a = b$.
Then by lemma 1 of Necessary and Sufficient Condition for Quadratic Functional to be Positive Definite:

$\ds \int_a^b \paren {P h'^2 + Q h^2} \rd x = 0$
This agrees with the assumption.
Therefore, it is allowed that $\tilde a = b$.
For $t = 1$, any other conjugate point of $\map h {x, t}$ may reside only in $\openint a b$.
Consider the following set of all points $\tuple {x, t}$:

$\set {\tuple {x, t}: \paren {\forall x \in \closedint a b} \paren {\forall t \in \closedint 0 1} \paren {\map h {x, t} = 0} }$
If it is non-empty, it represents a curve in $x - t$ plane, such that $h_x \left({x, t}\right) \ne 0$.


This article, or a section of it, needs explaining.In particular: Rather than using "it", give it a name and reference that name.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By the Implicit Function Theorem, $\map x t$ is continuous.
By hypothesis, $\tuple {\tilde a, 1}$ lies on this curve.
Suppose that the curve starts at this point.
The curve can terminate either inside the rectangle or its boundary.
If it terminates inside the rectangle $\closedint a b \times \closedint 0 1$, it implies that there is a discontinuous jump in the value of $h$.


This article, or a section of it, needs explaining.In particular: Again, rather than using "it", refer to the object in question directly, so it is clear what is being referred to.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore, it contradicts the continuity of $\map h {x, t}$ in the interval $t \in \closedint 0 1$.

This article, or a section of it, needs explaining.In particular: Specify what contradicts what, by invoking the AimForCont constructYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
If it intersects the line segment $x = b, 0 \le t \le 1$, then by lemma 2 of Necessary and Sufficient Condition for Quadratic Functional to be Positive Definite it vanishes.


This article, or a section of it, needs explaining.In particular: "it" againYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
This contradicts positive-definiteness of the functional for all $t$.

This article, or a section of it, needs explaining.In particular: See above note on the above contradiction proofYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
If it intersects the line segment $a \le x \le b, t = 1$, then $\exists t_0: \paren {\map h {x, t_0} = 0} \land \paren {\map {h_x} {x, t_0} = 0}$.


This article, or a section of it, needs explaining.In particular: $h_x$ againYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
If it intersects $a \le x \le b, t = 0$, then Euler's equation reduces to $h = 0$ with solution $h = x - a$, which vanishes only for $x = a$.
If it intersects $x = a, 0 \le t \le 1$, then $\exists t_0: \map {h_x} {a, t_0} = 0$


This article, or a section of it, needs explaining.In particular: "it" againYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.

This page needs the help of a knowledgeable authority.If you are knowledgeable in this area, then you can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Help}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
By Proof by Cases, no such curve exists.
Thus, the point $\tuple {\tilde a, 1}$ does not exist, since it belongs to this curve.
Hence there are no conjugate points of $\map h {x, 1} = \map h x$ in the interval $\openint a b$.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 5.26$: Analysis of the Quadratic Functional $\int_a^b \paren {P h'^2 + Q h^2} \rd x$





